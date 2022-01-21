import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
  max-width: 1000px;
  width: 100%;

  margin: 0 auto;
  padding: 0 1rem;

  background: #ffffff;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: grid;
  padding: 1rem 0;
  border-bottom: 1px solid #cccccc;

  .box-image {
    display: flex;
  }

  .price {
    font-weight: bold;
  }

  .box-quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      background: #cccccc;
      border-radius: 50%;
    }

    span {
      border: 1px solid #cccccc;
      border-radius: 3px;

      padding: 0 10px;
      margin: 0 5px;
      
    }
  }

  .box-subtotal {
    text-align: right;
  }

  img {
    width: auto;
    max-height: 120px;
  }

  @media (max-width: 500px) {
    grid-template-areas: 'name name name'
                         'image image image'
                         'price price price'
                         'quantity trash subtotal';
    gap: 5px;

    .name-product {
      grid-area: name;
    }

    .box-image {
      grid-area: image;
      justify-content: center;
      align-items: center;
    }

    .price {
      grid-area: price;
    }

    .box-quantity {
      grid-area: quantity;

      display: flex;
      justify-content: left;
      align-items: end;
    }

    .box-trash {
      grid-area: trash;

      display: flex;
      justify-content: left;
      align-items: end;
    }

    .box-subtotal {
      grid-area: subtotal;

      display: flex;
      flex-direction: column;
      align-items: right;
    }
  }

  @media (min-width: 501px) {
    grid-template-columns: minmax(auto, 120px) minmax(120px, auto) minmax(auto, 100px) minmax(auto, 100px) minmax(120px, 170px);
    grid-template-areas: 'image name quantity trash subtotal'
                         'image price quantity trash subtotal';

    gap: 5px;
                         
    .name-product {
      grid-area: name;
    }

    .box-image {
      grid-area: image;
    }

    .price {
      grid-area: price;
    }

    .box-quantity {
      display: flex;
      justify-content: right;
      grid-area: quantity;
    }

    .box-trash {
      grid-area: trash;
      display: flex;
      justify-content: right;
      align-items: center;
    }

    .box-subtotal {
      grid-area: subtotal;
      display: flex;

      flex-direction: column;
      justify-content: center;

    }
  }
`;

export const Summary = styled.div`
  background: #ffffff;

  padding: 1rem;

  display: flex;
  justify-content: end;

  div {
    text-align: right;

    span {
      font-size: 0.875rem;
      margin-right: 5px;
      color: #ADADAD;
    }

    strong {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  p {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
`;

export const LinkPageCart = styled(Link)`
  background: purple;
  border-radius: 5px;
  color: #ffffff;

  padding: 10px 15px;
  margin-top: 10px;

  font-weight: bold;
`;
