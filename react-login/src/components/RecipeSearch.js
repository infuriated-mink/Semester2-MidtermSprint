import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../css/RecipeSearch.css';

function RecipeSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="rectangle-whatever">
      <input
        className="searchbar rounded-search-bar"
        type="text"
        placeholder="Looking for something else?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleSearch} size="lg" variant="success" className="rounded-serach-button">Search</Button>
    </div>
  );
}

export default RecipeSearch;



// reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
