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
    <div>
      <Sidebar />
    </div>
  );
};

export default User;
