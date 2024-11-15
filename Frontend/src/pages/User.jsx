import React from "react";
import "./CSS/User.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import UpdateUser from "../components/UpdateUser/UpdateUser";

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
      <div>
        <div>
          <Sidebar />
        </div>
        <button onClick={() => logOut()}>Kijelentkezés</button>
      </div>
    </div>
  );
};

export default User;
