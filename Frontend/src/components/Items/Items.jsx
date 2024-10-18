import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.price}</div>
        <div className="item-price-old">${props.volume}</div>
      </div>
    </div>
  );
};

export default Items;
