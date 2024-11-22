import React, { useContext } from "react";
import "../Popular/Popular.css";
import Item from "../Items/Item";
import { ProductContext } from "../../context/ProductContext";

const RelatedProducts = () => {
  const { products, isLoading } = useContext(ProductContext);

  return (
    <div className="popular">
      <h1>Mindened a koktélozás?</h1>
      <hr />
      <div className="popular-item">
        {!isLoading ? (
          products.map((item, i) => {
            if (item.price >= 2500 && item.subCategory == "Bárfelszerelés") {
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
          })
        ) : (
          <h1>Betöltés...</h1>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
