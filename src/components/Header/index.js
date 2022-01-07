import { Container, BoxLogo, Nav, BoxCartLogin, MenuToggle, NavMobile } from './style';

import { FaUserCircle, FaShoppingCart} from 'react-icons/fa';
import { CgClose } from 'react-icons/cg'; 
import { Link } from 'react-router-dom';

import logoIMG from '../../assets/logo.svg';
import { useState } from 'react';

export function Header() {
  const [statusMenuToggle, setStatusMenuToggle] = useState(false);

  return (
    <Container>
      <BoxLogo to="#">
        <img src={logoIMG} alt="logo da gamezone" />
      </BoxLogo>

      <Nav>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">Consoles</Link></li>
          <li><Link to="">Jogos</Link></li>
        </ul>

        <BoxCartLogin>
          <button id="cart">
            <span>0</span>
            <FaShoppingCart id="cart" size={25}/>
          </button>
          <button>
            <FaUserCircle id="user" size={25}/>
          </button>
        </BoxCartLogin>
      </Nav>

      <NavMobile status={statusMenuToggle}>
        <button onClick={() => setStatusMenuToggle(false)}>
          <CgClose color="#ffffff" size={30}/>
        </button>
        <ul>
          <li>
            <Link onClick={() => setStatusMenuToggle(false)} to="">Home</Link>
          </li>
          <li>
            <Link onClick={() => setStatusMenuToggle(false)} to="">Consoles</Link>
          </li>
          <li>
            <Link onClick={() => setStatusMenuToggle(false)} to="">Jogos</Link>
          </li>
        </ul>
      </NavMobile>

      <MenuToggle onClick={() => setStatusMenuToggle(true)}>
        <span></span>
      </MenuToggle>
      
    </Container>
  )
}