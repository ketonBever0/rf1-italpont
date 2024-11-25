import React from "react";
import "./Customers.css";
import Sidebar from "../Sidebar/Sidebar";
import UsersTable from "../UsersTable/UsersTable";

const Customers = () => {
  return (
    <div className="myorders">
      <Sidebar page="user" />
      <div className="myorders-content">
        <h1>Rendeléseim</h1>

        <UsersTable />
      </div>
    </div>
  );
};

export default Customers;
