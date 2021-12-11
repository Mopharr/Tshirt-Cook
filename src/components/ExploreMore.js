import React from 'react'
import styled from 'styled-components';
import wrap1 from "../assets/pic1.jpg";


const ExploreMore = () => {
    return (
      <Main>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
        <div>
          <img src={wrap1} alt="" />
          <button>Check out Clothing</button>
        </div>
      </Main>
    );
}

export default ExploreMore

const Main = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div {
    position: relative;
  }
  img {
    height: 400px;
    width: 400px;
    margin: 10px;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button {
    position: absolute;
    z-index: 1;
    left: 30%;
    bottom: 10%;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: #ff6600;
    color: #fff;
    font-size: 18px;
    border-radius: 9px;
  }
`;
