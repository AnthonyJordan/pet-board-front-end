import React from "react";
import FormSelector from "./FormSelector";

function TitleBox({ users, onAddUser, onUpdateUser, onAddPet, onUpdatePet }) {
  return (
    <div className="titleBox">
      <h1>Pet Board</h1>
      <p>Tell us about your pets!</p>
      <FormSelector
        users={users}
        onAddUser={onAddUser}
        onUpdateUser={onUpdateUser}
        onAddPet={onAddPet}
        onUpdatePet={onUpdatePet}
      ></FormSelector>
    </div>
  );
}

export default TitleBox;
