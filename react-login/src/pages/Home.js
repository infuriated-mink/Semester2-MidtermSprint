import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import BackToHomeButton from '../components/BackToHomeButton';
import oldRecipes from "../data/recipes.json"

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [recipes, setRecipes] = useState(location.state?.recipes);
  const [mealTypeFilter, setMealTypeFilter] = useState('all');
  const [searchResults, setSearchResults] = useState(null)

  // to set the recipes when home page is being rendered
  // if it's rendered from sign-in: by default we must store all the recipes from the JSON to local storage
  // if coming from any other page, those pages will send recipes are being sent
  // that is stored in recipes state using "useLocation hook" - check reference video
  useEffect(() => {
    !location.state?.recipes && localStorage.setItem("recipes", JSON.stringify(oldRecipes))
    setRecipes(JSON.parse(localStorage.getItem("recipes")))
  }, [])

  const handleFilter = (e) => {
    setMealTypeFilter(e.target.value)
    console.log(`in filter r by mealtypefilter: ${mealTypeFilter}, search results: ${searchResults}`);
  };

  return (
    <div className="home-container">
      <div className="top-right">
        {/* <RecipeSearch onSearch={handleRecipeSearch} /> @Vanessa: please work on this again */}
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
      <ul>
        {/* if mealTypeFilter says all - show all recipes, otherwise, filter the recipes based on the type & then show whatever is left */}
        {
          mealTypeFilter === "all" && recipes?.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))
        }

        {
          mealTypeFilter !== "all" &&
          recipes.filter(recipe => recipe.mealType === `${mealTypeFilter}`)
            .map(recipe => (
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


// to pass the state from one page to another useLocation + useNavigation: https://www.youtube.com/watch?v=kibtFP9wfLM
