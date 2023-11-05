import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import oldRecipes from "../data/recipes.json";
import Logout from '../components/Logout';
import '../css/Home.css';
import { Card, Button, CardGroup, Stack } from "react-bootstrap";

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
        <Stack>
          <RecipeSearch onSearch={setSearchQuery} />
        </Stack>
        <div className="horizontal-bar2"></div>
        <Stack className="logo-container">
          <div className="flex mx-auto">
            <img src="/media/logo.png" alt="logo" style={{ width: "400px" }} />
            <div className="slogan">Build better recipes, together!</div>
          </div>
        </Stack>
        <Button onClick={() => navigate('/add-item')}>Add Recipe</Button>
        <h2>Filter by Meal Type:</h2>
        <select value={mealTypeFilter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <h2>Featured Items</h2>
        <Stack direction="horizontal" className="recipe-container">
          {searchQuery
            ? searchResults?.map((recipe) => (
              <Card key={recipe.id} className="p-2 mx-4 recipe-card" border="dark">
                <Card.Img variant="top" src={`/media/${recipe.image}`} alt={recipe.name} style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    {recipe.description}
                  </Card.Text>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                </Card.Body>
              </Card>
            ))
            : filteredRecipes?.map((recipe) => (
              <Card key={recipe.id} className="p-2 mx-4 recipe-card" border="dark">
                <Card.Img variant="top" src={`/media/${recipe.image}`} alt={recipe.name} style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    {recipe.description}
                  </Card.Text>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
                </Card.Body>
              </Card>
            ))
          }
        </Stack>
      </div>
    </div >
  );
}

export default Home;
