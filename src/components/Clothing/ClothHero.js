import React from 'react'
import styled from 'styled-components';
import hero from "../../assets/hero.jpg";


const Header = () => {
    return (
      <Main>
        <Left>
          <Title>Clothing</Title>
          <Sub>
            Original clothing for original people. Tees, tops, dresses, hats,
            and more with designs for pretty much any interest.
          </Sub>
          <a href="/">Shop Clothing</a>
        </Left>
        <Right>
          <img src = {hero} alt = '' />
        </Right>
      </Main>
    );
}

export default Header
const Main = styled.div`
    width: 80%;
    height: 340px;
    margin: 2em auto 1em;
    display: flex;
    align-items: center;
    @media (max-width: 1024px){
      width: 97%;
    }    
`
const Left = styled.div`
  width: 50%;
  background: #c09a76;
  height: 100%;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  a{
    text-decoration: none;
    color: #000;
    font-family: bold;

  }
  a:hover{
   text-decoration: underline;
  }
  @media (max-width: 1024px){
    display: none;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: .5em;
`
const Sub = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.5em;
`;
const Right = styled.div`
  width: 50%;
  height: 340px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0px 15px 15px 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    img {
      border-radius: 15px;
    }
  }
`;
