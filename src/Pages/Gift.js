import Footer from "components/Footer";
import NavNew from "components/NavNew";
import Section from "components/Section";
import React from "react";
import con from "assets/gift.jpeg";
import ava from "assets/men.jpeg";
import ava1 from "assets/woman.jpeg";
import ava2 from "assets/kid.jpeg";
import ava3 from "assets/every.jpeg";
import ava4 from "assets/flex.png";
import ava5 from "assets/jug.png";
import ava6 from "assets/kido.png";
import ava7 from "assets/phone.png";
import { BsSearch } from "react-icons/bs";
import "../style/gift.css";

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
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava4} alt="" />
            </div>
            <button>For Everybody </button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava5} alt="" />
            </div>
            <button>For Everybody </button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava6} alt="" />
            </div>
            <button>For Everybody </button>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava7} alt="" />
            </div>
            <button>For Everybody </button>
          </div>
        </div>
      </div>
      <div className="giftSearch">
        <h2>Looking for Something Specific</h2>

        <div className="inputSearch">
          <input type="text" placeholder="Find it here" />
          <BsSearch className="giftIcon" />
        </div>
      </div>
      <div className="package">
        <div className="packageCap">
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava7} alt="" />
            </div>
          </div>
          <a href="/">Full Val package </a>
        </div>
        <div className="packageCap">
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava7} alt="" />
            </div>
          </div>
          <a href="/">Family Package</a>
        </div>
        <div className="packageCap">
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava7} alt="" />
            </div>
          </div>
          <a href="/">Birthday Package</a>
        </div>
      </div>
      <div className="list">
        <h2>Plenty Reason to celebrate</h2>

        
      </div>
      <Footer />
    </div>
  );
};

export default Gift;
