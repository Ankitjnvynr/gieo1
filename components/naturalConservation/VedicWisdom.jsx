"use client";
import React from 'react';
import './page4.css';
import { color } from 'framer-motion';

const wisdoms = [
  {
    title: 'Rigveda Wisdom',
    description: 'The Rigveda speaks of harmony between nature and humans. It emphasizes respect for rivers, forests, and all life forms as divine manifestations.',
    image: '/assets/images/backgrounds/rigveda2.jpg',
  },
  {
    title: 'Upanishadic Insights',
    description: 'The Isha Upanishad urges us to enjoy the world without exploitation. It advocates for sustainability and inner balance with nature.',
    image: '/assets/images/backgrounds/rigveda2.jpg',
  },
  {
    title: 'Bhagavad Gita Teachings',
    description: 'Lord Krishna in the Gita explains that all beings are His parts. Protecting nature is a form of devotion and righteous duty (Dharma).',
    image: '/assets/images/backgrounds/rigveda2.jpg',
  },
  {
    title: 'Puranic Narratives',
    description: 'The Puranas narrate stories of divine incarnations who protect nature. They teach us to revere sacred groves and animals as embodiments of the divine.',
    image: '/assets/images/backgrounds/rigveda2.jpg',
  },
  
];

const VedicWisdom = () => {
  return (
    <section className="vedic-section">
        <div className="vedic-header">
          <h2>Ancient Vedic Wisdom</h2>
        
        </div>
      <div className="vedic-container">
        
    
        {wisdoms.map((item, index) => (
          <div
            className="vedic-card"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="card-overlay">
              <div className="vedic-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VedicWisdom;
