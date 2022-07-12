import styled from "styled-components";

export const Container = styled.header`
  max-width: var(--max-width);
  height: 4.375rem;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
    max-width: 100px;

    img {
      width: 100%;
    }
  }
`;

export const NavDesktop = styled.nav`
  width: 100%;
  display: flex;

  ul {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    li a {
      padding: 0.3125rem 0.625rem;
      margin: 0 0.3125rem;
    }
  }

  > a {
    display: flex;
    align-items: center;

    position: relative;

    margin-right: 0.5rem;

    span {
      width: 18px;
      height: 18px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      background: purple;
      border-radius: 50%;

      font-size: 0.75rem;
      color: #ffffff;

      position: absolute;
      right: -7px;
      top: -10px;
    }
  }
  
  @media (max-width: 600px) {
    justify-content: flex-end;

    ul {
      display:none;
    }
  }
`;

export const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: ${({ status }) => status ? 'block' : 'none'};

  background: #000000;

  aside {
    width: 80%;
    min-height: 100%;
    height: 100%;

    background: #ffffff;

    margin-left: auto;
    padding: 0 1rem;


    display: flex;
    flex-direction: column;

    header {
      height: 4.375rem;

      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    ul {
      padding-top: 1rem;

      li {
        width: 100%;
        display: block;

        a {
          min-width: 100%;

          display: block;

          padding: 1rem 0;
          margin-bottom: 1rem;

          background: #ffffff;
          box-shadow: 0px 0px 5px #A5A5A5;
          border-radius: 5px;

          text-align: center;
        }
      }
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;
  padding: 2px;

  @media(max-width: 600px) {
    display: flex;
  }
`;
