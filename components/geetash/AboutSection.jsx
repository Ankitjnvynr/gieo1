import React from 'react';
import { motion } from 'framer-motion';
import './page3.css';

const AboutSection = () => {
  return (
    <section className="divine-section">
      {/* Floating Devanagari Characters */}
      <div className="sanskrit-bg">
        {['ॐ', 'ग', 'ी', 'ता', 'क', 'ृष', '्ण'].map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              fontSize: `${3 + (i * 0.5)}rem`
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="divine-container">
        {/* Left Column - Sacred Text */}
        <motion.div 
          className="wisdom-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="divine-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="title-sanskrit">श्रीमद भागवत गीता </span>
            <span className="title-english">Essence of Divine Wisdom</span>
            <div className="title-underline"></div>
          </motion.h2>
          
          <motion.div 
            className="gita-quote-container"
            whileHover={{ scale: 1.02 }}
          >
            <div className="quote-symbol">❝</div>
            <blockquote className="divine-quote">
              "The Bhagavad Gita is the most systematic statement of spiritual evolution..."
              <footer>- Sri Aurobindo</footer>
            </blockquote>
          </motion.div>
          
          <motion.div 
            className="wisdom-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              A 700-verse dialogue between Lord Krishna and Prince Arjuna, the Gita presents 
              a synthesis of Dharma, Bhakti, and the yogic paths to moksha. Its teachings 
              transcend time, offering guidance for both spiritual and material success.
            </p>
          </motion.div>
      </motion.div>
        {/* Right Column - Sacred Image (without animation) */}
        <div className="image-column">
          <div className="sacred-frame">
            <img 
              src="/assets/images/backgrounds/krijun1.jpg" 
              alt="Krishna and Arjuna" 
              className="divine-image"
            />
            <div className="frame-glow"></div>
            <div className="frame-border"></div>
          </div>
          
          <div className="scripture-reference">
            <motion.div 
              className="reference-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            />
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;