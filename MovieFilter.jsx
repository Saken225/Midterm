// ============================================
// MovieFilter Component
// Genre filter buttons
// ============================================

import React from 'react';
import './MovieFilter.css';

function MovieFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="movie-filter">
      <h3 className="filter-title">Filter by Genre:</h3>
      
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieFilter;
