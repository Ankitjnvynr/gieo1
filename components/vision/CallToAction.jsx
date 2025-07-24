import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => (
  <section className="cta-section">
    <motion.div
      className="cta-container"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Join Our Mission</h2>
      <p>
        Be a part of the sacred movement to spread the light of Gita. Your support can bring transformation to millions.
      </p>
      <button className="cta-button">Support Now</button>
    </motion.div>
  </section>
);

export default CallToAction;
