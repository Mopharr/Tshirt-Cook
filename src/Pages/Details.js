import React from "react";
import Nav from "components/Nav";
import Section from "components/Section";
import styled from "styled-components";
import hero from "assets/bags.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Details = () => {
  return (
    <Overlay>
      <Nav />
      <Section />
      <Main>
        <Content>
          <Item>
            <CarouselItem>
              <img src={hero} alt="" />
            </CarouselItem>
            <Product>
              <h2>Share this product</h2>
              <div>
                <FaFacebookF className="shareIcon" />
                <FaTwitter className="shareIcon" />
              </div>
            </Product>
          </Item>
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
                <li>XL</li>
                <li>XXL</li>
              </ul>
              <div>
                <Button>
                  <AiOutlineMinus
                    style={{ justifySelf: "center", margin: "auto" }}
                  />
                </Button>
                <span>1</span>
                <Button>
                  <AiOutlinePlus
                    style={{
                      justifySelf: "center",
                      margin: "auto",
                      fontWeight: "bold",
                    }}
                  />
                </Button>
              </div>
            </Size>
          </Right>
        </Content>
        <ProductDetails>
          <h1>Product Detils</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget ornare est. Praesent id hendrerit risus. Aliquam nulla lectus,
            bibendum sed vulputate sit amet, suscipit sed est. Etiam vulputate
            urna lacinia quam sodales varius. Nullam et mauris eget turpis
            lacinia
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
  );
};

export default Details;

const Overlay = styled.div`
  background: #f5f5f5;
`;

const Main = styled.div`
  width: 70%;
  margin: 1em auto;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 1em 2em;
`;
const Item = styled.div`
  width: 40%;
  margin: 0 1em;
  img {
    width: 300px;
    display: flex;
    justify-content: center;
    height: 300px;
    margin: auto;
    padding-bottom: 2em;
  }
`;
const Product = styled.div`
border-bottom: 1px solid #dcdcdc;
  padding; 1em 0;
  h2{
    font-size: 1em;
    font-weight: bold;
    padding: 1em 0 .5em;
    text-transform: uppercase;
  }
  .shareIcon{
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 25px;
    padding: 5px;
    cursor: pointer;
    margin: 0 1em 1em;
  }

`;
const Right = styled.div`
  width: 60%;
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 1em 0;
  border-bottom: 1px solid #dcdcdc;
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
  border-bottom: 1px solid #dcdcdc;
  h1 {
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    color: #cecdcd;
    margin: 1em 0;
  }
  button {
    width: 43px;
    height: 40px;
    padding: 10px;
    border-radius: 2px;
    font-size: 12px;
    margin: 0 10px;
    background: #ff6600;
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
  border-bottom: 1px solid #dcdcdc;
  h1 {
    font-size: 1.4em;
    font-weight: bold;
    padding: 1em 0 0.5em;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    width: 70%;
    padding: 0;
  }
  li {
    list-style: none;
    border: 2px solid #ededed;
    padding: 8px;
    text-align: center;
    margin: 0 1em;
    min-width: 50px;
    cursor: pointer;
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
const CarouselItem = styled.div``;
const ProductDetails = styled.div`
  margin: 2em 0;
  background: #fff;
  width: 100%;
  padding: 1em 2em;
  h1 {
    padding: 1em 0;
    border-bottom: 1px solid #dcdcdc;
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
