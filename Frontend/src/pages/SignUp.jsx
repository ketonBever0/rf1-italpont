import React, { useState, useContext } from "react";
import "./CSS/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryContext } from "../context/CategoryContext";

const SignUp = () => {
  const { url } = useContext(CategoryContext);
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    city: "",
    address: "",
    postcode: "",
    password: "",
    confirmPassword: "",
  });
  function onChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function registration() {
    if (data.password !== data.confirmPassword) {
      alert("A jelszó nem egyezik a megerősítéssel!");
      return;
    }

    axios
      .post(url + "auth/registration", data)
      .catch((error) => {
        console.error(error);
        alert("Sikertelen regisztráció!");
      })
      .then(() => {
        alert(
          "Sikeres regisztráció! Kérlek jelentkezz be a felhasználói fiókodhoz!"
        );
        window.location.href = "/bejelentkezes";
      });
  }
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Regisztráció</h1>
        <div className="signup-fields">
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange(e)}
            name="lastName"
            placeholder="Vezetéknév"
            required
          />
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange(e)}
            name="firstName"
            placeholder="Keresztnév"
            required
          />

          <input
            type="email"
            value={data.email}
            name="email"
            onChange={(e) => onChange(e)}
            placeholder="E-mail cím"
            required
          />
          <div className="form-group">
            <input
              type="city"
              value={data.city}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="city"
              id="inputCity"
              placeholder="Város"
              required
            />

            <input
              type="zip"
              value={data.postcode}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="postcode"
              id="inputZip"
              placeholder="Irányítószám"
              required
            />
            <input
              type="street"
              value={data.address}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="address"
              id="autocomplete"
              placeholder="Utca"
              required
            />
          </div>
          <input
            type="tel"
            value={data.mobile}
            onChange={(e) => onChange(e)}
            name="mobile"
            placeholder="Telefonszám"
            required
          />
          <input
            type="text"
            value={data.nick}
            onChange={(e) => onChange(e)}
            name="nick"
            placeholder="Becenév"
            required
          />
          <label htmlFor="birthdate">Születési dátum</label>
          <input
            type="date"
            value={data.birthDate}
            onChange={(e) => onChange(e)}
            id="birthdate"
            name="birthDate"
            placeholder="Születési dátum"
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
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(e) => onChange(e)}
            name="confirmPassword"
            placeholder="Jelszó újra"
            required
          />
        </div>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>Kijelentem hogy, elfogadom a felhasználási feltételeket. </p>
        </div>
        <button onClick={() => registration()}>Regisztráció</button>
        <p className="signup-login">
          Van már fiókod? Jelentkezz be{" "}
          <Link to="/bejelentkezes">
            <span>itt</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
