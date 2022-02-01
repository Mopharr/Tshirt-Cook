import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";
import wrap1 from "../../assets/mens.jpg";

const ClothExplore = () => {
  return (
    <Main>
      <Fade>
        <a href="/">
          <Wrap>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <p>Mens clothing</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
      <Fade>
        <a href="/">
          <Wrap>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <p>Women clothing</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
      <Fade>
        <a href="/">
          <Wrap>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <p>Hoodies</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
      <Fade>
        <a href="/">
          <Wrap>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <p>Tshirt</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
      <Fade>
        <a href="/">
          <Wrap>
            <div className="image-div">
              <img src={wrap1} alt="" />
            </div>
            <Fade buttom>
              <p>Dress</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
      <Fade>
        <a href="/">
          <Wrap>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <p>Sweat Shirt</p>
            </Fade>
          </Wrap>
        </a>
      </Fade>
    </Main>
  );
};

export default ClothExplore;

const Main = styled.div`
  width: 80%;
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
  }
  a{
    color: #000;
  }
`;
const Wrap = styled.div`
  transition: all 0.3s ease;
  margin: 1em 3em;
  @media (max-width: 1024px) {
    margin: 1em;
  }
  :hover {
    border-radius: 10px;
    transform: scale(1.1);
  }
  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 1em 0;
  }
`;
