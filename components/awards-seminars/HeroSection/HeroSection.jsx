// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './HeroSection.module.css';

// const HeroSection = () => {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.heroContent}>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Awards & Seminars
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Celebrating Spiritual Excellence & Learning
//         </motion.p>
//         <motion.button
//           className={styles.heroButton}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Join Our Next Event
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [particles, setParticles] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    // Generate subtle floating particles
    const generated = Array.from({ length: 15 }).map(() => ({
      id: Math.random().toString(36).substring(7),
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      initialX: Math.random() * 100 - 50,
      initialY: Math.random() * 100 - 50,
      animateX: Math.random() * 20 - 10,
      animateY: Math.random() * 20 - 10,
      duration: 20 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className={styles.hero} ref={ref}>
      {/* Parallax Background */}
      <motion.div 
        className={styles.backgroundContainer}
        style={{ 
          y: yBg,
          opacity: opacityBg,
        }}
      >
        <img 
          src="/assets/images/backgrounds/awards-seminars-page/heroimage.png" 
          alt="Mountain landscape" 
          className={styles.backgroundImage}
        />
        <div className={styles.gradientOverlay} />
      </motion.div>

      {/* Subtle floating elements */}
      <div className={styles.particles}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity
            }}
            initial={{ 
              x: p.initialX,
              y: p.initialY,
            }}
            animate={{
              x: [0, p.animateX, 0],
              y: [0, p.animateY, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className={styles.heroContent}
        style={{ y: textY }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.title}
        ><div className={styles.heading}>
          Awards & Seminars
          </div>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={styles.subtitle}
        >
          Celebrating spiritual excellence through knowledge and recognition
        </motion.p>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <p className={styles.scrollText}>Scroll</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;