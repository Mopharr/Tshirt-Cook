import React from "react";
import styled from "styled-components";
import hero from "assets/paint.jpg"

const Hero = () => {
  return (
    <HeroContainer>
      <Text>Gift the Very Thing</Text>
      <Text2>Super-specific gifts for super-specific people. Shop now, relax later.</Text2>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  height: 40vh;
  box-sizing: border-box;
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
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  width: 202px;
  height: 48px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const Text2 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  width: 202px;
  height: 48px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: -0.01em;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
