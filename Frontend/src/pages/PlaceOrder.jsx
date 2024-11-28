import React, { useContext, useState } from "react";
import "./CSS/PlaceOrder.css";
import { CartContext } from "../context/CartContext";
import { CategoryContext } from "../context/CategoryContext";

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
  const [orderData, setOrderData] = useState({
    lastName: currentUser.lastName,
    firstName: currentUser.firstName,
    email: currentUser.email,
    city: currentUser.city,
    address: currentUser.address,
    postcode: currentUser.postcode,
    phone: currentUser.mobile,
    price: getCartTotal(),
    products: cartItems,
  });

  function onChange(e) {
    setUserData((prev) => ({
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
        <h1>Szállítás</h1>
        <div className="order-fields">
          <input
            type="text"
            value={orderData.lastName}
            onChange={(e) => onChange(e)}
            name="lastName"
            placeholder="Vezetéknév"
            required
          />
          <input
            type="text"
            value={orderData.firstName}
            onChange={(e) => onChange(e)}
            name="firstName"
            placeholder="Keresztnév"
            required
          />

          <input
            type="email"
            value={orderData.email}
            name="email"
            onChange={(e) => onChange(e)}
            placeholder="E-mail cím"
            required
          />
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
          <input
            type="tel"
            value={orderData.mobile}
            onChange={(e) => onChange(e)}
            name="mobile"
            placeholder="Telefonszám"
            required
          />
          <input
            type="text"
            value={orderData.nick}
            onChange={(e) => onChange(e)}
            name="nick"
            placeholder="Becenév"
            required
          />
          <label htmlFor="birthdate">Születési dátum</label>
          <input
            type="date"
            value={orderData.birthDate}
            onChange={(e) => onChange(e)}
            id="birthdate"
            name="birthDate"
            placeholder="Születési dátum"
            required
          />
        </div>

        <button onClick={() => PlaceOrder()}>Megrendelem</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
