import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --max-width: 1100px;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  button {
    background: transparent;
    border: 0;

    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }

  main {
    min-height: calc(100vh - 9.375rem);
    background: #F1F1F1;

    padding: 1.5rem 1rem 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;