import React from "react";
import FormSelector from "./FormSelector";

function TitleBox({ users, onAddUser }) {
  return (
    <div className="titleBar">
      <h1>Pet Board</h1>
      <p>Tell us about your pets!</p>
      <FormSelector users={users} onAddUser={onAddUser}></FormSelector>
    </div>
  );
}

export default TitleBox;
