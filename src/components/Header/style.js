import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.header`
  max-width: var(--max-width);
  height: 4.375rem;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;

  ul {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    a {
      padding: 0.3125rem 0.625rem;
      margin: 0 0.3125rem;
    }
  }

  @media (max-width: 600px) {
    justify-content: end;

    ul {
      display:none;
    }
  }
`;

export const NavMobile = styled.nav`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: right;

  z-index: 1;

  margin-left: ${({status}) => status ? '0' : '8000px'};

  transition: margin 0.2s;
  background: rgba(0, 0, 0, 0.8);

  > div {
    width: 80%;
    min-height: 100%;
    height: 100%;

    background: #ffffff;

    display: ${({status}) => status ? 'flex' : 'none'};
    flex-direction: column;

    #box-close-modal {
      height: 4.375rem;
      text-align: right;
      padding: 0 1rem;

      display: flex;
      justify-content: end;
      align-items: center;

      button {
        background: transparent;
      }
    }

    ul {
      background: #ffffff;
      padding-top: 1rem;

      li {
        width: 90%;
      
        padding: 1rem;
        margin: 0 auto 1rem;

        text-align:center;
        font-size: 1.125rem;
        
        background: #ffffff;
        border-radius: 5px;
        transition: filter 0.2s;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5) ; /*horizontal vertical espalhamento*/
        cursor: pointer;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
  
`;

export const LinkPageHome = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-width: 100px;
    width: 100%;
  }
`;

export const MenuToggle = styled.button`
  width: 25px;
  height: 16px;

  position: relative;

  display: flex;
  align-items: center;
`;

export const BoxCartLogin = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
  }
`;

export const LinkPageCart = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }

  span {
    width: 18px;
    height: 18px;

    font-size: 12px;
    color: #ffffff;

    background: purple;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;