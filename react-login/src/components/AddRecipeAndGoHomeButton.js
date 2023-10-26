import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeAndGoHomeButton() {
  const navigate = useNavigate();

  const handleAddRecipeAndGoHome = () => {
 
    navigate('/home');
  };

  return (
    <button onClick={handleAddRecipeAndGoHome}>Add Recipe and Go Home</button>
  );
}

export default AddRecipeAndGoHomeButton;
