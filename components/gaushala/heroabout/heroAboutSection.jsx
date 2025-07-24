
// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import styles from './heroAboutSection.module.css';
// import Image from 'next/image';
// import HelpSection from '../Help/HelpSection';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// const featureList = [
//   {
//     title: 'Compassionate Care',
//     description: 'Our team provides daily care and medical attention to every cow.',
//   },
//   {
//     title: 'Volunteer Programs',
//     description: 'Join us to experience seva (selfless service) and deepen your connection to nature.',
//   },
//   {
//     title: 'Vedic Traditions',
//     description: 'We follow ancient practices to honor and protect these sacred animals.',
//   },
//   {
//     title: 'Sustainable Living',
//     description: 'Learn about organic farming and cow-based agriculture practices.',
//   },
// ];

// export default function HeroAboutSectionEnhanced() {
//   const [activeFeature, setActiveFeature] = useState(0);

//   return (
//     <div className={styles.mainContainer}>
//       <section className={styles.heroSection} aria-labelledby="hero-heading">
//         <div className={styles.heroOverlay} aria-hidden="true">
//           <Image
//             src="/assets/images/backgrounds/gao/1.jpg"
//             alt="Hero Background"
//             fill
//             className={styles.heroImage}
//             priority
//             style={{ objectFit: 'cover' }}
//           />
//         </div>
//         <div className={styles.container}>
//           <motion.div
//             className={styles.heroContent}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//             variants={fadeInUp}
//           >
//             <motion.h1
//               id="hero-heading"
//               className={styles.heroTitle}
//               whileHover={{ scale: 1.02 }}
//             >
//               Protecting Cows, Preserving Dharma
//             </motion.h1>
//             <p className={styles.heroSubtitle}>
//               Join our mission to provide sanctuary and care for cows according to Vedic principles.
//             </p>
//             <div className={styles.heroButtons}>
//               <motion.button
//                 className={styles.primaryBtn}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Support Our Goshala
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className={styles.aboutSection} aria-labelledby="about-heading">
//         <div className={`${styles.container} ${styles.aboutWrapper}`}>
//           <motion.div
//             className={styles.aboutGrid}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//             variants={fadeInUp}
//           >
//             <div className={styles.aboutMedia}>
//               <div className={styles.aboutImage}>
//                 <Image
//                   src="/assets/images/backgrounds/gpic.jpg"
//                   alt="Cows grazing peacefully in the goshala sanctuary"
//                   width={600}
//                   height={400}
//                   className={styles.imagePlaceholder}
//                   loading="lazy"
//                 />
//               </div>
//               <div className={styles.statsCard}>
//                 <div className={styles.statItem}>
//                   <span className={styles.statNumber}>500+</span>
//                   <span className={styles.statLabel}>Cows Protected</span>
//                 </div>
//                 <div className={styles.statItem}>
//                   <span className={styles.statNumber}>24/7</span>
//                   <span className={styles.statLabel}>Care Provided</span>
//                 </div>
//               </div>
//             </div>

//             <div className={styles.aboutContent}>
//               <h2 id="about-heading">Our Sacred Mission</h2>
//               <p>
//                 Goshala is devoted to rescuing, rehabilitating, and serving cows with love and care.
//                 We follow the Vedic traditions to preserve the sanctity of life and build a more
//                 compassionate world.
//               </p>
//               <div className={styles.featuresContainer}>
//                 <div className={styles.featureTabs}>
//                   {featureList.map((feature, index) => (
//                     <button
//                       key={index}
//                       className={`${styles.featureTab} ${
//                         activeFeature === index ? styles.active : ''
//                       }`}
//                       onClick={() => setActiveFeature(index)}
//                     >
//                       {feature.title}
//                     </button>
//                   ))}
//                 </div>
//                 <div className={styles.featureContent}>
//                   <h3>{featureList[activeFeature].title}</h3>
//                   <p>{featureList[activeFeature].description}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import styles from './heroAboutSection.module.css';
import Image from 'next/image';
import HelpSection from '../../gaushala-page/Help/HelpSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const featureList = [
  {
    title: 'Compassionate Care',
    description: 'Our team provides daily care and medical attention to every cow.',
  },
  {
    title: 'Volunteer Programs',
    description: 'Join us to experience seva (selfless service) and deepen your connection to nature.',
  },
  {
    title: 'Vedic Traditions',
    description: 'We follow ancient practices to honor and protect these sacred animals.',
  },
  {
    title: 'Sustainable Living',
    description: 'Learn about organic farming and cow-based agriculture practices.',
  },
];

export default function HeroAboutSectionEnhanced() {
  const [activeFeature, setActiveFeature] = useState(0);
  const helpSectionRef = useRef(null); // Ref to HelpSection

  const scrollToHelpSection = () => {
    helpSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.mainContainer}>
      {/* HERO SECTION */}
      <section className={styles.heroSection} aria-labelledby="hero-heading">
        <div className={styles.heroOverlay} aria-hidden="true">
          <Image
            src="/assets/images/backgrounds/gao/1.jpg"
            alt="Hero Background"
            fill
            className={styles.heroImage}
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <motion.h1
              id="hero-heading"
              className={styles.heroTitle}
              whileHover={{ scale: 1.02 }}
            >
              Protecting Cows, Preserving Dharma
            </motion.h1>
            <p className={styles.heroSubtitle}>
              Join our mission to provide sanctuary and care for cows according to Vedic principles.
            </p>
            <div className={styles.heroButtons}>
              <motion.button
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToHelpSection}
              >
                Support Our Goshala
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection} aria-labelledby="about-heading">
        <div className={`${styles.container} ${styles.aboutWrapper}`}>
          <motion.div
            className={styles.aboutGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <div className={styles.aboutMedia}>
              <div className={styles.aboutImage}>
                <Image
                  src="/assets/images/backgrounds/gao/head1.jpg"
                  alt="Cows grazing peacefully in the goshala sanctuary"
                  width={600}
                  height={400}
                  className={styles.imagePlaceholder}
                  loading="lazy"
                />
              </div>
              <div className={styles.statsCard}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Cows Protected</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Care Provided</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <h2 id="about-heading">Our Sacred Mission</h2>
              <p>
                Goshala is devoted to rescuing, rehabilitating, and serving cows with love and care.
                We follow the Vedic traditions to preserve the sanctity of life and build a more
                compassionate world.
              </p>
              <div className={styles.featuresContainer}>
                <div className={styles.featureTabs}>
                  {featureList.map((feature, index) => (
                    <button
                      key={index}
                      className={`${styles.featureTab} ${
                        activeFeature === index ? styles.active : ''
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>
                <div className={styles.featureContent}>
                  <h3>{featureList[activeFeature].title}</h3>
                  <p>{featureList[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HELP SECTION (scroll target) */}
      <div ref={helpSectionRef}>
        <HelpSection />
      </div>
    </div>
  );
}
