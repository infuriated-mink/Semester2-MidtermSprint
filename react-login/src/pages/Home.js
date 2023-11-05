import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import oldRecipes from "../data/recipes.json"
import Logout from '../components/Logout';
function Home({ reciepes }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [recipes, setRecipes] = useState(location.state?.recipes);
  const [mealTypeFilter, setMealTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(null);


  useEffect(() => {
    !location.state?.recipes && localStorage.setItem("recipes", JSON.stringify(oldRecipes))
    setRecipes(JSON.parse(localStorage.getItem("recipes"))
    )
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filteredResults = filteredRecipes?.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(null);
    }
  }, [searchQuery, filteredRecipes]);

  // filter based on mealType
  useEffect(() => {
    setFilteredRecipes(
      mealTypeFilter === "all" ? recipes : recipes.filter(recipe => recipe.mealType === mealTypeFilter)
    )
  }, [mealTypeFilter, recipes])

  const handleFilter = (e) => {
    setMealTypeFilter(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="top-right">
        <RecipeSearch onSearch={setSearchQuery} />

      </div>
      <Logout />
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of your home page.</p>

      <button onClick={() => navigate('/add-item')}>Add Recipe</button>

      <h2>Filter by Meal Type:</h2>
      <select value={mealTypeFilter} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <h2>Recipes</h2>
      <ul>
        {searchQuery
          ? searchResults?.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))
          : filteredRecipes?.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Home;
