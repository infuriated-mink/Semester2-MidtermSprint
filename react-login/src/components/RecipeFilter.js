import React, { useState } from 'react';

function RecipeFilter({ onFilter }) {
  const [selectedMealType, setSelectedMealType] = useState('');

  const handleMealTypeChange = (event) => {
    const mealType = event.target.value;
    setSelectedMealType(mealType);
    onFilter(mealType);
  }

  return (
    <div>
      <label>Filter by Meal Type: </label>
      <select value={selectedMealType} onChange={handleMealTypeChange}>
        <option value="">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
    </div>
  );
}

export default RecipeFilter;
