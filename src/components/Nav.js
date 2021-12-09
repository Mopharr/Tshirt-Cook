import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Nav = () => {
  return (
    <MainNav>
      <Logo>
        <label>Logo</label>
      </Logo>
      <SearchBar>
        <input type="text" placeholder="Search designs" />
        <BsSearch style={{ fontSize: "19px" }} />
      </SearchBar>

      <Auth>
        <p>Login</p>
        <p>SignUp</p>
        <IconButton aria-label="Show cart item" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
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
  font-size: 23px;
  font-weight: bold;
  font-family: monospace;
`;
const SearchBar = styled.div`
  background: #f5f5f5;
    width: 50%;
    padding: 15px;
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    input{
      border: none;
      outline: none;
      background: transparent;
      padding: 10px;
      font-size: 19px;;
    }

`;
const Auth = styled.div`
    display: flex;
    align-items: center;
    p{
      font-size: 16px;
      font-weight: bold;
      font-family: monospace;
      margin: 0 8px;
    }
`;
