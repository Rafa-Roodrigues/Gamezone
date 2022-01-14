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
  background: #000000;
  z-index: 2;

  padding: 1rem;

  display: ${({status}) => status ? 'flex': 'none'};
  flex-direction: column;
  align-items: center;

  button {
    align-self: end;
  }

  ul {
    width: 100%;
    margin-top: 2.5rem;

    li {
      width: 100%;
      display: block;
      margin-bottom: 0.625rem;
    }

    a {
      width: 100%;

      display: block;

      background: purple;
      border-radius: 5px;

      color: #fafafa;
      text-align: center;

      padding: 10px;
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
  height: 15px;

  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;

  span {
    width: 100%;
    height: 2px;
    background: #000000;
  }

  &::before {
    content: '';

    width: 100%;
    height: 2px;

    background: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &::after {
    content: '';

    width: 100%;
    height: 2px;

    background: #000000;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 601px) {
    display: none;
  }
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