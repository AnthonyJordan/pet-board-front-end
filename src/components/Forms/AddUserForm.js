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
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newUser) => onAddUser(newUser));
    setFormData({
      name: "",
      pets: [],
    });
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
      <input type="submit" value="Add User" />
    </form>
  );
}

export default AddUserForm;
