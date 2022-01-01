import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { HeroData } from "./ClothingData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../../style/Explore.css";




const ClothHero = () => {
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
            <a href="#shop">
              Shop Clothing <RiArrowDownSLine style={{ fontSize: "25px" }} />
            </a>
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

export default ClothHero
