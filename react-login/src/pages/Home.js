import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails';
import recipes from '../components/recipes';

function Home() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealTypeFilter, setMealTypeFilter] = useState('all');

  // Handle filtering recipes by meal type
  const filterRecipesByMealType = (mealType) => {
    if (mealType === 'all') {
      setSearchResults(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.mealType === mealType);
      setSearchResults(filteredRecipes);
    }
  };

  // Handle searching for recipes
  const handleRecipeSearch = (query) => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );

    // Apply meal type filter if a specific filter is selected
    if (mealTypeFilter !== 'all') {
      filterRecipesByMealType(mealTypeFilter);
    } else {
      setSearchResults(filteredRecipes);
    }
  };

  // Handle selecting a recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle changing the meal type filter
  const handleMealTypeFilter = (event) => {
    const selectedMealType = event.target.value;
    setMealTypeFilter(selectedMealType);
    filterRecipesByMealType(selectedMealType);
  };

  return (
    <div className="home-container">
      <div className="top-right">
        <RecipeSearch onSearch={handleRecipeSearch} />
      </div>

      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of your home page.</p>

      <button onClick={() => navigate('/add-item')}>Add Recipe</button>

      <h2>Filter by Meal Type:</h2>
      <select value={mealTypeFilter} onChange={handleMealTypeFilter}>
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <h2>Recipes</h2>
      <ul>
        {searchResults.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>

      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
}

export default Home;
