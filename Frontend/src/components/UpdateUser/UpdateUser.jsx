import React, { useState } from "react";
import "./UpdateUser.css";
import axios from "axios";

const UpdateUser = () => {
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const [userData, setUserData] = useState({
    email: currentUser.email,
    lastName: currentUser.lastName,
    firstName: currentUser.firstName,
    birthDate: currentUser.birthDate.substr(0, 10),
    nick: currentUser.nick,
    postcode: currentUser.postcode,
    city: currentUser.city,
    address: currentUser.address,
    mobile: currentUser.mobile,
  });

  function onChange(e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function updateUser() {
    axios
      .patch(
        "http://localhost:3000/auth/me",
        dataJSON,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="updateUser">
      <div className="updateUser-container">
        <h1>Adataid</h1>
        <div className="updateUser-fields">
          <div className="form-group">
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) => onChange(e)}
              name="lastName"
              placeholder="Vezetéknév"
              id="inputLastName"
              required
            />
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => onChange(e)}
              name="firstName"
              placeholder="Keresztnév"
              id="inputFirstName"
              required
            />
          </div>

          <input
            type="email"
            value={userData.email}
            name="email"
            onChange={(e) => onChange(e)}
            placeholder="E-mail cím"
            required
          />
          <div className="form-group">
            <input
              type="city"
              value={userData.city}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="city"
              id="inputCity"
              placeholder="Város"
              required
            />

            <input
              type="zip"
              value={userData.postcode}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="postcode"
              id="inputZip"
              placeholder="Irányítószám"
              required
            />
            <input
              type="street"
              value={userData.address}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="address"
              id="autocomplete"
              placeholder="Utca"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              value={userData.mobile}
              onChange={(e) => onChange(e)}
              name="mobile"
              placeholder="Telefonszám"
              id="mobile"
              required
            />
            <input
              type="text"
              value={userData.nick}
              onChange={(e) => onChange(e)}
              name="nick"
              placeholder="Becenév"
              id="nick"
              required
            />
          </div>

          <label htmlFor="birthdate">Születési dátum</label>
          <input
            type="date"
            value={userData.birthDate}
            onChange={(e) => onChange(e)}
            id="birthdate"
            name="birthDate"
            placeholder="Születési dátum"
            required
          />
        </div>
        <button onClick={() => updateUser()}>Módosítom</button>
      </div>
    </div>
  );
};
export default UpdateUser;
