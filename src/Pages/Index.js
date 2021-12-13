import React, { useContext } from "react";
import Expore from "../components/Expore";
import Contact from "../components/Contact";
import Navbar from "../components/Nav";
import Section from "../components/Section";
import UserContext from "../Context";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import ExploreMore from "../components/ExploreMore";
import Discover from "../components/Discover";

const Index = () => {
  const state = useContext(UserContext);
  console.log(state.currentUser);
  return (
    <>
      <Navbar />
      <Section />
      <Hero />
      <About />
      <Expore />
      <ExploreMore />
      <Discover />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
