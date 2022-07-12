import { formatCurrency } from '../../utils/formatCurrency';
import { Card, LinkPageProduct } from './style';

export function CardProduct({id, name, price, image }) {
  return (
    <Card>
      <img src={image} alt={name}/>
      <div id="box-info">
        <p>{name}</p>
        <span>{formatCurrency(price)}</span>
      </div>
      <LinkPageProduct to={`/product/${id}`}>Ver Detalhes</LinkPageProduct>
    </Card>
  )
}