import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../components/Items/Item";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const SubCategory = () => {
  const { products, isLoading } = useContext(ProductContext);
  const url_category = useParams();
  let categoryNum = 0;
  products.map((item) => {
    if (url_category.subcategory === item.subCategory) {
      categoryNum += 1;
    }
  });
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>{categoryNum} </span> termék megjelenítve a{" "}
          <span>{products.length}</span> termékből
        </p>
      </div>
      <div className="shopcategory-products">
        {!isLoading ? (
          products.map((item, i) => {
            if (url_category.subcategory === item.subCategory) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  category={item.category}
                  subcategory={item.subCategory}
                  images={item.images.split('"')[1]}
                  price={item.price}
                  volume={item.volume}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <h1>Termékek betöltése...</h1>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
