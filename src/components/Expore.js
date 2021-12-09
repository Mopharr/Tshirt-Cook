import React from 'react'
import styled from 'styled-components'
import wrap1 from '../assets/pic1.jpg'
import wrap2 from "../assets/pic2.jpg";
import wrap3 from "../assets/pic3.jpg";
import wrap4 from "../assets/art.svg";
import wrap5 from "../assets/hand.svg";
import wrap6 from "../assets/leaf.svg";


const Expore = () => {
    return (
      <Main>
        <Text>
          <p>Find a Perfectly Them Gift</p>
        </Text>
        <FirstWrap>
          <Wrapper>
            <img src={wrap1} />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
          <Wrapper>
            <img src={wrap2} />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
          <Wrapper>
            <img src={wrap3} />
            <button>
              <a href="/">Shop Gift Cards</a>
            </button>
          </Wrapper>
        </FirstWrap>
        <SecondWarp>
          <InnerWrap>
            <img src={wrap4} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
          <InnerWrap>
            <img src={wrap5} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
          <InnerWrap>
            <img src={wrap6} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
        </SecondWarp>
      </Main>
    );
}

export default Expore

const Main = styled.div`
    width: 80%;
    margin: auto;
   
`
const Text = styled.div`
  p {
    font-size: 30px;
    margin: 1em 0;
    font-family: monospace;
    color: #ff6600;
    font-weight: bold;
  }
`;
const FirstWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.5em;

  img {
    width: 80%;
    height: 400px;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    cursor: pointer;
    
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 33%;
  button {
    position: absolute;
    z-index: 1;
    bottom: 50px;
    left: 20%;
    padding: 10px 20px;
    border: none;
    outline: none;
    background: #ff6600;
    color:#fff;
    font-size: 18px;
    border-radius: 9px;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
`;
const SecondWarp = styled.div``;
const InnerWrap = styled.div``;
