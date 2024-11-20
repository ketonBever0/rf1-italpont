import React from "react";
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
import Orders from "./components/Orders/Orders";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import PlaceOrder from "./pages/placeOrder";

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
          <Route path="/bejelentkezes" element={<Login />} />
          <Route path="/kosar" element={<Cart />} />

          <Route path="/felhasznalo" element={<User />} />
          <Route path="/adataim" element={<UpdateUser />} />
          <Route path="/rendeleseim" element={<Orders />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/raktarak" element={<Orders />} />
          <Route path="/termekek" element={<Orders />} />
          <Route path="/arubevetel" element={<Orders />} />
          <Route path="/vasarlok" element={<Orders />} />
          <Route path="/rendelesek" element={<Orders />} />

          <Route path="/szallitas" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
