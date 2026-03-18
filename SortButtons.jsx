// ============================================
// SortButtons Component
// Sorting functionality for movies
// ============================================

import React from 'react';
import './SortButtons.css';

function SortButtons({ onSort, currentSort }) {
  const sortOptions = [
    { value: 'rating-desc', label: '⭐ Rating: High to Low', icon: '⭐' },
    { value: 'rating-asc', label: '⭐ Rating: Low to High', icon: '⭐' },
    { value: 'year-desc', label: '📅 Year: Newest First', icon: '📅' },
    { value: 'year-asc', label: '📅 Year: Oldest First', icon: '📅' },
    { value: 'title-asc', label: '🔤 Title: A-Z', icon: '🔤' },
    { value: 'title-desc', label: '🔤 Title: Z-A', icon: '🔤' },
  ];

  return (
    <div className="sort-buttons">
      <h3 className="sort-title">Sort by:</h3>
      <div className="sort-options">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            className={`sort-button ${currentSort === option.value ? 'active' : ''}`}
            onClick={() => onSort(option.value)}
          >
            <span className="sort-icon">{option.icon}</span>
            <span className="sort-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SortButtons;
