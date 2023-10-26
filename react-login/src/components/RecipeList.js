import React, { useState } from 'react';
import RecipeDetails from '../components/RecipeDetails'; 
import recipes from '../recipes';

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />} {/* Pass the selected recipe to RecipeDetails */}
    </div>
  );
};

export default RecipeList;
