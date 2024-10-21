import React from "react";
import "./ProductDisplay.css";
import Stars from "../Stars/Stars";

const ProductDisplay = (props) => {
  const { product } = props;
  const defaultRating = Math.round(product.rating);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <Stars iconSize={25} defaultRating={defaultRating} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-parameters">
          <div className="productdisplay-right-parameters-param">
            <p>Márka:</p> <p>{product.brand}</p>
          </div>
          <div className="productdisplay-right-parameters-param">
            <p>Űrtartalom:</p> <p>{product.volume}</p>
          </div>
          <div className="productdisplay-right-parameters-param">
            <p>Alkoholtartalom:</p> <p>{product.alcoholPercentage}</p>
          </div>
          <div className="productdisplay-right-parameters-param">
            <p>Bruttó ár:</p> <p>{product.price} Ft</p>
          </div>
        </div>

        <div className="productdisplay-right-description">
          {product.description}
        </div>

        <button>Kosárba teszem</button>
        <p className="productdisplay-right-category">
          <span>Kategória :</span> {product.subsubcategory}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
