import React, { useState, useEffect } from 'react';
// import recipes from '../components/recipes';
import { useNavigate } from 'react-router-dom';


const generateUniqueID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function AddItem() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || []);
  const [item, setItem] = useState({
    id: generateUniqueID(),
    name: '',
    description: '',
    photo: '',
    ingredients: '',
    instructions: '',
    mealType: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setItem({ ...item, photo: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes))
    console.log(`recipe list: ${JSON.stringify(recipes)}`)
  }, [recipes])

  const handleSubmit = (e) => {
    e.preventDefault();


    const newRecipe = {
      id: item.id,
      name: item.name,
      description: item.description,
      photo: item.photo,
      ingredients: item.ingredients,
      instructions: item.instructions,
      mealType: item.mealType,

    };

    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);

    // setItem({
    //   id: generateUniqueID(),
    //   name: '',
    //   description: '',
    //   photo: '',
    //   ingredients: '',
    //   instructions: '',
    //   mealType: '',

    // });

    // navigate('/home');
  };

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={item.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Photo (Local File):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        {item.photo && (
          <div>
            <img
              src={item.photo}
              alt="Recipe Preview"
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}
        <div>
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={item.ingredients}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={item.instructions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Meal Type:</label>
          <select
            name="mealType"
            value={item.mealType}
            onChange={handleInputChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Recipe</button>
          <button type="button" onClick={() => navigate('/home')}>Back to Home</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
