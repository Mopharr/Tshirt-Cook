import React from "react";
import Expore from "../components/Expore";
import Contact from "../components/Contact";
import Navbar from "../components/Nav";
import Hero from "../components/Hero";
import GridSection from "components/GridSection";
import About from "../components/About";
import Footer from "../components/Footer";
import Discover from "../components/Discover";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GridSection />
      <About />
      <Expore />
      <Discover />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
