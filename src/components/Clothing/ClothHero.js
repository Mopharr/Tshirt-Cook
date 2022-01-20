import React from "react";
import ava from '../../assets/fa.jpeg'
import "../../style/hero.css";

const ClothHero = () => {

  return (
    <div className="main">
      <div className="text">
      <h3>Clothing</h3>
      <p>
        Original clothing for original people. Tees, tops, dresses, hats, and
        more with designs for pretty much any interest.
      </p>
      <div className="input">
        <input type="text" value="Mens Tshirt....." />
      </div>
      </div>
      <div className="pic">
        <img src={ava} alt="" style={{height: '250px', width: '300px'}} />
      </div>
    </div>
  );
};

export default ClothHero;
