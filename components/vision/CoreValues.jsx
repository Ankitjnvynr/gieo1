import React from 'react';
import { motion } from 'framer-motion';
import './CoreValues.css';

const values = [
  "Spiritual Awakening",
  "Inclusivity",
  "Wisdom Sharing",
  "Service with Compassion",
  "Inner Peace",
];

const CoreValues = () => (
  <section className="core-values-section">
    <motion.div
      className="values-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Our Core Values</h2>
      <div className="value-grid">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            className="value-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {val}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CoreValues;
