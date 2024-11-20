import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./context/ShopContext";
import CategoryContextProvider from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <CategoryContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </CategoryContextProvider>
  </CartProvider>
);
