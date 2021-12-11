import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
      <Main>
        <Title>
          <h5>What We Do</h5>
        </Title>
        <Sub>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget ornare est. Praesent id hendrerit risus. Aliquam nulla lectus,
            bibendum sed vulputate sit amet, suscipit sed est. Etiam vulputate
            urna lacinia quam sodales varius. Nullam et mauris eget turpis
            lacinia viverra eu ut metus. Sed maximus elit eu nunc efficitur
            venenatis. Sed vehicula turpis non neque laoreet, eget ultricies leo
            congue. Sed eget ante sit amet metus dictum cursus.
          </p>
        </Sub>
      </Main>
    );
}

export default About

const Main = styled.div`
    text-align: center;
    margin: 2em auto;
    width: 100%;
    height: 100%;
    padding: 3em 0;
    background: #f5f5f5;
`
const Title = styled.div`
  font-size: 40px;
  margin: 1em 0;
  font-family: monospace;
  font-weight: bold;
`;
const Sub = styled.div`
  font-size: 20px;
  width: 40%;
  margin: auto;
  font-family: monospace;
`;