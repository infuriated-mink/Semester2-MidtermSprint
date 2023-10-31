import React from 'react';
import { Link } from 'react-router-dom';
import RecipeDetail from './RecipeDetails'; 
import recipes from '../data/recipes.json'; 

function AllRecipes() {
  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllRecipes;
