import React, { useState } from 'react';
import { addRecipe } from '../components/recipes'; 
import { useNavigate } from 'react-router-dom';

function AddItem() {
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: '',
    description: '',
    photo: '',
    ingredients: '',
    instructions: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();


    const newRecipe = {
      name: item.name,
      description: item.description,
      photo: item.photo,
      ingredients: item.ingredients,
      instructions: item.instructions,
    };

  
    addRecipe(newRecipe);

    setItem({
      name: '',
      description: '',
      photo: '',
      ingredients: '',
      instructions: '',
    });
  };

  const handleBackToHome = () => {
    navigate('/home');
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
          <button type="submit">Add Recipe</button>
          <button type="button" onClick={handleBackToHome}>
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
