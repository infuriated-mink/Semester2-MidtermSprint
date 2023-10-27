import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import recipes from '../components/recipes'; // Import your recipes data source

function AddItem() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    description: '',
    instructions: '',
    mealType: '',
    image: null, // Change the initial value to null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setRecipe({
      ...recipe,
      image: imageFile,
    });
  };

  const handleAddRecipe = () => {
    // Update the recipes data source with the new recipe
    const newRecipe = {
      id: recipes.length + 1, // You can adjust how you calculate the new ID
      ...recipe,
    };

    recipes.push(newRecipe); // Add the new recipe to the recipes array

    // Reset the form
    setRecipe({
      name: '',
      ingredients: '',
      description: '',
      instructions: '',
      mealType: '',
      image: null,
    });

    navigate('/home'); // Navigate back to the home page
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Meal Type:</label>
          <select
            name="mealType"
            value={recipe.mealType}
            onChange={handleInputChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
        </div>
      </form>
      <div>
        <button onClick={handleAddRecipe}>Add Recipe</button>
      </div>
    </div>
  );
}

export default AddItem;
