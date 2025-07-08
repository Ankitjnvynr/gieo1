// src/components/LibraryHeader.jsx
import React, { useEffect } from 'react';
import './LibraryHeader.css';
// import gitaPattern from '../assets/gita_pattern.jpg'; // Import your pattern asset

const LibraryHeader = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.deco-circle');
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <header className="library-header">
      <div className="hero-image-overlay"></div>
      <div className="header-content">
        <h1 className="title-animate">GIEO GITA LIBRARY</h1>
        <p className="subtitle-animate">
          Discover timeless wisdom and spiritual insights through our curated collection of sacred texts and commentaries
        </p>
      </div>
      <div className="header-decoration">
        <div className="deco-circle"></div>
        <div className="deco-circle"></div>
        <div className="deco-circle"></div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </header>
  );
};

export default LibraryHeader;

