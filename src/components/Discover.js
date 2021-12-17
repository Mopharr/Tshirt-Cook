import React from "react";
import wrapPic from "../assets/music.jpg";
import wrapPic1 from "../assets/lion.jpg";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { Fade } from "react-reveal";

const Discover = () => {
  return (
    <Main>
      <Title>
        <p>Discover More</p>
        <a href="/">View More</a>
      </Title>
      <Wrap>
        <Fade>
          <div className="discovery">
            <img src={wrapPic} alt="" />
            <button>
              <AiOutlineHeart />
            </button>
            <Text>
              <h3>Music</h3>
              <div className="tag">
                <p>40 product</p>
                <p>$100</p>
              </div>
            </Text>
          </div>
        </Fade>
        <Fade>
          <div className="discovery">
            <img src={wrapPic} alt="" />
            <button>
              <AiOutlineHeart />
            </button>
            <Text>
              <h3>Music</h3>
              <div className="tag">
                <p>40 product</p>
                <p>$100</p>
              </div>
            </Text>
          </div>
        </Fade>
        <Fade>
          <div className="discovery">
            <img src={wrapPic} alt="" />
            <button>
              <AiOutlineHeart />
            </button>
            <Text>
              <h3>Music</h3>
              <div className="tag">
                <p>40 product</p>
                <p>$100</p>
              </div>
            </Text>
          </div>
        </Fade>
        <Fade>
          <div className="discovery">
            <img src={wrapPic1} alt="" />
            <button>
              <AiOutlineHeart />
            </button>
            <Text>
              <h3>Music</h3>
              <div className="tag">
                <p>40 product</p>
                <p>$100</p>
              </div>
            </Text>
          </div>
        </Fade>
        <Fade>
          <div className="discovery">
            <img src={wrapPic1} alt="" />
            <button>
              <AiOutlineHeart />
            </button>
            <Text>
              <h3>Music</h3>
              <div className="tag">
                <p>40 product</p>
                <p>$100</p>
              </div>
            </Text>
          </div>
        </Fade>
      </Wrap>
    </Main>
  );
};

export default Discover;

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
    margin: 1em 0;
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
  .discovery {
    position: relative;
    width: 17em;
    background-color: var(--card-main-color);
    margin: 0.6em;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    transition: transform 0.2s ease-in-out;
  }
  img {
    position: relative;
    width: 90%;
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
const Text = styled.div`
  margin-left: 20px;
  h3 {
    font-family: 'Nunito', sans-serif;;
    font-size: 20px;
    text-align: left;
  }
  .tag{
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding-right: 1em;
  }

`;
