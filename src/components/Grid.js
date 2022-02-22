import React from "react";
import styled from "styled-components";
import Hoo from "../assets/hoody.jpg";
import wrap1 from "../assets/mens.jpg";
import wrap2 from "../assets/dress.jpg";
import wrap3 from "../assets/sweat.jpg";
import wrap4 from "../assets/tshirts.jpg";
import wrap5 from "../assets/dress.jpg";
import wrap6 from "../assets/hoody.jpg";

const GridSection = () => {
  return (
    <GridContainer>
      <GridWrap>
        <GridItems>
          <GridInnerItems>
            <h4>Check out Hoodie</h4>
            <h3 >Black Sweatshit</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 50%</h4>
            <h3>Black Sweatshit</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 80%</h4>
            <h3>Black Sweatshit</h3>
            <a className="view-more" href="#shop">
              View more
            </a>
          </GridInnerItems>
        </GridItems>
      </GridWrap>

      <GridExplore>
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
    </GridExplore>
    </GridContainer>
  );
};

export default GridSection;

const GridContainer = styled.div`
  position: relative;
  padding: 15px 0 40px 0;
  margin: 0 auto;
  width: 66%;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    width: 920px;
  }
  @media only screen and (max-width: 979px) {
    width: 734px;
  }
  @media (max-width: 568px) {
    width: 95%;
  }
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  height: 700px;
  @media (max-width: 568px) {
    grid-template-columns: auto;
    height: 100%;
  }
`;

const GridExplore = styled.div`
display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 30px;
  
  @media (max-width: 768px) {
  width: 100%;
  grid-template-columns: auto auto;
}

@media (max-width: 568px) {
  grid-template-columns: auto;
}

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
`

const Wrap = styled.div`
  transition: all 0.3s ease;
  position: relative;
  @media (max-width: 1024px) {
    margin: 1em 0; 
  }
  :hover {
    border-radius: 10px;
  }
  .image-div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height: 200px;
    
  }
  a {
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

const GridItems = styled.div`
  background: url(${Hoo});

  background-size: cover;
  position: relative;
  z-index: 0;
  display: grid;
  align-items: center;
  padding: 3em;
  transition: all 0.3s ease;
  cursor:pointer;
  :nth-child(1) {
    grid-row: 1 / span 2;
    :hover{
      transform: scale(1.1);
    }
  }
  a {
    display: inline-block;
    text-align: center;
    padding: 10px 30px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #fff;
    transition: 0.3s ease-in;
    border-radius: 25px;
    background-color: #ff6600;
    border-color: #fe79a2;
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
`;

const GridInnerItems = styled.div`
  color: #fff;
  font-size: 14px;
  .view-more {
  }
`;
