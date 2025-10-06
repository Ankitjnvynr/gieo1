// // src/components/BookCard.jsx
// import React, { useState } from 'react';
// import './BookCard.css';

// const BookCard = ({ book }) => {
//   const [flipped, setFlipped] = useState(false);
  
//   return (
//     <div 
//       className={`book-card ${flipped ? 'flipped' : ''} ${book.featured ? 'featured' : ''}`}
//       onClick={() => setFlipped(!flipped)}
//     > 
//       <div className="book-inner">
//         <div className="book-front">
//           <div 
//             className="book-cover"
//             style={{ 
//               backgroundImage: `url(${book.image})`,
//               backgroundColor: book.coverColor 
//             }}
//           >
//             <div className="book-info">
//               <div className="book-title">{book.title}</div>
//               <div className="book-author">{book.author}</div>
//             </div>
//           </div>
//           <div className="book-footer">
//             <span className="book-category">{book.category}</span>
//             <div className="flip-hint">Click to flip</div>
//           </div>
//         </div>
        
//         <div className="book-back">
//           <div className="book-description">
//             <h3>{book.title}</h3>
//             <p>{book.description}</p>
//             <div className="book-meta">
//               <span>By {book.author}</span>
//               <span>{book.category}</span>
//             </div>
//           </div>
//           <div className="book-footer">
//             <button className="read-btn">Read Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;



// src/components/BookCard.jsx
// import React, { useState } from 'react';
// import './BookCard.css';

// const BookCard = ({ book, onSelect }) => {
//   const [flipped, setFlipped] = useState(false);
  
//   const handleClick = () => {
//     if (!flipped) {
//       setFlipped(true);
//     }
//   };
  
//   const handleViewDetails = (e) => {
//     e.stopPropagation();
//     onSelect(book);
//   };

//   return (
//     <div 
//       className={`book-card ${flipped ? 'flipped' : ''} ${book.featured ? 'featured' : ''}`}
//       onClick={handleClick}
//     > 
//       <div className="book-inner">
//         <div className="book-front">
//           <div 
//             className="book-cover"
//             style={{ 
//               backgroundImage: `url(${book.image})`,
//               backgroundColor: book.coverColor 
//             }}
//           >
//             <div className="book-info">
//               <div className="book-title">{book.title}</div>
//               <div className="book-author">{book.author}</div>
//             </div>
//           </div>
//           <div className="book-footer">
//             <span className="book-category">{book.category}</span>
//             <div className="flip-hint">Click for details</div>
//           </div>
//         </div>
        
//         <div className="book-back">
//           <div className="book-description">
//             <h3>{book.title}</h3>
//             <p>{book.description}</p>
//             <div className="book-meta">
//               <span>{book.pages} pages</span>
//               <span>★ {book.rating}</span>
//             </div>
//           </div>
//           <div className="book-footer">
//             <button 
//               className="view-details-btn"
//               onClick={handleViewDetails}
//             >
//               View Full Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

import React, { useState } from 'react';
import './BookCard.css';

const BookCard = ({ book, onSelect }) => {
  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevent any parent event handlers
    onSelect(book);
  };

  return (
    <div 
      className={`book-card ${book.featured ? 'featured' : ''}`}
    > 
      <div className="book-inner">
        <div className="book-front">
          <div 
            className="book-cover"
            style={{ 
              backgroundImage: `url(${book.image})`,
              backgroundColor: book.coverColor,
              

            }}
          >
            <div className="book-info">
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
            </div>
          </div>
          <div className="book-footer">
            <span className="book-category">{book.category}</span>
            <div className="flip-hint">Hover for details</div>
          </div>
        </div>
        
        <div className="book-back">
          <div className="book-description">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <div className="book-meta">
              <span>{book.pages} pages</span>
              <span>★ {book.rating}</span>
            </div>
          </div>
          <div className="book-footer">
            <button 
              className="view-details-btn"
              onClick={handleViewDetails}
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookCard;