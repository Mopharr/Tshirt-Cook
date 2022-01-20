/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import UserContext from "Context";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cart = () => {
  const { state, updateCartQty, removeCart, cart } = useContext(UserContext);
  return (
    <CartContainer>
      <Nav />
      <CartSection>
        <div className="cart-wrap">
          <div className="cart-placeholder">
            <div>
              <h2 className="placeholder-title">Your shopping cart</h2>
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
                  {state.loading ? (
                    <Skeleton />
                  ) : (
                    cart.line_items.map((item) => (
                      <div className="cart-content-header">
                        <div className="cart-content-header-wrapper--1">
                          <div className="cart-item-overlay">
                            <div className="cart-item-image-box">
                              <div className="cart-item-image-box-overlay">
                                <a href="#img">
                                  <img
                                    src={
                                      state.loading ? (
                                        <Skeleton />
                                      ) : (
                                        item.image.url
                                      )
                                    }
                                    alt="hoddie"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="cart-item-content-box">
                              <div className="cart-item-content-box-desc">
                                <h2 className="title">
                                  {state.loading ? <Skeleton /> : item.name}
                                </h2>
                                <p>L.Black, Black</p>
                              </div>
                              <div className="cart-item-content-count">
                                <div className="cart-item-content-count-overlay">
                                  <div className="cart-item-content-count-inner">
                                    <span
                                      onClick={() =>
                                        updateCartQty(
                                          item.id,
                                          item.quantity - 1
                                        )
                                      }
                                    >
                                      -
                                    </span>
                                    <span>
                                      {state.loading ? (
                                        <Skeleton />
                                      ) : (
                                        item.quantity
                                      )}
                                    </span>
                                    <span
                                      onClick={() => {
                                        updateCartQty(
                                          item.id,
                                          item.quantity + 1
                                        );
                                      }}
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="price-content">
                                <div className="price-content-inner">
                                  <span>
                                    {state.loading ? (
                                      <Skeleton />
                                    ) : (
                                      item.price.formatted_with_code
                                    )}
                                  </span>
                                </div>
                              </div>
                              <div className="remove-cart">
                                <div className="remove-cart-inner">
                                  <span
                                    className="remove-icon"
                                    onClick={() => {
                                      removeCart(item.id);
                                    }}
                                  >
                                    <FiX />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className=""></div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </span>
            <div className="seperator">
              <div className="dark-line"></div>
            </div>
          </div>
          <div className="carts">
            <ul className="cart-lists">
              <li>
                <span className="prop">{`${
                  state.loading ? <Skeleton /> : cart.total_unique_items
                } items`}</span>
                <span className="val">$48.56</span>
              </li>
              <li>
                <span className="prop">shipping</span>
                <span className="val">$36.01</span>
              </li>
              <li>
                <span className="prop">subtotal</span>
                <span className="val">{`${
                  state.loading ? (
                    <Skeleton />
                  ) : (
                    cart.subtotal.formatted_with_symbol
                  )
                }`}</span>
              </li>
            </ul>
          </div>
          <div className="order">
            <div className="order-header">
              <div className="order-heading">
                <h2>When would you like your order by?</h2>
              </div>
            </div>
            <div className="order-contents">
              <div className="order-contents-inner">
                <div className="ship-box">
                  <a href="#ship" className="='ship-link">
                    Shipping to Nigeria
                  </a>
                </div>
                <div className="deliveries">
                  <span className="deliveries-text">
                    Delivers between <br />
                    31 December - 4 January
                  </span>
                </div>
                <div className="deliveries">
                  <Link to="/checkout" className="checkout-link">
                    <span className="checkout-link-text">{`Checkout ${
                      state.loading ? (
                        <Skeleton />
                      ) : (
                        cart.subtotal.formatted_with_symbol
                      )
                    }`}</span>
                  </Link>
                  <span className="deliveries-text">
                    includes standard shipping
                  </span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="payment">
            <div className="payment-headline">payment method</div>
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
  font-family: "Nunito", sans-serif;

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
      margin-right: 10px;

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
          font-family: "Nunito", sans-serif;
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
        font-size: 1.5rem;
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

    .placeholder-title {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #303238;
      line-height: 1.2;
      padding: 16px;
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

        .cart-content-header-wrapper--1 {
          position: relative;
          overflow: hidden;

          .cart-item-overlay {
            display: flex;
            align-items: center;
            background-color: white;
            position: relative;
            z-index: 1;

            .cart-item-image-box {
              display: flex;
              flex: 1;
              padding: 16px;

              .cart-item-image-box-overlay {
                display: flex;
                justify-content: flex-start;
                flex-grow: 1;
                flex-direction: column;

                a {
                  transition: opacity 200ms ease-in-out;
                  user-select: none;

                  img {
                    width: 117px;
                    height: 117px;
                  }
                }
              }
            }

            .cart-item-content-box {
              display: flex;
              flex: 5;
              position: relative;
              padding: 16px;

              .cart-item-content-box-desc {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-basis: 0;
                flex: 2;
                align-items: flex-start;
                justify-content: flex-start;

                .title {
                  font-size: 1rem;
                  color: #8c95a5;
                  font-weight: normal;
                  line-height: 1.4;
                }

                p {
                  font-size: 1rem;
                  color: #8c95a5;
                  font-weight: normal;
                  line-height: 1.4;
                  padding-top: 8px;
                }
              }

              .cart-item-content-count {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-basis: 0;
                flex: 0 0 144px;
                align-items: flex-start;
                justify-content: flex-start;

                .cart-item-content-count-overlay {
                  min-height: 32px;
                  display: flex;
                  align-items: flex-start;

                  font-size: 1rem;
                  text-transform: uppercase;
                  color: #303238;
                  font-weight: normal;
                  line-height: 1.4;

                  .cart-item-content-count-inner {
                    display: flex;
                    box-sizing: border-box;

                    span {
                      width: 48px;
                      box-sizing: border-box;
                      display: inline-block;
                      font-size: 24px;
                      text-decoration: none;
                      height: 32px;
                      text-align: center;
                      line-height: 24px;
                      color: #8c95a5;
                      font-weight: 500;
                      cursor: pointer;
                    }

                    input {
                      box-sizing: border-box;
                      width: 48px;
                      height: 32px;
                      text-align: center;
                      border: 1px solid #d6dadf;
                      border-top: 0;
                      border-bottom: 0;
                      border-radius: 0;
                      cursor: text;
                      background: transparent;
                    }
                  }
                }
              }
              .price-content {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-basis: 0;
                align-items: flex-start;
                justify-content: flex-start;

                .price-content-inner {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
              }

              .remove-cart {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                flex-basis: 0;
                flex: 0 0 20px;
                align-items: flex-start;
                justify-content: flex-start;

                .remove-cart-inner {
                  font-size: 1rem;
                  text-transform: uppercase;
                  color: #303238;
                  font-weight: normal;
                  line-height: 1.4;

                  .remove-icon {
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    align-items: flex-start;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .carts {
    padding: 0 12px;
  }
  .cart-lists {
    margin: 0 auto;
    max-width: 504px;
    padding: 0 12px;
    margin-top: 32px;
    list-style-type: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      text-transform: uppercase;
    }
  }
  .payment {
    margin-bottom: 20px;

    .payment-headline {
      text-transform: capitalize;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #303238;
      line-height: 1.2;
    }
  }
  .shipping {
    .shipping-headline {
      text-transform: capitalize;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #303238;
      line-height: 1.2;
    }
    .trust-signals {
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 32px auto 16px;
      max-width: 1140px;

      @media (max-width: 568px) {
        justify-content: center;
      }

      .trust-signal {
        text-align: center;
        width: 232px;
      }
      .trust-signal-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          max-height: 72px;
          margin-bottom: 8px;
        }
      }
      .trust-signal-heading {
        color: #40354e;
        font-size: 1rem;
        font-family: "Nunito", sans-serif;
        font-weight: 800;
        margin: 8px 0;
      }
      .trust-signal-text {
        font-size: 1rem;
        margin: 8px 0;
        line-height: 24px;
        font-weight: 500;
        color: #8c95a5;
      }
      .trust-signal-support {
        font-size: 1rem;
        margin: 8px 0;
        line-height: 24px;
        font-weight: 500;
        color: #8c95a5;

        .trust-signal-support-link {
          color: #4292e3;
          text-decoration: none;
        }
      }
    }
  }

  .order {
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;

    .order-header {
      padding-top: 12px;
      padding-bottom: 12px;

      .order-heading {
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        text-align: center;

        h2 {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 500;
          color: #303238;
          line-height: 1.2;
        }
      }
    }

    .order-contents {
      display: flex;
      flex-direction: column;
    }
    .order-contents-inner {
      padding-left: 40px;
      padding-right: 40px;
      position: relative;
      width: 100%;

      .ship-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .ship-link {
          text-decoration: none;
          text-transform: none;
          font-size: 1rem;
          font-weight: 500;
          padding-top: 24px;
          padding-bottom: 24px;
        }
      }

      .deliveries {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .deliveries-text {
        font-size: 1rem;
        color: #8c95a5;
        font-weight: normal;
        line-height: 1.4;
        box-sizing: border-box;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      .checkout-link {
        background: #4292e3;
        color: #fff;
        padding: 18px;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        font-weight: 500;
        text-decoration: none;
        height: 100%;
        border-radius: 1.75rem;
        border: 0 none;
        line-height: 1.25;
      }
      .checkout-link-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        max-width: 100%;
        height: 100%;
        font-size: 1.3rem;
      }
    }
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
    #or {
      background-color: #fff;
      z-index: 2;
      font-size: 1rem;
      font-weight: normal;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .shipping-details {
    display: block;
  }

  .delivery-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  .delivery-headline {
    text-transform: capitalize;
    text-align: left;
    width: 200px;
    font-size: 0.7rem;
    font-weight: 700;
    color: #303238;
    line-height: 1.2;
  }

  .label {
    font-size: 10px;
    margin-bottom: 20px;
    margin-top: -5px;
  }

  .delivery-form-input {
    width: 200px;
    padding: 5px 0;
    margin: 10px 0;
    font-size: 12px;
  }

  .main {
    max-width: 950px;
    margin: 30px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    border: none;
    padding: 0;

    section {
      width: 70.5%;

      .section-title {
        font-size: 14px;
        font-weight: 500;
        color: #ababab;
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .section-content {
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%);
        background: #fff;
        border-radius: 4px;
        margin-bottom: 8px;

        .section-content-header {
          min-height: 40px;
          padding: 10px;

          .address-icon {
            color: #a3cf62;
            font-size: 15px;
            line-height: 20px;
            display: inline-block;
          }

          .delivery-icon {
            color: #e2e2e2;
            font-size: 15px;
            line-height: 20px;
            display: inline-block;
          }

          .address-text {
            color: #000;
            padding-left: 16px;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
          }

          .change {
            font-size: 14px;
            font-weight: 500;
            color: #f68b1e;
            float: right;
            margin-right: 6px;
            padding-top: 1px;
            text-transform: uppercase;
          }
        }

        .section-content-desc {
          font-size: 14px;
          padding: 16px 46px;
          line-height: 1.5;
          border-top: 1px solid #f0f0f0;
          padding: 10px;

          .customer-name {
            color: #000;
            font-weight: 500;
          }

          .customer-contact {
            color: gray;
            font-size: 13px;
            line-height: 1.5;
          }
        }
        
        .cont {
          padding: 16px 46px;
        }
      }
    }
  }
`;
