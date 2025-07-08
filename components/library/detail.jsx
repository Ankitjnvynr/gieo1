// src/components/BookDetailsModal.jsx
import React, { useEffect } from 'react';
import './detail.css';

const BookDetailsModal = ({ book, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <div 
            className="book-cover-large"
            style={{ backgroundColor: book.coverColor }}
          >
            <img src={book.image} alt={book.title} />
          </div>
          <div className="book-header-info">
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <div className="book-meta-header">
              <span>Category: {book.category}</span>
              <span>★ {book.rating} Rating</span>
              <span>{book.pages} Pages</span>
            </div>
            <div className="book-tags">
              {book.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="book-description">
            <h4>Description</h4>
            <p>{book.longDescription}</p>
          </div>
          
          <div className="book-details-grid">
            <div className="detail-item">
              <span className="detail-label">Publisher:</span>
              <span className="detail-value">{book.publisher}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Language:</span>
              <span className="detail-value">{book.language}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Publication Year:</span>
              <span className="detail-value">{book.publicationYear}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">ISBN:</span>
              <span className="detail-value">{book.isbn}</span>
            </div>
            {book.chapters && (
              <div className="detail-item">
                <span className="detail-label">Chapters:</span>
                <span className="detail-value">{book.chapters}</span>
              </div>
            )}
            {book.verses && (
              <div className="detail-item">
                <span className="detail-label">Verses:</span>
                <span className="detail-value">{book.verses}</span>
              </div>
            )}
          </div>

          {book.Buy && (
              <div className="detail-item">
                <span className="detail-label">Buy:</span>
                <span className="detail-value">{book.Buy}</span>
              </div>
            )}
        </div>
        
        <div className="modal-footer">
          <button className="read-now-btn">Read Now</button>
          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;