import React from "react";
import "../style/catigory.css";
import ava from "../assets/tshirts.jpg";
import ava1 from "../assets/mug.jpeg";
import ava2 from "../assets/cap.jpg";
import ava3 from "../assets/sweat.jpg";
import ava4 from "../assets/dress.jpg";
import ava5 from "../assets/baby.jpg";
import ava6 from "../assets/sticker.jpg";
import ava7 from "../assets/pillow.jpg";
import ava8 from "../assets/wallframe.jpg";

const Catigories = () => {
  return (
    <div className="catMain">
      <h2>Shop by categories</h2>
      <div className="content">
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava} alt="" />
          </div>
          <button>T-shirt</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava1} alt="" />
          </div>
          <button>Mug</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava2} alt="" />
          </div>
          <button>Cap</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava3} alt="" />
          </div>
          <button>Sweat Shirt</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava4} alt="" />
          </div>
          <button>Dress</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava5} alt="" />
          </div>
          <button>Baby-Wears</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava6} alt="" />
          </div>
          <button>Stickers</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava7} alt="" />
          </div>
          <button>Pillow</button>
        </div>
        <div className="contentCap">
          <div className="img-divv">
            <img src={ava8} alt="" />
          </div>
          <button>Wall Frame</button>
        </div>
      </div>
    </div>
  );
};

export default Catigories;
