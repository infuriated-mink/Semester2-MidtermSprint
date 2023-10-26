import React from 'react';

function AddRecipeAndAddAnotherButton({ onAddAnother }) {
  return (
    <button onClick={onAddAnother}>Add Recipe and Add Another</button>
  );
}

export default AddRecipeAndAddAnotherButton;