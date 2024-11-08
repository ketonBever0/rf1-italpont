import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import defaultImage from "../../assets/Diplomatico.png";

const Items = (props) => {
  const image = "../assets" + props.images + ".png";
  const volume = props.volume > 30 ? props.volume + " ml" : props.volume + " l";
  return (
    <div className="item">
      <Link to={`${props.name}`}>
        {/*TODO: rendes imaget berakni*/}
        <img src={defaultImage} alt="" />
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
