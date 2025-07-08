// src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <h1>Nourish Minds & Souls: Sponsor Prasadam for Gita Gieo</h1>
          <p>Support the distribution of Bhagavad Gita and sacred meals to students across India</p>
          <a href="#donate" className="btn">Donate Now</a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;