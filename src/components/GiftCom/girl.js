import NavNew from 'components/NavNew';
import Section from 'components/Section';
import React from 'react'
import con from './Asset/old.jpeg'
// import hod from './Asset/hod.jpeg'
// import gir from './Asset/gir.jpeg'
// import bag from './Asset/bag.jpeg'
// import thr from './Asset/throw.jpeg'
// import mug from './Asset/mug.jpeg'
import Product from 'components/product';
import Option from 'components/option';
import Social from 'components/social';
import Footer from 'components/Footer';

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
          <div className="picc">
            <div className="group">
              <a className="groCap">
                <img src={hod} alt="" />
                <p>Hoodie</p>
              </a>
              <a className="groCap">
                <img src={mug} alt="" />
                <p>Mug</p>
              </a>
              <a className="groCap">
                <img src={bag} alt="" />
                <p>Bag</p>
              </a>
              <a className="groCap">
                <img src={thr} alt="" />
                <p>Throw Pillow</p>
              </a>
            </div>
            <div className="single">
              <img src={gir} alt="" />
            </div>
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