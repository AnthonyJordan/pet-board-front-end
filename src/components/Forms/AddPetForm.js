import React, { useState } from "react";

function AddPetForm({ users, onAddPet }) {
  const [formData, setFormData] = useState({
    name: "",
    user_id: 0,
    img_url: "",
    description: "",
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
    fetch(`http://localhost:9292/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((pet) => onAddPet(pet));
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="custom-select">
        <select name="user_id" onChange={(e) => handleFormChange(e)}>
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
      <label>
        Image Url
        <input
          type="text"
          name="img_url"
          onChange={(e) => handleFormChange(e)}
          value={formData.img_url}
        />
      </label>
      <label>
        About
        <input
          type="text"
          name="description"
          onChange={(e) => handleFormChange(e)}
          value={formData.description}
        />
      </label>
      <input type="submit" value="Add pet" />
    </form>
  );
}
export default AddPetForm;
