'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './herosection.css';

export default function HeroSection() {
  const articles = [
    {
      image: '/assets/images/backgrounds/gpic.jpg',
      title: 'Mindfulness in the Modern World',
      summary: 'Explore how mindfulness practices are transforming daily life.',
      link: '#',
      category: 'Wellness'
    },
    // ... (keep other articles the same)
     {
      image: '/assets/images/backgrounds/112.jpg',
      title: 'Gieo Gita\'s Youth Programs',
      summary: 'Empowering youth through values and holistic education.',
      link: '#',
      category: 'Education'
    },
    {
      image: '/assets/images/backgrounds/gpic.jpg',
      title: 'Community Service Drive 2025',
      summary: 'Join our upcoming events supporting local communities.',
      link: '#',
      category: 'Events'
    },
    {
      image: '/assets/images/backgrounds/gpic.jpg',
      title: 'Wellness Retreat Highlights',
      summary: 'Glimpses from our recent mindfulness and yoga retreat.',
      link: '#',
      category: 'Wellness'
    },
    {
      image: '/assets/images/backgrounds/gpic.jpg',
      title: 'Spiritual Talks and Workshops',
      summary: 'Engage in upcoming workshops by renowned spiritual mentors.',
      link: '#',
      category: 'Events'
    },
    {
      image: '/assets/images/backgrounds/gpic.jpg',
      title: 'Collaborations with NGOs',
      summary: 'Partnering with NGOs to expand our community services.',
      link: '#',
      category: 'Community'
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  }, [articles.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  }, [articles.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isHovered]);

  return (
    <section className="hero-container" aria-label="Featured articles carousel">
      <div 
        className="slideshow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="nav-button prev" onClick={goToPrev} aria-label="Previous slide">
          &lsaquo;
        </button>
        
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.article
            key={currentIndex}
            className="article-card"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
            transition={{ 
              type: 'spring', 
              stiffness: 300,
              damping: 30,
              mass: 0.5,
              restDelta: 0.0001
            }}
          >
            <div className="image-container">
              <img 
                src={articles[currentIndex].image} 
                alt={articles[currentIndex].title} 
                className="article-image" 
                loading="lazy"
              />
            </div>
            <div className="article-content">
              <span className="article-category">{articles[currentIndex].category}</span>
              <h2 className="article-title">{articles[currentIndex].title}</h2>
              <p className="article-summary">{articles[currentIndex].summary}</p>
              <a href={articles[currentIndex].link} className="read-link">
                Read More <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.article>
        </AnimatePresence>
        
        <button className="nav-button next" onClick={goToNext} aria-label="Next slide">
          &rsaquo;
        </button>

        <div className="pagination-dots">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}