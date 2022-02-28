import React, { useState } from "react";
// import FileBase64 from "react-file-base64";
import { v4 as uuid } from "uuid";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import NavNew from "../NavNew";
import Section from "../Section";
import Footer from "../Footer";
import con from "assets/debg.jpeg";
import "./design.css";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import Dmodal from './dmodal'
import { BsFillCartCheckFill } from "react-icons/bs";
import cc from './cc.png'
import cou from './cou.png'
import hhh from './hhh.jpeg'

const AddDesign = () => {
  const [open, setOpen] = useState(false)
  const [design, setDesign] = useState({
    label: "",
    image: "",
    description: "",
  });

  // modall
  const  openModal = () => {
    setOpen((prev) => !prev)
  }

  const db = getFirestore();

  const handleChange = ({ target: { name, value } }) => {
    setDesign({ ...design, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "designs"), {
        id: uuid(),
        label: design.label,
        image: design.image,
        description: design.description,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <NavNew />
      <Section />

      <div className="hero">
        <img src={con} alt="" />
        <div className="upload">
          <h2>Create Custom Clothing & Accessories</h2>
          <h3>Realize any design with our Customize Tool</h3>
          <button onClick={openModal} path="file">
            Creat Now
          </button>
        </div>
      </div>
      <Dmodal open={open} setOpen={setOpen} />
      {/* <form className="form" onSubmit={handleSubmit}>
        <BsFillCloudUploadFill
          style={{ color: "gainsboro", fontSize: "10em", marginTop: "25px" }}
        />
        <h1>Import your design to Upload</h1>
        <input
          type="text"
          name="label"
          value={design.label}
          onChange={handleChange}
        />
        <FileBase64
          id="file"
          type="file"
          multiple={false}
          onDone={({ base64 }) => setDesign({ ...design, image: base64 })}
        />
        <input
          type="text"
          name="description"
          value={design.description}
          onChange={handleChange}
        />
        <input type="submit" />
      </form> */}

      <div className="how">
        <h2>How it Works</h2>

        <div className="listO">
          <div className="order">
            <GiClick className="OIcon" />
            <span>Click on create Now</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, rcitationem pariatur
              excepturi molestias vero officiis sit reiciendis perferendis
              autem, sint beatae delectus.
            </p>
          </div>
          <div className="order">
            <BsFillCloudUploadFill className="OIcon" />
            <span>Upload order</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, rcitationem pariatur
              excepturi molestias vero officiis sit reiciendis perferendis
              autem, sint beatae delectus.
            </p>
          </div>
          <div className="order">
            <BsFillCartCheckFill className="OIcon" />
            <span>Place your Order</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, rcitationem pariatur
              excepturi molestias vero officiis sit reiciendis perferendis
              autem, sint beatae delectus.
            </p>
          </div>
          <div style={{ marginRight: "0" }} className="order">
            <MdDeliveryDining className="OIcon" />
            <span>Get your Item</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, rcitationem pariatur
              excepturi molestias vero officiis sit reiciendis perferendis
              autem, sint beatae delectus.
            </p>
          </div>
        </div>
      </div>

      <div className="add">
        <h2>Clothing to customize</h2>

        <div className="ms">
          <div className="addCap">
            <img src={cc} alt="" />
            <div className="te">Customize your shirt</div>
          </div>
          <div style={{ marginRight: "0" }} className="addCap">
            <img src={cou} alt="" />
            <div className="te">Customize your Hoodie</div>
          </div>
        </div>
      </div>
      <div className="cov">
        <div className="lst">
          <img src={hhh} alt="" />
          <div className="tee">
            <span>Get free Delivery</span>
            <h3>Corporate Clothing</h3>
            <p>
              We print Logo & more. Complimentary consultion and quality control
              include
            </p>
            <button onClick={openModal} path="file">
              Creat Now
            </button>
            <Dmodal open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddDesign;
