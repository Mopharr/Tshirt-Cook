import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
      <Container>
        <Menu>
          <Wrap>
            <p>Shop</p>
            <ul>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
              <a href="/">
                <li>Gift Guild</li>
              </a>
            </ul>
          </Wrap>
          <Wrap>
            <p>Help</p>
            <ul>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
              <a href="/">
                <li>Delivery</li>
              </a>
            </ul>
          </Wrap>
          <Wrap>
            <p>Social</p>
            <ul>
              <a href="/">
                <li>Instagram</li>
              </a>
              <a href="/">
                <li>Instagram</li>
              </a>
              <a href="/">
                <li>Instagram</li>
              </a>
              <a href="/">
                <li>Instagram</li>
              </a>
            </ul>
          </Wrap>
        </Menu>

        <hr />
        <Copy>
          <p>© OMDClothing. All Rights Reserved</p>
        </Copy>
      </Container>
    );
}

export default Footer

const Container = styled.div`
    background: #000;
    padding: 2em;
    color: #fff;
`
const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content space-around;
    aling-items: center;
    margin: 2em 0;
    p{
        font-size: 25px;
        font-family: 'Nunito', sans-serif;;
        font-weight: bold;
        margin-bottom: 1em;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    li{
        font-size: 18px;
        list-style: none;
        font-family: 'Nunito', sans-serif;;
        margin: 1em 0;

    }
`
const Wrap = styled.div``
const Copy = styled.div`
  p {
    text-align: center;
    margin: 1em 0;
    font-family: 'Nunito', sans-serif;;
    font-size: 18px;
  }
`;

