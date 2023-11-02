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
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {
        searchQuery && (
          <button onClick={handleClearSearch}>Clear</button>
        )}
    </div>
  );
}

export default RecipeSearch;
