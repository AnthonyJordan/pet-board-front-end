import React from "react";
import UserDisplay from "./UserDisplay";

function DisplayBox({ users, onUserDelete }) {
  const userElements = users.map((user) => (
    <UserDisplay
      key={user.id}
      id={user.id}
      name={user.name}
      pets={user.pets}
      onUserDelete={onUserDelete}
    ></UserDisplay>
  ));
  return <div className="displayBox">{userElements}</div>;
}
export default DisplayBox;
