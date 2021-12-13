import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <>
      <Main>
        <ul>
          <li className="subnav-list-items dropdown">
            <a
              href="/Clothing"
              className="
            subnav-link"
            >
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All Clothing
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Hoodies & Sweatshit
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Sock
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  T-Shirt
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Wall Art
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All Art
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Frame Print
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Poster
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Canva Print
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Stationaries
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All Stationaries
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Greeting Card
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Hardcover Jounal
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Mouse Pad
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Postcard
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Stickers
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All Stickers
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Car Stickers
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Hedro Stickers
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Laptop Sticker
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Babies & Kids
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All kids clothing
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Baby One-piece
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Baby T-shirt
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Baby Pullover Hoodies
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Home and Living
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  All Home & Living
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Bath mat
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Clock
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Coster
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Duvet cover
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Floor Pillow
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Mug
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Explore More
            </a>
          </li>
        </ul>
      </Main>
      <hr />
    </>
  );
};

export default Section;

const Main = styled.div`
  width: 80%;
  margin: auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1024px) {
    padding: 0;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 1024px) {
      flex-direction: column;
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
    font-size: 16px;
    font-family: monospace;
    font-weight: 500;
  }

  .dropdown {
    display: block;
    position: relative;
  }

  .subnav-list-items .dropdown-menu {
    display: none;
    border: none;
    width: 200px;
    position: absolute;
    z-index: 1000;
    min-width: 208px;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0.25rem;
    margin-top: 1rem;
  }

  .subnav-list-items:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu li {
    display: block;
    padding: 8px 15px;
  }

  .dropdown-menu li .dropdown-menu-item {
    text-decoration: none;
    color: #493b3b;
    font-weight: bold;
  }

  hr {
    width: 100%;
  }
`;
