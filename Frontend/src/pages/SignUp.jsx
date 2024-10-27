import React from "react";
import "./CSS/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Regisztráció</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Vezetéknév" />
          <input type="text" placeholder="Keresztnév" />

          <input type="email" placeholder="E-mail cím" />
          <div class="form-group">
            <input
              type="city"
              class="form-control"
              id="inputCity"
              placeholder="Város"
            />

            <input
              type="zip"
              class="form-control"
              id="inputZip"
              placeholder="Irányítószám"
            />
            <input
              type="street"
              class="form-control"
              id="autocomplete"
              placeholder="Utca"
            />
          </div>
          <input type="tel" placeholder="Telefonszám" />
          <input type="text" placeholder="Becenév" />
          <label htmlFor="birthdate">Születési dátum</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            placeholder="Születési dátum"
          />
          <input type="password" placeholder="Jelszó" />
        </div>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>Kijelentem hogy, elfogadom a felhasználási feltételeket. </p>
        </div>
        <button>Continue</button>
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
