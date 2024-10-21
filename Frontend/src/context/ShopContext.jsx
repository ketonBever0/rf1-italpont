import React, { createContext } from "react";
import ital_product from "../scripts/ital_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { ital_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
