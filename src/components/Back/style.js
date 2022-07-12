import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 1.5rem;
  max-width: var(--max-width);

  a {
    padding: 0.625rem 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 2px #cccccc;
  }

  @media (min-width: 800px) {
    padding: 0 1rem;
  }
`;