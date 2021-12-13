import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
    <Main>
      <Title>
        <p>Contact Us</p>
      </Title>
      <Comment>
        <Left>
          <h2>
            Address: <span>Lagos Nigeria</span>
          </h2>
          <h2>
            Email:<span>omdcontact@gmail.com</span>
          </h2>
          <h2>
            Num:<span>+234-802-333-444</span>
          </h2>
        </Left>

        <Right>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Comment"></textarea>
          <button>Submit</button>
        </Right>
      </Comment>
    </Main>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background: #f5f5f5;
  padding: 2em 0;
`;


const Main = styled.div`
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 425px) {
    width: 90%;
  }
`;
const Title = styled.div`
  p {
    font-size: 30px;
    margin: 1em 0;
    font-family: "Nunito", sans-serif;
    color: #ff6600;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  margin: 2em 0;
  h2 {
    font-family: "Nunito", sans-serif;
    margin: 2em 0;
    font-size: 25px;
  }
  span {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1.5em;
  @media (max-width: 768px){
    padding: 0;
  }
  input {
    padding: 1.3em;
    margin: 2em 0;
    border: none;
    outline: none;
    border-radius: 9px;
    width: 500px;
    font-size: 17px;
    @media only screen and (max-width: 607px) {
      width: 100%;
    }
  }
  textarea {
    padding: 1em;
    height: 200px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 9px;
  }
  button {
    width: 200px;
    border-radius: 20px;
    border: 1 px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 1em 0 .5em;
    outline:none;
    border: none;
  }
`;

