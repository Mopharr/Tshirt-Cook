import React from "react";
import "../style/hero.css";
import ava from "../assets/bgg.png";

const Hero = () => {
  return (
    <div className="main">
      <div className="text">
        <h3>All the Koolest Custom items & Prints you need in one place!</h3>
        <p>What are you looking to print today?</p>
        <p>Lets help you nd it easy!</p>
        <div className="input">
          <h3>Tshirt Cook.....</h3>
        </div>
      </div>
      <div className="pic">
        <img src={ava} alt="" />
      </div>
    </div>
  );
};

export default Hero;
