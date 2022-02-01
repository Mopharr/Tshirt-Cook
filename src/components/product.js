import React, { useState, useContext } from "react";
import UserContext from "Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../style/product.css";
import Card from "./Card.js";

const Product = () => {
  const [index, setIndex] = useState(0);
  const { addToCart, product } = useContext(UserContext);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= product.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="product">
      <h2 className="haha">Feature Product</h2>
      <div className="proContent">
        <div className="card-container">
        <div className="background-block"></div>
          <IoIosArrowBack className="leftBtn" onClick={slideLeft} />
          <IoIosArrowForward className="rightBtn" onClick={slideRight} />
          {product.map((item, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return (
              <Card
                {...item}
                key={n}
                cardStyle={position}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
