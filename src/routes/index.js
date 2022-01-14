import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Cart } from "../pages/Cart";
import { Home } from '../pages/Home';
import { InfoProduct } from "../pages/InfoProduct";

export function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<InfoProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}