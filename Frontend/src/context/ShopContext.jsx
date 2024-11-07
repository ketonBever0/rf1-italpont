import React, { createContext } from "react";
import ital_product from "../scripts/ital_products";
import products from "../scripts/products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { ital_product } ;
  console.log(contextValue.products);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
