import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SubCategory from "./pages/SubCategory";
import Category from "./pages/Category";
import Main from "./pages/Main";
import User from "./pages/User";
import Admin from "./pages/Admin";

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
          <Route path="/felhasznalo" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/regisztracio" element={<Signup />} />
          <Route path="/bejelentkezes" element={<Login />} />
          <Route path="/kosar" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
