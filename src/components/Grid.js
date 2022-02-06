import React from "react";
import styled from "styled-components";
import Hoo from "../assets/hoody.jpg";


const GridSection = () => {
  return (
    <GridContainer>
      <GridWrap>
        <GridItems>
          <GridInnerItems>
            <h4>Check out Hoodie</h4>
            <h3 >Black Sweatshit</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 50%</h4>
            <h3>Black Sweatshit</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 80%</h4>
            <h3>Black Sweatshit</h3>
            <a className="view-more" href="#shop">
              View more
            </a>
          </GridInnerItems>
        </GridItems>
      </GridWrap>
    </GridContainer>
  );
};

export default GridSection;

const GridContainer = styled.div`
  position: relative;
  padding: 15px 0 40px 0;
  margin: 0 auto;
  width: 66%;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    width: 920px;
  }
  @media only screen and (max-width: 979px) {
    width: 734px;
  }
  @media (max-width: 568px) {
    width: 95%;
  }
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  height: 700px;
  @media (max-width: 568px) {
    grid-template-columns: auto;
    height: 100%;
  }
`;

const GridItems = styled.div`
  background: url(${Hoo});

  background-size: cover;
  position: relative;
  z-index: 0;
  display: grid;
  align-items: center;
  padding: 3em;
  transition: all 0.3s ease;
  cursor:pointer;
  :nth-child(1) {
    grid-row: 1 / span 2;
    :hover{
      tranform:scale(1.1);
    }
  }
  a {
    display: inline-block;
    text-align: center;
    padding: 10px 30px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #fff;
    transition: 0.3s ease-in;
    border-radius: 25px;
    background-color: #ff6600;
    border-color: #fe79a2;
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
`;

const GridInnerItems = styled.div`
  color: #fff;
  font-size: 14px;
  .view-more {
  }
`;
