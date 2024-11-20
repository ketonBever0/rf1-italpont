import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import Hero from "../components/Hero/Hero";
import Newsletter from "../components/Newsletter/Newsletter";
import Popular from "../components/Popular/Popular";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import Offers from "../components/Offers/Offers";

const Main = () => {
  const { getProducts } = useContext(CategoryContext);
  return (
    <div>
      <Hero />
      <Popular />
      <RelatedProducts />
      <Offers />
      <Newsletter />
    </div>
  );
};

export default Main;