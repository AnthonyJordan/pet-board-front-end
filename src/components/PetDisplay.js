import React from "react";

function PetDisplay({ id, name, description, user_id, img_url, onPetDelete }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/pets/${id}`, {
      method: "DELETE",
    }).then(() => onPetDelete(id, user_id));
  }
  return (
    <div className="petBox">
      <img src={img_url} alt="Pet"></img>
      <span className="descriptionText">{description}</span>
      <div className="name">
        {name}
        <button className="deleteButton" onClick={() => handleDeleteClick()}>
          X
        </button>
      </div>
    </div>
  );
}
export default PetDisplay;
