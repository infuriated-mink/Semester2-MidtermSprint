import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem() {
  const navigate = useNavigate();
  const [idCounter, setIdCounter] = useState(5);

  const [item, setItem] = useState({
    name: '',
    description: '',
    photo: '',
    ingredients: '',
    instructions: '',
    mealType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setItem({ ...item, photo: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: idCounter,
      name: item.name,
      description: item.description,
      photo: item.photo,
      ingredients: item.ingredients,
      instructions: item.instructions,
      mealType: item.mealType,
    };

    setIdCounter(idCounter + 1);

    const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    existingRecipes.push(newRecipe);

    localStorage.setItem('recipes', JSON.stringify(existingRecipes));


    setItem({
      name: '',
      description: '',
      photo: '',
      ingredients: '',
      instructions: '',
      mealType: '',
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
          <label>Photo (Local File):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        {item.photo && (
          <div>
            <img
              src={item.photo}
              alt="Recipe Preview"
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}
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
        <div>
          <label>Meal Type:</label>
          <select
            name="mealType"
            value={item.mealType}
            onChange={handleInputChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
      <div>
        <button type="button" onClick={() => navigate('/home')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AddItem;
