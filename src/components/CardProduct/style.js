import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Card = styled.li`
  height: auto;
  
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 150px;
    width:100%;
  }

  #box-info {
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin: 0.5rem 0;
  }

  span {
    font-size: 0.9375rem;
    margin-top: 5px;
  }

  p {
    font-weight: 600;
  }
`;

export const LinkPageProduct = styled(Link)`
  width: 100%;
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