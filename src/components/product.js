import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import aca from "../assets/bag.jpg";
import '../style/product.css'

const product = () => {
  return (
    <div className="product">
      <h2>Feature Product</h2>

      <div className="proContent">
        <IoIosArrowBack className="icons"/>
        <div className="proContentCap">
          <div class="card-1 card-div">
            <div class="like-icon-div">
              <label for="card-1-like" class="like-icon-div-child">
              </label>
            </div>

            <div class="gow-img-div img-div">
              <img src={aca} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">clother</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">1200</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                  // onClick={() => {
                  //   addToCart(item.id, 1);
                  // }}
                />
              </div>
            </div>
          </div>
          <div class="card-1 card-div">
            <div class="like-icon-div">
              <label for="card-1-like" class="like-icon-div-child">
              </label>
            </div>

            <div class="gow-img-div img-div">
              <img src={aca} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">clother</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">1200</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                  // onClick={() => {
                  //   addToCart(item.id, 1);
                  // }}
                />
              </div>
            </div>
          </div>
          <div class="card-1 card-div">
            <div class="like-icon-div">
              <label for="card-1-like" class="like-icon-div-child">
              </label>
            </div>

            <div class="gow-img-div img-div">
              <img src={aca} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">clother</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">1200</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                  // onClick={() => {
                  //   addToCart(item.id, 1);
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
        <IoIosArrowForward  className="icons"/>
      </div>
    </div>
  );
};

export default product;
