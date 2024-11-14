import React from "react";
import "./CSS/User.css";
import { Link } from "react-router-dom";

const User = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isLoggedIn = currentUser != null ? true : false;
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  if (!isLoggedIn) {
    window.location.href = "/";
    return null;
  }

  function logOut() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("currentUser");

    window.location.href = "/";
  }
  return (
    <div>
      <div>Felhasználói felület</div>

      <div>
        <div>Welcome {currentUser != null ? currentUser.firstName : <></>}</div>

        <div>
          Logged in with {currentUser != null ? currentUser.email : <></>}
        </div>

        <Link to="/updateUser">Felhasználói adatok módosítása</Link>

        {isAdmin ? (
          <div>
            <Link to="/admin">Adminfelület</Link>
          </div>
        ) : (
          <></>
        )}

        <button onClick={() => logOut()}>Kijelentkezés</button>
      </div>
    </div>
  );
};

export default User;
