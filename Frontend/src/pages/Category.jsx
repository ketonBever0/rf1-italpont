import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../assets/dropdown_icon.png";
import Categories from "../components/Categories/Categories";
import { CategoryContext } from "../context/CategoryContext";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categories, url } = useContext(CategoryContext);
  const props = useParams();
  let categoryNum = 0;
  categories.map((item, i) => {
    if (props.category === item.category) {
      categoryNum += 1;
    }
  });
  return (
    <div className="shop-category">
      {/*<img className="shopcategory-banner" src={props.banner} alt="" />*/}
      <div className="shopcategory-indexSort">
        <p>
          <span>{categoryNum} </span> kategória megjelenítve {" "}
          <span>{categories.length} </span> kategóriából
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
