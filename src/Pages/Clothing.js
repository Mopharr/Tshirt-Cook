import Nav from "../components/NavNew";
import Section from "components/Section";
import React from "react";
import styled from "styled-components";
import ClothExplore from "components/Clothing/ClothExplore";
import Product from "components/product";
import Learn from "components/Learn";
import Footer from "components/Footer";
import Grid from 'components/Grid'
import con from "assets/home.jpeg";
import "../components/Design/design.css";
import "../style/abt.css";

const Clothing = () => {
  return (
    <Main>
      <Nav />
      <Section />
      <div className="hero" style={{ height: "600px" }}>
        <img src={con} alt="" />
        <div className="upload">
          <h2>Refreshing Designs for Any Style</h2>
          <h3>Designs for everyone. Hundreds of trendy products.</h3>
          <button path="file">Find Yours</button>
        </div>
      </div>
      <Grid />
      <ClothExplore />
      <Product />
      <Learn />
      <div className="abt">
        <h1>Clothing</h1>
        <p>
          T-shirts, hoodies, tops, dresses, skirts, hats, and more in a huge
          range of styles, colors, and sizes (XS - plus size). Whether you wear
          women's clothing or men's clothing you’ll find the original artwork
          that’s perfect for you. Every purchase supports the independent artist
          who designed it, and that’s pretty cool.
        </p>
      </div>
      <Footer />
    </Main>
  );
};

export default Clothing;
const Main = styled.div``;
