import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails'; 

import recipes from '../recipes';

function Home() {
  const navigate = useNavigate();

  const handleNavigateToAddItem = () => {
    navigate('/add-item');
  };

  const [searchResults, setSearchResults] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSearch = (query) => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredRecipes);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="home-container">
      <div className="top-right">
        <RecipeSearch onSearch={handleRecipeSearch} />
      </div>

      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of your home page.</p>

      <button onClick={handleNavigateToAddItem}>Go to Add Item</button>

      <h2>Recipes</h2>
      <ul>
        {searchResults.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>

      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
}

export default Home;
