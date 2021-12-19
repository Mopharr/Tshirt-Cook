import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";
import wrap1 from "../../assets/mens.jpg";

const ClothExplore = () => {
  return (
    <Main>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>Mens clothing</p>
          </Fade>
        </Wrap>
      </Fade>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>Womens clothing</p>
          </Fade>
        </Wrap>
      </Fade>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>T-shirt and Tops</p>
          </Fade>
        </Wrap>
      </Fade>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>Hoodies</p>
          </Fade>
        </Wrap>
      </Fade>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>Socks</p>
          </Fade>
        </Wrap>
      </Fade>
      <Fade>
        <Wrap>
          <img src={wrap1} alt="" />
          <Fade buttom>
            <p>Dresses</p>
          </Fade>
        </Wrap>
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
  img {
    height: 400px;
    width: 300px;
    margin: 10px;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
const Wrap = styled.div`
  transition: all 0.3s ease;
  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;
