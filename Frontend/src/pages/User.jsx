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

  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default User;
