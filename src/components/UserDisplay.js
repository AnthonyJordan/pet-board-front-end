import React from "react";
import PetDisplay from "./PetDisplay";

function UserDisplay({ name, pets, id, onUserDelete, onPetDelete }) {
  const petElements = pets ? (
    pets.map((pet) => (
      <PetDisplay
        key={pet.name}
        id={pet.id}
        name={pet.name}
        description={pet.description}
        user_id={pet.user_id}
        img_url={pet.img_url}
        onPetDelete={onPetDelete}
      ></PetDisplay>
    ))
  ) : (
    <div>Pets load error</div>
  );

  function handleDeleteClick() {
    fetch(`http://localhost:9292/users/${id}`, {
      method: "DELETE",
    }).then(() => onUserDelete(id));
  }
  return (
    <div className="userDisplay">
      <h3 className="name">
        {name}
        <button className="deleteButton" onClick={() => handleDeleteClick()}>
          X
        </button>
      </h3>

      <div className="displayBox">{petElements}</div>
    </div>
  );
}

export default UserDisplay;
