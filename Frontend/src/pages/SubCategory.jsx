import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
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
  //window.localStorage.removeItem("product");*/

  //console.log(products);
  const url_category = useParams();
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort"></div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (url_category.subcategory === item.subCategory) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                category={item.category}
                subcategory={item.subcategory}
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
