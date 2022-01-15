import { CardProduct } from "../../components/CardProduct";
import { Container } from './style';

import { api } from '../../services/api';
import { useState, useEffect } from "react";


export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then(response => setProducts(response.data.products));
  }, []);

  return (
    <Container>
      {products && products.map(product => (
        <CardProduct 
          key={product.id}
          id={product.id} 
          name={product.name} 
          price={product.price} 
          image={product.image}
        />
      ))}
    </Container>
  )
}