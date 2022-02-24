import React from "react";
import "../style/hero.css";
import con from 'assets/home.jpeg'

const Hero = () => {
  return (
    <div className="main">
      <div className="hero" style={{height: '600px'}}>
        <img src={con} alt="" />
        <div className="upload">
          <h2>All the Koolest Custom items & Prints you need in one place!</h2>
          <h3>What are you looking to print today?</h3>
          <h3>Lets help you find it easy!</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
