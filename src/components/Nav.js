import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
const Nav = () => {
  return (
    <MainNav>
      <Logo>
        <label>
          OMD<span>Clothing</span>
        </label>
      </Logo>
      <SearchBar>
        <input type="text" placeholder="Search designs" />
        <BsSearch style={{ fontSize: "19px" }} />
      </SearchBar>

      <Auth>
        <a href="/">Login</a>
        <a href="/">SignUp</a>
        <IconButton aria-label="Show cart item" color="inherit">
          <Badge badgeContent={2} color = 'secondary'>
            <a href="/">
              <ShoppingCart />
            </a>
          </Badge>
        </IconButton>
      </Auth>
    </MainNav>
  );
};

export default Nav;

const MainNav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  label {
    color: #ff0000;
  }
  span {
    font-size: 30px;
    color: #000;
  }
`;
const SearchBar = styled.div`
  background: #f5f5f5;
  width: 50%;
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
    font-family: monospace;
    margin: 0 8px;
  }
`;
