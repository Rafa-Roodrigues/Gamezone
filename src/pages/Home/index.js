import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { CardProduct } from "../../components/CardProduct";
import { Loading } from '../../components/Loading';

import { api } from '../../services/api';

import { Container } from './style';

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
    .then(response => setProducts(response.data.products))
    .catch((err) => {
      console.log(err)
      toast.error("Ocorreu um erro!");
    });
  }, []);

  return (
    products.length > 0 ? (
      <section>
        <Container>
          {products.map(product => (
            <CardProduct 
              key={product.id}
              id={product.id} 
              name={product.name} 
              price={product.price} 
              image={product.image}
            />
          ))}        
        </Container>
      </section>
      
    ) : (
      <Loading/>
    )
  )
}