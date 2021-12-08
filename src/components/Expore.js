import React from 'react'
import styled from 'styled-components'
import wrap1 from '../assets/pic1.jpg'
import wrap2 from "../assets/pic2.jpg";
import wrap3 from "../assets/pic3.jpg";
import wrap4 from "../assets/art.svg";
import wrap5 from "../assets/hand.svg";
import wrap6 from "../assets/leaf.svg";


const Expore = () => {
    return (
      <Main>
        <Text>
          <p>Find a Perfectly Them Gift</p>
        </Text>
        <FirstWrap>
          <img src={wrap1} />
          <img src={wrap2} />
          <img src={wrap3} />
        </FirstWrap>
        <SecondWarp>
          <InnerWrap>
            <img src={wrap4} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
          <InnerWrap>
            <img src={wrap4} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
          <InnerWrap>
            <img src={wrap4} />
            <div>
              <p>Weirdly meaningful art</p>
              <span>Millions of designs on over 70 high quality products.</span>
            </div>
          </InnerWrap>
        </SecondWarp>
      </Main>
    );
}

export default Expore

const Main = styled.div`
    width: 65%;
    margin: auto;
    img{
        width: 33%;
        height: 400px
    }
`
const Text = styled.div``;
const FirstWrap = styled.div``;
const SecondWarp = styled.div``;
const InnerWrap = styled.div``;
