import React from "react";
import styled from "styled-components";
import wrap1 from "../assets/pic1.jpg";
import wrap2 from "../assets/pic2.jpg";
import wrap3 from "../assets/pic3.jpg";
import wrap4 from "../assets/art.svg";
import wrap5 from "../assets/hand.svg";
import wrap6 from "../assets/leaf.svg";

const Expore = () => {
  return (
    <>
      <Main>
        <Text>
          <p>Find a Perfectly Them Gift</p>
        </Text>
        <FirstWrap>
          <Wrapper>
            <img src={wrap1} alt="" />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
          <Wrapper>
            <img src={wrap2} alt="" />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
          <Wrapper>
            <img src={wrap3} alt="" />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
        </FirstWrap>
      </Main>
      <SecondWarp>
        <InnerWrap>
          <img
            src={wrap4}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
        <InnerWrap>
          <img
            src={wrap5}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
        <InnerWrap>
          <img
            src={wrap6}
            style={{ marginRight: "1.5em", alignSelf: "flex-start" }}
            alt=""
          />
          <div>
            <p>Weirdly meaningful art</p>
            <span>Millions of designs on over 70 high quality products.</span>
          </div>
        </InnerWrap>
      </SecondWarp>
    </>
  );
};

export default Expore;

const Main = styled.div`
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 425px) {
    width: 98%;
  }
`;
const Text = styled.div`
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
`;
const FirstWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5em;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
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
  // img:hover {
  //   transform: scale(1.1);
  // }
  button {
    position: absolute;
    z-index: 1;
    bottom: 50px;
    left: 30%;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: #ff6600;
    color: #fff;
    font-size: 18px;
    border-radius: 9px;
    @media only screen and (max-width: 1024px) {
      left: 25%;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
const SecondWarp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
  width: 100%;
  margin: 3em 0;
  background: #f5f5f5;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;
const InnerWrap = styled.div`
  display: flex;
  width: 400px;
  padding: 1.5em;
  @media (max-width: 1024px){
    width: 100%
  }
  p {
    font-size: 17px;
    font-family: 'Nunito', sans-serif;;
    font-weight: bold;
    margin: 0 ;
  }
  span {
    font-size: 17px;
    font-family: 'Nunito', sans-serif;;
    font-weight: 500;
    display: flex;
    width: 70%;
    margin-right: auto;
  }
`;
