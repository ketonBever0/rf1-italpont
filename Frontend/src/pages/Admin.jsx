import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Admin = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  if (!isAdmin) {
    window.location.href = "/";
    return null;
  }

  return (
    <div>
      <Sidebar page="admin" />
    </div>
  );
};

export default Admin;
