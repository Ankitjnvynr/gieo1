// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, MapPin } from 'lucide-react';
// import styles from './UpcomingEvents.module.css';

// const upcomingEvents = [
//   // ... events data
//   {
//       id: 1,
//       name: "Youth Gita Seminar",
//       date: "July 25, 2025",
//       time: "5:00 PM",
//       venue: "Online (Zoom)",
//       type: "Seminar"
//     },
//     {
//       id: 2,
//       name: "Annual Awards Ceremony",
//       date: "August 15, 2025",
//       time: "6:00 PM",
//       venue: "Community Center, Delhi",
//       type: "Award Ceremony"
//     },
//     {
//       id: 3,
//       name: "Meditation Workshop",
//       date: "September 10, 2025",
//       time: "10:00 AM",
//       venue: "Yoga Studio, Mumbai",
//       type: "Workshop"
//     }
// ];

// const UpcomingEvents = () => {
//   return (
//     <section className={styles.section}>
//       <motion.div
//         className={styles.upcomingEvents}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <h2 className={styles.sectionTitle}>Upcoming Events</h2>
//         <div className={styles.eventsList}>
//           {upcomingEvents.map((event, index) => (
//             <motion.div
//               key={event.id}
//               className={styles.eventItem}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className={styles.eventDate}>
//                 <div>{event.date.split(' ')[1]}</div>
//                 <div className={styles.eventMonth}>{event.date.split(' ')[0]}</div>
//               </div>
//               <div className={styles.eventDetails}>
//                 <h3 className={styles.eventName}>{event.name}</h3>
//                 <div className={styles.eventInfo}>
//                   <span className={styles.eventTime}>
//                     <Clock size={14} />
//                     {event.time}
//                   </span>
//                   <span className={styles.eventVenue}>
//                     <MapPin size={14} />
//                     {event.venue}
//                   </span>
//                 </div>
//                 <div className={styles.eventType}>{event.type}</div>
//               </div>
//               <motion.button
//                 className={styles.registerButton}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Register Now
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default UpcomingEvents;





'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import './UpcomingEvents2.css';

const upcomingEvents = [
  {
    id: 1,
    name: "Youth Gita Seminar",
    date: "July 25, 2025",
    time: "5:00 PM - 7:00 PM",
    venue: "Online",
    featured: true,
    description: "Interactive session on Bhagavad Gita teachings for young minds",
    image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "Meditation Workshop",
    date: "August 15, 2025",
    time: "10:00 AM - 12:00 PM",
    venue: "Delhi Ashram",
    featured: false,
    description: "Learn ancient meditation techniques for modern life",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Spiritual Retreat",
    date: "September 5, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Rishikesh",
    featured: true,
    description: "Weekend retreat in the foothills of Himalayas",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Karma Yoga Conference",
    date: "October 12, 2025",
    time: "2:00 PM - 6:00 PM",
    venue: "Bangalore Convention Center",
    featured: false,
    description: "Understanding selfless service in daily life",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "Bhajan Sandhya",
    date: "November 8, 2025",
    time: "6:30 PM - 9:00 PM",
    venue: "Mumbai Temple",
    featured: false,
    description: "Evening of devotional singing and spiritual discourse",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Annual Spiritual Festival",
    date: "December 25, 2025",
    time: "8:00 AM - 8:00 PM",
    venue: "Vrindavan",
    featured: true,
    description: "Day-long celebration with discourses, kirtan, and cultural programs",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=250&fit=crop"
  }
];

const EventCard = ({ event, isActive, onClick }) => {
  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });

  return (
    <motion.div
      className={`event-card ${isActive ? 'active' : ''} ${event.featured ? 'featured' : ''}`}
      whileHover={{ 
        y: -5,
        rotate: isActive ? 0 : 1,
        boxShadow: isActive ? '0 5px 15px rgba(0,0,0,0.1)' : '0 8px 25px rgba(0,0,0,0.12)'
      }}
      onClick={onClick}
      layout
      initial={{ rotate: 0 }}
      animate={{ rotate: isActive ? 0 : -0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
        {event.featured && (
          <div className="featured-badge">
            <Star size={14} />
            <span>Featured</span>
          </div>
        )}
      </div>

      <div className="event-content">
        <div className="event-date">
          <span className="day">{day}</span>
          <span className="month">{month}</span>
        </div>

        <h3>{event.name}</h3>
        <p>{event.description}</p>
        
        <div className="event-meta">
          <span><Clock size={14} /> {event.time}</span>
          <span><MapPin size={14} /> {event.venue}</span>
        </div>

        <motion.button 
          className="register-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const UpcomingEvents = () => {
  const [activeEvent, setActiveEvent] = useState(upcomingEvents[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(upcomingEvents.slice(0, 3));
  const timeoutRef = useRef(null);

  const nextEvent = () => {
    setCurrentIndex(prev => (prev + 1) % upcomingEvents.length);
    updateVisibleCards((currentIndex + 1) % upcomingEvents.length);
  };

  const prevEvent = () => {
    setCurrentIndex(prev => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
    updateVisibleCards((currentIndex - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const updateVisibleCards = (index) => {
    let newCards = [];
    if (index === upcomingEvents.length - 1) {
      newCards = [upcomingEvents[index - 1], upcomingEvents[index], upcomingEvents[0]];
    } else if (index === 0) {
      newCards = [upcomingEvents[upcomingEvents.length - 1], upcomingEvents[index], upcomingEvents[index + 1]];
    } else {
      newCards = [upcomingEvents[index - 1], upcomingEvents[index], upcomingEvents[index + 1]];
    }
    setVisibleCards(newCards);
  };

  useEffect(() => {
    setActiveEvent(upcomingEvents[currentIndex]);
    updateVisibleCards(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextEvent, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handleCardClick = (event) => {
    const newIndex = upcomingEvents.findIndex(e => e.id === event.id);
    setCurrentIndex(newIndex);
    clearTimeout(timeoutRef.current);
  };

  return (
    <section className="events-section">
      <div className="events-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Upcoming <span>Events</span></h2>
          <p>Join our spiritual community for transformative experiences</p>
        </motion.div>

        <div className="events-grid">
          <div className="events-carousel">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ y: 20, opacity: 0, rotate: -2 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: event.id === activeEvent.id ? 0 : -1
                  }}
                  exit={{ y: -20, opacity: 0, rotate: 2 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  layout
                >
                  <EventCard 
                    event={event}
                    isActive={event.id === activeEvent.id}
                    onClick={() => handleCardClick(event)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="carousel-controls">
              <motion.button 
                onClick={prevEvent} 
                aria-label="Previous event"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button 
                onClick={nextEvent} 
                aria-label="Next event"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          <motion.div 
            className="event-preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{height: '48rem'}}
          >
            <div 
              className="preview-image"
              style={{ backgroundImage: `url(${activeEvent.image})` }}
            />
            
            <div className="preview-content">
              <div className="preview-header">
                <motion.h3
                  key={`title-${activeEvent.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeEvent.name}
                </motion.h3>
                {activeEvent.featured && (
                  <motion.div 
                    className="preview-badge"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <Star size={14} />
                    <span>Featured Event</span>
                  </motion.div>
                )}
              </div>
              
              <motion.p
                key={`desc-${activeEvent.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {activeEvent.description}
              </motion.p>
              
              <div className="preview-details">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span>Date</span>
                  <span>{activeEvent.date}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <span>Time</span>
                  <span>{activeEvent.time}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span>Venue</span>
                  <span>{activeEvent.venue}</span>
                </motion.div>
              </div>
              
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }} 
                style={{ marginTop: '10rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;