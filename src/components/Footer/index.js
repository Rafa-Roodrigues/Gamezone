import { Container, Content } from './style';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

export function Footer() {
  return (
    <Container>
      <Content>
        <a href="https://github.com/Rafa-Roodrigues?tab=repositories" target="_blank">
          Desenvolvido por: Rafael Rodrigues
        </a>
        <p>
          <a href="https://github.com/Rafa-Roodrigues?tab=repositories" target="_blank">
            <AiOutlineGithub size={25}/>
          </a>
          <a href="https://twitter.com/OoooRodrigues" target="_blank">
            <AiOutlineTwitter size={25}/>
          </a>
        </p>
      </Content>
    </Container>
  )
}