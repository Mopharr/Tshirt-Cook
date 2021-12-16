import React, {useState, useEffect} from "react";
// import Fade from 'react-reveal'
import { RiArrowDownSLine } from 'react-icons/ri'
import { HeroData } from './HeroData'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './Explore.css'

const Hero = () => {
  const [value, setValue] = useState(0);

  const updateIndex = () => {
    if (value === 3) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(value + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      key={HeroData[value].id}
      style={{ background: `url(${HeroData[value].image})` }}
      className="slider"
    >
      <div className="slider-info">
        <div className="slider-container">
          <div className="slider-info-big">
            <h5>{HeroData[value].title}</h5>
            <p>{HeroData[value].description}</p>
            <a href="#shop">Shop Clothing <RiArrowDownSLine style={{fontSize: '25px'}}/></a>
          </div>
          <div className="controls">
            <a
              className="controls-theme prev"
              href="#prev"
              onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
            >
              <span>
                <FaChevronLeft />
              </span>
            </a>
            <a
              className="controls-theme next"
              href="#next"
              onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
            >
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Main = styled.div`
//   width: 100%;
//   height: 70vh;
//   position: relative;
//   align-items: center;
//   @media (max-width: 1024px) {
//     width: 97%;
//   }
// `;
// const Left = styled.div`
//   width: 100%;
//   background: #c09a76;
//   height: 100%;
//   position: relative;
//   padding: 5em 1em 10em 2em;
//   a {
//     text-decoration: none;
//     color: #000;
//     font-family: bold;
//     border: 2px solid;
//     border-radius: 25px;
//     padding:  10px;
//     font-family: nunito;
//   }
//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;
// const Title = styled.div`
//   font-size: 40px;
//   font-weight: bold;
// `;
// const Sub = styled.div`
//   font-size: 18px;
//   font-weight: 500;
//   text-align: justify;
//   width: 40%;
//   margin-bottom: 1em;
// `;
// const Right = styled.div`
//   width: 50%;
//   position: absolute;
//   top: 0;
//   height: 100%;
//   right: 0;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   @media (max-width: 1024px) {
//     width: 100%;
//     img {
//       border-radius: 15px;
//     }
//   }
// `;

// <Main>
//       <Left>
//         <Title>Clothing</Title>
//         <Sub>
//           T-shirts, hoodies, tops, dresses, skirts, hats, and more in a huge
//           range of styles, colors, and sizes (XS - plus size). Whether you wear
//           women's clothing or men's clothing you’ll find the original artwork
//           that’s perfect for you. Every purchase supports the independent artist
//           who designed it, and that’s pretty cool.
//         </Sub>
//         <a href="/">Shop Clothing <RiArrowDownSLine style={{fontSize: '25px'}}/></a>
//       </Left>
//       <Right>
//         <img src={hero} alt="" />
//       </Right>
//     </Main>
