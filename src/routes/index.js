import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Cart } from "../pages/Cart";
import { Home } from '../pages/Home';
import { Consoles } from '../pages/Consoles';
import { Games } from '../pages/Games';
import { InfoProduct } from "../pages/InfoProduct";

export function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<InfoProduct/>}/>
          <Route path="/consoles" element={<Consoles/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}