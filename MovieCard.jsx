// ============================================
// MovieCard Component (UPDATED for Midterm)
// Added DELETE functionality
// ============================================

import React from 'react';
import './MovieCard.css';
import FavoriteButton from '../common/FavoriteButton';

function MovieCard({ movie, onMovieClick, onToggleFavorite, onDeleteMovie }) {
  // Handle card click
  const handleCardClick = () => {
    console.log('Movie clicked:', movie.title);
    onMovieClick(movie);
  };

  // Handle delete
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent card click
    
    // Confirm before deleting
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      onDeleteMovie(movie.id);
    }
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      {/* Poster */}
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        
        {/* Rating */}
        <div className="movie-rating">
          ⭐ {movie.rating}
        </div>

        {/* Favorite Button */}
        <div className="favorite-button-wrapper" onClick={(e) => e.stopPropagation()}>
          <FavoriteButton 
            isFavorite={movie.isFavorite}
            onToggle={() => onToggleFavorite(movie.id)}
          />
        </div>

        {/* DELETE BUTTON - NEW! */}
        <div className="delete-button-wrapper" onClick={handleDelete}>
          <button className="delete-button" aria-label="Delete movie">
            🗑️
          </button>
        </div>
      </div>

      {/* Movie Info */}
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-genre">{movie.genre}</span>
        </div>

        <p className="movie-description">
          {movie.description.length > 100 
            ? `${movie.description.substring(0, 100)}...` 
            : movie.description
          }
        </p>

        <p className="movie-director">
          <strong>Director:</strong> {movie.director}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
