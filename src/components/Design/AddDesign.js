import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { v4 as uuid } from "uuid";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import NavNew from "../NavNew"
import Section from "../Section";
import Footer from "../Footer";
import con from 'assets/debg.jpeg'
import './design.css'
import { BsFillCloudUploadFill } from 'react-icons/bs'

const AddDesign = () => {
  const [design, setDesign] = useState({
    label: "",
    image: "",
    description: "",
  });

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
          <button path = 'file' >Creat Now</button>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
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
        id = 'file'
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
      </form>
      <Footer />
    </div>
  );
};

export default AddDesign;
