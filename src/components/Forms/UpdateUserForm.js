import React, { useState } from "react";

function UpdateUserForm({ users, onUpdateUser }) {
  const [formData, setFormData] = useState({
    name: "",
    id: 0,
  });

  const options = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.id === "0" || formData.name === "") {
      return;
    }
    fetch(`http://localhost:9292/users/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedUser) => onUpdateUser(updatedUser));
    setFormData({
      name: "",
      id: 0,
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="custom-select">
        <select name="id" onChange={(e) => handleFormChange(e)}>
          <option value="0">Select User:</option>
          {options}
        </select>
      </div>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => handleFormChange(e)}
          value={formData.name}
        />
      </label>
      <input type="submit" value="Update User" />
    </form>
  );
}

export default UpdateUserForm;
