import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 5rem;

  background: #ffffff;
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  padding: 0.5rem 0;

  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p a {
    margin-bottom: 0.5rem;
    margin-left: 5px;
  }

  div a svg {
    margin-left: 5px;
  }
`;