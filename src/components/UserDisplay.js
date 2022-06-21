import React from "react";
import PetDisplay from "./PetDisplay";

function UserDisplay({ name, pets, id, onUserDelete }) {
  const petElements = pets.map((pet) => (
    <PetDisplay
      key={pet.id}
      id={pet.id}
      name={pet.name}
      description={pet.description}
      user_id={pet.user_id}
      img_url={pet.img_url}
    ></PetDisplay>
  ));
  return (
    <div className="userDisplay">
      <div>{name}</div>
      <div>{petElements}</div>
    </div>
  );
}

export default UserDisplay;
