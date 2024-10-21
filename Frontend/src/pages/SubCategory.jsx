import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { ital_product } = useContext(ShopContext);
  const url_category = useParams();
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {ital_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {ital_product.map((item, i) => {
          if (url_category.subcategory === item.subcategory) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                category={item.category}
                subcategory={item.subcategory}
                image={item.image}
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
