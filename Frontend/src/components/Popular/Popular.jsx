import React, { useContext } from "react";
import "./Popular.css";
import Item from "../Items/Item";
import { ProductContext } from "../../context/ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Popular = () => {
  const { products, isLoading } = useContext(ProductContext);
  return (
    <div className="popular">
      <h1>Italkedvelőknek ajánljuk</h1>
      <hr />
      <div className="popular-item">
        {!isLoading ? (
          products.map((item, i) => {
            if (item.price > 100000 && item.volume != "30l") {
              return (
                <Item
                  key={i}
                  id={item.id}
                  category={item.category}
                  subcategory={item.subCategory}
                  name={item.name}
                  images={item.images.split('"')[1]}
                  price={item.price}
                  volume={item.volume}
                />
              );
            }
          })
        ) : (
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
};

export default Popular;
