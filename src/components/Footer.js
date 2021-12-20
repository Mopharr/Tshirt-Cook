import React from 'react'
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styled from 'styled-components';

const Footer = () => {
    return (
      <Container>
        <Menu>
          <Wrap>
            <p>Social</p>
            <ul>
              <a href="/">
                <BsInstagram /><li>Instagram</li>
              </a>
              <a href="/">
               <BsTwitter /><li>Twitter</li>
              </a>
              <a href="/">
                <BsFacebook /><li>Facebook</li>
              </a>
            </ul>
          </Wrap>
        </Menu>

        <hr />
        <Copy>
          <p>© TshirtClothing. All Rights Reserved</p>
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
    justify-content flex-start;
    aling-items: center;
    margin: 2em 0;
    @media (max-width: 425px){
      flex-direction: column;
    }
    p{
        font-size: 25px;
        font-family: 'Nunito', sans-serif;;
        font-weight: bold;
        margin-bottom: 1em;
    }
    a{
        text-decoration: none;
        color: #fff;
        display:  flex;
        align-items: center;
        justify-content: space-around;
    }
    li{
        font-size: 18px;
        list-style: none;
        font-family: 'Nunito', sans-serif;;
        margin: 1em 0;

    }
`;
const Wrap = styled.div``
const Copy = styled.div`
  p {
    text-align: center;
    margin: 1em 0;
    font-family: 'Nunito', sans-serif;;
    font-size: 18px;
  }
`;

