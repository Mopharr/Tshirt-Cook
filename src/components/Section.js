import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <>
      <Main>
        <ul>
          <li className="subnav-list-items dropdown">
            <a
              href="#cloth"
              className="
            subnav-link"
            >
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
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
              Clothing
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
              <li>
                <a href="#cloth-items" className="dropdown-menu-item">
                  Cloth items
                </a>
              </li>
            </ul>
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
    margin-top: 2rem;
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
