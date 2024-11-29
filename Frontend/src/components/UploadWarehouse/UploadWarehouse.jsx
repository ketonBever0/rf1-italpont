import * as React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import UploadWarehouseTable from "./UploadWarehouseTable";
import { ProductContext } from "../../context/ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import BoxUI from "@mui/material/Box";
import axios from "axios";

const UploadWarehouse = () => {
  const { products, isLoading } = React.useContext(ProductContext);
  const [productWare, setProductWare] = React.useState();
  const [isLoadingWare, setIsLoadingWare] = React.useState(true);
  const [warehouses, setWarehouses] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://rf1-italpont-production.up.railway.app/warehouses")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    setProductWare([
      {
        id: 1,
        productId: 1,
        warehouseId: 1,
        quantity: 100,
      },
      {
        id: 2,
        productId: 1,
        warehouseId: 2,
        quantity: 50,
      },
      {
        id: 3,
        productId: 2,
        warehouseId: 1,
        quantity: 100,
      },
      {
        id: 4,
        productId: 3,
        warehouseId: 1,
        quantity: 60,
      },
      {
        id: 5,
        productId: 4,
        warehouseId: 1,
        quantity: 100,
      },
      {
        id: 6,
        productId: 5,
        warehouseId: 1,
        quantity: 100,
      },
      {
        id: 7,
        productId: 6,
        warehouseId: 1,
        quantity: 100,
      },
    ]);
  }, []);

  //FIXME: nem működik a product-ware végpont
  /* React.useEffect(() => {
    axios
      .get("https://rf1-italpont-production.up.railway.app/product-ware")
      .then((response) => {
        setProductWare(response.data);
        setIsLoadingWare(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Árúbevételezés</h1>
        {!isLoading ? (
          <UploadWarehouseTable
            products={products}
            warehouses={warehouses}
            productWare={productWare}
          />
        ) : (
          <BoxUI sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
          </BoxUI>
        )}
      </div>
    </div>
  );
};

export default UploadWarehouse;
