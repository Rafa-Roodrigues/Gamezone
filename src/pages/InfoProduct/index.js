import { formatCurrency } from '../../utils/formatCurrency';
import { api } from '../../services/api';

import { Container } from './style';

import gameIMG from '../../assets/games/call-of-duty.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function InfoProduct() {
  const [product, setProduct] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    api.get(`/products/${id}`)
    .then(response => setProduct(response.data.products));
  }, [id])

  return (
    <Container>
      <div id="box-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div id="box-info">
        <h2>{product.name}</h2>

        {product.description && (
          <p>
            {product.description}
          </p>
        )}
        <strong>{formatCurrency(product.price)}</strong>
        <button>Adicionar ao Carrinho</button>
      </div>
    </Container>
  )
}

// onload