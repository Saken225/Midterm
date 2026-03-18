import React, { useState } from 'react';
import './AddMovieForm.css';

function AddMovieForm({ onAddMovie, onCancel }) {
  // Form state - controlled component
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    year: '',
    genre: 'Drama',
    rating: '',
    description: ''
  });

  // Errors state for validation
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    
    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 2) {
      newErrors.title = 'Title must be at least 2 characters';
    }
    
    // Director validation
    if (!formData.director.trim()) {
      newErrors.director = 'Director is required';
    } else if (formData.director.trim().length < 2) {
      newErrors.director = 'Director name must be at least 2 characters';
    }
    
    // Year validation
    const currentYear = new Date().getFullYear();
    if (!formData.year) {
      newErrors.year = 'Year is required';
    } else if (formData.year < 1895 || formData.year > currentYear + 1) {
      newErrors.year = `Year must be between 1895 and ${currentYear + 1}`;
    }
    
    // Rating validation
    if (!formData.rating) {
      newErrors.rating = 'Rating is required';
    } else if (formData.rating < 0 || formData.rating > 10) {
      newErrors.rating = 'Rating must be between 0 and 10';
    }
    
    // Description validation (optional but with min length if provided)
    if (formData.description && formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters if provided';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validate();
    
    // If there are errors, set them and stop
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Create new movie object
    const newMovie = {
      id: Date.now(), 
      title: formData.title.trim(),
      director: formData.director.trim(),
      year: parseInt(formData.year),
      genre: formData.genre,
      rating: parseFloat(formData.rating),
      description: formData.description.trim() || 'No description provided.',
      poster: `https://via.placeholder.com/300x450/667eea/ffffff?text=${encodeURIComponent(formData.title.substring(0, 20))}`,
      isFavorite: false
    };
    
    // Call parent function to add movie
    onAddMovie(newMovie);
    
    // Reset form
    setFormData({
      title: '',
      director: '',
      year: '',
      genre: 'Drama',
      rating: '',
      description: ''
    });
    
    setErrors({});
    
    // Close form if onCancel provided
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="add-movie-form-container">
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>🎬 Add New Movie</h2>
          {onCancel && (
            <button 
              type="button" 
              className="close-button"
              onClick={onCancel}
            >
              ✕
            </button>
          )}
        </div>

        <div className="form-body">
          {/* Title Field */}
          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter movie title"
              className={errors.title ? 'error-input' : ''}
            />
            {errors.title && (
              <span className="error-message"> {errors.title}</span>
            )}
          </div>

          {/* Director Field */}
          <div className="form-group">
            <label htmlFor="director">
              Director <span className="required">*</span>
            </label>
            <input
              type="text"
              id="director"
              name="director"
              value={formData.director}
              onChange={handleChange}
              placeholder="Enter director name"
              className={errors.director ? 'error-input' : ''}
            />
            {errors.director && (
              <span className="error-message"> {errors.director}</span>
            )}
          </div>

          <div className="form-row">
            {/* Year Field */}
            <div className="form-group">
              <label htmlFor="year">
                Year <span className="required">*</span>
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2024"
                min="1895"
                max={new Date().getFullYear() + 1}
                className={errors.year ? 'error-input' : ''}
              />
              {errors.year && (
                <span className="error-message"> {errors.year}</span>
              )}
            </div>

            {/* Genre Field */}
            <div className="form-group">
              <label htmlFor="genre">
                Genre <span className="required">*</span>
              </label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
              >
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Crime">Crime</option>
                <option value="Animation">Animation</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
          </div>

          {/* Rating Field */}
          <div className="form-group">
            <label htmlFor="rating">
              Rating (0-10) <span className="required">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="8.5"
              min="0"
              max="10"
              className={errors.rating ? 'error-input' : ''}
            />
            {errors.rating && (
              <span className="error-message"> {errors.rating}</span>
            )}
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label htmlFor="description">
              Description (optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the movie..."
              rows="4"
              className={errors.description ? 'error-input' : ''}
            />
            {errors.description && (
              <span className="error-message"> {errors.description}</span>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          {onCancel && (
            <button 
              type="button" 
              className="cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
          <button type="submit" className="submit-button">
            ➕ Add Movie
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;
