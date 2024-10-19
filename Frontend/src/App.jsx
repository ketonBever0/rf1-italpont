import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import SubCategory from "./pages/SubCategory";
import Category from "./pages/Category";
import Main from "./pages/Main";
import men_banner from "./assets/banner_mens.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/alkoholos_italok"element={<Category category="alkoholos_italok" />}>
            <Route path="/alkoholos_italok/:subcategoryId" element={<SubCategory />} >
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
          <Route path="/uditok" element={<Category category="uditok" />}>
            <Route path=":subcategoryId" element={<SubCategory />} />
            <Route path=":subcategoryId/:productId" element={<Product />} />
          </Route>
          <Route
            path="/kiegeszitok"
            element={<Category category="kiegeszitok" />}
          >
            <Route path=":subcategoryId" element={<SubCategory />} />
            <Route path=":subcategoryId/:productId" element={<Product />} />
          </Route>
          
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/regisztracio" element={<Signup />} />
          <Route path="/bejelentkezes" element={<LoginSignup />} />
          <Route path="/kosar" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
