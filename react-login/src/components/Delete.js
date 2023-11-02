import { Link, useNavigate } from 'react-router-dom';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails';
import BackToHomeButton from '../components/BackToHomeButton';

function Home() {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [mealTypeFilter, setMealTypeFilter] = useState('all');

    const filterRecipesByMealType = (mealType) => {
        if (mealType === 'all') {
            setSearchResults(recipesData);
        } else {
            const filteredRecipes = recipesData.filter((recipe) => recipe.mealType === mealType);
            setSearchResults(filteredRecipes);
        }
    };

    const recipesData = require('../data/recipes.json');

    useEffect(() => {
        setSearchResults(recipesData);
    }, []);

    const handleRecipeSearch = (query) => {
        const filteredRecipes = recipesData.filter((recipe) =>
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
                {searchResults.map((recipe) => (
                    <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
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
