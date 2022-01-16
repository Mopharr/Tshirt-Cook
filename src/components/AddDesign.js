import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { v4 as uuid } from "uuid";
import { collection, addDoc, getFirestore } from "firebase/firestore";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="label"
          value={design.label}
          onChange={handleChange}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setDesign({ ...design, image: base64 })
          }
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
  );
};

export default AddDesign;
