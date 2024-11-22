import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoryContextProvider from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <CartProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </CartProvider>
  </ProductProvider>
);
