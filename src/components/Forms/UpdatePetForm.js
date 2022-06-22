import React, { useEffect, useState } from "react";

function UpdatePetForm({ users, onUpdatePet }) {
  const [formData, setFormData] = useState({
    name: "",
    user_id: 0,
    img_url: "",
    description: "",
    id: 0,
  });

  const options = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  let petOptions = formData.user_id
    ? users[formData.user_id - 1].pets.map((pet) => (
        <option key={pet.id} value={pet.id}>
          {pet.name}
        </option>
      ))
    : null;
  useEffect(() => {
    petOptions = formData.user_id
      ? users[formData.user_id - 1].pets.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))
      : null;
  }, [formData.user_id]);

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.id === "0" ||
      formData.name === "" ||
      formData.description === "" ||
      formData.img_url === ""
    ) {
      return;
    }
    fetch(`http://localhost:9292/pets/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((pet) => onUpdatePet(pet));
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="custom-select">
        <select name="user_id" onChange={(e) => handleFormChange(e)}>
          <option value="0">Select User:</option>
          {options}
        </select>
        <select name="id" onChange={(e) => handleFormChange(e)}>
          <option value="0">Select Pet:</option>
          {petOptions}
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
      <input type="submit" value="Update Pet" />
    </form>
  );
}
export default UpdatePetForm;
