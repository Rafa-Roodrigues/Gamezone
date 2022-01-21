import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaUserCircle, FaShoppingCart} from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import logoIMG from '../../assets/logo.svg';

import { 
  Container, 
  LinkPageHome, 
  Nav, 
  BoxCartLogin, 
  MenuToggle, 
  NavMobile, 
  LinkPageCart 
} from './style';

export function Header() {
  const [statusMenuToggle, setStatusMenuToggle] = useState(false);
  const quantityOfCartInProduct = useSelector(state => state.cart.items.length);

  window.addEventListener("resize", (event) => {
    if( event.currentTarget.innerWidth > 600 && statusMenuToggle) {
      setStatusMenuToggle(false);
    }
  });

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
            <span>{quantityOfCartInProduct}</span>
            <FaShoppingCart size={25}/>
          </LinkPageCart>
          <button>
            <FaUserCircle id="user" size={25}/>
          </button>
        </BoxCartLogin>
      </Nav>

      <NavMobile status={statusMenuToggle}>
        <div>
          <div id="box-close-modal">
            <button onClick={() => setStatusMenuToggle(false)}><GrClose size={24}/></button>
          </div>
          <ul>
            <Link onClick={() => setStatusMenuToggle(false)} to="/">
              <li>Home</li>
            </Link>
            <Link onClick={() => setStatusMenuToggle(false)} to="/consoles">
              <li>Consoles</li>
            </Link>
            <Link onClick={() => setStatusMenuToggle(false)} to="/games">
              <li>Jogos</li>
            </Link>
          </ul>
        </div>
      </NavMobile>

      <MenuToggle 
        status={statusMenuToggle} 
        onClick={() => setStatusMenuToggle(true)}
      >
       <AiOutlineMenu size={22} />
      </MenuToggle>
    </Container>
  )
}