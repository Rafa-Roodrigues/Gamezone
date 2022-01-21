import { Container } from './style';

import { Back } from '../Back';

export function NotFound() {
  return (
    <Container>
      <h2>Paginá não encontrada :(</h2>
      <Back endpoint={'/'}>Home</Back>
    </Container>
  )
}