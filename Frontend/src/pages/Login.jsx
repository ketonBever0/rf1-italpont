import React, { useState, useContext } from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryContext } from "../context/CategoryContext";

const Login = () => {
  const { url } = useContext(CategoryContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function onChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function login() {
    axios
      .post(url + "auth/login", data)
      .catch((error) => {
        console.error(error);
        alert("Bejelentkezés sikertelen!");
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.user)
        );
        window.location.href = "/felhasznalo";
      });
  }
  return (
    <div className="login">
      <div className="login-container">
        <h1>Bejelentkezés</h1>
        <div className="login-fields">
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange(e)}
            name="email"
            placeholder="E-mail cím"
            required
          />
          <input
            type="password"
            value={data.password}
            onChange={(e) => onChange(e)}
            name="password"
            placeholder="Jelszó"
            required
          />
        </div>

        <button onClick={() => login()}>Bejelentkezés</button>
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
