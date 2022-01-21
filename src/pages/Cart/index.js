import { useDispatch, useSelector } from 'react-redux';

import { formatCurrency } from '../../utils/formatCurrency';

import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

import { Back } from '../../components/Back';

import { 
  changeProductQuantity, 
  removeProductOfCart 
} from '../../feature/cart/cartSlice';

import { 
  Container, 
  Card, 
  Summary, 
  EmptyCart, 
  LinkPageCart 
} from './style';

export function Cart() {
  const { items } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  function handleChangeProductQuantity(id, type) {
    dispatch(changeProductQuantity({id, type}));
  }

  function handleRemoveProductOfCart(id) {
    dispatch(removeProductOfCart({id}));
  }

  const total = items.reduce((acc, item) => {
    return acc += item.product.price * item.quantity;
  }, 0);

  return (
    items.length > 0 ? (
      <>
        <Back endpoint={'/'}>Continuar Comprando</Back>
        <Container>
        {items.map(item => (
          <Card key={item.product.id}>
            <div className="box-image">
              <img src={item.product.image} alt="" />
            </div>
            <strong className="name-product">{item.product.name}</strong>
            <span className="price">{formatCurrency(item.product.price)}</span>
            <div className="box-quantity">
              <button
                onClick={() => handleChangeProductQuantity(
                  item.product.id, "decrement"
                )}
              >
                <BsDashCircle size={19}/>
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => handleChangeProductQuantity(
                  item.product.id, "increment"
                )}
              >
                <BsPlusCircle size={19}/>
              </button>
            </div>
            <button 
              onClick={() => handleRemoveProductOfCart(item.product.id)} 
              className="box-trash"
            >
              <FaTrash size={19}/>
            </button>
            <div className="box-subtotal">
              <p>Subtotal</p>
              <span>{formatCurrency(item.product.price * item.quantity)}</span>
            </div>
          </Card>
        ))}
        <Summary>
          <div>
            <span id="total">Total do pedido</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </Summary>      
      </Container>
    </>
    ) : (
      <EmptyCart>
        <p>Seu carrinho esta vazio :(</p>
        <LinkPageCart to="/">Ir para as compras</LinkPageCart>
      </EmptyCart>   
    )
  )
}


