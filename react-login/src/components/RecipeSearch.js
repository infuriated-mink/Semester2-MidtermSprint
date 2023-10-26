import React, { useState } from 'react';
import '../index.css';

function RecipeSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="recipe-search-container">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="rounded-search-bar"
      />
      <button onClick={handleSearch} className="rounded-search-button">
        Search
      </button>
    </div>
  );
}

export default RecipeSearch;
