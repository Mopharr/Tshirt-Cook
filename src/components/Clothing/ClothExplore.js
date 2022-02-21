/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import wrap1 from "../../assets/mens.jpg";
import wrap2 from "../../assets/dress.jpg";
import wrap3 from "../../assets/sweat.jpg";
import wrap4 from "../../assets/tshirts.jpg";
import wrap5 from "../../assets/dress.jpg";
import wrap6 from "../../assets/hoody.jpg";

const ClothExplore = () => {
  return (
    <Main>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <a>Mens clothing</a>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap2} alt="" />
          </div>
          <a>Women clothing</a>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap3} alt="" />
          </div>
          <a>Hoodies</a>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap4} alt="" />
          </div>
          <a>Tshirt</a>
        </Wrap>
      </a>

      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap5} alt="" />
          </div>
          <a>Dress</a>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap6} alt="" />
          </div>
          <a>Sweat Shirt</a>
        </Wrap>
      </a>
    </Main>
  );
};

export default ClothExplore;

const Main = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2em 1em;
  img {
    height: 400px;
    width: 100%;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    object-fit: cover;
    :hover {
      transform: scale(1.1);
    }
  }
  a {
    color: #000;
  }
  @media (max-width: 765px) {
    width: 100%;
    padding: 2em 0;
  }
`;
const Wrap = styled.div`
  transition: all 0.3s ease;
  margin: 1em;
  position: relative;
  @media (max-width: 1024px) {
    margin: 1em 0; 
  }
  :hover {
    border-radius: 10px;
  }
  .image-div{
    width: 100%;
    height: 100%;
        overflow: hidden;
    min-height: 200px;
    
  }
  a {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    padding: 0.5em 1em;
    border-radius: 25pc;
  }
`;
