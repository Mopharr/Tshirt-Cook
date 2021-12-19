import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Menu>
      <div class="footer-widget first-widget">
      <div class="title-outer">
      <h3 class="widget-title">Information</h3>
    </div>
    <div class="contact_wrapper">
					<div class="address">
						<div class="address_content">						
							<div class="contact_address">60, 29th Street #343, San Francisco, CA 94110, United States of America</div>	
						</div>	
					</div>
					<div class="phone"><div class="contact_phone">+01 2222 365  /  +91 1256 789</div></div>
					<div class="email">							
													<div class="contact_email"><a href="mailto:#">
								support@templatmela.com</a>
							</div>
											</div>
				</div>
          <ul>
            <a href="/">
              <BsInstagram />
              <li>Instagram</li>
            </a>
            <a href="/">
              <BsTwitter />
              <li>Twitter</li>
            </a>
            <a href="/">
              <BsFacebook />
              <li>Facebook</li>
            </a>
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
                    <a href="#about">
                      About Us
                    </a>
                  </span>

                  <span>
                    <a href="#contact">
                      Contact Us
                    </a>
                  </span>

                  <span>
                    <a href="#terms_conditions">
                      Terms &amp; Conditions
                    </a>
                  </span>

                  <span>
                    <a href="#returns_exchanges">
                      Returns &amp; Exchanges
                    </a>
                  </span>
                  <span>
                    <a href="#ship_delivery">
                      Shipping &amp; Delivery
                    </a>
                  </span>
                  <span>
                    <a href="#privacy">
                      Privacy Policy
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
  align-items: center;
  margin: 2em 0;

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
}

.first-widget.footer-widget {
    width: 28%;
    padding-inline-start: 0;
}

.title-outer {
  position: relative;
  cursor: pointer;
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
