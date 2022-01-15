import callIMG from '../assets/games/call-of-duty.png';
import gtaIMG from '../assets/games/gta-5.png';
import godIMG from '../assets/games/god-of-war.png';
import injusticeIMG from '../assets/games/injustice.png';
import ps4IMG from '../assets/consoles/ps4.png';
import ps5IMG from '../assets/consoles/ps5.png';
import xboProIMG from '../assets/consoles/xbox-pro.png';
import xboxSIMG from '../assets/consoles/xbox-series-x.png';

export default [
  {
    id: 1,
    name: "Call of Duty: Modern Warfare",
    description: "Um líder radical é executado por um presidente de um país desconhecido no Médio Oriente e um movimento ultranacionalista dá início a uma guerra civil. A ação é vista da perspectiva de várias forças armadas e passada em vários locais, desde o Reino Unido ao Azerbaijão.",
    price: 197.80,
    image: callIMG,
    categoryId: 1,
  },
  {
    id: 2,
    name: "God of War 4",
    description: "Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos. Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza divina.",
    price: 80.90,
    image: godIMG,
    categoryId: 1
  },
  {
    id: 3,
    name: "GTA 5",
    description: "O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.",
    price: 120.00,
    image: gtaIMG,
    categoryId: 1
  },
  {
    id: 4,
    name: "Injustice: Gods Among Us",
    description: "Injustice: Gods Among Us é um jogo de luta que coloca os jogadores a controlar personagens do universo da DC Comics em combate uns contra os outros. Como é um jogo da NetherRealm Studios, irá ter alguns personagem da série Mortal Kombat.",
    price: 150.00,
    image: injusticeIMG,
    categoryId: 1
  },
  {
    id: 5,
    name: "Playstation 4",
    price: 2500.00,
    image: ps4IMG,
    categoryId: 2
  },
  {
    id: 6,
    name: "Playstation 5",
    price: 4000.00,
    image: ps5IMG,
    categoryId: 2
  },
  {
    id: 7,
    name: "Xbox Pro",
    price: 2200.00,
    image: xboProIMG,
    categoryId: 2
  },
  {
    id: 8,
    name: "Xbox Series X",
    price: 2700.00,
    image: xboxSIMG,
    categoryId: 2
  },
]