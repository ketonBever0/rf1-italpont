import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const live = true;
  const url = live
    ? "https://rf1-italpont-production.up.railway.app/"
    : "http://localhost:3000/";

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([
    {
      key: 1,
      id: 1,
      name: "default",
      category: "uditok",
      subcategory: "gyumolcsle",
      images: "default",
      price: "0",
      volume: "0",
    },
  ]);

  useEffect(() => {
    axios
      .get(url + "product/all")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
