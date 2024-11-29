import React, { createContext } from "react";
import categories from "../scripts/categories";
import axios from "axios";

export const CategoryContext = createContext(null);

const CategoryContextProvider = (props) => {
  const live = true;
  const url = live
    ? "https://rf1-italpont-production.up.railway.app/"
    : "http://localhost:3000/";

  const contextValue = { categories, url };

  return (
    <CategoryContext.Provider value={contextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
