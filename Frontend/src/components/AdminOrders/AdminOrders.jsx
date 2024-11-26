import React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import AdminOrdersTable from "./AdminOrdersTable";

const AdminOrders = () => {
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Rendelések</h1>
        <AdminOrdersTable />
      </div>
    </div>
  );
};

export default AdminOrders;
