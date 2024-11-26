import React from "react";
import "./CSS/User.css";
import Sidebar from "../components/Sidebar/Sidebar";

const Admin = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  if (!isAdmin) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="user">
      <Sidebar page="admin" />
      <div className="user-content">
        <h1>Szia {currentUser.firstName}, Te admin vagy!</h1>
        <p>
          Ezen az admin oldal, itt tudsz a felhasználókkal, rendeléssekkel és
          termékekkel foglalkozni.
        </p>
      </div>
    </div>
  );
};

export default Admin;
