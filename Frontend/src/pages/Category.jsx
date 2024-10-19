import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../assets/dropdown_icon.png";
import Categories from "../components/Categories/Categories";
import { CategoryContext } from "../context/CategoryContext";

const Category = (props) => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="shop-category">
      {/*<img className="shopcategory-banner" src={props.banner} alt="" />*/}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {categories.map((item) => {
          if (props.category === item.category) {
            return (
              <Categories
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
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default Category;
