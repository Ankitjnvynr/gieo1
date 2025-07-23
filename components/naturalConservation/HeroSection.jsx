"use client";
import React from 'react';
import Image from 'next/image';
import './page4.css';

const GioGitaHero = () => {
  return (
    <div className="gio-hero">
      {/* Main Hero Section */}
      <section className="hero-main">
        <div className="hero-content">
          <h1>NATURE CONSERVATION</h1>
          <h2>Preserving Sacred Ecosystems</h2>
          <p>
            We provide our best services to protect nature and always strive to achieve 
            harmony between spiritual values and environmental sustainability.
          </p>
          
        </div>
        
        <div className="hero-image">
          <Image
            src="/assets/images/backgrounds/ved.jpg"
            alt="Sacred Nature Conservation"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </section>

      {/* Services Highlights */}
      <div className="services-highlights">
        <div className="highlight-item">
          <strong>SACRED GROVES:</strong>  
          <span>Conservation Services</span>
        </div>
        <div className="highlight-item">
          <strong>ECO GARDENS:</strong>  
          <span>Temple Landscaping</span>
        </div>
        <div className="highlight-item">
          <strong>AYURVEDIC PLANTS:</strong>  
          <span>Herbal Nursery</span>
        </div>
        <div className="highlight-item">
          <strong>ORGANIC CARE:</strong>  
          <span>Maintenance Services</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h3>OUR MISSION</h3>
        <h2>Why Choose Gieo Gita!</h2>
        <div className="features-content">
          <p>
            We continue to pursue our spiritual vision in today's complex world, working every day 
            to honor the divine through environmental stewardship. Inspired by the Bhagavad Gita, 
            our approach blends ancient wisdom with modern conservation techniques.
          </p>
          <p>
            Gieo Gita has been the standard for spiritually-conscious conservation since our founding, 
            maintaining sacred landscapes through changing times. Our methods have preserved not only 
            ecosystems but also the spiritual connection between communities and their natural heritage.
          </p>
        </div>
    
      </section>
    </div>
  );
};
export default GioGitaHero;