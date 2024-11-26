import React from "react";
import "./CSS/User.css";
import Sidebar from "../components/Sidebar/Sidebar";

const User = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isLoggedIn = currentUser != null ? true : false;

  if (!isLoggedIn) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="user">
      <Sidebar page="user" />
      <div className="user-content">
        <h1>Szia {currentUser.firstName}!</h1>
        <p>Ezen az oldalon tudsz megváltozni a személyes adataid, meglévő rendeléseid, stb.</p>
        
      </div>
    </div>
  );
};

export default User;
