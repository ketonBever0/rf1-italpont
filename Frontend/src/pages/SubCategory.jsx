import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Items/Item";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubCategory = () => {
  axios
    .get("http://localhost:3000/product/all")
    .then((response) => {
      window.localStorage.setItem("product", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
      console.log("Termékeket nem sikerült elérni");
    });

  const products = JSON.parse(window.localStorage.getItem("product"));

  //console.log(products);
  const url_category = useParams();
  let categoryNum = 0;
  products.map((item, i) => {
    if (url_category.subcategory === item.subCategory) {
      categoryNum += 1;
    }
  });
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>{categoryNum} </span> termék megjelenítve a{" "}
          <span>{products.length}</span> termékből
        </p>
      </div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (url_category.subcategory === item.subCategory) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                category={item.category}
                subcategory={item.subCategory}
                images={item.images}
                price={item.price}
                volume={item.volume}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default SubCategory;
