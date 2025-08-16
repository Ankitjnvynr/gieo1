"use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award } from 'lucide-react';
// import styles from './AwardsSection.module.css';

// const awards = [
//   // ... awards data
//   {
//       id: 1,
//       title: "Spiritual Leadership Award 2024",
//       recipient: "Dr. Rajesh Mehta",
//       description: "For lifelong dedication to Gita studies and community service.",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Excellence in Teaching Award",
//       recipient: "Prof. Suman Jain",
//       description: "Outstanding contribution to spiritual education and mentorship.",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Community Service Recognition",
//       recipient: "Arjun Sharma",
//       description: "Exceptional dedication to serving the community through Gita teachings.",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Youth Inspiration Award",
//       recipient: "Priya Patel",
//       description: "Inspiring young minds through innovative spiritual programs.",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Youth Inspiration Award",
//       recipient: "Priya Patel",
//       description: "Inspiring young minds through innovative spiritual programs.",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
//     },
//     {
//       id: 6,
//       title: "Youth Inspiration Award",
//       recipient: "Priya Patel",
//       description: "Inspiring young minds through innovative spiritual programs.",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
//     }
// ];

// const AwardsSection = () => {
//   return (
//     <section className={styles.section}>
//       <motion.h2 
//         className={styles.sectionTitle}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         Awards & Recognition
//       </motion.h2>
//       <div className={styles.awardsGrid}>
//         {awards.map((award, index) => (
//           <motion.div
//             key={award.id}
//             className={styles.awardCard}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <img src={award.image} alt={award.title} className={styles.awardImage} />
//             <div className={styles.awardYear}>{award.year}</div>
//             <h3 className={styles.awardTitle}>{award.title}</h3>
//             <div className={styles.awardRecipient}>
//               <Award size={16} />
//               {award.recipient}
//             </div>
//             <p className={styles.awardDescription}>{award.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './AwardsSection.module.css';

const allAwards = [
  {
    id: 1,
    title: "Spiritual Leadership Award 2024",
    // recipient: "Dr. Rajesh Mehta",
    // description: "For lifelong dedication to Gita studies and community service.",
    year: "2024",
    image: "/assets/images/backgrounds/awards-seminars-page/award1.jpg"
  },
  {
    id: 2,
    title: "Excellence in Teaching Award",
    // recipient: "Prof. Suman Jain",
    // description: "Outstanding contribution to spiritual education and mentorship.",
    year: "2023",
    image: "/assets/images/backgrounds/awards-seminars-page/award2.jpg"
  },
  {
    id: 3,
    title: "Community Service Recognition",
    //recipient: "Arjun Sharma",
    //description: "Exceptional dedication to serving the community through Gita teachings.",
    year: "2024",
    image: "/assets/images/backgrounds/awards-seminars-page/award3.jpg"
  },
  {
    id: 4,
    title: "Youth Inspiration Award",
    //recipient: "Priya Patel",
    //description: "Inspiring young minds through innovative spiritual programs.",
    year: "2023",
    image: "/assets/images/backgrounds/awards-seminars-page/award1.jpg"
  },
  {
    id: 5,
    title: "Lifetime Achievement Award",
    //recipient: "Swami Vedant",
    //description: "For 50 years of continuous service in spreading spiritual wisdom.",
    year: "2024",
    image: "/assets/images/backgrounds/awards-seminars-page/award2.jpg"
  },
  {
    id: 6,
    title: "Innovation in Education Award",
    //recipient: "Dr. Meena Kapoor",
    //description: "Developing new methodologies for spiritual learning.",
    year: "2023",
    image: "/assets/images/backgrounds/awards-seminars-page/award3.jpg"
  },
  {
    id: 7,
    title: "Global Outreach Award",
    //recipient: "Gita Foundation",
    //description: "Expanding spiritual teachings to international communities.",
    year: "2024",
    image: "/assets/images/backgrounds/awards-seminars-page/award1.jpg"
  },
  {
    id: 8,
    title: "Meditation Excellence Award",
    //recipient: "Yogi Anand",
    //description: "Innovative approaches to meditation techniques.",
    year: "2023",
    image: "/assets/images/backgrounds/awards-seminars-page/award2.jpg"
  },
  {
    id: 9,
    title: "Scripture Scholarship Award",
    //recipient: "Dr. Neha Verma",
    //description: "Groundbreaking research on ancient scriptures.",
    year: "2024",
    image: "/assets/images/backgrounds/awards-seminars-page/award3.jpg"
  }
];

const AwardsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAwards = () => {
    if (isExpanded) {
      setVisibleCount(3);
    } else {
      setVisibleCount(allAwards.length);
    }
    setIsExpanded(!isExpanded);
  };

  const visibleAwards = allAwards.slice(0, visibleCount);

  return (
    <section className={styles.section}>
 
      <div className={styles.sectionHeader}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Awards & Recognition
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Celebrating excellence in spiritual leadership and education
        </motion.p>
      </div>

      <div className={styles.awardsGrid}>
        {visibleAwards.map((award, index) => (
          <motion.div
            key={award.id}
            className={styles.awardCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: index * 0.1 
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={award.image} 
                alt={award.title} 
                className={styles.awardImage} 
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </div>
            
            <div className={styles.awardContent}>
              <div className={styles.awardYear}>{award.year}</div>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <div className={styles.awardRecipient}>
                {/* <Award size={18} className={styles.awardIcon} /> */}
                <span>{award.recipient}</span>
              </div>
              <p className={styles.awardDescription}>{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {allAwards.length > 6 && (
        <motion.div
          className={styles.viewMoreContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={toggleAwards} 
            className={styles.viewMoreButton}
          >
            {isExpanded ? (
              <>
                <span>View Less</span>
                <ChevronUp size={20} className={styles.viewMoreIcon} />
              </>
            ) : (
              <>
                <span>View More Awards</span>
                <ChevronDown size={20} className={styles.viewMoreIcon} />
              </>
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default AwardsSection;