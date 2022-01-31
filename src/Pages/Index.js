import React from "react";
import Option from "../components/option";
import Navbar from "../components/NavNew";
import Hero from "../components/Hero";
import Catigories from "../components/Catigories";
import Footer from "../components/Footer";
import Product from "../components/product";
import Learn from "../components/Learn";
import './main.css'
import Section from "components/Section";
import Social from "components/social";

const Index = () => {
  return (
    <div className="mainIndex">
      <Navbar />
      <Section />
      <Hero />
      <Catigories />
      <Product />
      <Option />
      <Learn />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
