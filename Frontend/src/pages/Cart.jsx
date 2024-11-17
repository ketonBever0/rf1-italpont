import React, { useContext } from "react";
import "./CSS/Cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);

  //TODO: mennyiség változtatása
  function minusQuantity() {
    /*
    setCartItems(cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));*/
  }
  function plusQuantity() {
    /*
    setCartItems(cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));*/
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
                return (
                  <tr key={i}>
                    <td>
                      <img
                        src={`http://localhost:3000/product/image/${item.id}/${
                          item.images.split('"')[1]
                        }`}
                        alt=""
                      />
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
                      {/*<button onClick={() => minusQuantity()}>-</button>
                      
                      <button onClick={() => plusQuantity()}>+</button>*/}
                      <p>{item.quantity} db</p>
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
          <button className="to-cart">Tovább a fizetéshez</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
