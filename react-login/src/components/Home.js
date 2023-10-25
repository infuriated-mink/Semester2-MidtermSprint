import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // You can use the "navigate" function to programmatically navigate to AddItem.js
  const handleNavigateToAddItem = () => {
    navigate("/add-item"); // This corresponds to the route path in App.js
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of your home page.</p>

      {/* Add a button to navigate to AddItem.js */}
      <button onClick={handleNavigateToAddItem}>Go to Add Item</button>
    </div>
  );
}

export default Home;
