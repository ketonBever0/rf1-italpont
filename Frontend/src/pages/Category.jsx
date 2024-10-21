import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../assets/dropdown_icon.png";
import Categories from "../components/Categories/Categories";
import { CategoryContext } from "../context/CategoryContext";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  const props = useParams();
  return (
    <div className="shop-category">
      {/*<img className="shopcategory-banner" src={props.banner} alt="" />*/}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {categories.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {categories.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Categories
                key={i}
                id={item.id}
                category={item.category}
                subcategory={item.subcategory}
                image={item.image}
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

export default Category;
