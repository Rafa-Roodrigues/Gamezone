import styled from "styled-components";

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  padding: 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  /* background: #ffffff; */
  border-radius: 10px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;