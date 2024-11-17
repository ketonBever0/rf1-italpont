import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Admin = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;
  if (!isAdmin) {
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
      <Sidebar page="admin" />
      <div>
        <button onClick={logOut}>Kijelentkezés</button>
      </div>
    </div>
  );
};

export default Admin;
