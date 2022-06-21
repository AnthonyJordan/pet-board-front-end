import React, { useEffect, useState } from "react";
import TitleBox from "./components/TitleBox";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  function addUser(user) {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  }

  function deleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }
  return (
    <>
      <TitleBox users={users} onAddUser={addUser}></TitleBox>
      <DisplayBox users={users} onUserDelete={deleteUser}></DisplayBox>
    </>
  );
}

export default App;
