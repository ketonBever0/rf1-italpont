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
import MyOrders from "./components/MyOrders/MyOrders";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import PlaceOrder from "./pages/placeOrder";
import Customers from "./components/Customers/Customers";
import Warehouses from "./components/Warehouses/Warehouses";
import AdminProducts from "./components/AdminProducts/AdminProducts";
import AdminOrders from "./components/AdminOrders/AdminOrders";
import UploadWarehouse from "./components/UploadWarehouse/UploadWarehouse";

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
          <Route path="/rendeleseim" element={<MyOrders />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/raktarak" element={<Warehouses />} />
          <Route path="/termekek" element={<AdminProducts />} />
          <Route path="/arubevetel" element={<UploadWarehouse />} />
          <Route path="/vasarlok" element={<Customers />} />
          <Route path="/rendelesek" element={<AdminOrders />} />

          <Route path="/szallitas" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
