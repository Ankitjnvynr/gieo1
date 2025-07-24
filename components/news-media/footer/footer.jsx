'use client';

import { motion } from 'framer-motion';
import './footer.css';

export default function Footer() {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p className="footer-text">© {new Date().getFullYear()} Gieo Gita. All rights reserved.</p>
    </motion.footer>
  );
}
