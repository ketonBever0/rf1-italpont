import React from "react";
import "../Popular/Popular.css";
import Item from "../Items/Item";

const RelatedProducts = () => {
  const products = JSON.parse(window.localStorage.getItem("product"));
  return (
    <div className="popular">
      <h1>Mindened a koktélozás?</h1>
      <hr />
      <div className="popular-item">
        {products.map((item, i) => {
          if (item.price > 2500 && item.subCategory == "Bárfelszerelés") {
            return (
              <Item
                key={i}
                id={item.id}
                category={item.category}
                subcategory={item.subCategory}
                name={item.name}
                images={item.images.split('"')[1]}
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

export default RelatedProducts;
