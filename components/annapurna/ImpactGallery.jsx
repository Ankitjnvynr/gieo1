// src/components/ImpactGallery.jsx
import React from 'react';
import './ImpactGallery.css';

const ImpactGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "assets/annapurna_images/annapurna_5.jpg",
      caption: "Fresh prasadam prepared daily in our kitchens"
    },
    {
      id: 2,
      image: "assets/annapurna_images/annapurna_6.jpg",
      caption: "Nutritious meals prepared with devotion"
    },
    {
      id: 3,
      image: "assets/annapurna_images/annapurna_8.jpg",
      caption: "Volunteers serving meals with a smile"
    },
    {
      id: 4,
      image: "assets/annapurna_images/annapurna_9.jpg",
      caption: "Volunteers distributing prasadam with love"
    }
  ];

  return (
    <section className="section impact-gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Impact in Action</h2>
          <p>See how your support makes a difference</p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="image-wrapper">
                <img src={item.image} alt={item.caption} />
                <div className="image-overlay">
                  <p>{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;