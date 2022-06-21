import React from "react";
import PetDisplay from "./PetDisplay";

function UserDisplay({ name, pets, id, onUserDelete }) {
  const petElements = pets.map((pet) => (
    <PetDisplay
      key={pet.name}
      id={pet.id}
      name={pet.name}
      description={pet.description}
      user_id={pet.user_id}
      img_url={pet.img_url}
    ></PetDisplay>
  ));
  return (
    <div className="userDisplay">
      <h3 className="name">{name}</h3>
      <div className="displayBox">{petElements}</div>
    </div>
  );
}

export default UserDisplay;
