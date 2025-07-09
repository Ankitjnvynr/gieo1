"use client";
import React, { useEffect, useRef } from "react";
import "./page1.css";

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    // Parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Floating particles
    const particles = [];
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    heroRef.current?.appendChild(particleContainer);

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.setProperty('--delay', `${Math.random() * 2}s`);
      particle.style.setProperty('--duration', `${10 + Math.random() * 10}s`);
      particle.style.setProperty('--size', `${Math.random() * 6 + 4}px`);
      particle.style.setProperty('--start-x', `${Math.random() * 100}%`);
      particle.style.setProperty('--start-y', `${Math.random() * 100}%`);
      particleContainer.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      particleContainer.remove();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section"
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 
          ref={titleRef}
          className="hero-title"
        >
          How to Reach GIEO Gita Temple
        </h1>
        <p 
          ref={subtitleRef}
          className="hero-subtitle"
        >
          Plan your sacred journey to Kurukshetra
        </p>
      </div>
    </section>
  );
};

export default HeroSection;