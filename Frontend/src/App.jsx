import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import ShopCategory from './pages/ShopCategory';
import Main from "./pages/Main"
import men_banner from './assets/banner_mens.png'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/alkoholos_italok' element={<ShopCategory banner={men_banner} category="alkoholos_italok"/>}/>
        <Route path='/uditok' element={<ShopCategory banner={men_banner} category="uditok"/>}/>
        <Route path='/kiegeszitok' element={<ShopCategory banner={men_banner} category="kiegesztiok"/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/regisztracio' element={<Signup />}/>
        <Route path='/bejelentkezes' element={<LoginSignup />}/>
        <Route path='/kosar' element={<Cart />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App