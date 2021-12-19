import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import wrap1 from "../assets/paint.jpg";
import wrap2 from "../assets/clearr2.png";
import wrap3 from "../assets/clearr3.png";
import wrap4 from "../assets/clearr4.png";

const Expore = () => {
  return (
    <>
      <Main>
        <Text>
          <p>Explore Item</p>
        </Text>
        <div class="containers">
          <div class="card-1 card-div">
            <div class="like-icon-div">
              <label for="card-1-like" class="like-icon-div-child">
                <input type="checkbox" id="card-1-like" />
                <AiOutlineHeart />
              </label>
            </div>

            <div class="gow-img-div img-div">
              <img src={wrap1} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">Nathan Drake Statue </h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">$599</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div class="card-2 card-div">
            <div class="like-icon-div">
              <label for="card-2-like" class="like-icon-div-child">
                <input type="checkbox" id="card-2-like" />
                <AiOutlineHeart />
              </label>
            </div>
            <div class="sekiro-img-div img-div">
              <img src={wrap2} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">Nathan Drake Statue</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">$799</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div class="card-3 card-div">
            <div class="like-icon-div">
              <label for="card-3-like" class="like-icon-div-child">
                <input type="checkbox" id="card-3-like" />
                <AiOutlineHeart />
              </label>
            </div>
            <div class="dazai-img-div img-div">
              <img src={wrap3} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">Nathan Drake Statue</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">$279</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div class="card-4 card-div">
            <div class="like-icon-div">
              <label for="card-4-like" class="like-icon-div-child">
                <input type="checkbox" id="card-4-like" />
                <AiOutlineHeart />
              </label>
            </div>
            <div class="u4-img-div img-div">
              <img src={wrap4} alt="" />
            </div>
            <div class="text-container">
              <h2 class="item-name">Nathan Drake Statue</h2>
              <div class="pricing-and-cart">
                <div class="pricing">
                  <p class="current-price">$499</p>
                </div>
                <AiOutlineShoppingCart
                  style={{ fontSize: "1.4em", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Expore;

const Main = styled.div`
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 425px) {
    width: 98%;
  }
`;
const Text = styled.div`
  p {
    font-size: 30px;
    margin: 1em 0;
    font-family: "Nunito", sans-serif;
    color: #ff6600;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`;