import * as React from "react";
import "./Customers.css";
import Sidebar from "../Sidebar/Sidebar";
import AdminUsersTable from "./AdminUsersTable";
import axios from "axios";
import BoxUI from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { CategoryContext } from "../../context/CategoryContext";

const Customers = () => {
  const { url } = React.useContext(CategoryContext);
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(true);
  const [allUsers, setAllUsers] = React.useState();

  React.useEffect(() => {
    axios
      .get(url + "auth/all", {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        setAllUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Felhasználók</h1>

        {!isLoading ? (
          <AdminUsersTable users={allUsers} />
        ) : (
          <BoxUI sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
          </BoxUI>
        )}
      </div>
    </div>
  );
};

export default Customers;
