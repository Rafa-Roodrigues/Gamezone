import { Container, Card, Summary } from './style';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

import gameIMG from '../../assets/games/call-of-duty.png';

export function Cart() {
  return (
    <Container>
      <Card>
        <div className="box-image"><img src={gameIMG} alt="" /></div>
        <strong className="name-product">Call of Duty: Modern Warfare</strong>
        <span className="price">R$ 250,00</span>
        <div className="box-quantity">
          <button><BsDashCircle size={19}/></button>
          <span>2</span>
          <button><BsPlusCircle size={19}/></button>
        </div>
        <button className="box-trash"><FaTrash size={19}/></button>
        <div className="box-subtotal">
          <p>Subtotal</p>
          <span>R$ 500,00</span>
        </div>
      </Card>
      <Card>
        <div className="box-image"><img src={gameIMG} alt="" /></div>
        <strong className="name-product">Call of Duty: Modern Warfare</strong>
        <span className="price">R$ 250,00</span>
        <div className="box-quantity">
          <button><BsDashCircle size={19}/></button>
          <span>2</span>
          <button><BsPlusCircle size={19}/></button>
        </div>
        <button className="box-trash"><FaTrash size={19}/></button>
        <div className="box-subtotal">
          <p>Subtotal</p>
          <span>R$ 1000,00</span>
        </div>
      </Card>
      <Summary>
        <div>
          <span id="total">Total do pedido</span>
          <strong>R$ 10000,00</strong>
        </div>
      </Summary>
    </Container>
  )
}