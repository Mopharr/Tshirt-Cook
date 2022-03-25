import React from "react";
import con from "./Asset/ola.jpeg";
import NavNew from "components/NavNew";
import Product from "components/product";
import Section from "components/Section";
import Option from "components/option";
import Social from "components/social";
import Footer from "components/Footer";
import hod from "./Asset/hod.jpeg";
import gir from "./Asset/gir.jpeg";
import bag from "./Asset/bag.jpeg";
import thr from "./Asset/throw.jpeg";
import mug from "./Asset/mug.jpeg";
import "../../style/gift.css";

const boy = () => {
  return (
    <>
      <NavNew />
      <Section />
      <div className="girl">
        <div className="hero" style={{ height: "600px" }}>
          <img src={con} alt="" />
          <div className="upload">
            <h2>Gifts He’ll Actually Love</h2>
            <h3>Same old, same old? Not this year!</h3>
            <button>Find His Unique Gift</button>
          </div>
        </div>

        <div className="features">
          <h2>What does she like</h2>
          <div className="group-items">
            <a className="groCap">
              <img src={hod} alt="" className='img' />
              <p>Hoodie</p>
            </a>
            <a className="groCap">
              <img src={mug} alt=""  className='img' />
              <p>Mug</p>
            </a>
            <a className="groCap">
              <img src={bag} alt=""  className='img' />
              <p>Bag</p>
            </a>
            <a className="groCap">
              <img src={thr} alt=""  className='img' />
              <p>Throw Pillow</p>
            </a>
            <a className="groCap">
              <img src={gir} alt=""  className='img' />
            </a>
          </div>
        </div>

        <Product />
        <Option />
        <Social />
        <Footer />
      </div>
    </>
  );
};

export default boy;
