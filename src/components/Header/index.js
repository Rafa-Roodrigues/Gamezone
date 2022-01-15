import { Container, LinkPageHome, Nav, BoxCartLogin, MenuToggle, NavMobile, LinkPageCart } from './style';

import { FaUserCircle, FaShoppingCart} from 'react-icons/fa';
import { CgClose } from 'react-icons/cg'; 
import { Link } from 'react-router-dom';

import logoIMG from '../../assets/logo.svg';
import { useState } from 'react';

export function Header() {
  const [statusMenuToggle, setStatusMenuToggle] = useState(false);

  return (
    <Container>
      <LinkPageHome to="/">
        <img src={logoIMG} alt="logo da gamezone" />
      </LinkPageHome>

      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/consoles">Consoles</Link></li>
          <li><Link to="/games">Jogos</Link></li>
        </ul>

        <BoxCartLogin>
          <LinkPageCart to="/cart">
            <span>0</span>
            <FaShoppingCart size={25}/>
          </LinkPageCart>
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