import React, { useContext } from "react";
import "../style/nav.css";
import logo from "../assets/ava.png";
import styled from "styled-components";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { BiSearchAlt } from "react-icons/bi";
import { BsQuestion } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import UserContext from "Context";

const NavNew = () => {
  const { cart } = useContext(UserContext);
  return (
    <>
      <div className="nav">
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div className="section">
          <div className="sectionLink">
            <h2>Shop</h2>
            <p>Unique ideas</p>
          </div>
          <div className="sectionLink active">
            <h2>Create </h2>
            <p>Your own ideas</p>
          </div>
          <div className="sectionLink">
            <h2>Bulk Orders</h2>
            <p>Events, Parties & Campaigns</p>
          </div>
        </div>
        <div className="third">
          <GiHamburgerMenu className="hamburger" />
          <div className="search">
            <input type="text" placeholder="Find what you want" />
            <BiSearchAlt className="icon" />
          </div>
          <Auth>
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={cart.total_unique_items} color="secondary">
                <a href="/cart">
                  <ShoppingCart className="icon" />
                </a>
              </Badge>
            </IconButton>
          </Auth>
          <div className="profile">
            <BsQuestion />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <MdCancel />

        <div className="search">
          <input type="text" placeholder="Find what you want" />
          <BiSearchAlt className="icon" />
        </div>
      </div>
    </>
  );
};

export default NavNew;

const Auth = styled.div``;
