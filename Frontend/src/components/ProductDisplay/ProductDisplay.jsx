import React from "react";
import "./ProductDisplay.css";
import Stars from "../Stars/Stars";
import defaultImage from "../../assets/Diplomatico.png";

const ProductDisplay = (props) => {
  function toCart() {
    //TODO: toCart fuggveny megirasa
  }

  const { product } = props;
  const volume =
    product.volume > 30 ? product.volume + " ml" : product.volume + " l";
  const defaultRating = Math.round(product.rating);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          {/*TODO: rendes imaget berakni*/}
          <img className="productdisplay-main-img" src={`http://localhost:3000/product/image/${product.id}/${product.images.split('"')[1]}`} alt="" />
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
          {product.volume != 0 ? (
            <div className="productdisplay-right-parameters-param">
              <p>Űrtartalom:</p> <p>{volume}</p>
            </div>
          ) : (
            <></>
          )}

          {product.alcoholPercentage != 0 ? (
            <div className="productdisplay-right-parameters-param">
              <p>Alkoholtartalom:</p> <p>{product.alcoholPercentage}%</p>
            </div>
          ) : (
            <></>
          )}

          <div className="productdisplay-right-parameters-param">
            <p>Bruttó ár:</p> <p>{product.price} Ft</p>
          </div>
        </div>

        <div className="productdisplay-right-description">
          {product.description}
        </div>

        <button onClick={() => toCart()}>Kosárba teszem</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
