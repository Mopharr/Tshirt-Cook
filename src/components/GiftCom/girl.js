import NavNew from 'components/NavNew';
import Section from 'components/Section';
import React from 'react'
import con from './Asset/old.jpeg'
import hod from './Asset/hod.jpeg'
import gir from './Asset/gir.jpeg'
import bag from './Asset/bag.jpeg'
import thr from './Asset/throw.jpeg'
import mug from './Asset/mug.jpeg'
import Product from 'components/product';
import Option from 'components/option';
import Social from 'components/social';
import Footer from 'components/Footer';
import "../../style/gift.css";

const girl = () => {
  return (
    <>
      <NavNew />
      <Section />
      <div className="girl">
        <div className="hero" style={{ height: "600px" }}>
          <img src={con} alt="" />
          <div className="upload">
            <h2>Gifts She’ll Really Love</h2>
            <h3>Why choose something boring for someone so magical?</h3>
            <button>Find her something Unique</button>
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
}

export default girl