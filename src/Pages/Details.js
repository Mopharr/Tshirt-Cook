import React, { useState } from "react";
import NavNew from "../components/NavNew";
import Section from "components/Section";
import styled from "styled-components";
import hero from "assets/bags.jpg";
import hero1 from "assets/bag.jpg";
import Footer from "components/Footer";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Carousel from "react-elastic-carousel";

const Details = () => {
  const [img, setImg] = useState(hero);
  const breakPoints = [
    { width: 1, itemsToShow: 4 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <>
      <Overlay>
        <NavNew />
        <Section />
        <Main>
          <Content>
            <Items>
              <ItemImage>
                <img src={img} alt="" />
              </ItemImage>
              <CarouselItem>
                <Carousel breakPoints={breakPoints} itemsToShow={3}>
                  <Item>
                    <span onClick={() => setImg(hero)}>
                      <img src={hero} alt="" />
                    </span>
                  </Item>
                  <Item>
                    <span onClick={() => setImg(hero1)}>
                      <img src={hero1} alt="" />
                    </span>
                  </Item>
                  <Item>
                    <span onClick={() => setImg(hero)}>
                      <img src={hero} alt="" />
                    </span>
                  </Item>

                  <Item>
                    <span onClick={() => setImg(hero)}>
                      <img src={hero1} alt="" />
                    </span>
                  </Item>
                  <Item>
                    <span onClick={() => setImg(hero)}>
                      <img src={hero} alt="" />
                    </span>
                  </Item>
                  <Item>
                    <span onClick={() => setImg(hero1)}>
                      <img src={hero1} alt="" />
                    </span>
                  </Item>
                </Carousel>
              </CarouselItem>
              <Product>
                <h2>Share this product</h2>
                <div>
                  <FaFacebookF className="shareIcon" />
                  <FaTwitter className="shareIcon" />
                  <FaPinterestP className="shareIcon" />
                </div>
              </Product>
            </Items>
            <Right>
              <Name>
                <h1>Black Hoodie</h1>
                <AiOutlineHeart className="heartIcon" />
              </Name>
              <Price>
                <h1>$5300</h1>
                <span>
                  <s>$6490</s>
                  <button>-8%</button>
                </span>
                <p>
                  + shipping fee to Ajah <b>+$1300</b>
                </p>
              </Price>
              <Size>
                <h1>Variation Available</h1>
                <ul>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                </ul>
                <div className="orderInput">
                  <input type="text" />
                </div>
              </Size>
            </Right>
          </Content>
          <ProductDetails>
            <h1>Product Detils</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget ornare est. Praesent id hendrerit risus. Aliquam nulla
              lectus, bibendum sed vulputate sit amet, suscipit sed est. Etiam
              vulputate urna lacinia quam sodales varius. Nullam et mauris eget
              turpis lacinia
            </p>
          </ProductDetails>
          <Features>
            <h2>Features</h2>
            <ul>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
              <li>Super-bright colors embedded directly into the case</li>
            </ul>
          </Features>
        </Main>
      </Overlay>
      <Footer />
    </>
  );
};

export default Details;

const Overlay = styled.div`
  background: #f5f5f5;
`;

const Main = styled.div`
  width: 60%;
  margin: 1em auto;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 568px) {
    width: 90%;
  }
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 1em 2em;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1em 0.5em;
  }
`;

const Items = styled.div`
  width: 45%;
  margin-right: 2em;
  display: flex;
  flex-direction: column;

  .rec-item-wrapper {
    width: 80px !important;
  }

  @media (max-width: 768px) {
    width: 98%;
    margin: auto;
  }
  img {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

const ItemImage = styled.div`
  height: 350px;
  width: 97%;
  margin: auto;
  padding-bottom: 2em;

  @media (max-width: 768px) {
    height: 450px;
  }
  @media (max-width: 568px) {
    height: 300px;
  }
`;
const CarouselItem = styled.div`
  width: 100%;
  .carousel-items {
    overflow-x: scroll;
    display: flex;
    background: #f5f5f5;
  }

  .rec-arrow {
    margin: 0;
    background: none;
    transition: all 0.3s ease;
    font-size: 1.6em;
    color: #333;
    box-shadow: 0 0 2px 0px #333;
    border-radius: 0;
    border: none;
    padding: 0;
    width: auto;
    height: auto;
    min-width: auto;
    line-height: 0;
    align-self: center;
    cursor: pointer;
    outline: none;
    background: transparent;
  }

  .rec-pagination {
    display: none;
  }
`;
const Item = styled.div`
  img {
    width: 80px;
    height: 80px;
    padding: 0.5em;
    cursor: pointer;
  }
`;

const Product = styled.div`
  padding: 1em 0;
  h2 {
    font-size: 1em;
    font-weight: bold;
    padding: 1em 0 0.5em;
    text-transform: uppercase;
  }
  .shareIcon {
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 25px;
    padding: 5px;
    cursor: pointer;
    margin: 0 1em 1em 0;
  }
`;
const Right = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 98%;
    margin: auto;
  }
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  h1 {
    font-size: 1.5em;
    font-weight: 400;
    text-transform: uppercase;
  }
  .heartIcon {
    font-size: 1.7em;
    color: #ff6600;
    cursor: pointer;
  }
`;
const Price = styled.div`
  padding: 1em 0;
  h1 {
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    color: #cecdcd;
    margin: 1em 0 0.4em;
  }
  button {
    width: 43px;
    height: 40px;
    padding: 10px;
    border-radius: 2px;
    font-size: 12px;
    margin: 0 10px;
    background: #ff6600;
    color: #fff;
    border: none;
  }
  p {
    margin: 5px 0;
  }
  b {
    font-weight: bold;
  }
`;
const Size = styled.div`
  padding: 1em 0;
  h1 {
    font-size: 1.4em;
    font-weight: bold;
    padding: 0.5em 0 0.5em;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    width: 70%;
    padding: 0;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      width: 98%;
    }
  }

  li {
    list-style: none;
    border: 2px solid #ededed;
    padding: 8px;
    text-align: center;
    margin: 0 1em 0 0;
    min-width: 50px;
    cursor: pointer;
    @media (max-width: 768px) {
      margin: 1em 0.5em;
    }
  }
  .orderInput input {
    width: 50px;
    list-style: none;
    border: 2px solid #ededed;
    margin-right: 0.4em;
    outline: none;
    padding: .5em 0;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0.5em 0;
  }
  span {
    margin: 0 1em;
    font-size: 17px;
  }
`;
const Button = styled.div`
  background: #ff6600;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  justify-self: center;
`;
const ProductDetails = styled.div`
  margin: 2em 0;
  background: #fff;
  width: 100%;
  padding: 1em;
  h1 {
    padding: 1em 0;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
  p {
    line-spacing: 1.5px;
  }
`;
const Features = styled.div`
  margin: 2em 0;
  background: #fff;
  width: 100%;
  padding: 1em 2em;
  h2 {
    padding: 1em 0;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`;
