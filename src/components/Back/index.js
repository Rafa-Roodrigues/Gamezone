import { Container } from './style';

import { useNavigate } from 'react-router-dom';

export function Back({endpoint, children}) {
  const navigate = useNavigate();
  
  return (
    <Container>
      <button onClick={() => navigate(endpoint)}>{children}</button>
    </Container>
  )
}