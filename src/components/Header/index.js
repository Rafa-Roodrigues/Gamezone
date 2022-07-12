import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import logoIMG from '../../assets/logo.svg';

import { 
  Container, 
  NavDesktop, 
  MenuToggle, 
  NavMobile, 
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
      <Link to="/">
        <img src={logoIMG} alt="logo da gamezone" />
      </Link>

      <NavDesktop>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/consoles">Consoles</Link></li>
          <li><Link to="/games">Jogos</Link></li>
        </ul>

        <Link to="/cart">
          <span>{quantityOfCartInProduct}</span>
          <FaShoppingCart size={25}/>
        </Link>
      </NavDesktop>

      <NavMobile status={statusMenuToggle}>
        <aside>
          <header>
            <button onClick={() => setStatusMenuToggle(false)}><GrClose size={24}/></button>
          </header>
          <ul>
            <li>
              <Link onClick={() => setStatusMenuToggle(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setStatusMenuToggle(false)} to="/games">
                Jogos
              </Link>
            </li>
            <li>
              <Link onClick={() => setStatusMenuToggle(false)} to="/consoles">
                Consoles
              </Link>
            </li>
          </ul>
        </aside>
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