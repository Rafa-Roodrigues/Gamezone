import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 0 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  img {
    width: 100%;
  }

  button {
    background: purple;
    border-radius: 5px;

    padding: 0.75rem 1.5rem;
    margin-top: 0.5rem;
    
    color: #ffffff;
    font-size: 1rem;
  }

  p {
    margin: 0.5rem 0 0.875rem 0;
  }

  strong {
    display: block;
    font-size: 1.375rem;
  }

  #box-image {
    max-width: 400px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 70%;
    }

    button {
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