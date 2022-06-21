import React, { useState } from "react";
import AddUserForm from "./Forms/AddUserForm";
import UpdateUserForm from "./Forms/UpdateUserForm";

function FormSelector({ users, onAddUser }) {
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
            return;
          case "Update User":
            return <UpdateUserForm users={users}></UpdateUserForm>;
          case "Update Pet":
            return;
          default:
            return <div>Uh oh something broke</div>;
        }
      })()}
    </>
  );
}

export default FormSelector;
