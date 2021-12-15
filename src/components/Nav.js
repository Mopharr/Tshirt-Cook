import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IconButton, Badge } from "@material-ui/core";
import { GiHamburgerMenu } from 'react-icons/gi'
import { ShoppingCart } from "@material-ui/icons";
const Nav = () => {
  return (
    <>
      <MainNav>
        <Logo>
          <a href="/">
            Tshirt<span>Cooking</span>
          </a>
        </Logo>
        <SearchBar>
          <input type="text" placeholder="Search designs" />
          <BsSearch style={{ fontSize: "19px" }} />
        </SearchBar>

        <Auth>
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
          <IconButton aria-label="Show cart item" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <a style={{color: '#000'}} href="/cart">
                <ShoppingCart />
              </a>
            </Badge>
          </IconButton>
        </Auth>
      </MainNav>

      <MobileNav>
        <Hide>
          <GiHamburgerMenu style={{ fontSize: "25px", marginRight: "10px" }} />
          <BsSearch style={{ fontSize: "20px" }} />
        </Hide>
        <Logo>
          <a href="/">
            Tshirt<span>Cooking</span>
          </a>
        </Logo>
        <IconButton aria-label="Show cart item" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <a href="/cart">
              <ShoppingCart />
            </a>
          </Badge>
        </IconButton>
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
  @media (max-width: 1024px){
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
    font-family: 'Nunito', sans-serif;;
    margin: 0 8px;
  }
`;
const MobileNav = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
  }
  @media (max-width: 375px) {
    padding: 1em; 
  }
`;
const Hide = styled.div`
  display: flex;
  align-items: center;  
`
