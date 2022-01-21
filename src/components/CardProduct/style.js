import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Card = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  font-size: 1rem;

  #box-image {
    display: flex;
    justify-content: center;

    img {
      max-width: 150px;
      width:100%;
    }
  }

  #box-info {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin: 0.5rem 0;

    /* background: orange; */
  }

  span {
    font-size: 0.9375rem;
    margin-top: 5px;
  }
`;

export const LinkPageProduct = styled(Link)`
  display: block;

  background: purple;
  transition: filter 0.2s;

  font-size: 0.9375rem;
  color: #ffffff;
  text-align: center;

  margin-top: auto;
  padding: 0.5rem 0;

  &:hover {
    filter: brightness(0.9);
  }
`;