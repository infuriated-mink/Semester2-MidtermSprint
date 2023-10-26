import React, { useState } from 'react';
import { addRecipe } from '../recipes';

function AddItem() {
  const [item, setItem] = useState({
    name: '',
    description: '',
    photo: null, 
    ingredients: '',
    instructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setItem({ ...item, photo: selectedFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: item.name,
      description: item.description,
      photo: item.photo, 
      ingredients: item.ingredients,
      instructions: item.instructions,
    };

    addRecipe(newRecipe);

    setItem({
      name: '',
      description: '',
      photo: null,
      ingredients: '',
      instructions: '',
    });
  };

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={item.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file" 
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={item.ingredients}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={item.instructions}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddItem;
