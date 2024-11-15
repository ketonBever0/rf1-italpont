import React, { useContext } from "react";
import "./CSS/Cart.css";
import icon_delete from "../assets/icon_delete.png";
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartItems">
          <table>
            <thead>
              <tr>
                <th>Termék</th>
                <th>Leírás</th>
                <th>Ár</th>
                <th>Mennyiség</th>
                <th>Összeg</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => {
                return (
                  <tr>
                    <td>
                      <img src={item.image} alt="" />
                    </td>
                    <td>
                      <b>{item.name}</b>
                      <br />
                      {item.volume}
                    </td>
                    <td>{item.price} Ft</td>
                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        min="1"
                      />
                    </td>
                    <td>{item.price} Ft</td>
                    <td>
                      <button className="btn"             
                      onClick={() => {
                        removeFromCart(item)
                      }}>
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
          <div className="cartTotal">
          {getCartTotal()} Ft
          </div>
          <button className="to-cart">Tovább a fizetéshez</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
