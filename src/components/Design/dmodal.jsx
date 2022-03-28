import React, { useState } from "react";
import "./design.css";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import FileBase64 from "react-file-base64";
import { AiOutlineClose } from "react-icons/ai/";

import { collection, addDoc, getFirestore } from "firebase/firestore";

const Dmodal = ({ open, setOpen }) => {
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
      {open ? (
        <div className="nnn">
          <div className="mdal">
            <h1>Upload your design</h1>
            <AiOutlineClose className="closee"
              onClick={() => {
                setOpen(false);
              }}
            />

            <form className="form" onSubmit={handleSubmit}>
              <BsFillCloudUploadFill
                style={{
                  color: "gainsboro",
                  fontSize: "10em",
                  marginTop: "25px",
                }}
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
            </form>
          </div>
        </div>
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Dmodal;
