import Nav from "../components/NavNew";
import Section from "components/Section";
import ClothHero from "components/Clothing/ClothHero";
import React from "react";
import styled from "styled-components";
import ClothExplore from "components/Clothing/ClothExplore";
import Product from "components/product";
import Learn from "components/Learn";
import Footer from "components/Footer";
import CltAb from "components/Clothing/CltAb";
// import UserContext from "Context"

const Clothing = () => {
  return (
    <Main>
      <Nav />
      <Section />
      <ClothHero />
      <ClothExplore />
      <Product />
      <Learn />
      <CltAb />
      <Footer />
    </Main>
  );
};

export default Clothing;
const Main = styled.div``;
