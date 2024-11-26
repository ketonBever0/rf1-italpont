import React from "react";
import "./Customers.css";
import Sidebar from "../Sidebar/Sidebar";
import UsersTable from "./UsersTable";

const Customers = () => {
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Felhasználók</h1>

        <UsersTable />
      </div>
    </div>
  );
};

export default Customers;
