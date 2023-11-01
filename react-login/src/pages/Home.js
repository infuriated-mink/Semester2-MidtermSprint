import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails';
import BackToHomeButton from '../components/BackToHomeButton';
import oldRecipes from "../data/recipes.json"

function Home() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealTypeFilter, setMealTypeFilter] = useState('all');
  const [recipes, setRecipes] = useState(oldRecipes);
  const location = useLocation();

  useEffect(() => {
    !location.state?.newRecipes && localStorage.setItem("recipes", JSON.stringify(recipes))
  }, [])

  const filterRecipesByMealType = (mealType) => {
    // const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    if (mealType === 'all') {
      setSearchResults(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.mealType === mealType);
      setSearchResults(filteredRecipes);
    }
  };


  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setSearchResults(recipes);
  }, []);


  const handleRecipeSearch = (query) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );


    if (mealTypeFilter !== 'all') {
      const filteredByMealType = filteredRecipes.filter((recipe) => recipe.mealType === mealTypeFilter);
      setSearchResults(filteredByMealType);
    } else {
      setSearchResults(filteredRecipes);
    }
  };


  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

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
        {location.state?.newRecipes && location.state?.newRecipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}

        {!location.state?.newRecipes && oldRecipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))
        }
      </ul>

      {selectedRecipe && (
        <>
          <BackToHomeButton />
          <RecipeDetails recipe={selectedRecipe} />
        </>
      )}
    </div>
  );
}

export default Home;
