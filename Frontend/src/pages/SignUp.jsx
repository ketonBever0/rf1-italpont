import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Regisztráció</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Név" />
          <input type="email" placeholder="E-mail cím" />
          <input type="password" placeholder="Jelszó" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Kijelentem hogy, elfogadom a felhasználási feltételeket. </p>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Van már fiókod? <span>Jelentkezz be <Link to="/bejelentkezes">itt</Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
