import React from "react";

function PetDisplay({ id, name, description, user_id, img_url }) {
  return (
    <div className="petBox">
      <img src={img_url} alt="Pet"></img>
      <span className="descriptionText">{description}</span>
      <div className="name">{name}</div>
    </div>
  );
}
export default PetDisplay;
