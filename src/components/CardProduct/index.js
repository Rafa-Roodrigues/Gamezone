import { Card, LinkPageProduct } from './style';

import gameIMG from '../../assets/games/call-of-duty.png';
import { formatCurrency } from '../../utils/formatCurrency';

export function CardProduct({id, name, price, image }) {
  return (
    <Card>
      <div id="box-image"><img src={image} alt="" /></div>
      <div id="box-info">
        <strong>{name}</strong>
        <span>{formatCurrency(price)}</span>
      </div>
      <LinkPageProduct to="/product">Ver Detalhes</LinkPageProduct>
    </Card>
  )
}