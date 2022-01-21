import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { Container, Content } from './style';

export function Footer() {
  return (
    <Container>
      <Content>
        <a 
          href="https://github.com/Rafa-Roodrigues?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
        >
          Desenvolvido por: Rafael Rodrigues
        </a>
        <p>
          <a 
            href="https://github.com/Rafa-Roodrigues?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
          >
            <AiOutlineGithub size={25}/>
          </a>
          <a 
            href="https://twitter.com/OoooRodrigues" 
            target="_blank" 
            rel="noreferrer"
          >
            <AiOutlineTwitter size={25}/>
          </a>
        </p>
      </Content>
    </Container>
  )
}