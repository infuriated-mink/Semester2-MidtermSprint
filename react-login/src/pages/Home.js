import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import oldRecipes from "../data/recipes.json";
import Logout from '../components/Logout';
import '../css/Home.css';

function Home({ recipes: propRecipes }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [localRecipes, setLocalRecipes] = useState(location.state?.recipes);

  const [mealTypeFilter, setMealTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  useEffect(() => {
    if (!location.state?.recipes) {
      localStorage.setItem("recipes", JSON.stringify(oldRecipes));
    }
    setLocalRecipes(JSON.parse(localStorage.getItem("recipes")));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredResults = localRecipes?.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(null);
    }
  }, [searchQuery, localRecipes]);

  // filter based on mealType
  useEffect(() => {
    setFilteredRecipes(
      mealTypeFilter === "all" ? localRecipes : localRecipes.filter(recipe => recipe.mealType === mealTypeFilter)
    );
  }, [mealTypeFilter, localRecipes]);

  const handleFilter = (e) => {
    setMealTypeFilter(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="mainbox">
        {/* Header */}
        <div className="header">
          <RecipeSearch onSearch={setSearchQuery} />
        </div>
        <div className="top-right">
          <Logout />
        </div>
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
        <div className="recipe-cards">
          {searchQuery
            ? searchResults?.map((recipe) => (
                <div className="card" key={recipe.id} style={{ width: '18rem' }}>
                  <img className="card-img-top" src={recipe.image} alt={recipe.name} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                  </div>
                </div>
              ))
            : filteredRecipes?.map((recipe) => (
                <div className="card" key={recipe.id} style={{ width: '18rem' }}>
                  <img className="card-img-top" src={recipe.image} alt={recipe.name} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
