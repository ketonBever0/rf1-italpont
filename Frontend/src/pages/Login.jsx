import React from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Bejelentkezés</h1>
        <div className="login-fields">
          <input type="email" placeholder="E-mail cím" />
          <input type="password" placeholder="Jelszó" />
        </div>

        <button>Continue</button>
        <p className="login-login">
          Nincs még fiókod? Regisztrálj{" "}
          <Link to="/regisztracio">
            <span>itt</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
