import React from "react";
import styled from "styled-components";
import ava from "assets/flogo.png";

const Footer = () => {
  return (
    <Container>
      <Menu>
        <div class="footer-widget first-widget">
          <div class="title-outer">
            <h3 class="widget-title">Shop</h3>
          </div>
          <ul class="toggle-block">
            <li>
              <div class="static-links-list">
                <span>
                  <a href="#about" className="link-list-item">
                    Mens t-shirt
                  </a>
                </span>

                <span>
                  <a href="#contact" className="link-list-item">
                    Women t-shirt
                  </a>
                </span>

                <span>
                  <a href="#terms_conditions" className="link-list-item">
                    Baby Wear
                  </a>
                </span>

                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    Mugs
                  </a>
                </span>
                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    Cap
                  </a>
                </span>
                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    Throw Pillows
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="footer-widget second-widget">
          <div class="title-outer">
            <h3 class="widget-title">About</h3>
          </div>
          <div className="address">
            Tshirtcook is a print on demand online store that provides unique
            designs & premium quality products at the best prices.
            <strong>Learn more</strong>
          </div>
        </div>
        <div class="footer-widget third-widget">
          <div class="title-outer">
            <h3 class="widget-title">Help?</h3>
          </div>
          <ul class="toggle-block">
            <li>
              <div class="static-links-list">
                <span>
                  <a href="#about" className="link-list-item">
                    Delivery
                  </a>
                </span>

                <span>
                  <a href="#contact" className="link-list-item">
                    Returns
                  </a>
                </span>

                <span>
                  <a href="#terms_conditions" className="link-list-item">
                    Customer Care
                  </a>
                </span>

                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    FAQs
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-widget third-widget">
          <div class="title-outer">
            <h3 class="widget-title">Social</h3>
          </div>
          <ul class="toggle-block">
            <li>
              <div class="static-links-list">
                <span>
                  <a href="#about" className="link-list-item">
                    Facebook
                  </a>
                </span>

                <span>
                  <a href="#contact" className="link-list-item">
                    Instagram
                  </a>
                </span>

                <span>
                  <a href="#terms_conditions" className="link-list-item">
                    Pinterest
                  </a>
                </span>

                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    Blog
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Menu>
      <Copy>
        <img src={ava} alt="" />
        <p>
          {" "}
          <a href="/">Copyright .</a>
          <a href="/">Privacy Policy .</a>
          <a href="/">Cookies Policy .</a>
          <a href="/">User Agreement .</a>
        </p>
        <span>All right s reserved</span>
      </Copy>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: #000;
  padding: 1em;
  color: #fff;
  a{
    color:#fff;
    font-weight: 500;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 425px) {
    flex-direction: column;
  }
  p {
    font-size: 25px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    margin-bottom: 1em;
  }
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a:hover {
    text-decoration: underline;
  }
  li {
    font-size: 18px;
    list-style: none;
    font-family: "Nunito", sans-serif;
    margin: 1em 0;
  }
  .footer-widget.second-widget {
    width: 30%;
  }

  .footer-widget {
    float: none;
    box-sizing: border-box;
    padding: 0;
    padding-inline-end: 20px;
    display: inline-block;
    vertical-align: top;

    @media (max-width: 568px) {
      width: 100% !important;
    }
  }

  .first-widget.footer-widget {
    padding-inline-start: 0;

    @media (max-width: 568px) {
      width: 100% !important;
    }
  }

  .title-outer {
    position: relative;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .address {
    margin-bottom: 20px;
  }

  .phone {
    margin-bottom: 20px;
  }

  .email {
    display: block;
  }

  .footer-social-icons {
    padding-left: 0;
  }

  .footer-social-icons-list {
    display: flex;
    align-items: center;
  }

  .social-icons {
    background-color: #f0f0f0;
    color: #222222;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    text-align: center;
    margin: 0 10px;
    display: inline-block;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle-block {
    padding: 0;
  }

  .link-list-item {
    justify-content: flex-start;
    margin: 10px 0;
  }
`;
const Copy = styled.div`
  text-align: center;
  p {
    text-align: center;
    margin: 0;
    font-size: 16px;
  }
  span {
    text-align: center;
    margin: 0;

    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: bold;
  }
`;
