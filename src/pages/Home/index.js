import { CardProduct } from "../../components/CardProduct";
import { Container } from './style';

import callIMG from '../../assets/games/call-of-duty.png';
import godIMG from '../../assets/games/god-of-war.png';
import gtaIMG from '../../assets/games/gta-5.png';
import injusticeIMG from '../../assets/games/injustice.png';


export function Home() {
  return (
    <Container>
      <CardProduct id={1} name={"Call of Duty"} price={200.00} image={callIMG}/>
      <CardProduct id={2} name={"God of War"} price={200.00} image={godIMG}/>
      <CardProduct id={3} name={"GTA 5"} price={200.00} image={gtaIMG}/>
      <CardProduct id={4} name={"Injustice"} price={200.00} image={injusticeIMG}/>
    </Container>
  )
}