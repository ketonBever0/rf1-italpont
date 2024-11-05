import React from "react";

const Admin = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  if (currentUser.role !== "ADMIN") {
    window.location.href = "/felhasznalo";
    return null;
  }
  return <div>Admin</div>;
};

export default Admin;
