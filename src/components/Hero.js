import React from "react";
import styled from "styled-components";
import hero from "../assets/paint.jpg"

const Hero = () => {
  return (
    <HeroContainer>
      <Text>Gift the Very Thing</Text>
      <Text2><p>Super-specific gifts for super-specific people. Shop now, relax later.</p></Text2>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 80%;
  height: 40vh;
  margin: 1em auto;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 30vh;
  }
  @media only screen and (max-width: 425px) {
    width: 90%
  }
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  height: 48px;
  font-family: 'Nunito', sans-serif;;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const Text2 = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  font-family: 'Nunito', sans-serif;;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
