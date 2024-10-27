import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import SubCategory from "./pages/SubCategory";
import Category from "./pages/Category";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:subcategory" element={<SubCategory />} />
          <Route
            path="/:category/:subcategory/:productName"
            element={<Product />}
          />

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
