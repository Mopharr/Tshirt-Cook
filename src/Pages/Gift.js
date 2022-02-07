import Footer from "components/Footer";
import NavNew from "components/NavNew";
import Section from "components/Section";
import React from "react";
import con from "assets/gift.jpeg";
import ava from 'assets/men.jpeg'
import ava1 from "assets/woman.jpeg";
import ava2 from "assets/kid.jpeg";
import ava3 from "assets/every.jpeg";
import '../style/gift.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import logo from 'assets/ava.png'

const Gift = () => {
  return (
    <div>
      <NavNew />
      <Section />
      <div className="hero">
        <img src={con} alt="" />
        <div className="upload">
          <h2 style={{ fontSize: "2.5em" }}>Gifts with a Pinch of Magic</h2>
          <button path="file">Find Their Gift</button>
        </div>
      </div>
      <div className="giftCat">
        <h2>Unique Gift for Everyone</h2>
        <div className="giftCap">
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava} alt="" />
            </div>
            <button>For Men</button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava1} alt="" />
            </div>
            <button>For Woman</button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava2} alt="" />
            </div>
            <button>For Kid/ Babies</button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava3} alt="" />
            </div>
            <button>For Everybody </button>
          </div>
        </div>
      </div>
      <div className="giftSec">
        <div className="giftText">
          <h4>Grab a Gift Card</h4>
          <ul>
            <li>Let them find their thing from millions of products</li>
            <li>Available in any amount</li>
            <li>Digitally delivered instantly</li>
          </ul>
          <button>Buy a gift <MdKeyboardArrowRight style={{fontSize:'20px'}}/></button>
        </div>
        <div className="giftLogo">
          <div className="giftInner">
            <img src={logo} alt="" />
            <span>TshirtCook</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gift;
