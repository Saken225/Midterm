import React, { useState } from 'react';
import './App.css';
import { moviesData, getGenres } from './data/moviesData';

// Import components - organized structure
import SearchBar from './components/filters/SearchBar';
import MovieFilter from './components/filters/MovieFilter';
import SortButtons from './components/filters/SortButtons';
import MovieList from './components/layout/MovieList';
import Statistics from './components/layout/Statistics';
import AddMovieForm from './components/forms/AddMovieForm';

function App() {
  // All movies
  const [movies, setMovies] = useState(moviesData);
  
  // Search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Selected genre filter
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  // Sort option
  const [currentSort, setCurrentSort] = useState('');
  
  // Show/hide form
  const [showForm, setShowForm] = useState(false);
  
  // Genres list
  const genres = getGenres();

  // EVENT 1: Search change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    console.log('Search query updated:', query);
  };

  // EVENT 2: Genre filter change
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    console.log('Genre filter changed:', genre);
  };

  // EVENT 3: Movie click (show details)
  const handleMovieClick = (movie) => {
    alert(` ${movie.title}\n\n Rating: ${movie.rating}\n Genre: ${movie.genre}\n Year: ${movie.year}\n Director: ${movie.director}\n\n ${movie.description}`);
  };

  // EVENT 4: Toggle favorite
  const handleToggleFavorite = (movieId) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie
      )
    );
  };

  // EVENT 5: Add new movie 
  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
    console.log('Movie added:', newMovie);
    alert(` "${newMovie.title}" has been added successfully!`);
  };

  // EVENT 6: Delete movie 
  const handleDeleteMovie = (movieId) => {
    setMovies(prevMovies => 
      prevMovies.filter(movie => movie.id !== movieId)
    );
    console.log('Movie deleted:', movieId);
  };

  // EVENT 7: Sort change (NEW!)
  const handleSort = (sortOption) => {
    setCurrentSort(sortOption);
    console.log('Sort changed:', sortOption);
  };

  const getFilteredAndSortedMovies = () => {
    let filtered = movies;

    // Filter by genre
    if (selectedGenre !== 'All') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query)
      );
    }

    // Sorting (NEW!)
    if (currentSort) {
      filtered = [...filtered]; // Create copy to avoid mutating state
      
      switch (currentSort) {
        case 'rating-desc':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'rating-asc':
          filtered.sort((a, b) => a.rating - b.rating);
          break;
        case 'year-desc':
          filtered.sort((a, b) => b.year - a.year);
          break;
        case 'year-asc':
          filtered.sort((a, b) => a.year - b.year);
          break;
        case 'title-asc':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'title-desc':
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    }

    return filtered;
  };

  const filteredMovies = getFilteredAndSortedMovies();
  const favoriteCount = movies.filter(m => m.isFavorite).length;

  
  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <h1 className="app-title">
              Movie Explorer
            </h1>
            <p className="app-subtitle">
              Discover, manage, and save your favorite movies
            </p>
            {favoriteCount > 0 && (
              <div className="favorites-badge">
                {favoriteCount} {favoriteCount === 1 ? 'Favorite' : 'Favorites'}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <div className="container">
          
          {/* Add Movie Button */}
          <div className="add-movie-section">
            <button 
              className="toggle-form-button"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '✕ Close Form' : '➕ Add New Movie'}
            </button>
          </div>

          {/* Add Movie Form */}
          {showForm && (
            <AddMovieForm 
              onAddMovie={handleAddMovie}
              onCancel={() => setShowForm(false)}
            />
          )}

          {/* Statistics Component  */}
          <Statistics movies={movies} />

          {/* Search Bar */}
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          {/* Movie Filter */}
          <MovieFilter 
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={handleGenreChange}
          />

          {/* Sort Buttons  */}
          <SortButtons 
            onSort={handleSort}
            currentSort={currentSort}
          />

          {/* Movie List */}
          <MovieList 
            movies={filteredMovies}
            onMovieClick={handleMovieClick}
            onToggleFavorite={handleToggleFavorite}
            onDeleteMovie={handleDeleteMovie}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <p>© 2026 Movie Explorer | Midterm Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
