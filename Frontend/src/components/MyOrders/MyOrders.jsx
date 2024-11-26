import React from "react";
import "./MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import MyOrdersTable from "./MyOrdersTable";

//TODO: rendes adatokkal feltölteni a táblázatot.
// Egy táblázat 1 rendelést jelent. A táblázatban az adott rendelés termékeit iratjuk ki.
const MyOrders = () => {
  return (
    <div className="myorders">
      <Sidebar page="user" />
      <div className="myorders-content">
        <h1>Rendeléseim</h1>
        <MyOrdersTable />
      </div>
    </div>
  );
};

export default MyOrders;
