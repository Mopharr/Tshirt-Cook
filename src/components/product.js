import React, { useContext } from "react";
import UserContext from "Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../style/product.css";

const Product = () => {
  const { addToCart, product } = useContext(UserContext);
  return (
    <div className="product">
      <h2 className="haha">Feature Product</h2>
      <div className="proContent">
        <IoIosArrowBack className="icons" />
        <div className="proContentCap">
          {product.map((item) => (
            <a href="/details" class="cards">
              <div class="img-div">
                <img src={item.image.url} alt="" />
              </div>
              <div class="text-container">
                <h2 class="item-name">{item.name}</h2>
                <div class="pricing-and-cart">
                  <div class="pricing">
                    <p className="price">
                      Price: {item.price.formatted_with_symbol}
                    </p>
                  </div>
                  <button
                    style={{ fontSize: "1.4em", cursor: "pointer" }}
                    onClick={() => {
                      addToCart(item.id, 1);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </a>
          ))}
          {product.map((item) => (
            <a href="/details" class="cards">
              <div class="img-div">
                <img src={item.image.url} alt="" />
              </div>
              <div class="text-container">
                <h2 class="item-name">{item.name}</h2>
                <div class="pricing-and-cart">
                  <div class="pricing">
                    <p className="price">
                      Price: {item.price.formatted_with_symbol}
                    </p>
                  </div>
                  <button
                    style={{ fontSize: "1.4em", cursor: "pointer" }}
                    onClick={() => {
                      addToCart(item.id, 1);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
        <IoIosArrowForward className="icons" />
      </div>
    </div>
  );
};

export default Product;




