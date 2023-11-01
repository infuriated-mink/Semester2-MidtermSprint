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

  const ingredientsArray = Array.isArray(recipe.ingredients) ? recipe.ingredients : [recipe.ingredients];

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Description: {recipe.description}</p>
      <p>Meal Type: {recipe.mealType}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <img src={recipe.photo} alt={recipe.name} style={{ maxWidth: '300px' }} />
      <button onClick={() => navigate('/home', { state: { recipes: storedRecipes } })}>Back to Home</button>
    </div>
  );
}

export default RecipeDetails;
