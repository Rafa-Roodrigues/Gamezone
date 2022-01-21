import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Cart } from "../pages/Cart";
import { Home } from '../pages/Home';
import { Consoles } from '../pages/Consoles';
import { Games } from '../pages/Games';
import { InfoProduct } from "../pages/InfoProduct";

import { ToastContainer } from 'react-toastify';
import { NotFound } from "../components/NotFound";

export function Router() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<InfoProduct/>}/>
          <Route path="/consoles" element={<Consoles/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}