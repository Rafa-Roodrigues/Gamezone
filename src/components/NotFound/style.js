import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;