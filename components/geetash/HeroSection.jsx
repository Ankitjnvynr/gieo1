'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './page3.css';

const HeroSection = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false); 

  // Set mounted to true only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background animation
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        backgroundPosition: '0% 0%',
        transition: { duration: 0 }
      });
      await controls.start({
        backgroundPosition: '100% 100%',
        transition: { duration: 30, ease: 'linear', repeat: Infinity }
      });
    };
    sequence();
  }, [controls]);

  return (
    <motion.section
      className="hero-section"
      animate={controls}
      style={{ backgroundPositionY: `${scrollY * 0.5}px` }}
    >
      {/* ✅ Render particles only on client to avoid hydration mismatch */}
      <div className="particles-container">
        {mounted &&
          [...Array(20)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const scale = Math.random() * 0.5 + 0.5;

            return (
              <motion.div
                key={i}
                className="particle"
                initial={{ opacity: 0, x, y, scale }}
                animate={{
                  opacity: [0, 0.6, 0],
                  x: x + Math.random() * 10,
                  y: y + 100 + Math.random() * 10,
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }
                }}
              />
            );
          })}
      </div>

      <div className="hero-content">
        <motion.div
          className="title-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            श्रीमद्भगवद्गीता
            <motion.span
              className="title-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Eternal Wisdom for Every Soul
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#shlokas"
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
          >
            Read Shlokas
            <motion.span
              className="button-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="/assets/pdf/geetashlok.pdf"
            className="btn-secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            download
          >
            Download PDF
            <motion.span
              className="button-download"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
