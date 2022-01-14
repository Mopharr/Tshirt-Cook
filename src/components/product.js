import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../style/product.css";
import UserContext from "Context";

const Product = () => {
  const { addToCart, product } = useContext(UserContext);
  return (
    <div className="product">
      <h2>Feature Product</h2>
      <div className="proContent">
        <IoIosArrowBack className="icons" />
        <div className="proContentCap">
          {product.map((item) => (
              <div class="card-1 card-div">
                <div class="like-icon-div">
                  <label for="card-1-like" class="like-icon-div-child"></label>
                </div>
                <div class="gow-img-div img-div">
                  <img src={item.image.url} alt="" />
                </div>
                <div class="text-container">
                  <h2 class="item-name">{item.name}</h2>
                  <div class="pricing-and-cart">
                    <div class="pricing">
                      <p class="current-price">{item.price.formatted_with_symbol}</p>
                    </div>
                    <AiOutlineShoppingCart
                      style={{ fontSize: "1.4em", cursor: "pointer" }}
                      onClick={() => {
                        addToCart(item.id, 1);
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <IoIosArrowForward className="icons" />
      </div>
    </div>
  );
};

export default Product;
