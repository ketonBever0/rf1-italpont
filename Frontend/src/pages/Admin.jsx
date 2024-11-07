import React from "react";

const Admin = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;
  
  if (!isAdmin) {
    window.location.href = "/";
    return null;
  }
  return <div>Admin</div>;
};

export default Admin;
