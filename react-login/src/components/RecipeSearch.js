import React, { useState } from 'react';

function RecipeSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch(''); // You can pass an empty query to indicate a clear search.
  };

  return (
    <div className="recipe-search-container">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="rounded-search-bar"
      />
      <button onClick={handleSearch} className="rounded-search-button">
        Search
      </button>
      {searchQuery && (
        <button onClick={clearSearch} className="clear-search-button">
          Clear
        </button>
      )}
    </div>
  );
}

export default RecipeSearch;
