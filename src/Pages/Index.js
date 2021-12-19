import React, { useContext } from "react";
import Expore from "../components/Expore";
import Contact from "../components/Contact";
import Navbar from "../components/Nav";
import UserContext from "../Context";
import Hero from "../components/Hero";
import GridSection from "components/GridSection";
import About from "../components/About";
import Footer from "../components/Footer";
import Discover from "../components/Discover";

const Index = () => {
  const {
    state,
    addToCart,
    product,
  } = useContext(UserContext);
  console.log(state.currentUser);
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
