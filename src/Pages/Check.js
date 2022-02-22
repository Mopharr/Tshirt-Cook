import React from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import NavNew from "components/NavNew";
import Section from "components/Section";

const Check = () => {
  return (
    <>
    <NavNew />
    <Section />
      <Main>
        <section>
          <div className="section-title">Checkout</div>
          <div className="section-content">
            <div className="section-content-header">
              <span className="address-icon">
                <BsFillCheckCircleFill />
              </span>
              <span className="address-text">1. Address details</span>
              <div className="change">Change</div>
            </div>
            <div className="section-content-desc">
              <div className="customer-name">Bashir </div>
              <div className="customer-contact">
                <div>Location e.g LASU Ojo, Lagos</div>
                <div>09027636774765</div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="section-content-header">
              <span className="delivery-icon">
                <BsFillCheckCircleFill />
              </span>
              <span className="address-text">Delivery method</span>
            </div>
            <div className="section-content-desc cont">
              <div className="delivery">
                <div>How do you want your order delivered?</div>
                <div className="delivery-content">
                <div className="delivery-content--1">
                <div className="delivery-input">
                  <input type="radio" />
                  <label>Pickup station</label>
                </div>
                <div>
                  Delivered by
                  <span>Friday 21 Jan</span>
                  for
                  <b>
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="450">
                      450
                    </span>
                  </b>
                </div>
                <div>
                  <div className="delivery-content-inner">
                    <span>
                      <BsFillCheckCircleFill />
                    </span>
                    <p>
                      - Dear Customer, due to the 3 day sit at home order of
                      the IPOB leader court hearing, orders will be delayed
                      to the following affected state;
                      Anambra/Enugu/Imo/Abia/Ebonyi. We apologize for the
                      inconvenience.
                      <br />
                      - Receive free delivery on your Jumia Express orders
                      above N4,999 in Lagos and Abuja
                      <br />- Living in Lagos, Abuja or Ibadan,{" "}
                      <a href="#link" title="please right click here">
                        JUMIA PRIME
                      </a>{" "}
                      <a
                        href="https://www.jumia.com.ng/sp-returns-refunds"
                        title="please right click here"
                      >
                        {" "}
                        right click here!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
                  <div className="delivery-content--1">
                    <div className="delivery-input">
                      <input type="radio" />
                      <label>Door Delivery</label>
                    </div>
                    <div>
                      Delivered by
                      <span>Friday 21 Jan</span>
                      for
                      <b>
                        <span data-currency-iso="NGN">₦</span>
                        <span dir="ltr" data-price="450">
                          450
                        </span>
                      </b>
                    </div>
                    <div>
                      <div className="delivery-content-inner">
                        <span>
                          <BsFillCheckCircleFill />
                        </span>
                        <p>
                          - Dear Customer, due to the 3 day sit at home order of
                          the IPOB leader court hearing, orders will be delayed
                          to the following affected state;
                          Anambra/Enugu/Imo/Abia/Ebonyi. We apologize for the
                          inconvenience.
                          <br />
                          - Receive free delivery on your Jumia Express orders
                          above N4,999 in Lagos and Abuja
                          <br />- Living in Lagos, Abuja or Ibadan,{" "}
                          <a href="#link" title="please right click here">
                            JUMIA PRIME
                          </a>{" "}
                          Members enjoy Free Delivery on All Local orders
                          (excluding bulky items)and Jumia Food Orders. <br />
                          - You will experience elongated timelines on your
                          Jumia Global orders, this is because of the Chinese
                          New Year.
                          <br />
                          - Large items (e.g. Freezers) may arrive 2 business
                          days later than other products. <br />
                          -Ensure your address is current as Delivery Agents
                          would only deliver to the stated address.
                          <br />
                          -Package may arrive before the delivery date. Payment
                          must be made before collection as Delivery agents are
                          not allowed to open a package <br />
                          - On delivery day, delivery time may vary due to
                          possible eventualities.
                          <br />- For more information on returns please{" "}
                          <a
                            href="https://www.jumia.com.ng/sp-returns-refunds"
                            title="please right click here"
                          >
                            {" "}
                            right click here!
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="amount-overview">
                <div className="amount-overview--1">
                  <span className="price_col-desc">Subtotal</span>
                  <span className="price_col-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      5,980
                    </span>
                  </span>
                </div>
                <div className="amount-overview--1">
                  <span className="price_col-desc">Delivery fee</span>
                  <span className="price_col-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      450
                    </span>
                  </span>
                </div>
                <div className="amount-overview--1">
                  <span className="price_col-desc">
                    Jumia Express Free Shipping
                  </span>
                  <span className="price_col-value green">
                    <span data-currency-iso="NGN">-₦</span>
                    <span dir="ltr" data-price="5980">
                      450
                    </span>
                  </span>
                </div>
                <div className="total">
                  Total
                  <div className="total-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      5,980
                    </span>
                  </div>
                </div>
              </div>
              <div className="hint">
                You will be able to add a voucher in the next step
              </div>
              <button className="save-btn">
                <span className="label">Proceed to payment</span>
              </button>
            </div>
          </div>
          <div className="section-content">
            <div className="section-content-header">
              <span className="payment-icon">
                <BsFillCheckCircleFill />
              </span>
              <span className="payment-text">3. Payment Method</span>
            </div>
          </div>
        </section>
        <aside>
          <div className="aside-title">Order Summary</div>
          <section className="item-box">
            <div className="item-box-header">
              <span className="text-uppercase -pan -mrxxs">Your Order</span>{" "}
              <span className="-pan">(1 item)</span>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="item-image">
                  <img src="" alt="item" />
                </div>
                <div className="item-desc">
                  <span className="ellipsis-2">
                    Men's Casual PU Leather Shoes Business Dress Shoes-brown
                  </span>
                  <span className="-mts">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      5,980
                    </span>{" "}
                  </span>
                  <div className="mts">
                    <span className="color-default-800">Qty:</span>&nbsp;1
                  </div>
                </div>
              </div>
              <div className="amount-overview">
                <div className="amount-overview--1">
                  <span className="price_col-desc">Subtotal</span>
                  <span className="price_col-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      5,980
                    </span>
                  </span>
                </div>
                <div className="amount-overview--1">
                  <span className="price_col-desc">Delivery fee</span>
                  <span className="price_col-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      450
                    </span>
                  </span>
                </div>
                <div className="amount-overview--1">
                  <span className="price_col-desc">
                    Jumia Express Free Shipping
                  </span>
                  <span className="price_col-value green">
                    <span data-currency-iso="NGN">-₦</span>
                    <span dir="ltr" data-price="5980">
                      450
                    </span>
                  </span>
                </div>
                <div className="total">
                  Total
                  <div className="total-value">
                    <span data-currency-iso="NGN">₦</span>
                    <span dir="ltr" data-price="5980">
                      5,980
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modify">
              <a className="colp" href="https://www.jumia.com.ng/cart/">
                Modify Cart
              </a>
            </div>
          </section>
        </aside>
      </Main>
    </>
  );
};

