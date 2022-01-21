import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const INITIAL_STATE = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProductToCart: (state, action) => {

      const productExistsInCart = state.items.findIndex(
        item => item.product.id === action.payload.id
      );

      if(productExistsInCart == -1) {
        const product = {
          product: action.payload,
          quantity: 1
        }
  
        state.items.push(product);
      } 
    },
    removeProductOfCart: (state, action) => {
      const productExistsInCart = state.items.findIndex(
        item => item.product.id === action.payload.id
      );

      if(productExistsInCart !== -1) {
        state.items.splice(productExistsInCart, 1);
      }
    }
  },
  extraReducers(builder) {
    builder
    .addCase(changeProductQuantity.fulfilled, (state, action) => {

      const id = action.payload.idProduct;

      const productExistsInCart = state.items.findIndex(
        item => item.product.id == id
      );

      if(action.payload.type === "increment") {
        const quantityProductInStock = action.payload.data[0].quantity;
        const quantityProductInCart = state.items[productExistsInCart].quantity;

        if(quantityProductInStock > quantityProductInCart){
          state.items[productExistsInCart].quantity += 1;
        }
        
      } else {
        if(state.items[productExistsInCart].quantity > 1) {
          state.items[productExistsInCart].quantity -= 1;
        }
      }
    })
  }
});

export const changeProductQuantity = createAsyncThunk(
  'cart/changeProductQuantity', async ({id, type}) => {
  try {
    const response = await api.get(`stock/${id}`);
    return {
      idProduct: id,
      type,
      data: response.data.stocks
    }
  } catch {
    toast.error("Ocorreu um erro");
  }
});

export const { addProductToCart, removeProductOfCart } = cartSlice.actions;

export default cartSlice.reducer;