import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/recipe.css'
function AddItem() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || []
  );
  console.log(`recipes: ${JSON.stringify(recipes)}`)

  const [item, setItem] = useState({
    name: '',
    description: '',
    photo: '',
    ingredients: '',
    instructions: '',
    mealType: 'breakfast',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  // this is ideal way to handle the radio button special way - it's a bit different than others
  // reference: https://bobbyhadz.com/blog/react-set-default-checked-radio-button
  const [mealType, setMealType] = useState("breakfast")
  const handleMealTypeChange = (e) => {
    setMealType(e.target.value)
    setItem({ ...item, mealType: e.target.value })
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: recipes.length + 1, // see that clever trick? always will give next id - if done correctly, no need to do extra things
      name: item.name,
      description: item.description,
      photo: item.photo,
      ingredients: item.ingredients,
      instructions: item.instructions,
      mealType: item.mealType,
    };

    console.log(`new-recipe: ${JSON.stringify(newRecipe)}`)
    setRecipes(prevRecipe => [...prevRecipe, newRecipe])

    setMealType("breakfast")
    setItem({
      name: '',
      description: '',
      photo: '',
      ingredients: '',
      instructions: '',
      mealType: 'breakfast',
    })
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes))
  }, [recipes])
  console.log(`effecthook: ${recipes.length}`)


  return (
    <div><div className="mainbox2">
      <div className="addPhotoBox"><div>
          <div className='btn.btn-primary'>Photo (Local File):</div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div><h1>Add Photo!</h1></div>
      <form onSubmit={handleSubmit}>
        <div>
        <div className="titleCard"><label>Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleInputChange}
          />
        </div></div>
        <div><div className="descriptionCard">
          <label>Description:</label>
          <textarea
            name="description"
            value={item.description}
            onChange={handleInputChange} 
          />
        </div></div>
        
        {item.photo && (
          <div>
            <img
              src={item.photo}
              alt="Recipe Preview"
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}
        <div><div className="ingredientsCard">
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={item.ingredients}
            onChange={handleInputChange}
          />
        </div></div>
        <div><div className="instructionsCard">
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={item.instructions}
            onChange={handleInputChange}
          />
        </div></div>
        <div>
          <div className="mealType">
          <label>Meal Type:</label>
          {/* <select
            name="mealType"
            value={item.mealType}
            onChange={handleInputChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select> */}
          <div>
            <input
              type="radio"
              id="breakfast"
              name="breakfast"
              value="breakfast"
              checked={mealType === "breakfast"}
              onChange={handleMealTypeChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div>
            <input
              type="radio"
              id="lunch"
              name="lunch"
              value="lunch"
              checked={mealType === "lunch"}
              onChange={handleMealTypeChange}
            />
            <label htmlFor="lunch">Lunch</label>
          </div>
          <div>
            <input
              type="radio"
              id="dinner"
              name="dinner"
              value="dinner"
              checked={mealType === "dinner"}
              onChange={handleMealTypeChange}
            />
            <label htmlFor="dinner">Dinner</label>
          </div></div><div>
          <button className='submit' type="submit">Add Recipe</button>
        </div>
        </div>
        
      </form >
      <div>
        <button className='buttonLogo' type="button" onClick={() => navigate(`/home`, { state: { recipes } })}>
        </button>
      </div></div>
    </div >
  );
}

export default AddItem;



// reference: to pass state using useNavigate hook
// https://stackoverflow.com/questions/71588182/cannot-pass-state-using-usenavigate-in-react-router-dom-v6
