import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Bejelentkezés</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="E-mail cím" />
          <input type="password" placeholder="Jelszó" />
        </div>

        <button>Continue</button>
        <p className="loginsignup-login">
          Nincs még fiókod?{" "}
          <span>
            Regisztrálj <Link to="/regisztracio">itt</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
