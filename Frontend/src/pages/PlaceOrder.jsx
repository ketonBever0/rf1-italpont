import React, { useContext, useState } from "react";
import "./CSS/PlaceOrder.css";
import { CartContext } from "../context/CartContext";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";

const PlaceOrder = () => {
  const { url } = useContext(CategoryContext);
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    plusQuantity,
    minusQuantity,
    getCartTotal,
    getItemsQuantity,
  } = useContext(CartContext);

  if (getItemsQuantity() == 0) {
    window.location.href = "/kosar";
  }

  const orderItems = cartItems.map(item => {
    return { productId: item.id, quantity: item.quantity };
  });

  const [orderData, setOrderData] = useState({
    userId: currentUser.id,
    city: currentUser.city,
    address: currentUser.address,
    postcode: currentUser.postcode,
    price: getCartTotal(),
    products: orderItems,
  });

  function onChange(e) {
    setOrderData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function PlaceOrder() {
    axios
      .post(url + "order/add", orderData)
      .catch((error) => {
        console.error(error);
        alert("Sikertelen rendelés!");
      })
      .then(() => {
        alert("Sikeres rendelés!");
      });
  }
  return (
    <div className="order">
      <div className="order-container">
        <h1>Szállítási adatok</h1>
        <div className="order-fields">
          <div className="form-group">
            <input
              type="city"
              value={orderData.city}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="city"
              id="inputCity"
              placeholder="Város"
              required
            />

            <input
              type="zip"
              value={orderData.postcode}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="postcode"
              id="inputZip"
              placeholder="Irányítószám"
              required
            />
            <input
              type="street"
              value={orderData.address}
              onChange={(e) => onChange(e)}
              className="form-control"
              name="address"
              id="autocomplete"
              placeholder="Utca"
              required
            />
          </div>
        </div>

        <button onClick={() => PlaceOrder()}>Megrendelem</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
