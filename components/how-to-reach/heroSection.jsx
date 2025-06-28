// File: src/components/how-to-reach/HeroSection.jsx
"use client";
import React from "react";


const HeroSection = () => {
  const handleScrollToMap = () => {
    const mapSection = document.getElementById("map-section");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">How to Reach GIEO Gita Temple</h1>
        <p className="hero-subtitle">Plan your sacred journey to Kurukshetra</p>
        <button className="hero-cta" onClick={handleScrollToMap}>
           Get Directions
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
