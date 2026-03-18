// ============================================
// MOVIES DATA - Mock data for Movie Explorer
// ============================================

export const moviesData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    poster: "https://via.placeholder.com/300x450/667eea/ffffff?text=Shawshank",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    isFavorite: false
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Dark+Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    isFavorite: false
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://via.placeholder.com/300x450/4a90e2/ffffff?text=Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    director: "Christopher Nolan",
    isFavorite: false
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    poster: "https://via.placeholder.com/300x450/f5a623/ffffff?text=Pulp+Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    isFavorite: false
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    poster: "https://via.placeholder.com/300x450/7ed321/ffffff?text=Forrest+Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    director: "Robert Zemeckis",
    isFavorite: false
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://via.placeholder.com/300x450/50e3c2/ffffff?text=Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Wachowski Brothers",
    isFavorite: false
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "https://via.placeholder.com/300x450/b8e986/ffffff?text=Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    isFavorite: false
  },
  {
    id: 8,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    poster: "https://via.placeholder.com/300x450/d0021b/ffffff?text=Gladiator",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    director: "Ridley Scott",
    isFavorite: false
  },
  {
    id: 9,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    poster: "https://via.placeholder.com/300x450/8b572a/ffffff?text=Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    isFavorite: false
  },
  {
    id: 10,
    title: "The Lion King",
    year: 1994,
    genre: "Animation",
    rating: 8.5,
    poster: "https://via.placeholder.com/300x450/f8e71c/ffffff?text=Lion+King",
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    director: "Roger Allers",
    isFavorite: false
  }
];

// Get all movies
export const getAllMovies = () => {
  return moviesData;
};

// Get unique genres
export const getGenres = () => {
  const genres = [...new Set(moviesData.map(movie => movie.genre))];
  return ['All', ...genres];
};

// Filter by genre
export const filterByGenre = (genre) => {
  if (genre === 'All') return moviesData;
  return moviesData.filter(movie => movie.genre === genre);
};

// Search movies
export const searchMovies = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return moviesData.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.director.toLowerCase().includes(lowercaseQuery) ||
    movie.genre.toLowerCase().includes(lowercaseQuery)
  );
};
