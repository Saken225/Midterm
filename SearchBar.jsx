// ============================================
// SearchBar Component
// Search input with clear functionality
// ============================================

import React from 'react';
import './SearchBar.css';

function SearchBar({ searchQuery, onSearchChange }) {
  // Handle change - EVENT
  const handleChange = (e) => {
    const value = e.target.value;
    console.log('Search query changed:', value);
    onSearchChange(value);
  };

  // Clear search
  const handleClear = () => {
    console.log('Search cleared');
    onSearchChange('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        
        <input
          type="text"
          className="search-input"
          placeholder="Search movies by title, director, or genre..."
          value={searchQuery}
          onChange={handleChange}
        />

        {searchQuery && (
          <button 
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {searchQuery && (
        <p className="search-results-text">
          Searching for: <strong>{searchQuery}</strong>
        </p>
      )}
    </div>
  );
}

export default SearchBar;
