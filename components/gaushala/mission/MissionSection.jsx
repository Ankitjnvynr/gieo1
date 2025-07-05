

'use client';

import { motion } from 'framer-motion';
import styles from './MissionSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "backOut"
    }
  },
  hover: {
    y: -8,
    transition: { duration: 0.2 }
  }
};

const missionItems = [
  { 
    image: '/assets/images/backgrounds/gao/1.jpg', 
    title: 'Rescue & Rehabilitation', 
    description: 'We provide shelter to abandoned, injured, and retired dairy cows',
  },
  { 
    image: '/assets/images/backgrounds/gao/2.jpg', 
    title: 'Organic Farming', 
    description: 'Using cow products for sustainable agriculture and natural living',
  },
  { 
    image: '/assets/images/backgrounds/gao/3.jpg', 
    title: 'Vedic Education', 
    description: 'Teaching the spiritual importance of cow protection',
  }
];

export default function MissionSection() {
  return (
    <section className={styles.section} id="mission">
      <div className={styles.container}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>Our Sacred Mission</h2>
            <p className={styles.sectionSubtitle}>
              In Vedic culture, the cow is revered as mother and represents the principle of non-violence
            </p>
          </motion.div>
          
          <div className={styles.missionGrid}>
            {missionItems.map((item, i) => (
              <motion.div 
                key={i}
                className={styles.missionCard}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.imageContainer}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={styles.missionImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}