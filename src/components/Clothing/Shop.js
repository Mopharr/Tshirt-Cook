import React from "react";
import Fade from "react-reveal";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import wrapPic from "../../assets/music.jpg";

const Shop = () => {
  return (
    <Main>
      <Title>
        <p>Explore More theme</p>
        <a href="/">See all theme</a>
      </Title>
      <Wrap>
        <Fade>
          <a href="/">
            <Wrapp>
              <img src={wrapPic} alt="" />
              <Fade buttom>
                <p>
                  Music freestyle <AiOutlineRight />
                </p>
                <span>By TshirtCook</span>
                <p>$30</p>
              </Fade>
            </Wrapp>
          </a>
        </Fade>
        <Fade>
          <a href="/">
            <Wrapp>
              <img src={wrapPic} alt="" />
              <Fade buttom>
                <p>
                  Giraff <AiOutlineRight />
                </p>
                <span>By TshirtCook</span>
                <p>$30</p>
              </Fade>
            </Wrapp>
          </a>
        </Fade>
        <Fade>
          <a href="/">
            <Wrapp>
              <img src={wrapPic} alt="" />
              <Fade buttom>
                <p>
                  Wall art painting <AiOutlineRight />
                </p>
                <span>By TshirtCook</span>
                <p>$30</p>
              </Fade>
            </Wrapp>
          </a>
        </Fade>
      </Wrap>
    </Main>
  );
};

export default Shop;

const Main = styled.div`
  width: 80%;
  margin: 1.5em auto;
  @media only screen and (max-width: 768px) {
    width: 98%;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 30px;
    margin:0;
    font-family: "Nunito", sans-serif;
    color: #ff6600;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
  a {
    text-decoration: none;
    color: #ff6600;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    padding-right: 3em;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      padding-right: 10px;
      font-size: 16px;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 485px) {
    overflow-x: scroll;
    flex-wrap: noWrap;
    justify-content: flex-start;
  }
  div {
    position: relative;
  }
  img {
    position: relative;
    width: 220px;
    height: 300px;
    margin: 1em;
  }
  button {
    position: absolute;
    z-index: 1;
    right: 10%;
    top: 6%;
    font-size: 30px;
    border: none;
    outline: none;
    color: #ff6600;
    background: transparent;
    width: 40px;
    height: 40px;
    padding: 4px;
    cursor: pointer;
  }
`;

const Wrapp = styled.div`
  transition: all 0.3s ease;
  margin: 1em 3em;
  @media (max-width: 1024px) {
    margin: 1em;
  }
  img:hover {
   opacity: 1.5;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    padding: 0;
    color: #ff6600;
  }
`;
