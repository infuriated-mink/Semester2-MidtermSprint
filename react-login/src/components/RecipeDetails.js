import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../components/recipes';
import BackToHomeButton from './BackToHomeButton';


function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <div>No recipe available.</div>;
  }

  return (
    <div>
      <BackToHomeButton />
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} /> {/* Display the image */}
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Description:</h3>
      <p>{recipe.description}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
