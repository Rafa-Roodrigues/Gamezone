import { formatCurrency } from '../../utils/formatCurrency';

import { Container } from './style';

import gameIMG from '../../assets/games/call-of-duty.png';

export function InfoProduct() {
  return (
    <Container>
      <div id="box-image">
        <img src={gameIMG} alt="" />
      </div>
      <div id="box-info">
        <h2>Call of Duty: Modern Warfare</h2>
        <p>
          Um líder radical é executado por um presidente de um país 
          desconhecido no Médio Oriente e um movimento ultranacionalista 
          da início a uma guerra civil. A ação é vista da perspectiva 
          de várias forças armadas e passada em vários locais, 
          desde o Reino Unido ao Azerbaijão.
        </p>
        <strong>{formatCurrency(200.00)}</strong>
        <button>Adicionar ao Carrinho</button>
      </div>
    </Container>
  )
}