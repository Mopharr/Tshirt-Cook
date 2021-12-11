import React, { useContext } from "react";
import Expore from "components/Expore";
import Feture from "components/Feture";
import Header from "components/Header";
import Navbar from "components/Nav";
import Section from "components/Section";
import UserContext from "Context";

const Index = () => {
  const state = useContext(UserContext);
  console.log(state.currentUser);
  return (
    <>
      <Navbar />
      <Section />
      <Header />
      <Expore />
      <Feture />
    </>
  );
};

export default Index;
