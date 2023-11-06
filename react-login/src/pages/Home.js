import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import oldRecipes from '../data/recipes.json';
import Logout from '../components/Logout';
import '../css/Home.css';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
      localStorage.setItem('recipes', JSON.stringify(oldRecipes));
    }
    setLocalRecipes(JSON.parse(localStorage.getItem('recipes')));
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
      mealTypeFilter === 'all'
        ? localRecipes
        : localRecipes.filter((recipe) => recipe.mealType === mealTypeFilter)
    );
  }, [mealTypeFilter, localRecipes]);

  const handleFilter = (e) => {
    setMealTypeFilter(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="mainbox">
        <div className="header">
          <div className="horizontal-bar"></div>
          <div className="logo-center">
          <div className="flex mx-auto">
          <img src="/media/logo.png" alt="logo" style={{ width: "150px" }} />
          <div className="slogan">Build better recipes, together!</div>
        </div>
          </div>
          <div className="search-right">
        <RecipeSearch onSearch={setSearchQuery} />
        </div>
        </div>
        <div className="horizontal-bar2"></div>
        <h2 className="featured-items-header">Featured Items</h2>
        <div className="add-recipe-button-container">
          <Button onClick={() => navigate('/add-item')} className="add-recipe-button">
            Add Recipe
          </Button>
        </div>
        <CardGroup>
          {searchQuery
            ? searchResults?.map((recipe) => (
                <Card key={recipe.id} className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={`/media/${recipe.image}`}
                    alt={recipe.name}
                    style={{ height: '200px' }}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                  </Card.Body>
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="btn btn-primary view-recipe-button"
                    style={{ backgroundColor: recipe.cardColor, textAlign: 'right', position: 'absolute', bottom: '0' }}
                  >
                    View Recipe
                  </Link>
                </Card>
              ))
            : filteredRecipes?.map((recipe) => (
                <Card key={recipe.id} className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={`/media/${recipe.image}`}
                    alt={recipe.name}
                    style={{ height: '200px' }}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                  </Card.Body>
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="btn btn-primary view-recipe-button"
                    style={{ backgroundColor: recipe.cardColor, textAlign: 'right', position: 'absolute', bottom: '0' }}
                  >
                    Read more
                  </Link>
                </Card>
              ))
          }
        </CardGroup>
        <div className="mission-box">
          <h4>Our Mission</h4>
          <hr />
          <p>Our mission at DishHub is to provide a versatile and user-friendly platform for culinary enthusiasts. We aim to offer a modern-day recipe box that empowers users to explore, contribute, and curate their favorite recipes. Our goal is to make cooking more enjoyable and accessible, ensuring that users can easily search for recipes, while also providing them with the tools to add and edit their own culinary creations. We are dedicated to enhancing the cooking experience by offering a seamless, cross-device solution that fosters a community of passionate food lovers. At DishHub, we're committed to simplifying the art of cooking and sharing recipes, making it a delightful journey for all.</p>
        </div>
        <div className="horizontal-bar3"></div>
        <div className='footer'>
        <p>Where to find us!</p>
        <div className="social-icons">
          <a href="https://www.twitter.com" className="social-icon" style={{ color: 'black' }}>
            <FontAwesomeIcon icon={faTwitter} size='3x' />
          </a>
          <a href="https://www.facebook.com" className="social-icon" style={{ color: 'black' }}>
            <FontAwesomeIcon icon={faFacebook} size='3x'/>
          </a>
          <a href="https://www.instagram.com" className="social-icon" style={{ color: 'black' }}>
            <FontAwesomeIcon icon={faInstagram} size='3x'/>
          </a>
        </div>
        <p>@DishHub</p>
        <Logout/>
      </div>
      </div>
    </div>
  );
}

export default Home;
