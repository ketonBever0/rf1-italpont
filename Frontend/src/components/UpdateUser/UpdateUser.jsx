import React, { useState } from "react";
import "./UpdateUser.css";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

const UpdateUser = () => {
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id: currentUser.id,
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

  //console.log(userData);

  async function updateUser() {
    axios
      .patch("http://localhost:3000/auth/me", userData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response);
        console.log("adatok elkuldve");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Sidebar />
      <div className="updateUser">
        <div className="updateUser-container">
          <h1>Adataid</h1>
          <div className="updateUser-fields">
            <div className="form-group">
              {isEditing ? (
                <input
                  type="text"
                  value={userData.lastName}
                  onChange={(e) => onChange(e)}
                  name="lastName"
                  placeholder="Vezetéknév"
                  id="inputLastName"
                  required
                />
              ) : (
                <p>
                  <strong>Vezetéknév:</strong> {userData.lastName}
                </p>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={userData.firstName}
                  onChange={(e) => onChange(e)}
                  name="firstName"
                  placeholder="Keresztnév"
                  id="inputFirstName"
                  required
                />
              ) : (
                <p>
                  <strong>Keresztnév:</strong> {userData.firstName}
                </p>
              )}
            </div>

            {isEditing ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) => onChange(e)}
                name="email"
                placeholder="E-mail cím"
                required
              />
            ) : (
              <p>
                <strong>E-mail cím:</strong> {userData.email}
              </p>
            )}

            <div className="form-group">
              {isEditing ? (
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
              ) : (
                <p>
                  <strong>Város:</strong> {userData.city}
                </p>
              )}
              {isEditing ? (
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
              ) : (
                <p>
                  <strong>Irányítószám:</strong> {userData.postcode}
                </p>
              )}
              {isEditing ? (
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
              ) : (
                <p>
                  <strong>Utca:</strong> {userData.address}
                </p>
              )}
            </div>

            <div className="form-group">
              {isEditing ? (
                <input
                  type="tel"
                  value={userData.mobile}
                  onChange={(e) => onChange(e)}
                  name="mobile"
                  placeholder="Telefonszám"
                  id="mobile"
                  required
                />
              ) : (
                <p>
                  <strong>Telefonszám:</strong> {userData.mobile}
                </p>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={userData.nick}
                  onChange={(e) => onChange(e)}
                  name="nick"
                  placeholder="Becenév"
                  id="nick"
                  required
                />
              ) : (
                <p>
                  <strong>Becenév:</strong> {userData.nick}
                </p>
              )}
            </div>

            {isEditing ? (
              <input
                type="date"
                value={userData.birthDate}
                onChange={(e) => onChange(e)}
                id="birthdate"
                name="birthDate"
                placeholder="Születési dátum"
                required
              />
            ) : (
              <p>
                <strong>Születési dátum:</strong> {userData.birthDate}
              </p>
            )}
          </div>
          {isEditing ? (
            <button
              onClick={() => {
                updateUser();
                setIsEditing(false);
              }}
            >
              Módosítom
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Szerkesztés</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;
