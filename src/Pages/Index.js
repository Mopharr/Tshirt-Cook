import React from "react";
import Option from "../components/option";
import Navbar from "../components/NavNew";
import Hero from "../components/Hero";
import Catigories from "../components/Catigories";
import Footer from "../components/Footer";
import Product from "../components/product";
import Learn from "../components/Learn";
import './main.css'
import SedTab from "components/SedTab";

const Index = () => {
  return (
    <div className="mainIndex">
      <Navbar />
      <Hero />
      <SedTab/>
      <Catigories />
      <Product />
      <Option />
      <Learn />
      <Footer />
    </div>
  );
};

export default Index;
