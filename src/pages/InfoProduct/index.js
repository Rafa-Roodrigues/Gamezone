import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { formatCurrency } from '../../utils/formatCurrency';
import { addProductToCart } from '../../feature/cart/cartSlice';
import { api } from '../../services/api';

import { Loading } from '../../components/Loading';
import { Back } from '../../components/Back';

import { Container } from './style';

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
        <Back endpoint="/">Voltar</Back>
        <Container>
          <img src={product[0].image} alt={product[0].name} />
          <div id="box-info">
            <h2>{product[0].name}</h2>

            {product[0].description && (
              <p>
                {product[0].description}
              </p>
            )}
            <h3>{formatCurrency(product[0].price)}</h3>
            <Link to="/cart" onClick={handleAddProductToCart}>Adicionar ao Carrinho</Link>
          </div>    
        </Container>
      </>
    ) : (
      <Loading/>
    )
  )
}