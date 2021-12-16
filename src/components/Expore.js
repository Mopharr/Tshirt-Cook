import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import wrap1 from "../assets/pic1.jpg";
// import wrap2 from "../assets/pic2.jpg";
// import wrap3 from "../assets/pic3.jpg";
// import wrap4 from "../assets/art.svg";
// import wrap5 from "../assets/hand.svg";
// import wrap6 from "../assets/leaf.svg";
// import Fade from "react-reveal";


const Expore = () => {
  return (
    <>
      <Main>
        <Text>
          <p>Explore Item</p>
        </Text>
        <FirstWrap>
          <div class="card-1 card-div">
            <div class="like-icon-div">
                <label for="card-1-like" class="like-icon-div-child">
                    <input type="checkbox" id="card-1-like" />
                    <AiOutlineHeart />
                    < AiFillHeart />
                </label>
            </div>
            
            <div class="gow-img-div img-div">
                <img src="https://github.com/gerrardNwoke/codePen-imgs/blob/main/imgs/gow-figurine.png?raw=true" alt="god-of-war-figurine" />
            </div>
            <div class="text-container">
                <h4 class="item-name">Kratos and Artreus Statue - God Of War</h4>
                <p class="date"> Departure date: 31/03/2021 </p>
                <div class="pricing-and-cart">
                    <div class="pricing">
                        <p class="previous-price">$999</p>
                        <p class="current-price">$599</p>
                    </div>
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        </FirstWrap>
      </Main>
      {/* <SecondWarp>
        <Fade left>
        <InnerWrap>
          <img
            src={wrap4}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
        </Fade>
        <Fade>
        <InnerWrap>
          <img
            src={wrap5}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
        </Fade>
        <Fade right>
        <InnerWrap>
          <img
            src={wrap6}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
        </Fade>
      </SecondWarp> */}
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
const FirstWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5em;
  width: 100%;

  .text-container {
    text-align: center;
    padding: 0 2rem;
  }
// `;
// const Wrapper = styled.div`
//   position: relative;
//   img {
//     height: 400px;
//     width: 400px;
//     margin: 10px;
//     position: relative;
//     background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
//     cursor: pointer;
//     transition: all 0.3s ease;
//     @media only screen and (max-width: 1024px) {
//       width: 300px;
//     }
//   }
//   // img:hover {
//   //   transform: scale(1.1);
//   // }
//   button {
//     position: absolute;
//     z-index: 1;
//     bottom: 50px;
//     left: 30%;
//     padding: 10px 20px;
//     border: none;
//     outline: none;
//     background: #ff6600;
//     color: #fff;
//     font-size: 18px;
//     border-radius: 9px;
//     @media only screen and (max-width: 1024px) {
//       left: 25%;
//     }
//   }
//   a {
//     color: #fff;
//     text-decoration: none;
//   }
// `;
// const SecondWarp = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1.5em;
//   width: 100%;
//   margin: 3em 0;
//   background: #f5f5f5;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//     margin: auto;
//     align-items: center;
//   }
// `;
// const InnerWrap = styled.div`
//   display: flex;
//   width: 400px;
//   padding: 1.5em;
//   @media (max-width: 1024px){
//     width: 100%
//   }
//   p {
//     font-size: 17px;
//     font-family: 'Nunito', sans-serif;;
//     font-weight: bold;
//     margin: 0 ;
//   }
//   span {
//     font-size: 17px;
//     font-family: 'Nunito', sans-serif;;
//     font-weight: 500;
//     display: flex;
//     width: 70%;
//     margin-right: auto;
//   }
// `;
