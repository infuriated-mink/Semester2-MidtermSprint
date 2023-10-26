import React, { useState } from 'react';
import AddRecipeAndGoHomeButton from '../components/AddRecipeAndGoHomeButton';
import AddRecipeAndAddAnotherButton from '../components/AddRecipeAndAddAnotherButton';

function AddItem() {
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
    // Implement the logic to add the recipe
    // You can access the image file as recipe.image
    console.log('Added Recipe:', recipe);
    setRecipe({
      name: '',
      ingredients: '',
      description: '',
      instructions: '',
      mealType: '',
      image: null,
    });
  };

  const handleAddAnother = () => {
    // Implement the logic to add the recipe and continue adding another
    console.log('Added Recipe:', recipe);
    setRecipe({
      name: '',
      ingredients: '',
      description: '',
      instructions: '',
      mealType: '',
      image: null,
    });
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
        <AddRecipeAndGoHomeButton onClick={handleAddRecipe} />
        <AddRecipeAndAddAnotherButton onClick={handleAddAnother} />
      </div>
    </div>
  );
}

export default AddItem;
