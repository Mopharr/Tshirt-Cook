import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  return (
    <CartContainer>
      <header>
        <span>
          <BsCart3 />
        </span>
      </header>
      <nav>
        <div className="logo">
          <a href="#brand" className="nav-brand">
            OMDClothing
          </a>
        </div>
        <form>
          <div className="search-box">
            <input
              type="search"
              className="search"
              placeholder="Search for products or designs"
            />
          </div>
          <button className="search-icons">
            <FiSearch />
          </button>
        </form>
        <div className="cart-icons">
          <span>
            <BsCart3 />
          </span>
        </div>
      </nav>
      <CartSection>
        <div className="cart-wrap">
          <div className="cart-placeholder">
            <h2>Your shopping cart</h2>
          </div>
        </div>
      </CartSection>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    height: 60px;
    position: relative;
    background-color: rgba(233, 233, 240, 0.6);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2rem;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    max-width: 940px;
    margin: 0 auto;
    padding: 14px 5px;

    .logo {
      height: 55px;
      line-height: 55px;
      vertical-align: middle;
      cursor: pointer;

      a {
        text-decoration: none;
        padding-right: 18px;
        display: block;
        height: 55px;
        overflow: hidden;
        color: #000;
      }
    }

    form {
      display: inline-flex;
      font-size: 0;
      vertical-align: middle;
      width: 100%;

      .search-box {
        display: inline-block;
        font-size: 16px;
        vertical-align: middle;
        width: calc(100% - 64px);

        input {
          background: #f9f9fb;
          border: 0;
          border-radius: 0;
          border-bottom-left-radius: 8px;
          border-top-left-radius: 8px;
          box-sizing: border-box;
          color: #40354e;
          display: block;
          font-family: inherit;
          font-size: 16px;
          font-weight: 500;
          line-height: 18px;
          outline: none;
          padding: 16px 0 16px 16px;
          width: 100%;
        }
      }

      button {
        background-color: #f9f9fb;
        border: 0;
        border-radius: 0;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        cursor: pointer;
        display: inline-block;
        padding: 0;
        position: relative;
        vertical-align: middle;
        width: 64px;
      }
    }
  }
`;

const CartSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;

  .cart-wrap {
    min-height: 70vh;
  }

  .cart-placeholder {
    display: flex;
    flex-direction: column;
  }
`;
