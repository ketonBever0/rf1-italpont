import * as React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import AdminOrdersTable from "./AdminOrdersTable";
import CircularProgress from "@mui/material/CircularProgress";
import { CategoryContext } from "../../context/CategoryContext";
import BoxUI from "@mui/material/Box";
import axios from "axios";

const AdminOrders = () => {
  const { url } = React.useContext(CategoryContext);
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(url + "order/all", {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(orders);
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Rendelések</h1>
        {!isLoading ? (
          <AdminOrdersTable orders={orders} />
        ) : (
          <BoxUI sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
          </BoxUI>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
