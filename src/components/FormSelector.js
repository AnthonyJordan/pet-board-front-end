import React, { useState } from "react";
import AddPetForm from "./Forms/AddPetForm";
import AddUserForm from "./Forms/AddUserForm";
import UpdatePetForm from "./Forms/UpdatePetForm";
import UpdateUserForm from "./Forms/UpdateUserForm";

function FormSelector({
  users,
  onAddUser,
  onUpdateUser,
  onAddPet,
  onUpdatePet,
}) {
  const [selection, setSelection] = useState("Add User");
  const selections = ["Add User", "Add Pet", "Update User", "Update Pet"];
  const buttonElements = selections.map((option) => (
    <button key={option} onClick={() => setSelection(option)}>
      {option}
    </button>
  ));

  return (
    <>
      {buttonElements}
      {(() => {
        switch (selection) {
          case "Add User":
            return <AddUserForm onAddUser={onAddUser}></AddUserForm>;
          case "Add Pet":
            return <AddPetForm users={users} onAddPet={onAddPet}></AddPetForm>;
          case "Update User":
            return (
              <UpdateUserForm
                users={users}
                onUpdateUser={onUpdateUser}
              ></UpdateUserForm>
            );
          case "Update Pet":
            return (
              <UpdatePetForm
                users={users}
                onUpdatePet={onUpdatePet}
              ></UpdatePetForm>
            );
          default:
            return <div>Uh oh something broke</div>;
        }
      })()}
    </>
  );
}

export default FormSelector;
