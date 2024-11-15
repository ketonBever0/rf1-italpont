import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/italpont_logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isLoggedIn = currentUser != null ? true : false;
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  const [menu, setMenu] = useState("italpont");
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo2} alt="" />
          <p>ItalPont</p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("fooldal");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Főoldal
          </Link>{" "}
          {menu === "fooldal" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("alkoholos_italok");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/alkoholos_italok"
          >
            Alkoholos italok
          </Link>
          {menu === "alkoholos_italok" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("uditok");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/uditok">
            Üdítők
          </Link>
          {menu === "uditok" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kiegeszitok");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/kiegeszitok"
          >
            Kiegészítők
          </Link>
          {menu === "kiegeszitok" ? <hr /> : <></>}
        </li>
        {isLoggedIn ? (
          <li
            onClick={() => {
              setMenu("felhasznalo");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/felhasznalo"
            >
              Fiók
            </Link>
            {menu === "felhasznalo" ? <hr /> : <></>}
          </li>
        ) : (
          <></>
        )}
        {isLoggedIn && isAdmin ? (
          <li
            onClick={() => {
              setMenu("admin");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/admin"
            >
              Admin
            </Link>
            {menu === "admin" ? <hr /> : <></>}
          </li>
        ) : (
          <></>
        )}
      </ul>
      <div className="nav-login-cart">
        <Link to="/bejelentkezes">
          <button>Belépés</button>
        </Link>
        <Link to="/kosar">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{cartItems.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
