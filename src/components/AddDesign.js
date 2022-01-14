import React, { useState } from "react";
import db from "config/firebase";
import { v4 as uuid } from "uuid";
import { collection, addDoc } from "firebase/firestore";

const AddDesign = () => {
  const [design, setDesign] = useState({
    label: "",
    image: "",
    description: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setDesign({ ...design, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "designs"), {
      id: uuid(),
      label: design.label,
      description: design.description,
    });
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
        <input
          type="file"
          name="design"
          value={design.image}
          onChange={handleChange}
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
