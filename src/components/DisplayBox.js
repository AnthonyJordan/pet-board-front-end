import React from "react";
import UserDisplay from "./UserDisplay";

function DisplayBox({ users, onUserDelete, onPetDelete }) {
  const userElements = users.map((user) => (
    <UserDisplay
      key={user.id}
      id={user.id}
      name={user.name}
      pets={user.pets}
      onUserDelete={onUserDelete}
      onPetDelete={onPetDelete}
    ></UserDisplay>
  ));
  return <div className="displayBox display">{userElements}</div>;
}
export default DisplayBox;
