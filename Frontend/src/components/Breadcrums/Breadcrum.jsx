import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      {product.category} <img src={arrow_icon} alt="" /> {product.subcategory}{" "}
      <img src={arrow_icon} alt="" /> {product.subsubcategory}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
