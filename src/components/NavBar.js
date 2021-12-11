import React from "react";
import { BsSearch } from "react-icons/bs";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LogoContainer>
          <h2 style={{ color: "#000" }}> OMD </h2>
          <h2 style={{ color: "#f59042" }}> Clothing</h2>
        </LogoContainer>
        <SearchContainer>
          <form>
            <div class="pseudo-search">
              <input
                type="text"
                placeholder="Search Designs and Products"
                autofocus
                required
              />
              <i class="fa fa-globe places"></i>
              <button class="fa fa-search" type="submit"></button>
            </div>
          </form>
        </SearchContainer>
        <ListContainer>
          <li className="nav-item">
            <a href="/sell">Sell your Art</a>
          </li>
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a href="/register">Register</a>
          </li>
          <li className="nav-item">
            <ShoppingCart />
          </li>
          <li className="nav-item">
            <ShoppingCart />
          </li>
        </ListContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  padding: 5px;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  form {
    display: inline-block;
    margin: 0 auto;
  }

  .pseudo-search {
    display: inline;
    border: 2px solid #ccc;
    border-radius: 100px;
    padding: 10px 15px;
    transition: background-color 0.5 ease-in-out;

    input {
      border: 0;
      background-color: transparent;
      width: 400px;

      &:focus {
        outline: none;
      }
    }

    button,
    i {
      border: none;
      background: none;
      cursor: pointer;
    }

    select {
      border: none;
    }
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  font-family: Inter;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  .nav-item a {
    color: #1e266d;
    font-size: 1.5rem;
    margin-right: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;
  }
`;
