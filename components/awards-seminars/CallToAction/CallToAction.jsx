// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './CallToAction.module.css';

// const CallToAction = () => {
//   return (
//     <motion.section
//       className={styles.cta}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       <h2>Ready to Join Us in this Journey of Wisdom & Service?</h2>
//       <p>Be part of our growing community dedicated to spiritual growth and learning</p>
//       <div className={styles.ctaButtons}>
//         <motion.button
//           className={styles.ctaButton}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Nominate for Awards
//         </motion.button>
//         <motion.button
//           className={styles.ctaButton}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Attend a Seminar
//         </motion.button>
//       </div>
//     </motion.section>
//   );
// };

// export default CallToAction;



import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta-container">
        <div className="cta-content">
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Embark on Your <span>Spiritual Journey</span> With Us
          </motion.h2>
          
          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join our community of seekers dedicated to wisdom, growth, and service
          </motion.p>
          
          <motion.div 
            className="cta-decoration"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="decoration-line"></div>
            <div className="decoration-symbol">ॐ</div>
            <div className="decoration-line"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;