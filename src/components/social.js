import React from 'react';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'
import '../style/social.css'

const social = () => {
  return (
    <div className="social">
      <h2>We are also Social & Friendly. Connect with us.</h2>
      <div className="socialIcon">
        <div className="socialItem">
          <AiFillFacebook style={{ fontSize: "2em" }} />
          <span>Facebook</span>
        </div>
        <div className="socialItem">
          <AiOutlineInstagram style={{ fontSize: "2em" }} />
          <span>Instagram</span>
        </div>
        <div className="socialItem">
          <BsPinterest style={{ fontSize: "2em" }} />
          <span>Pinterest</span>
        </div>
        <div className="socialItem">
          <FaWhatsappSquare style={{ fontSize: "2em" }} />
          <span>Whatsapp</span>
        </div>
      </div>
    </div>
  );
};

export default social;
