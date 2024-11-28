import React,{useContext} from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { products } = useContext(ProductContext);

  const { productName } = useParams();

  const product = products.find((e) => e.name === productName);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
