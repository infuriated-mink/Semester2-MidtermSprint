import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function BackToAuthButton() {
  const navigate = useNavigate();

  const handleBackToAuth = () => {
    navigate('/'); 
  };

  return (
    <button onClick={handleBackToAuth} className="add-recipe-button">
      Logout
    </button>
  );
}

export default BackToAuthButton;
