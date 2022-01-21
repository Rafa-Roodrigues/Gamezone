import { Card, LinkPageProduct } from './style';

import { formatCurrency } from '../../utils/formatCurrency';

export function CardProduct({id, name, price, image }) {
  return (
    <Card>
      <div id="box-image"><img src={image} alt={name}/></div>
      <div id="box-info">
        <strong>{name}</strong>
        <span>{formatCurrency(price)}</span>
      </div>
      <LinkPageProduct to={`/product/${id}`}>Ver Detalhes</LinkPageProduct>
    </Card>
  )
}