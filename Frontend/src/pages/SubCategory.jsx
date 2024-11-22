import React, { useState, useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../components/Items/Item";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const SubCategory = () => {
  const { products, isLoading } = useContext(ProductContext);
  const [sort, setSort] = useState("byName");
  const [filter, setFilter] = useState({
    min: 0,
    max: null,
  });

  const url_category = useParams();
  let categoryNum = 0;
  products.map((item) => {
    if (url_category.subcategory === item.subCategory) {
      categoryNum += 1;
    }
  });

  function onChange(e) {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  //TODO: add CSS to select sort and filter inputs

  if (sort == "byName") {
    products.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  }
  if (sort == "byPrice") {
    products.sort((a, b) => a.price - b.price);
  }
  if (sort == "byVolume") {
    products.sort((a, b) => a.volume - b.volume);
  }
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>{categoryNum} </span> termék megjelenítve a{" "}
          <span>{products.length}</span> termékből
        </p>

        <div className="filter">
          <label htmlFor="min">Szűrés ár szerint</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="min"
            placeholder="Min"
          />
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="max"
            placeholder="Max"
          />
        </div>

        <label htmlFor="sort">Rendezés:</label>
        <select id="sort" onChange={(e) => setSort(e.target.value)} name="sort">
          <option value="byName">Név szerint</option>
          <option value="byPrice">Ár szerint</option>
          <option value="byVolume">Űrtartalom</option>
        </select>
      </div>

      <div className="shopcategory-products">
        {!isLoading ? (
          products.map((item, i) => {
            if (
              url_category.subcategory === item.subCategory &&
              item.price > filter.min &&
              (filter.max != null ? item.price < filter.max : true)
            ) {
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
