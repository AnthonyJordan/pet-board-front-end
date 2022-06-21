import React from "react";

function PetDisplay({ id, name, description, user_id, img_url }) {
  return (
    <div className="petBox">
      <img src={img_url} alt="Pet"></img>
      <span className="descriptionText">{description}</span>
      <p>{name}</p>
    </div>
  );
}
export default PetDisplay;
