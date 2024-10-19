import React, { createContext } from "react";
import categories from "../assets/categories";

export const CategoryContext = createContext(null);

const CategoryContextProvider = (props) => {
  const contextValue = { categories };

  return (
    <CategoryContext.Provider value={contextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
