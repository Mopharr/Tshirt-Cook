import Nav from "components/Nav";
import Section from "components/Section";
import ClothHero from "components/Clothing/ClothHero";
import React from "react";
import styled from "styled-components";
import ClothExplore from "components/Clothing/ClothExplore";
import Shop from "components/Clothing/Shop";
import Footer from "components/Footer";
// import UserContext from "Context"

const Clothing = () => {
  return (
    <Main>
      <Nav />
      <Section />
      <ClothHero />
      <ClothExplore />
      <Shop />
      <Footer />
    </Main>
  );
};

export default Clothing;
const Main = styled.div``;
