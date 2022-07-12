import { Container } from './style';
import { Link } from 'react-router-dom';

export function Back({endpoint, children}) {
  
  return (
    <Container>
      <Link to={endpoint}>{children}</Link>
    </Container>
  )
}