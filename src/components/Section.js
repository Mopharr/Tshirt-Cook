import React from 'react'
import styled from 'styled-components';

const Section = () => {
    return (
        <>
      <Main>
        <ul>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
          <li>Clothing</li>
        </ul>
      </Main>
       <hr />
       </>
    );

}

export default Section

const Main = styled.div`
  width: 80%;
  margin: auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-arounf;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  li{
      list-style: none;
      font-size:16px;
      font-family: monospace;
      font-weight: 500;
  }
  hr{
      width; 100%
  }
`;