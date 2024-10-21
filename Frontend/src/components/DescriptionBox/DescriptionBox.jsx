import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = (props) => {
  const { product } = props;
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Leírás</div>
        <div className="descriptionbox-nav-box fade">Vélemények (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {product.description}
        </p>
        
      </div>
    </div>
  );
};

export default DescriptionBox;
