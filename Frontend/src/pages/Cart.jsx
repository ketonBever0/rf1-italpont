import React, { useContext } from "react";
import "./CSS/Cart.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../Components/Items/Item";

const Cart = () => {
  const { ital_product } = useContext(ShopContext);
  let sum = 0;
  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartItems">
          <table>
            <thead>
              <th>Termék</th>
              <th>Leírás</th>
              <th>Ár</th>
              <th>Mennyiség</th>
              <th>Összeg</th>
            </thead>
            <tbody>
              {ital_product.slice(0, 3).map((item, i) => {
                sum += item.price;
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
                      <input type="number" value="1" />
                    </td>
                    <td>{item.price} Ft</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cartOverview">
          <h2>Végösszeg</h2>
          {sum} Ft
          <button>Tovább a fizetéshez</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
