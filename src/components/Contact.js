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
`
const Title = styled.div`
  p {
    font-size: 35px;
    margin: 1em 0;
    font-family: monospace;
    color: #ff6600;
    font-weight: bold;
  }
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div`
  margin: 2em 0;
  h2 {
    font-family: monospace;
    margin: 2em 0;
    font-size: 25px;
  }
  span{
    font-size: 20px;
    font-weight: 400;

  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 1.3em;
    margin: 2em 0;
    border: none;
    outline: none;
    border-radius: 9px;
    width: 500px;
    font-size: 17px
  }
  textarea {
    padding: 1em;
    height: 200px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 9px;
  }
`;

