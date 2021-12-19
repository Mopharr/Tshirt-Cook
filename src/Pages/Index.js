import React, {useContext} from "react";
import Expore from "../components/Expore";
import Contact from "../components/Contact";
import Navbar from "../components/Nav";
import Hero from "../components/Hero";
import GridSection from "components/GridSection";
import About from "../components/About";
import Footer from "../components/Footer";
import Discover from "../components/Discover";
import UserContext from "Context"

const Index = () => {
  const { state, setState } = useContext(UserContext)
  console.log("test " + state.test);
  console.log("cart " + state.cart);
  console.log("loading " + state.loading);
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
