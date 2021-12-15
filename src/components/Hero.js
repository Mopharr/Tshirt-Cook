import React from "react";
// import Fade from 'react-reveal'
import styled from "styled-components";
import hero from "../assets/hero.jpg"
import { RiArrowDownSLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <Main>
      <Left>
        <Title>Clothing</Title>
        <Sub>
          T-shirts, hoodies, tops, dresses, skirts, hats, and more in a huge
          range of styles, colors, and sizes (XS - plus size). Whether you wear
          women's clothing or men's clothing you’ll find the original artwork
          that’s perfect for you. Every purchase supports the independent artist
          who designed it, and that’s pretty cool.
        </Sub>
        <a href="/">Shop Clothing <RiArrowDownSLine style={{fontSize: '25px'}}/></a>
      </Left>
      <Right>
        <img src={hero} alt="" />
      </Right>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  align-items: center;
  @media (max-width: 1024px) {
    width: 97%;
  }
`;
const Left = styled.div`
  width: 100%;
  background: #c09a76;
  height: 100%;
  position: relative;
  padding: 10em 1em 10em 2em;
  a {
    text-decoration: none;
    color: #000;
    font-family: bold;
    border: 2px solid;
    border-radius: 25px;
    padding:  10px;
    font-family: nunito;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-top: 1em;
`;
const Sub = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 40%;
  margin-bottom: 1em;
`;
const Right = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    img {
      border-radius: 15px;
    }
  }
`;
