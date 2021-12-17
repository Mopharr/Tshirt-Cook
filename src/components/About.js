import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal";
import Design from '../assets/icon3.gif'
import Order from "../assets/icon4.gif";
import location from "../assets/icon1.gif";
import payment from "../assets/icon6.gif";
import deliver from 'assets/icon2.gif'


const About = () => {
    return (
      <Main>
        <Title>
          <Fade buttom>
            <h5>What We Do</h5>
          </Fade>
        </Title>
        <Sub>
          <Fade buttom>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget ornare est. Praesent id hendrerit risus. Aliquam nulla
              lectus, bibendum sed vulputate sit amet, suscipit sed est. Etiam
              vulputate urna lacinia quam sodales varius. Nullam et mauris eget
              turpis lacinia viverra eu ut metus. Sed maximus elit eu nunc
              efficitur venenatis. Sed vehicula turpis non neque laoreet, eget
              ultricies leo congue. Sed eget ante sit amet metus dictum cursus.
            </p>
          </Fade>
        </Sub>
        <Title>
          <Fade buttom>
            <h5>How We Work</h5>
          </Fade>
        </Title>
        <Subt>
          <Fade buttom>
            <div>
              <img src={Design} alt="" style={{ background: "transparent" }} />
              <p>Design</p>
            </div>
            <div>
              <img src={Order} alt="" style={{ background: "transparent" }} />
              <p>Order</p>
            </div>
            <div>
              <img src={location} alt="" style={{ background: "transparent" }} />
              <p>Location</p>
            </div>
            <div>
              <img src={payment} alt="" style={{ background: "transparent" }} />
              <p>Payment</p>
            </div>
            <div>
              <img src={deliver} alt="" style={{ background: "transparent" }} />
              <p>Deliver</p>
            </div>
          </Fade>
        </Subt>
      </Main>
    );
}

export default About

const Main = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 3em 0;
`
const Title = styled.div`
  font-size: 40px;
  margin: 1em 0;
  font-family: 'Nunito', sans-serif;;
  font-weight: bold;
`;
const Sub = styled.div`
  font-size: 20px;
  width: 40%;
  margin: auto;
  font-family: "Nunito", sans-serif;
  @media only screen and (max-width: 768px) {
    width: 70%;
    padding: 0 10px;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    padding: 0 10px;
  }
`;
const Subt = styled.div`
  margin: auto;
  width: 80%;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  img{
    width: 50px;
  }
`