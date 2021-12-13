import React from 'react'
import Fade from 'react-reveal';
import styled from 'styled-components';
import wrap1 from "../assets/pic1.jpg";


const ExploreMore = () => {
    return (
      <Main>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
        <Fade>
          <div>
            <img src={wrap1} alt="" />
            <Fade buttom>
              <button>Shop now</button>
            </Fade>
          </div>
        </Fade>
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
    @media only screen and (max-width: 1024px) {
      width: 300px;
    }
  }
  button {
    position: absolute;
    z-index: 1;
    left: 33%;
    bottom: 15%;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: #ff6600;
    color: #fff;
    font-size: 16px;
    border-radius: 9px;
  }
`;
