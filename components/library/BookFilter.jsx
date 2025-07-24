// // src/components/BookFilter.jsx
import React from 'react';
import './BookFilter.css';

const BookFilter = ({ categories, currentFilter, onFilterChange }) => {
  return (
    <div className="book-filter">
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${currentFilter === category.id ? 'active' : ''}`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookFilter;

