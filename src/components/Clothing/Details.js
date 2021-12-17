import React from 'react'
import styled from 'styled-components'
import wrap from 'assets/icin1.gif'
import wrap1 from "assets/icin2.gif";
import wrap2 from "assets/icinn1.gif";
import wrap3 from "assets/icinn2.gif";

const Details = () => {
    return (
      <Container>
        <Main>
          <Top>
            <div className="trust-signal">
              <div className="cap">
                <img src={wrap} alt="" />
                <p>Accept all kind of payment</p>
                <a href="/">Learn more</a>
              </div>
              <div className="cap">
                <img src={wrap2} alt="" />
                <p>Deliver Nation Wide</p>
                <a href="/">Learn more</a>
              </div>
              <div className="cap">
                <img src={wrap3} alt="" />
                <p>Order in Bulk</p>
                <a href="/">Learn more</a>
              </div>
              <div className="cap">
                <img src={wrap1} alt="" />
                <p>Fast Delivery</p>
                <a href="/">Learn more</a>
              </div>
            </div>
          </Top>
          <Bottom>
            <Title>Clothing</Title>
            <Sub>
              T-shirts, hoodies, tops, dresses, skirts, hats, and more in a huge
              range of styles, colors, and sizes (XS - plus size). Whether you
              wear women's clothing or men's clothing you’ll find the original
              artwork that’s perfect for you. Every purchase supports the
              independent artist who designed it, and that’s pretty cool.
            </Sub>
          </Bottom>
        </Main>
      </Container>
    );
}

export default Details
const Container = styled.div`
  background: #f5f5f5;
  padding: 2em 0;
`;
const Main = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 1024px){
      width: 97%
  }
  .trust-signal{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 2em 1em;
    justify-content: space-around;
    background: #fff;
  }
  .cap{
    margin: 1em;
  }

`;
const Top = styled.div`
img{
  width: 70px;
  justify-self: center;
}
  p{
    text-align: center;
    margin: 10px 0 !important;
    font-size: 20px;
  }
  a:hover{
    text-decoration: underline;
    color: #000;
  }
`;
const Bottom = styled.div`
    padding: 1em 0;
    width: 60%;
    margin: auto;
`;
const Title = styled.div`
      font-weight: bold;
      font-size: 25px;
`;
const Sub = styled.div`

`;
