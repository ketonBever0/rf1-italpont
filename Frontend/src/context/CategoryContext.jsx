import React, { createContext } from "react";
import categories from "../scripts/categories";
import axios from "axios";

export const CategoryContext = createContext(null);

const CategoryContextProvider = (props) => {
  const live = true;
  const url = live ? "https://rf1-italpont-production.up.railway.app/" : "http://localhost:3000/";
  let getProducts;
  try {
    axios
      .get(url + "product/all")
      .then((response) => {
        window.localStorage.setItem("product", JSON.stringify(response.data));
        getProducts = response.data;
      })
      .catch((error) => {
        console.error(error);
        console.log(url + "Termékeket nem sikerült elérni");
      });
  } catch (error) {
    window.localStorage.setItem(
      "product",
      JSON.stringify({
        key: 1,
        id: 1,
        name: "default",
        category: "uditok",
        subcategory: "gyumolcsle",
        images: "default",
        price: "0",
        volume: "0",
      })
    );
  }
  const contextValue = { categories, url, getProducts };

  return (
    <CategoryContext.Provider value={contextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
