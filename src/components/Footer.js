import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Menu>
        <div class="footer-widget first-widget">
          <div class="title-outer">
            <h3 class="widget-title">Quick Information</h3>
          </div>
          <div class="contact_wrapper">
            <div class="address">Lagos State University, Ojo, Lagos</div>
            <div class="phone">
              <div class="contact_phone">+2349027647320</div>
            </div>
            <div class="email">
              <div class="contact_email">
                <a
                  href="mailto:#"
                  className="
                email"
                >
                  support@templatmela.com
                </a>
              </div>
            </div>
          </div>
          <ul className="footer-social-icons">
            <li className="footer-social-icons-list">
              <a href="/#instagram" className="social-icons">
                <BsInstagram />
              </a>
              <a href="/" className="social-icons">
                <BsTwitter />
              </a>
              <a href="/" className="social-icons">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-widget second-widget">
          <div class="title-outer">
            <h3 class="widget-title">Information</h3>
          </div>
          <ul class="toggle-block">
            <li>
              <div class="static-links-list">
                <span>
                  <a href="#about" className="link-list-item">
                    About Us
                  </a>
                </span>

                <span>
                  <a href="#contact" className="link-list-item">
                    Contact Us
                  </a>
                </span>

                <span>
                  <a href="#terms_conditions" className="link-list-item">
                    Terms &amp; Conditions
                  </a>
                </span>

                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    Returns &amp; Exchanges
                  </a>
                </span>
                <span>
                  <a href="#ship_delivery" className="link-list-item">
                    Shipping &amp; Delivery
                  </a>
                </span>
                <span>
                  <a href="#privacy" className="link-list-item">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-widget third-widget">
          <div class="title-outer">
            <h3 class="widget-title">Need Help?</h3>
          </div>
          <ul class="toggle-block">
            <li>
              <div class="static-links-list">
                <span>
                  <a href="#about" className="link-list-item">
                   Your Account
                  </a>
                </span>

                <span>
                  <a href="#contact" className="link-list-item">
                    Returns Center
                  </a>
                </span>

                <span>
                  <a href="#terms_conditions" className="link-list-item">
                    Purchase
                  </a>
                </span>

                <span>
                  <a href="#returns_exchanges" className="link-list-item">
                    App Download
                  </a>
                </span>
                <span>
                  <a href="#ship_delivery" className="link-list-item">
                    Help
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Menu>

      <hr />
      <Copy>
        <p>© OMDClothing. All Rights Reserved</p>
      </Copy>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: #000;
  padding: 2em;
  color: #fff;
`;
const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

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
  li {
    font-size: 18px;
    list-style: none;
    font-family: "Nunito", sans-serif;
    margin: 1em 0;
  }

  .footer-widget {
    float: none;
    box-sizing: border-box;
    min-height: 210px;
    padding: 0;
    padding-inline-end: 20px;
    width: 22%;
    display: inline-block;
    vertical-align: top;

    @media (max-width: 568px) {
      width: 100%;
    }
  }

  .first-widget.footer-widget {
    width: 28%;
    padding-inline-start: 0;

    @media (max-width: 568px) {
      width: 100%;
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
    margin: 0 1px;
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
  p {
    text-align: center;
    margin: 1em 0;
    font-family: "Nunito", sans-serif;
    font-size: 18px;
  }
`;
