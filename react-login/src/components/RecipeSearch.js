import React, { useState } from 'react';

function RecipeSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="rectangle-whatever">
      <input
        className="rounded-search-bar"
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="rounded-search-button" onClick={handleSearch}>Search</button>
      {
        searchQuery && (
          <button className="rounded-search-button" onClick={handleClearSearch}>Clear</button>
        )}
    </div>
  );
}

export default RecipeSearch;
