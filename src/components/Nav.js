import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { IconButton, Badge } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShoppingCart } from "@material-ui/icons";
import UserContext from "Context";

const Nav = () => {
  const { state } = useContext(UserContext);
  const [openSearch, setOpenSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => setOpenNav(!openNav);
  const handleSearch = () => setOpenSearch(!openSearch);

  console.log("cart no " + state.cart.total_unique_items);
  return (
    <>
      <MainNav>
        <Logo>
          <a href="/">
            Tshirt<span>cook</span>
          </a>
        </Logo>
        <SearchBar>
          <input type="text" placeholder="Search designs" />
          <BsSearch style={{ fontSize: "19px" }} />
        </SearchBar>

        <Auth>
          <a href="/login">Login</a>
          <a href="/register">SignUp</a>
          <IconButton aria-label="Show cart item" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <a style={{ color: "#000" }} href="/cart">
                <ShoppingCart />
              </a>
            </Badge>
          </IconButton>
        </Auth>
      </MainNav>

      <MobileNav>
        <Hide>
          <span onClick={handleNav}>
            <GiHamburgerMenu
              style={{ fontSize: "25px", marginRight: "10px" }}
            />
          </span>
          <div className="search-bar">
            <div className="search-form search-form-popup">
              <a onClick={handleSearch} href="#search">
                <BsSearch style={{ fontSize: "20px" }} />
              </a>
              <div
                className={
                  openSearch
                    ? "search-form-wrap show-popup show"
                    : "search-form-wrap show-popup"
                }
              >
                <form
                  method="get"
                  data-button-text="Search"
                  class="searchform search-ajax"
                  role="search"
                >
                  <input
                    type="search"
                    className="searchinput"
                    autocomplete="off"
                    placeholder="Search and hit enter..."
                  />
                  <input
                    type="submit"
                    className="searchsubmit"
                    name="submit"
                    value="Search"
                  />
                </form>
                <div class="searchform-result"></div>
              </div>
            </div>
          </div>
        </Hide>
        <Logo>
          <a href="/">
            Tshirt<span>Cook</span>
          </a>
        </Logo>
        <Auth>
          <IconButton aria-label="Show cart item" color="inherit">
            <Badge
              badgeContent={state.cart.total_unique_items}
              color="secondary"
            >
              <a href="/cart">
                <ShoppingCart />
              </a>
            </Badge>
          </IconButton>
        </Auth>
        <div className={openNav ? "navbar-list active" : "navbar-list"}>
            <span onClick={handleNav}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              fontSize: '24px',
              cursor: 'pointer'
            }}>
            <FiX />
            </span>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Sign Up</a>
            </li>
          </ul>
        </div>
      </MobileNav>
    </>
  );
};

export default Nav;

const MainNav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  a {
    color: #ff0000;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
  span {
    font-size: 30px;
    color: #000;
    @media (max-width: 425px) {
      font-size: 20px;
    }
  }
`;
const SearchBar = styled.div`
  background: #f5f5f5;
  width: 50%;
  height: 50px;
  padding: 15px;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    font-size: 19px;
  }
`;
const Auth = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    font-family: "Nunito", sans-serif;
    margin: 0 8px;
  }
`;
const MobileNav = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0em 2em;
  }
  @media (max-width: 375px) {
    padding: 1em;
    padding: 0em 1em;
  }

  .navbar-list {
    display: none;
    ul {
      list-style: none;
    }
  }
  .navbar-list.active {
    @media (max-width: 768px) {
      display: block;
      position: absolute;
      width: 100vw;
      left: 0;
      top: 0;
      background: #fff;
      z-index: 10;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem;
      height: 200px;
    }

    .navbar-list-items {
      padding: 0.5rem;
    }
  }
`;
const Hide = styled.div`
  display: flex;
  align-items: center;

  .search-bar {
    display: inline-block;
    vertical-align: middle;
  }

  .search-bar .search-form {
    padding: 0px 15px;
    z-index: 1;
  }

  .search-bar .search-form .search-form-popup {
    position: relative;
  }

  .search-bar .search-form-wrap {
    color: #545454;
    text-align: left;
    line-height: normal;
  }

  .search-bar .search-form-wrap.show-popup {
    position: absolute;
    left: 5%;
    top: 15%;
    z-index: 1000;
    background: #fff;
    margin: 0;
    display: none;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 20%);
  }

  .search-bar .search-form-wrap.show-popup.show {
    animation: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s normal none 1
      search_pop;
  }

  .show {
    display: block !important;
  }

  .search-form-wrap.show-popup .searchform {
    position: relative;
    margin: 8px;
    padding: 0;
  }

  .search-form-wrap.show-popup .searchinput {
    width: 250px;
    height: 34px;
    border: 1px solid #eaeaea;
    margin: 0;
    background: #f5f5f5;
    font-size: 12px;
    outline: none;
  }

  .search-form-wrap.show-popup .searchsubmit {
    width: 100px;
    position: absolute;
    right: 0;
    top: 3%;
    font-size: 13px;
    padding: 8px 16px;
    background: #ff0000;
    font-weight: bold;
    border: none;
    color: #fff;
    outline: none;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0;
    border-radius: 2px;
    cursor: pointer;
  }

  .navbar-search .search-form-wrap.show-popup.show .searchform-result {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .searchform-result {
    background: #fff;
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    z-index: 1;
    -webkit-box-shadow: 0 5px 6px rgb(0 0 0 / 51%);
    -moz-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.51);
    box-shadow: 0 5px 6px rgb(0 0 0 / 51%);
    opacity: 0;
    filter: alpha(opacity=0);
  }
`;
