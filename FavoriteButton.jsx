// ============================================
// FavoriteButton Component
// Reusable favorite toggle button
// ============================================

import React from 'react';
import './FavoriteButton.css';

function FavoriteButton({ isFavorite, onToggle }) {
  // Handle click - EVENT
  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Favorite toggled:', isFavorite ? 'Removed' : 'Added');
    onToggle();
  };

  return (
    <button 
      className={`favorite-btn ${isFavorite ? 'active' : ''}`}
      onClick={handleClick}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;
