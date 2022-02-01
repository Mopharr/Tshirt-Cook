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
          <AiFillFacebook style={{ fontSize: "2em", color: "#4267B2" }} />
          <span>Facebook</span>
        </div>
        <div className="socialItem">
          <AiOutlineInstagram
            style={{
              fontSize: "2em",
              color:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
            }}
          />
          <span>Instagram</span>
        </div>
        <div className="socialItem">
          <BsPinterest style={{ fontSize: "2em", color: "#E60023" }} />
          <span>Pinterest</span>
        </div>
        <div className="socialItem">
          <FaWhatsappSquare style={{ fontSize: "2em", color: "#25D366" }} />
          <span>Whatsapp</span>
        </div>
      </div>
    </div>
  );
};

export default social;
