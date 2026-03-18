import React from 'react';
import './Statistics.css';

function Statistics({ movies }) {
  const totalMovies = movies.length;
  
  // REDUCE #1: Calculate average rating
  const averageRating = movies.length > 0
    ? (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1)
    : 0;
  
  // REDUCE #2: Calculate genre distribution
  const genreDistribution = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});
  
  const topGenre = Object.entries(genreDistribution).length > 0
    ? Object.entries(genreDistribution)
        .sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
    : 'N/A';
  
  // REDUCE #3: Calculate total years span
  const years = movies.map(m => m.year);
  const oldestYear = years.length > 0 ? Math.min(...years) : 0;
  const newestYear = years.length > 0 ? Math.max(...years) : 0;
  const yearsSpan = newestYear - oldestYear;
  
  const favoriteCount = movies.filter(m => m.isFavorite).length;
  
  // REDUCE #4: Calculate highest rated movie
  const highestRated = movies.length > 0
    ? movies.reduce((max, movie) => movie.rating > max.rating ? movie : max, movies[0])
    : null;

  return (
    <div className="statistics">
      <h2 className="statistics-title">📊 Statistics</h2>
      
      <div className="stats-grid">
        {/* Total Movies */}
        <div className="stat-card">
          <div className="stat-icon">🎬</div>
          <div className="stat-value">{totalMovies}</div>
          <div className="stat-label">Total Movies</div>
        </div>
        
        {/* Average Rating */}
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">{averageRating}</div>
          <div className="stat-label">Average Rating</div>
          <div className="stat-detail">
            {movies.length > 0 ? 'Based on all movies' : 'No movies yet'}
          </div>
        </div>
        
        {/* Favorites */}
        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-value">{favoriteCount}</div>
          <div className="stat-label">Favorites</div>
          <div className="stat-detail">
            {favoriteCount > 0 
              ? `${((favoriteCount / totalMovies) * 100).toFixed(0)}% of total`
              : 'No favorites yet'
            }
          </div>
        </div>
        
        {/* Top Genre */}
        <div className="stat-card">
          <div className="stat-icon">🎭</div>
          <div className="stat-value">{topGenre}</div>
          <div className="stat-label">Most Popular Genre</div>
          <div className="stat-detail">
            {topGenre !== 'N/A' 
              ? `${genreDistribution[topGenre]} ${genreDistribution[topGenre] === 1 ? 'movie' : 'movies'}`
              : 'Add movies to see'
            }
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      {movies.length > 0 && (
        <div className="additional-stats">
          <div className="stat-item">
            <span className="stat-item-label">📅 Year Range:</span>
            <span className="stat-item-value">
              {oldestYear} - {newestYear} ({yearsSpan} years)
            </span>
          </div>
          
          {highestRated && (
            <div className="stat-item">
              <span className="stat-item-label">🏆 Highest Rated:</span>
              <span className="stat-item-value">
                {highestRated.title} (⭐ {highestRated.rating})
              </span>
            </div>
          )}
          
          <div className="stat-item">
            <span className="stat-item-label">📂 Genres:</span>
            <span className="stat-item-value">
              {Object.keys(genreDistribution).join(', ') || 'None'}
            </span>
          </div>
        </div>
      )}

      {/* Genre Distribution Chart */}
      {Object.keys(genreDistribution).length > 0 && (
        <div className="genre-chart">
          <h3>Genre Distribution</h3>
          <div className="genre-bars">
            {Object.entries(genreDistribution)
              .sort((a, b) => b[1] - a[1])
              .map(([genre, count]) => {
                const percentage = (count / totalMovies) * 100;
                return (
                  <div key={genre} className="genre-bar-item">
                    <div className="genre-bar-label">
                      <span className="genre-name">{genre}</span>
                      <span className="genre-count">{count}</span>
                    </div>
                    <div className="genre-bar-container">
                      <div 
                        className="genre-bar-fill"
                        style={{ width: `${percentage}%` }}
                      >
                        <span className="genre-percentage">{percentage.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Statistics;
