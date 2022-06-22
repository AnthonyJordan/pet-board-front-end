import React, { useEffect, useState } from "react";
import TitleBox from "./components/TitleBox";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  function addUser(user) {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  }
  function updateUser(updatedUser) {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  function deleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  function addPet(pet) {
    const user = users.find((user) => user.id === pet.user_id);
    user.pets.push(pet);
    updateUser(user);
  }

  function updatePet(updatedPet) {
    const user = users.find((user) => user.id === updatedPet.user_id);
    const updatedPets = user.pets.map((pet) => {
      if (pet.id === updatedPet.id) {
        return updatedPet;
      } else {
        return pet;
      }
    });
    const updatedUser = { ...user };
    updatedUser.pets = updatedPets;
    updateUser(updatedUser);
  }
  return (
    <>
      <TitleBox
        users={users}
        onAddUser={addUser}
        onUpdateUser={updateUser}
        onAddPet={addPet}
        onUpdatePet={updatePet}
      ></TitleBox>
      <DisplayBox users={users} onUserDelete={deleteUser}></DisplayBox>
    </>
  );
}

export default App;
