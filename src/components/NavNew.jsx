import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/nav.css";
import logo from "../assets/ava.png";
import styled from "styled-components";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { BiSearchAlt } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import UserContext from "Context";
import Sign from "./sign";

const NavNew = () => {
  const { cart, fetchProductsByQuery } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);
  const [modal, setModal] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="nav">
        <GiHamburgerMenu onClick={toggle} className="hamburger" />

        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>

        <div className="section">
          <a href="shop">
            <div className="sectionLink">
              <h2>Shop</h2>
              <p>Unique ideas</p>
            </div>
          </a>

          <a href="design">
            <div className="sectionLink">
              <h2>Create </h2>
              <p>Your own ideas</p>
            </div>
          </a>
        </div>

        <div className="third">
          <form
            onSubmit={() => {
              fetchProductsByQuery(search);
              pathname === "shop" ? console.log("route") : navigate("/shop");
            }}
          >
            <div className="search">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find what you want"
              />
              <BiSearchAlt className="icon" />
            </div>
          </form>
          <Auth>
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={cart.total_unique_items} color="secondary">
                <a href="/cart">
                  <ShoppingCart className="icon" />
                </a>
              </Badge>
            </IconButton>
          </Auth>
          <div onClick={openModal} className="profile">
            <BsQuestion />
          </div>
          <Sign modal={modal} setModal={setModal} />
        </div>
      </div>
      <div className={open ? "sidebar show" : "sidebar"}>
        <MdCancel
          onClick={() => {
            setOpen(!open);
          }}
          className="sideIcon"
        />

        <div className="search2">
          <input type="text" placeholder="Find what you want" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="section2">
          <div className="sectionLink active">
            <h2>Shop</h2>
            <p>Unique ideas</p>
          </div>
          <a href="design">
            <div className="sectionLink">
              <h2>Create </h2>
              <p>Your own ideas</p>
            </div>
          </a>

          {/* <div className="sectionLink">
            <h2>Bulk Orders</h2>
            <p>Events, Parties & Campaigns</p>
          </div> */}
        </div>
        <div className="cat">
          <ul>
            <li>
              <a href="mens" target="">
                Mens
              </a>
            </li>
            <li>
              <a href="mens" target="">
                Women
              </a>
            </li>
            <li>
              <a href="clothing" target="">
                Clothings & Accessories
              </a>
            </li>
            <li>
              <a href="mens" target="">
                Stationaries and Paper Print
              </a>
            </li>
            <li>
              <a href="mens" target="">
                Home & Living
              </a>
            </li>
            <li>
              <a href="gift" target="">
                Gift
              </a>
            </li>
            <li>
              <a href="mens" target="">
                Explore
              </a>
            </li>
            <li>
              <a href="login" target="">
                Login
              </a>
            </li>
            <li>
              <a href="register" target="">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavNew;

const Auth = styled.div``;
