<<<<<<< HEAD
import Nav from "components/Nav";
import Section from "components/Section";
import ClothHero from "components/Clothing/ClothHero";
import React from "react";
import styled from "styled-components";
import ClothExplore from "components/Clothing/ClothExplore";
import Shop from "components/Clothing/Shop";
import Details from "components/Clothing/Details";
import Footer from "components/Footer";

const Clothing = () => {
  return (
    <Main>
      <Nav />
      <Section />
      <ClothHero />
      <ClothExplore />
      <Shop />
      <Details />
      <Footer />
    </Main>
  );
};
=======
import Nav from 'components/Nav'
import React from 'react'
import styled from 'styled-components'
import ClothExplore from 'components/Clothing/ClothExplore';
import Details from 'components/Clothing/Details';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Discover from 'components/Discover';

const Clothing = () => {
    return (
        <Main>
            <Nav />
            <Hero />
            <ClothExplore />
            <Discover />
            <Details />
            <Footer />
        </Main>
    )
}
>>>>>>> e7e6da0c7ca12ebd9a40f04b14c33b74b199115c

export default Clothing;
const Main = styled.div``;
