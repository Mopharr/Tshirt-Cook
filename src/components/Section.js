/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import UserContext from "Context";

const Section = () => {
  const { category, fetchProductsByCategory } = useContext(UserContext);
  console.log("section category", category);
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <ul>
          {category &&
            category.map((item) => (
              <li className="subnav-list-items dropdown">
                <a
                  onClick={() => {
                    fetchProductsByCategory(item.id);
                    navigate('/shop')
                  }}
                  className="subnav-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </Main>
    </>
  );
};

export default Section;

const Main = styled.div`
  padding: 0;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1600px) {
    width: 94%;
  }
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
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    font-size: 17px;
    align-items: center;
    padding: 1rem 0;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .subnav-link:hover {
    color: #ff4b2b;
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
  .dropdown-menu li:hover {
    background: #fff;
  }

  hr {
    width: 100%;
  }
`;
