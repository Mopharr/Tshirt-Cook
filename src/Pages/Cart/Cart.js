import React from "react";
import styled from "styled-components";
import { FiSearch, FiX } from "react-icons/fi";
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
            <div>
              <h2>Your shopping cart</h2>
              <div className="seperator">
                <div className="dark-line"></div>
              </div>
            </div>
            <span>
              <div className="cart-content">
                <div>
                  <div className="cart-content-header">
                    <div className="cart-content-header-wrapper">
                      <div className="left">
                        <div className="inner">
                          <span className="inner-title">Item</span>
                        </div>
                      </div>
                      <div className="right">
                        <div className="inner"></div>
                        <div className="inner" id="qty">
                          <span className="inner-title">Qty</span>
                        </div>
                        <div className="inner">
                          <span className="inner-title">Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-content-header">
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="">
                            <div className="">
                              <a href="#img">
                                <img
                                  src="https://ih1.redbubble.net/image.437353179.6883/ssrco,mhoodie,mens,101010:01c5ca27c6,back,square_product,x600-bg,f8f8f8.1u1.jpg"
                                  alt="hoddie"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="">
                          <div className="">
                            <h2>Hoodie (Pullover)</h2>
                            <p>L.Black, Black</p>
                          </div>
                          <div className="">
                            <div className="">
                                <div className="">
                                    <span>-</span>
                                    <input type='number' />
                                    <span>+</span>
                                </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="">
                                <div className="">
                                    <span>$48.56</span>
                                </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="">
                                <span>
                                    <FiX />
                                </span>
                            </div>
                          </div>
                          </div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
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

    h2 {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #303238;
      line-height: 1.2;
      padding: 16px;
    }

    .seperator {
      background-color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      position: relative;
      padding: 12px 0;

      .dark-line {
        background-color: #d6dadf;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 66%;
        height: 1px;
        margin: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
      }
    }

    .cart-content {
      transition: opacity 0.3s linear;

      .cart-content-header {
        max-width: 768px;
        width: 100%;
        margin: 0 auto;

        .cart-content-header-wrapper {
          display: flex;

          .left {
            display: flex;
            flex: 1;
            padding: 16px;
          }

          .right {
            display: flex;
            flex: 5;
            flex-direction: row;
            padding: 16px;
          }

          .inner {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            align-items: center;
            justify-content: flex-start;

            :nth-child(1) {
              flex: 2;
            }

            .inner-title {
              font-size: 0.875rem;
              text-transform: uppercase;
              color: #8c95a5;
              line-height: 1;
              font-weight: 600;
            }

            #qty {
              flex: 0 0 144px;
            }
          }
        }
      }
    }
  }
`;
