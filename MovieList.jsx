// ============================================
// MovieList Component
// Displays grid of movie cards
// ============================================

import React from 'react';
import './MovieList.css';
import MovieCard from '../cards/MovieCard';

function MovieList({ movies, onMovieClick, onToggleFavorite, onDeleteMovie }) {
  // If no movies
  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <div className="no-movies-icon">🎬</div>
        <h2>No movies found</h2>
        <p>Try adjusting your search or filter, or add a new movie!</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieClick}
            onToggleFavorite={onToggleFavorite}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </div>

      <div className="movies-count">
        Showing {movies.length} {movies.length === 1 ? 'movie' : 'movies'}
      </div>
    </div>
  );
}

export default MovieList;
