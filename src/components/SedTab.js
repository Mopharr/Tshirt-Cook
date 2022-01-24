import React from "react";
import '../style/sectab.css'
import { MdKeyboardArrowRight } from 'react-icons/md'

const SedTab = () => {
  return (
    <>
      <div className="sec">
        <div className="secTab">
          <h2>
            <a href="/">
              Men <MdKeyboardArrowRight />
            </a>
          </h2>
          <h4>
            <a href="/">Tshirt</a>
          </h4>
          <h4>
            <a href="/">Tank Tops</a>
          </h4>
          <h4>
            <a href="/">Hoddies & Sweatshirt</a>
          </h4>
          <h4>
            <a href="/">Long-Sleeved Shirts</a>
          </h4>
        </div>
        <div className="secTab">
          <h2>
            <a href="/">
              Women <MdKeyboardArrowRight />
            </a>
          </h2>
          <h4>
            <a href="/">Tshirt</a>
          </h4>
          <h4>
            <a href="/">Tank Tops</a>
          </h4>
          <h4>
            <a href="/">Hoddies & Sweatshirt</a>
          </h4>
          <h4>
            <a href="/">Long-Sleeved Shirts</a>
          </h4>
        </div>
        <div className="secTab">
          <h2>
            <a href="/">
              Stationaries <MdKeyboardArrowRight />{" "}
            </a>
          </h2>
          <h4>
            <a href="/">Birthday Card</a>
          </h4>
          <h4>
            <a href="/">Greating Card</a>
          </h4>
          <h4>
            <a href="/">Hardcover Jounals</a>
          </h4>
          <h4>
            <a href="/">Postcard</a>
          </h4>
        </div>
        <div className="secTab">
          <h2>
            <a href="/">
              Home & Living <MdKeyboardArrowRight />{" "}
            </a>
          </h2>

          <h4>
            <a href="/">Mugs</a>
          </h4>
          <h4>
            <a href="/">Aprons</a>
          </h4>
          <h4>
            <a href="/">Poster</a>
          </h4>
          <h4>
            <a href="/">Throw Pillows</a>
          </h4>
        </div>
      </div>
      <div className="view">
        <a href="/">
          <button>View All</button>
        </a>
      </div>
    </>
  );
};

export default SedTab;
