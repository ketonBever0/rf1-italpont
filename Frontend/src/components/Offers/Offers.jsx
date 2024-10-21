import React from "react";
import "./Offers.css";
import exclusive_img from "../../Assets/Gin_mare.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Különleges</h1>
        <h1>ajánlatok a számodra</h1>
        <p>CSAK A LEGPRÉMIUMABB ITALOK</p>
        <button>Lássuk</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
