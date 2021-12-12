import React from "react";
import wrapPic from "../assets/music.jpg";
import wrapPic1 from "../assets/lion.jpg";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const Discover = () => {
  return (
    <Main>
      <Title>
        <p>Discover More</p>
        <a href="/">View More</a>
      </Title>
      <Wrap>
        <div>
          <img src={wrapPic} alt="" />
          <button>
            <AiOutlineHeart />
          </button>
          <Text>
            <h3>Music</h3>
            <p>40 product</p>
          </Text>
        </div>
        <div>
          <img src={wrapPic} alt="" />
          <button>
            <AiOutlineHeart />
          </button>
          <Text>
            <h3>Music</h3>
            <p>40 product</p>
          </Text>
        </div>
        <div>
          <img src={wrapPic} alt="" />
          <button>
            <AiOutlineHeart />
          </button>
          <Text>
            <h3>Music</h3>
            <p>40 product</p>
          </Text>
        </div>
        <div>
          <img src={wrapPic1} alt="" />
          <button>
            <AiOutlineHeart />
          </button>
          <Text>
            <h3>Music</h3>
            <p>40 product</p>
          </Text>
        </div>
        <div>
          <img src={wrapPic1} alt="" />
          <button>
            <AiOutlineHeart />
          </button>
          <Text>
            <h3>Music</h3>
            <p>40 product</p>
          </Text>
        </div>
      </Wrap>
    </Main>
  );
};

export default Discover;

const Main = styled.div`
  width: 80%;
  margin: 1.5em auto;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 35px;
    margin: 1em 0;
    font-family: 'Nunito', sans-serif;;
    color: #ff6600;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #ff6600;
    font-family: 'Nunito', sans-serif;;
    font-size: 20px;
    padding-right: 3em;
    cursor: pointer;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    position: relative;
  }
  img {
    position: relative;
    width: 200px;
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
    margin: 1em 0 0.5em;
  }
  p {
    font-family: 'Nunito', sans-serif;;
    font-size: 16px;
  }
`;
