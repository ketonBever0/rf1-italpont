import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { ital_product } = useContext(ShopContext);
  const products = JSON.parse(window.localStorage.getItem("product"));

  const { productName } = useParams();

  const product = products.find((e) => e.name === productName);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      {/*<DescriptionBox product={product}/>*/}
    </div>
  );
};

export default Product;
