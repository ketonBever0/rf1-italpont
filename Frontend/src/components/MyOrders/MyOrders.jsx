import React from "react";
import "./MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";

//TODO: rendes adatokkal feltölteni a táblázatot.
// Egy táblázat 1 rendelést jelent. A táblázatban az adott rendelés termékeit iratjuk ki.
const MyOrders = () => {
  return (
    <div className="myorders">
      <Sidebar page="user" />
      <div className="myorders-content">
        <h1>Rendeléseim</h1>

        <div class="table-wrapper">
          <table class="fl-table">
            <thead>
              <tr>
                <th>Név</th>
                <th>Márka</th>
                <th>Kategória</th>
                <th>Űrtartalom</th>
                <th>Alkoholszázalék</th>
                <th>Ár</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bacardi Carta Blanca</td>
                <td>Bacardi</td>
                <td>Fehér rum</td>
                <td>1 l</td>
                <td>37.5%</td>
                <td>8500 Ft</td>
              </tr>
              <tr>
                <td>Bacardi</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
              </tr>
              <tr>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
              </tr>
              <tr>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
              </tr>
              <tr>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
              </tr>
              <tr>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
              </tr>
              <tr>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
              </tr>
              <tr>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 1</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Ősszesen</td>
                <td>8500 FT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
