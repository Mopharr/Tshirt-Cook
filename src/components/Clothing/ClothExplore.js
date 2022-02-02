import React from "react";
import styled from "styled-components";
import wrap1 from "../../assets/mens.jpg";

const ClothExplore = () => {
  return (
    <Main>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Mens clothing</p>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Women clothing</p>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Hoodies</p>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Tshirt</p>
        </Wrap>
      </a>
      
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Dress</p>
        </Wrap>
      </a>
      <a href="/">
        <Wrap>
          <div className="image-div">
            <img src={wrap1} alt="" />
          </div>
          <p>Sweat Shirt</p>
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
`;
const Wrap = styled.div`
  transition: all 0.3s ease;
  margin: 1em;
  position: relative;
  @media (max-width: 1024px) {
    margin: 1em;
  }
  :hover {
    border-radius: 10px;
    // transform: scale(1.1); 
  }
  .image-div{
    width: 100%;
    height: 100%;
        overflow: hidden;
    min-height: 200px;
    
  }
  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    padding: 0.5em 1em;
    border-radius: 25pc;
`;
