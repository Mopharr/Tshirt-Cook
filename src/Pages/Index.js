import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Discover from "../components/Discover";
import ExploreMore from "../components/ExploreMore";
import Expore from "../components/Expore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Nav";
import Section from "../components/Section";

const Index = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Header />
      <About />
      <Expore />
      <ExploreMore />
      <Discover />
      <Contact />
      <Footer />
    </>
  );};

export default Index;
