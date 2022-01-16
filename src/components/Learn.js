import React from 'react'
import '../style/learn.css'
import ava1 from 'assets/hava6.png'
import ava2 from 'assets/hava5.png'
import ava3 from "assets/hava4.png";
import ava4 from "assets/hava3.png";
import ava5 from "assets/hava2.png";
import ava6 from "assets/hava1.png";

const Learn = () => {
    return (
      <div className="mainL">
        <div className="mainLcap">
          <p>Nationwide Shipping</p>
          <img src={ava1} alt="" />
          <span>We deliever to all over the country</span>
          <h5>check the delivery guide</h5>
        </div>
        <div className="mainLcap">
          <p>Secure Payments</p>
          <img src={ava2} alt="" />
        </div>
        <div className="mainLcap">
          <p>Free Returns</p>
          <img src={ava3} alt="" />
          <span>Exchange & replacement guarantee with free delivery.</span>
          <h5>Learn more</h5>
        </div>
        <div className="mainLcap">
          <p>Top Quality Prints</p>
          <img src={ava4} alt="" />
        </div>
        <div className="mainLcap">
          <p>Best Prices</p>
          <img src={ava5} alt="" />
        </div>
        <div className="mainLcap">
          <p>24/7 Dedicated Support</p>
          <img src={ava6} alt="" />
          <h5>Contact us</h5>
        </div>
      </div>
    );
}

export default Learn