export default Check;

const Main = styled.div`
  max-width: 950px;
  margin: 30px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border: none;
  padding: 0;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    section, aside {
      margin: 0 auto;
    }
  }

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

        .payment-icon {
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

        .payment-text {
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

        .delivery {
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 16px !important;
          padding-top: 16px !important;
        }

        .delivery-content--1 {
          margin: 10px 0;
        }

        .delivery-input {
          display: flex;
          align-items: center;

          input {
            width: auto;
            margin-right: 10px;
          }
        }

        .delivery-content-inner {
          display: flex;
          align-items: start;
          border: 1px solid #f0f0f0;
          margin-top: 16px;
          padding: 10px;
          color: gray;
          font-size: 13px;
          border-radius: 4px;
          margin-right: 30px;
          margin-left: 30px;

          span {
            margin-right: 10px;
          }

          p {
            margin: 0 0 8.5px;
          }
        }
      }

      .cont {
        padding: 16px 46px;
      }
    }

  .hint {
    color: #c5c5c5;
    font-size: 13px;
    padding-top: 16px;
    text-align: center;
  }

  .save-btn {
    font-weight: 500;
    padding: 10px;
    font-size: 14px;
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-style: normal;
    line-height: 1.42857;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    width: 100% !important;
    height: auto !important;
    margin-top: 10px;

    .label {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.42857;
    }
  }

  .amount-overview {
    margin-top: 16px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .amount-overview--1 {
    display: flex;
    align-items: flex-end;
    color: #000;
    padding-bottom: 8px;
    color: #000;

    .price_col-desc {
      flex: 1;
      word-wrap: break-word;
    }

    .price_col-value {
      width: 45%;
      text-align: right;
    }

    .green {
      color: #a3cf62;
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f0f0f0;
    color: #000;

    .total-value {
      color: #f68b1e;
        font-size: 17px;
    }
        }
}

  aside {
    flex: 1;
    margin-left: 12px;

    .aside-title {
      font-size: 14px;
      font-weight: 500;
      color: #ababab;
      margin-bottom: 10px !important;
      text-transform: uppercase;
    }

    .item-box {
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%);
      border-radius: 4px;
      background-color: #fff;
      color: #000;
      padding-bottom: 16px !important;

      .item-box-header {
        display: flex;
        align-items: center;
        padding: 10px 8px;
        min-height: 40px;
      }

      .item {
        max-height: 35vh;
        border-top: 1px solid #f0f0f0;
        font-size: 13px;

        .item-inner {
          display: flex;
          border-bottom: 1px solid #f0f0f0;
          padding: 6px 8px;

          .item-image {
            width: 23%;
            margin-top: 6px !important;

            img {
              max-width: 100%;
            }
          }

          .item-desc {
            margin-left: 8px;
            flex: 1;
            display: flex;
            flex-direction: column;

            .ellipsis-2 {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              max-height: 2.824em;

              .mts {
                color: #f68b1e;
                margin-top: 6px !important;
              }
            }
          }
        }
      }
      .modify {
        border-top: 1px solid #f0f0f0;
        margin-top: 10px;
        padding-top: 16px;
        text-transform: uppercase;
        font-size: 14px;
        text-align: center;

        .colp {
          color: #f68b1e;
            text-decoration: none;
            background: transparent;
        }
      }
    }
  }
`;
