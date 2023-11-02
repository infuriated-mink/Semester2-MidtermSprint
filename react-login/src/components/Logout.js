import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackToAuthButton() {
  const navigate = useNavigate();

  const handleBackToAuth = () => {
    navigate('/'); 
  };

  return (
    <button onClick={handleBackToAuth} className="logout-button">
      Back to Auth
    </button>
  );
}

export default BackToAuthButton;