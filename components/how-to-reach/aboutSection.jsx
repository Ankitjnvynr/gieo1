"use client";
import React, { useEffect, useRef, useState } from "react";
import "./page1.css";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionPosition = sectionRef.current.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < scrollPosition) {
          sectionRef.current.classList.add('active');
        }
      }
    };

    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        imageRef.current.style.transform = `
          perspective(1000px)
          rotateX(${y * 10}deg)
          rotateY(${-x * 10}deg)
          scale(${isHovering ? 1.03 : 1})
        `;
        
        const shadowX = x * 20;
        const shadowY = y * 20;
        imageRef.current.style.boxShadow = `
          ${-shadowX}px ${-shadowY}px 30px rgba(0, 0, 0, 0.2),
          ${shadowX}px ${shadowY}px 40px rgba(212, 175, 55, 0.2)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              <span className="title-line"><span className="title-word">About</span> <span className="title-word">GIEO</span></span>
              <span className="title-line"><span className="title-word">Gita</span> <span className="title-word">Temple</span></span>
            </h2>
            
            <div className="about-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">
                <svg viewBox="0 0 100 100" className="om-symbol">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" className="om-path" />
                  <path d="M30 50 Q50 30 70 50 Q50 70 30 50 Z" className="om-path" />
                </svg>
              </div>
              <div className="divider-line"></div>
            </div>
            
            <div className="description-container">
              <p className="about-description">
                The <span className="highlight-word">GIEO Gita Temple</span> in Kurukshetra is a beacon of spiritual wisdom,
                dedicated to spreading the eternal teachings of the Bhagavad Gita. 
              </p>
              <p className="about-description">
                It serves as a vibrant center for <span className="highlight-word">learning</span>, <span className="highlight-word">meditation</span>, and <span className="highlight-word">self-discovery</span>.
              </p>
              <p className="about-description">
                Rooted in the timeless Vedic tradition, the temple blends <span className="highlight-word">spiritual heritage</span> 
                 with <span className="highlight-word">modern technology</span> to engage devotees from all walks of life.
              </p>
            </div>
            
           
          </div>
          
          <div 
            className="about-image" 
            ref={imageRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img 
              src="/assets/images/backgrounds/imagest.jpg"
              alt="GIEO Gita Temple" 
              className="temple-img"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Sacred Space</span>
                <span className="overlay-text">Divine Wisdom</span>
              </div>
            </div>
            <div className="image-frame"></div>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`floating-element floating-${i % 2 ? 'lotus' : 'om'}`}
            style={{
              '--delay': `${i * 0.5}s`,
              '--start-x': `${Math.random() * 80 + 10}%`,
              '--start-y': `${Math.random() * 80 + 10}%`,
              '--duration': `${8 + Math.random() * 4}s`
            }}
          >
            {i % 2 ? '🌸' : '🕉️'}
          </div>
        ))}
      </div>
      
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              '--size': `${Math.random() * 0.5 + 0.2}rem`,
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${15 + Math.random() * 10}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;