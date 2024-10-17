import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero_img from "../../Assets/Havana_club_1519.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Exkluzív ajánlatok</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Prémium italok</p>
          </div>
          <p>az ItalPontnál</p>
        </div>
        <div className="hero-latest-btn">
          <div>Megnézem</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
