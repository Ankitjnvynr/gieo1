// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Clock } from 'lucide-react';
// import styles from './SeminarSection.module.css';

// const seminars = [
//   // ... seminars data
//   {
//       id: 1,
//       title: "Gita & Mindfulness in Modern Times",
//       speaker: "Prof. Suman Jain",
//       date: "March 15, 2025",
//       description: "A deep dive into applying Gita philosophy in contemporary life.",
//       thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
//       duration: "2 hours"
//     },
//     {
//       id: 2,
//       title: "Karma Yoga in Daily Practice",
//       speaker: "Dr. Rajesh Mehta",
//       date: "April 20, 2025",
//       description: "Understanding the path of selfless action and its practical applications.",
//       thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
//       duration: "1.5 hours"
//     },
//     {
//       id: 3,
//       title: "Meditation Techniques from the Gita",
//       speaker: "Swami Ananda",
//       date: "May 10, 2025",
//       description: "Exploring various meditation practices mentioned in the Bhagavad Gita.",
//       thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
//       duration: "2.5 hours"
//     },
//     {
//       id: 4,
//       title: "Youth and Ancient Wisdom",
//       speaker: "Priya Patel",
//       date: "June 5, 2025",
//       description: "Connecting young minds with timeless spiritual teachings.",
//       thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
//       duration: "1 hour"
//     },
//     {
//       id: 5,
//       title: "Youth and Ancient Wisdom",
//       speaker: "Priya Patel",
//       date: "June 5, 2025",
//       description: "Connecting young minds with timeless spiritual teachings.",
//       thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
//       duration: "1 hour"
//     },
//     {
//       id: 6,
//       title: "Youth and Ancient Wisdom",
//       speaker: "Priya Patel",
//       date: "June 5, 2025",
//       description: "Connecting young minds with timeless spiritual teachings.",
//       thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
//       duration: "1 hour"
//     }
// ];

// const SeminarSection = () => {
//   return (
//     <section className={styles.section}>
//       <motion.h2 
//         className={styles.sectionTitle}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         Seminars Gallery
//       </motion.h2>
//       <div className={styles.seminarsGrid}>
//         {seminars.map((seminar, index) => (
//           <motion.div
//             key={seminar.id}
//             className={styles.seminarCard}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.seminarImageContainer}>
//               <img src={seminar.thumbnail} alt={seminar.title} className={styles.seminarThumbnail} />
//               <div className={styles.seminarOverlay}>
//                 <div className={styles.playButton}>▶</div>
//               </div>
//             </div>
//             <div className={styles.seminarContent}>
//               <div className={styles.seminarDate}>{seminar.date}</div>
//               <h3 className={styles.seminarTitle}>{seminar.title}</h3>
//               <div className={styles.seminarSpeaker}>
//                 <Users size={16} />
//                 {seminar.speaker}
//               </div>
//               <p className={styles.seminarDescription}>{seminar.description}</p>
//               <div className={styles.seminarDuration}>
//                 <Clock size={16} />
//                 {seminar.duration}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SeminarSection;





import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import './SeminarSection.css';

const seminars = [
  {
    id: 1,
    title: "Gita & Mindfulness in Modern Times",
    speaker: "Prof. Suman Jain",
    date: "March 15, 2025",
    description: "A deep dive into applying Gita philosophy in contemporary life.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar.jpg",
    duration: "2 hours",
    featured: true
  },
  {
    id: 2,
    title: "Karma Yoga in Daily Practice",
    speaker: "Dr. Rajesh Mehta",
    date: "April 20, 2025",
    description: "Understanding the path of selfless action and its practical applications.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar1.jpg",
    duration: "1.5 hours",
    featured: false
  },
  {
    id: 3,
    title: "Meditation Techniques from the Gita",
    speaker: "Swami Ananda",
    date: "May 10, 2025",
    description: "Exploring various meditation practices mentioned in the Bhagavad Gita.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar2.jpg",
    duration: "2.5 hours",
    featured: true
  },
  {
    id: 4,
    title: "Youth and Ancient Wisdom",
    speaker: "Priya Patel",
    date: "June 5, 2025",
    description: "Connecting young minds with timeless spiritual teachings.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar3.jpg",
    duration: "1 hour",
    featured: false
  },
  {
    id: 5,
    title: "Scriptural Study Workshop",
    speaker: "Dr. Neha Verma",
    date: "July 12, 2025",
    description: "Deep analysis of key spiritual texts and their modern interpretations.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar.jpg",
    duration: "3 hours",
    featured: true
  },
  {
    id: 6,
    title: "Spiritual Leadership Seminar",
    speaker: "Arjun Sharma",
    date: "August 8, 2025",
    description: "Developing leadership qualities through spiritual principles.",
    thumbnail: "/assets/images/backgrounds/awards-seminars-page/seminar3.jpg",
    duration: "2 hours",
    featured: false
  }
];

const SeminarsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSeminars = showAll ? seminars : seminars.slice(0, 3);

  return (
    <section className="seminars-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Spiritual <span>Seminars</span>
          </h2>
          <p className="section-subtitle">
            Explore our upcoming events and deepen your spiritual practice
          </p>
        </motion.div>

        <div className="seminars-grid">
          {visibleSeminars.map((seminar, index) => (
            <motion.div
              key={seminar.id}
              className={`seminar-card ${seminar.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="image-container">
                <img 
                  src={seminar.thumbnail} 
                  alt={seminar.title} 
                  className="seminar-image"
                  loading="lazy"
                />
                {seminar.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}
                <div className="image-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              
              <div className="seminar-content">
                <div className="seminar-date">{seminar.date}</div>
                <h3>{seminar.title}</h3>
                <div className="seminar-meta">
                  <span className="speaker">
                    <Users size={16} />
                    {seminar.speaker}
                  </span>
                  <span className="duration">
                    <Clock size={16} />
                    {seminar.duration}
                  </span>
                </div>
                <p>{seminar.description}</p>
                <button className="register-btn">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {seminars.length > 3 && (
          <motion.div
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="view-more-btn"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  <span>View More Seminars</span>
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SeminarsSection;