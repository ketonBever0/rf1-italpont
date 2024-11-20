import React, { useContext } from "react";
import "./Item.css";
import { Link, useParams } from "react-router-dom";
import Stars from "../Stars/Stars";
import { CategoryContext } from "../../context/CategoryContext";

const Items = (props) => {
  const { url } = useContext(CategoryContext);
  const volume = props.volume > 30 ? props.volume + " ml" : props.volume + " l";
  const imageUrl = url + "product/image/" + props.id + "/" + props.images;
  const linkUrl =
    "/" + props.category + "/" + props.subcategory + "/" + props.name;
  return (
    <div className="item">
      <Link to={linkUrl}>
        <img src={imageUrl} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">{props.price} Ft</div>
        {volume === "0 ml" ? (
          <div className="item-price">{volume}</div>
        ) : volume !== "0 l" ? (
          <div className="item-price">{volume}</div>
        ) : (
          <Stars iconSize={20} defaultRating={5} />
        )}
      </div>
    </div>
  );
};

export default Items;
