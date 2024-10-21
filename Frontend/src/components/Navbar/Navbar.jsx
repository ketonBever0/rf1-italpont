import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/italpont_logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("italpont");
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
      </ul>
      <div className="nav-login-cart">
        <Link to="/bejelentkezes">
          <button>Belépés</button>
        </Link>
        <Link to="/kosar">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
