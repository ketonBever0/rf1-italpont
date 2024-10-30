import React from "react";
import "./CSS/User.css";
import { Link } from "react-router-dom";

const User = () => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  function signOut() {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <div>
      <div>Felhasználói felület</div>

      {isLoggedIn ? (
        <div>
          <div>Welcome {currentUser.firstName}</div>

          <div>Logged in with {currentUser.email}</div>

          {currentUser.role === "ADMIN" ? (
            <div>
              <Link to="/admin">Adminfelület</Link>
            </div>
          ) : (
            <></>
          )}

          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          Jelentkezz be <Link to="/bejelentkezes">itt</Link>
        </div>
      )}
    </div>
  );
};

export default User;
