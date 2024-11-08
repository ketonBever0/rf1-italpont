import React, { createContext, useState } from "react";
import ital_product from "../scripts/ital_products";
import products from "../scripts/products";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  axios
    .get("http://localhost:3000/product/all")
    .then((response) => {
      window.localStorage.setItem("product", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
      console.log("Termékeket nem sikerült elérni");
    });

  //const contextValue = window.localStorage.getItem("product");
  //console.log(contextValue);

  const contextValue = { ital_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
