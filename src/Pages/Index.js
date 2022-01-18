import React from "react";
import Option from "../components/option";
import Navbar from "../components/NavNew";
import Section from "../components/Section"
import Hero from "../components/Hero";
import Catigories from "../components/Catigories";
import Footer from "../components/Footer";
import Product from "../components/product";
import Learn from "../components/Learn";

const Index = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Hero />
      <Catigories />
      <Product />
      <Option />
      <Learn />
      <Footer />
    </>
  );
};

export default Index;
