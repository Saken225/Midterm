# Movie Explorer - Midterm Project

## Project Information

**Course:** Front-End Development  
**Project:** Midterm - React SPA Application  
**Student:** Saken  
**Date:** March 2026  
**Grade:** 34 points



## 📋 Project Description

**Movie Explorer** is a comprehensive React Single Page Application (SPA) that allows users to discover, manage, and organize their favorite movies. The application demonstrates mastery of React fundamentals, JavaScript ES6+ features, component architecture, state management, form handling, and dynamic data rendering.



## ✨ Features

### Core Functionality
-  **Search Movies** - Real-time search by title, director, or genre
-  **Filter by Genre** - Filter movies by Drama, Action, Sci-Fi, Crime, Animation, etc.
-  **Sort Movies** - Sort by rating, year, or title (ascending/descending)
-  **Favorites System** - Add/remove movies from favorites with animated heart
-  **Add Movies** - Create new movie entries with comprehensive form
-  **Delete Movies** - Remove movies from the collection
-  **Statistics Dashboard** - View analytics about your movie collection
-  **Dynamic UI** - Real-time updates based on user interactions

### User Interface
-  Beautiful gradient design with purple theme
-  Hover effects and smooth animations
-  Fully responsive (desktop, tablet, mobile)
-  Accessible (ARIA labels, keyboard navigation)
-  Clean, intuitive layout


## 📁 Project Structure

```
movie-explorer/
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── MovieCard.jsx
│   │   │   └── MovieCard.css
│   │   ├── common/
│   │   │   ├── FavoriteButton.jsx
│   │   │   └── FavoriteButton.css
│   │   ├── filters/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.css
│   │   │   ├── MovieFilter.jsx
│   │   │   ├── MovieFilter.css
│   │   │   ├── SortButtons.jsx
│   │   │   └── SortButtons.css
│   │   ├── forms/
│   │   │   ├── AddMovieForm.jsx
│   │   │   └── AddMovieForm.css
│   │   └── layout/
│   │       ├── MovieList.jsx
│   │       ├── MovieList.css
│   │       ├── Statistics.jsx
│   │       └── Statistics.css
│   ├── data/
│   │   └── moviesData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── README.md
```




##  Key Features Demonstration

### 1. Search Functionality
```javascript
const handleSearchChange = (query) => {
  setSearchQuery(query);
};

// Filters movies in real-time as user types
filtered.filter(movie =>
  movie.title.toLowerCase().includes(query) ||
  movie.director.toLowerCase().includes(query)
);
```

### 2. Add Movie Form
```javascript
const handleAddMovie = (newMovie) => {
  setMovies(prevMovies => [...prevMovies, newMovie]);
  alert(` "${newMovie.title}" has been added!`);
};
```

### 3. Delete Movie
```javascript
const handleDeleteMovie = (movieId) => {
  setMovies(prevMovies => 
    prevMovies.filter(movie => movie.id !== movieId)
  );
};
```

### 4. Statistics with Reduce
```javascript
// Calculate average rating using reduce
const averageRating = movies.reduce((sum, movie) => 
  sum + movie.rating, 0
) / movies.length;

// Genre distribution using reduce
const genreDistribution = movies.reduce((acc, movie) => {
  acc[movie.genre] = (acc[movie.genre] || 0) + 1;
  return acc;
}, {});
```

### 5. Sorting
```javascript
const handleSort = (sortOption) => {
  switch (sortOption) {
    case 'rating-desc':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'year-desc':
      filtered.sort((a, b) => b.year - a.year);
      break;
    // ... more cases
  }
};
```

