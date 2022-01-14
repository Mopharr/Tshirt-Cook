import React from "react";
import "../style/option.css";

const option = () => {
  return (
    <div className="optMain">
      <h2>
        Still cant nd what you are looking for? <br /> Please try here.
      </h2>

      <div className="optContent">
        <div className="optContentCap">
          <div className="capMain">
            <h1>Shop</h1>
            <p>Browse Our Selection of Unique ideas</p>
          </div>
          <div className="capMain">
            <span>Birthday Gift</span>
          </div>
          <div className="capMain">
            <span>Gift for friends</span>
          </div>
          <div className="capMain">
            <span>Celebration</span>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Create</h1>
            <p>Make your own ideas come to life!</p>
          </div>
          <div className="capMain">
            <span>Family Anniversary</span>
          </div>
          <div className="capMain">
            <span>Personal Wear</span>
          </div>
          <div className="capMain">
            <span>Small Business</span>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Custom</h1>
            <p>Can’t create your own ideas? No problem. Lets do it for you.</p>
          </div>
          <div className="capMain">
            <span>Couples & Love</span>
          </div>
          <div className="capMain">
            <span>Party Gift Ideas</span>
          </div>
          <div className="capMain">
            <span>Travels Idea</span>
          </div>
        </div>
        <div className="optContentCap">
          <div className="capMain">
            <h1>Bulk Order</h1>
            <p>Order for your Events, Parties, Campaigns, Church etc</p>
          </div>
          <div className="capMain">
            <span>Wedding Idea</span>
          </div>
          <div className="capMain">
            <span>Baby wears</span>
          </div>
          <div className="capMain">
            <span>Gifts for Family</span>
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
