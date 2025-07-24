import React from 'react';
import { motion } from 'framer-motion';
import './MissionSection.css';

const MissionSection = () => (
  <section className="mission-section">
    <motion.div
      className="mission-content"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2>Our Mission</h2>
      <ul>
        <li>Distribute the sacred teachings of Bhagavad Gita in multiple languages.</li>
        <li>Organize seminars, workshops, and spiritual camps.</li>
        <li>Inspire youth with ancient yet relevant spiritual values.</li>
        <li>Create digital resources to spread divine knowledge globally.</li>
      </ul>
    </motion.div>
  </section>
);

export default MissionSection;
