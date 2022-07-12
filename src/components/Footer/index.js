import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { Container, Content } from './style';

export function Footer() {
  return (
    <Container>
      <Content>
        <p>
          Desenvolvido por:
          <a
            href="https://github.com/Rafa-Roodrigues?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Rafael Rodrigues
          </a>
        </p>

        <div>
          <a
            href="https://github.com/Rafa-Roodrigues?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={25} />
          </a>
          <a href="https://twitter.com/OoooRodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter size={25} />
          </a>
        </div>
      </Content>
    </Container>
  )
}