import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.subcategory}`}>
        <img src={props.image} alt="" />
      </Link>
      <div className="item-prices">
        <div className="item-price">{props.subcategory}</div>
        
      </div>
    </div>
  );
};

export default Categories;
