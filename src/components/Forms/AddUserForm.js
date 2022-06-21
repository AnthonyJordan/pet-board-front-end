import React, { useState } from "react";

function AddUserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: "",
    pets: [],
  });
  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newUser) => onAddUser(newUser));
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => handleFormChange(e)}
          value={formData.name}
        />
      </label>
      <input type="submit" value="Add user" />
    </form>
  );
}

export default AddUserForm;
