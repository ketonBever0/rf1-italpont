import React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import UploadWarehouseTable from "./UploadWarehouseTable";

const UploadWarehouse = () => {
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Árúbevételezés</h1>
        <UploadWarehouseTable />
      </div>
    </div>
  );
};

export default UploadWarehouse;
