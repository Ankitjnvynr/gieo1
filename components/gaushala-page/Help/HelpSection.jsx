'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from './Modal'; // adjust the path as needed
import styles from './HelpSection.module.css';

// Dynamic import for modal content
const GoshevaContent = dynamic(() => import('./Gosheva/GoshevaPage'), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      staggerChildren: 0.1
    } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const helpOptions = [
  { 
    image: '/assets/images/backgrounds/gao/1.jpg', 
    title: 'Gosheva', 
    description: "Help Cows in your own way", 
    buttonText: 'Learn More',
  },
  { 
    image: '/assets/images/backgrounds/gao/2.jpg', 
    title: 'Volunteer', 
    description: 'Join our team in caring for the cows and maintaining the goshala', 
    buttonText: 'Apply Now',
  },
  { 
    image: '/assets/images/backgrounds/gao/3.jpg', 
    title: 'Organic Products', 
    description: 'Support by purchasing our organic milk, ghee, and fertilizers', 
    buttonText: 'Our Products',
  }
];

export default function HelpSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section} id="help">
      <div className={styles.container}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>How You Can Help</h2>
          <p className={styles.sectionSubtitle}>Your support makes our sacred service possible</p>
          
          <div className={styles.helpGrid}>
            {helpOptions.map((opt, i) => (
              <motion.div 
                key={i}
                className={styles.helpCard}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={opt.image} 
                      alt={opt.title} 
                      className={styles.helpImage}
                      loading="lazy"
                    />
                    {hoveredCard === i && (
                      <div className={styles.imageOverlay}></div>
                    )}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3>{opt.title}</h3>
                  <p>{opt.description}</p>

                  {/* Conditional Button Logic */}
                  {opt.title === 'Gosheva' ? (
                    <motion.button 
                      className={styles.secondaryBtn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setModalOpen(true)}
                    >
                      {opt.buttonText}
                    </motion.button>
                  ) : (
                    <motion.button 
                      className={styles.secondaryBtn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {opt.buttonText}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal Popup for Gosheva */}
        <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
          <GoshevaContent />
        </Modal>
      </div>
    </section>
  );
}
