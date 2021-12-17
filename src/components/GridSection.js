import React from "react";
import styled from "styled-components";
import GridImg from "../assets/hero.jpg";

const GridSection = () => {
  return (
    <GridContainer>
      <GridWrap>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 30%</h4>
            <h3>Buy Handmade Vase</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 50%</h4>
            <h3>Buy Handmade Vase</h3>
            <a href="#shop">View more</a>
          </GridInnerItems>
        </GridItems>
        <GridItems>
          <GridInnerItems>
            <h4>Flat Discount 80%</h4>
            <h3>Buy Handmade Vase</h3>
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
  width: 1200px;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    width: 920px;
  }

  @media only screen and (max-width: 979px) {
    width: 734px;
  }

  @media (max-width: 568px) {
    width: 100%;
  }
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (max-width: 568px) {
    grid-template-columns: auto;
  }
`;

const GridItems = styled.div`
  background: url(${GridImg});
  background-size: cover;
  position: relative;
  z-index: 0;
  display: grid;
  align-items: center;
  padding: 3em;
  transition: all 0.3s ease;

  :nth-child(1) {
    grid-row: 1 / span 2;
  }
`;

const GridInnerItems = styled.div`
  color: #fff;
  font-size: 14px;

  .view-more {

  }
`;
