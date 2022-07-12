import styled from "styled-components";

export const Container = styled.section`
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 0 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  img {
    max-width: 400px;
    width: 100%;
  }

  p {
    margin: 0.5rem 0 0.875rem 0;
  }

  h3 {
    display: block;
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }

   a {
    width: 100%;

    background: purple;
    border-radius: 5px;

    display: block;

    padding: 0.75rem 1.5rem;
    margin-top: 0.5rem;

    color: #ffffff;
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 70%;
      margin: 0 auto;
    }

    a {
      width: 100%;
    }
  }
`;


export const Back = styled.div`
  margin: 0 auto 1.5rem;
  max-width: var(--max-width);

  button {
    padding: 0.625rem 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 2px #cccccc;
  }

  @media (min-width: 800px) {
    padding: 0 1rem;
  }
`;