import React from "react";
import "./Popular.css";
import data_product from "../../scripts/ital_products";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Italkedvelőknek ajánljuk</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          if (item.price > 80000 && item.volume != "30l") {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                volume={item.volume}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
