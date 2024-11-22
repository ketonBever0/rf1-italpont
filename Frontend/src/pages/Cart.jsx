import React, { useContext } from "react";
import "./CSS/Cart.css";
import { CartContext } from "../context/CartContext";
import { CategoryContext } from "../context/CategoryContext";

const Cart = () => {
  const { url } = useContext(CategoryContext);
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    plusQuantity,
    minusQuantity,
    getCartTotal,
  } = useContext(CartContext);

  function placeOrder() {
    window.location.href = "/szallitas";
  }

  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartItems">
          <table>
            <thead>
              <tr>
                <th>Termék</th>
                <th>Leírás</th>
                <th>Ár / db</th>
                <th>Mennyiség</th>
                <th>Összesen</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => {
                const imageUrl =
                  url +
                  "product/image/" +
                  item.id +
                  "/" +
                  item.images.split('"')[1];
                return (
                  <tr key={i}>
                    <td>
                      <img src={imageUrl} alt="" />
                    </td>
                    <td>
                      <b className="itemName">{item.name}</b>
                      <br />
                      {item.volume > 30 ? (
                        item.volume / 1000 + "l"
                      ) : item.volume == 0 ? (
                        <></>
                      ) : (
                        item.volume + "l"
                      )}{" "}
                    </td>
                    <td>{item.price} Ft</td>
                    <td>
                      <button onClick={() => minusQuantity(item)}>-</button>
                      <p>{item.quantity} db</p>
                      <button onClick={() => plusQuantity(item)}>+</button>
                    </td>
                    <td>{item.quantity * item.price} Ft</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cartOverview">
          <h2>Végösszeg</h2>
          <div className="cartTotal">{getCartTotal()} Ft</div>
          <button onClick={() => placeOrder()} className="to-cart">
            Tovább a fizetéshez
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
