'use client';

import { motion } from 'framer-motion';
import './header.css';

export default function Header() {
  return (
    <motion.div
      className="header-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="header-title">News & Media</h1>
      <p className="header-subtitle">Stay updated with our latest news and media coverage</p>
    </motion.div>
  );
}
