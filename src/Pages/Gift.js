import Footer from "components/Footer";
import NavNew from "components/NavNew";
import Section from "components/Section";
import React, { useContext } from "react";
import UserContext from "Context";
import con from "assets/gift.jpeg";
import ava from "assets/men.jpeg";
import ava1 from "assets/woman.jpeg";
import ava2 from "assets/kid.jpeg";
import ava3 from "assets/every.jpeg";
import ava7 from "assets/phone.png";
import { BsSearch } from "react-icons/bs";
import sub from "assets/sur.jpeg";
import "../style/gift.css";

const Gift = () => {
  // addToCart,
  const { product } = useContext(UserContext);

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
            <a href="/boy">
              <button>For Men</button>
            </a>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava1} alt="" />
            </div>
            <a href="/girlGift">
              <button>For Woman</button>
            </a>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava2} alt="" />
            </div>
            <a href="/kid">
              <button>For Kid</button>
            </a>
          </div>
          <div className="giftcontentCap">
            <div className="img-divv">
              <img src={ava3} alt="" />
            </div>
            <a href="">
              <button>Everybody </button>
            </a>
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
      <div className="giftGrid">
        <div className="word">
          <span>
            Order and get your gift at your own <br /> comfort zone{" "}
          </span>
          <p>Get yours Today </p>
          <a href="/">
            <button>Order </button>
          </a>
        </div>
        <div className="giftImg">
          <img src={sub} alt="" />
        </div>
      </div>
      <div className="giftPro">
        <h5>Gifts Product</h5>
        <div className="card-container">
          {product.map((item, index) => (
            <div className="shop-card">
              <div className="shop-card-image">
                <img src={item.image.url} alt="" />
              </div>
              <p>{item.name}</p>
              <div class="pricing">
                <p className="price">{item.price.formatted_with_symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gift;
