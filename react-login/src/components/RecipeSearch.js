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

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
  const handleClearSearch = () => {
=======

  const clearSearch = () => {
>>>>>>> Stashed changes
    setSearchQuery('');
    onSearch('');
  };

>>>>>>> Stashed changes
  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
<<<<<<< Updated upstream
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="rounded-search-bar"
=======
        onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< Updated upstream
=======
        className="rounded-search-bar"
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
