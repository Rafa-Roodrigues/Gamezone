import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';


import { formatCurrency } from '../../utils/formatCurrency';
import { api } from '../../services/api';

import { addProductToCart } from '../../feature/cart/cartSlice';

import { Container, Back } from './style';
import { Loading } from '../../components/Loading';

export function InfoProduct() {
  const [product, setProduct] = useState({});
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`)
    .then(response => setProduct(response.data.products))
    .catch(() => {
      toast.error("Ocorreu um erro");
    })
  }, [id]);

  function handleAddProductToCart() {
    dispatch(addProductToCart(product[0]));
    navigate('/cart');
  }

  return (
    product.length > 0 ? (
      <>
        <Back>
          <button onClick={() => navigate('/')}>Voltar</button>
        </Back>
        <Container>
          <div id="box-image">
            <img src={product[0].image} alt={product[0].name} />
          </div>
          <div id="box-info">
            <h2>{product[0].name}</h2>

            {product[0].description && (
              <p>
                {product[0].description}
              </p>
            )}
            <strong>{formatCurrency(product[0].price)}</strong>
            <button onClick={handleAddProductToCart}>Adicionar ao Carrinho</button>
          </div>    
        </Container>
      </>
    ) : (
      <Loading/>
    )
  )
}