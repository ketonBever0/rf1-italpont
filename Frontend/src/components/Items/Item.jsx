import React from "react";
import "./Item.css";
import { Link, useParams } from "react-router-dom";
import Stars from "../Stars/Stars";
import defaultImage from "../../assets/Diplomatico.png";

const Items = (props) => {
  const volume = props.volume > 30 ? props.volume + " ml" : props.volume + " l";
  const url = "/" + props.category + "/" + props.subcategory + "/" + props.name;
  return (
    <div className="item">
      <Link to={url}>
        {/*TODO: rendes imaget berakni*/}
        <img src={props.images} alt="" />
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
