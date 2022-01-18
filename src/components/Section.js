import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <>
      <Main>
        <ul>
          <li className="subnav-list-items dropdown">
            <a
              href="/"
              className="
            subnav-link"
            >
              Mens
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Men Tshirt
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Women Hoddies
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Mens Cap
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Mens SweatShirt
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
              Women
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Men Tshirt
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Women Hoddies
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Women Cap
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Women SweatShirt
                </a>
              </li>
            </ul>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="/Clothing"
              className="
            subnav-link"
            >
              Clothing & Accessories
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
              Stationaries & Paper Prints
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
              Home & Living items
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
              Gifts
            </a>
          </li>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Explore
            </a>
          </li>
        </ul>
      </Main>
    </>
  );
};

export default Section;

const Main = styled.div`
  width: 80%;
  margin: auto;
  padding: 0;
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
    background-color: #f3f3f3;
    background-clip: padding-box;
    border-radius: 0.25rem;
    margin-top: 1rem;
  }

  .subnav-link {
    text-decoration: none;
    font-weight: bold;
    align-items: center;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
  }

  .subnav-list-items .subnav-link:hover {
    border-bottom: 1px solid white;
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
    cursor: pointer;
  }
  .dropdown-menu li:hover{
    background: #fff;
  }  

  hr {
    width: 100%;
  }
`;
