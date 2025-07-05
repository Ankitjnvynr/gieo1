// 'use client';

// import { motion } from 'framer-motion';
// import styles from './StatsSection.module.css';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const statsData = [
//   { value: '200+', label: 'Cows Protected' },
//   { value: '15', label: 'Years of Service' },
//   { value: '50+', label: 'Volunteers' },
//   { value: '1000+', label: 'Supporters Worldwide' }
// ];

// export default function StatsSection() {
//   return (
//     <section className={`${styles.section} ${styles.statsSection}`}>
//       <div className={styles.container}>
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//           <h2 className={styles.sectionTitle}>Our Impact</h2>
//           <div className={styles.statsGrid}>
//             {statsData.map((stat, i) => (
//               <motion.div key={i} className={styles.statCard} variants={fadeInUp}>
//                 <h3>{stat.value}</h3>
//                 <p>{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './StatsSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    y: -5,
    scale: 1.03,
    transition: { duration: 0.2 },
  },
};

const statsData = [
  {
    value: '200+',
    label: 'Cows Protected',
    
    description: 'Sacred cows given sanctuary and care',
  },
  {
    value: '15',
    label: 'Years of Service',
    
    description: 'Dedicated to dharma and compassion',
  },
  {
    value: '50+',
    label: 'Volunteers',
   
    description: 'Devotees serving selflessly',
  },
  {
    value: '1000+',
    label: 'Supporters Worldwide',
    
    description: 'Global community supporting our mission',
  },
];

export default function StatsSection() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className={`${styles.section} ${styles.statsSection}`} id="stats">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp}>
            <h2 className={styles.sectionTitle}>Our Impact</h2>
            <p className={styles.sectionSubtitle}>
              Numbers that reflect our sacred service to Gau Mata
            </p>
          </motion.div>

          <div className={styles.statsGrid}>
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.statCard}
                variants={statVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredStat(i)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                  <div
                    className={`${styles.statDescription} ${
                      hoveredStat === i ? styles.visible : ''
                    }`}
                  >
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
