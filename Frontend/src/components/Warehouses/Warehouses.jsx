import React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import WarehouseTable from "./WarehouseTable";

const Warehouses = () => {
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Raktárak</h1>

        <WarehouseTable />
      </div>
    </div>
  );
};

export default Warehouses;
