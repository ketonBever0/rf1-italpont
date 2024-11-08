import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  let category = "";
  switch (product.category) {
    case "alkoholos_italok":
      category = "Alkoholos italok";
      break;
    case "uditok":
      category = "Üdítők";
      break;
    case "kiegeszitok":
      category = "Kiegészítők";
      break;
    default:
      category = product.category;
  }
  return (
    <div className="breadcrum">
      {category} <img src={arrow_icon} alt="" /> {product.subCategory}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
