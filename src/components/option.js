import React from "react";
import "../style/option.css";

const option = () => {
  return (
    <div className="optMain">
      <h2>
        Still can't find what you are looking for? <br/> Please try here.
      </h2>

      <div className="optContent">
        <div className="optContentCap">
          <div className="capMain">
            <h1>Shop</h1>
            <p>Browse Our Selection of Unique ideas</p>
          </div>

          <div className="capMain">
            <a href="/">Birthday Gift</a>
          </div>
          <div className="capMain">
            <a href="/">Gift for friends</a>
          </div>
          <div className="capMain">
            <a href="/">Celebration</a>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Create</h1>
            <p>Make your own ideas come to life!</p>
          </div>
          <div className="capMain">
            <a href="/">Family Anniversary</a>
          </div>
          <div className="capMain">
            <a href="/">Personal Wear</a>
          </div>
          <div className="capMain">
            <a href="/">Small Business</a>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Custom</h1>
            <p>Can’t create your own ideas? No problem. Lets do it for you.</p>
          </div>
          <div className="capMain">
            <a href="/">Couples & Love</a>
          </div>
          <div className="capMain">
            <a href="/">Party Gift Ideas</a>
          </div>
          <div className="capMain">
            <a href="/">Travels Idea</a>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Bulk Order</h1>
            <p>Order for your Events, Parties, Campaigns, Church etc</p>
          </div>
          <div className="capMain">
            <a href="/">Wedding Idea</a>
          </div>
          <div className="capMain">
            <a href="/">Baby wears</a>
          </div>
          <div className="capMain">
            <a href="/">Gifts for Family</a>
          </div>
        </div>
      </div>
      <div className="down">
        <h3>Get 20% Discount with your Order.</h3>
        <button>My Discount</button>
      </div>
    </div>
  );
};

export default option;
