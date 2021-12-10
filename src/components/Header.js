import React from 'react'
import styled from 'styled-components';
import BackGround from "../assets/paint.jpg";


const Header = () => {
    return (
      <Main>
        <img
          src={BackGround}
          alt=""
          style={{
            margin: "2em auto",
            width: "80%",
            display: "flex",
            borderRadius: "25px",
          }}
        />
        {/* <Text>
          <h1>Get a perfect design</h1>
          <p>
            Super-specific gifts for super-specific people. Shop now, relax
            later.
          </p>
        </Text> */}
      </Main>
    );
}

export default Header
const Main = styled.div`
    position: relative;
    
`
// const Text = styled.div`
//   text-align: center;
//   position: absolute;
//   color: #fff;
//   h1 {
//     font-size: 3em;
//     font-family: monospace;
//   }
//   p{
//       font-size: 1.5em;
//       font-family: monospace;
//   }
// `;
