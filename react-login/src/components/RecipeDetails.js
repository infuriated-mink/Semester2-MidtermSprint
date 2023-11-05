import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const recipe = storedRecipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div>
        <p>No recipe available.</p>
        <button onClick={() => navigate('/home', { state: { recipes: storedRecipes } })}>Back to Home</button>
      </div>
    );
  }

  const formattedIngredients = recipe.ingredients.split('\n').map((ingredient, index) => (
    <li key={index}>{ingredient.trim()}</li>
  ));

  const formatInstructions = (instructions) => {
    return instructions
      .split('\n')
      .map((step, index) => (
        <li key={index}>{step.trim()}</li>
      ));
  };

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Description: {recipe.description}</p>
      <p>Meal Type: {recipe.mealType}</p>
      <h3>Ingredients:</h3>
      <ul>
        {formattedIngredients}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {formatInstructions(recipe.instructions)}
      </ol>
      <img src={`/media/${recipe.image}`} alt={recipe.name} style={{ maxWidth: '300px' }} />
      <button onClick={() => navigate('/home', { state: { recipes: storedRecipes } })}>Back to Home</button>
    </div>
  );
}

export default RecipeDetails;
