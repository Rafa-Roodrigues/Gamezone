import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";

export function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}