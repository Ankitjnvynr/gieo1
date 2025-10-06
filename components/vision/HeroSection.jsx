// components/VisionMission/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { color, motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 0.5,
        y: (e.clientY / window.innerHeight - 0.5) * 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="vision-hero">
      {/* Background elements */}
      <div className="background-pattern" />
      
      {/* Decorative elements */}
      <div className="decorative-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="decorative-element"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="hero-container">
        {/* Text content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Guiding Light
          </motion.div>
          
          <motion.h1 
            className="hero-title" style={{color:"#5a3816"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Vision <span className="accent-text" >&</span> Mission
          </motion.h1>
          
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          
          <motion.p 
            className="hero-subtitle" style={{color: "#5a3816"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Discover the core values and spiritual foundations that shape our journey toward enlightenment and service to humanity.
          </motion.p>
          
          <motion.div
            className="cta-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button
              className="cta-button"
              whileHover={{ 
                backgroundColor: "rgba(165, 144, 105, 0.1)",
                transform: "translateX(8px)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Purpose
              <span className="button-icon">→</span>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Image section */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        >
          <div className="image-frame">
            <div className="image-placeholder" />
          </div>
          
          <div className="image-decorations">
            <div className="decoration-line" />
            <div className="decoration-dot" />
            <div className="decoration-text">Spiritual Journey</div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="bottom-decoration">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="decorative-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;