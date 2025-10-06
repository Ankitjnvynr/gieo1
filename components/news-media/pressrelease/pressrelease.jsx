



'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './pressrelease.css';

export default function PressRelease() {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  const pressReleases = [
    {
      id: 1,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "New Product Launch",
      summary: "Introducing our revolutionary product line for 2023",
      date: "May 15, 2023",
      link: "#",
      fullContent: "Our company is proud to announce the launch of our groundbreaking product line that will redefine industry standards. With cutting-edge technology and user-centric design, these products represent years of research and development."
    },
    {
      id: 2,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Quarterly Results",
      summary: "Record-breaking Q2 earnings announced today",
      date: "June 22, 2023",
      link: "#",
      fullContent: "We're thrilled to report a 42% increase in quarterly revenue compared to last year, marking our most successful quarter to date. This growth is attributed to expanded market share and operational efficiencies."
    },
    {
      id: 3,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Sustainability Initiative",
      summary: "Commitment to carbon neutrality by 2030",
      date: "July 5, 2023",
      link: "#",
      fullContent: "As part of our environmental responsibility pledge, we're implementing comprehensive sustainability measures across all operations, aiming for net-zero carbon emissions within the next seven years."
    },
    {
      id: 4,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Strategic Partnership",
      summary: "New collaboration with industry leaders",
      date: "August 18, 2023",
      link: "#",
      fullContent: "This strategic alliance combines our technological expertise with our partner's global distribution network, creating synergistic opportunities for growth and innovation in emerging markets."
    },
    {
      id: 5,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Awards Recognition",
      summary: "Named 'Innovator of the Year' for 2023",
      date: "September 1, 2023",
      link: "#",
      fullContent: "We're honored to receive this prestigious award recognizing our commitment to innovation and excellence. This achievement reflects our team's dedication to pushing boundaries and delivering exceptional value."
    },
    {
      id: 6,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Community Program",
      summary: "Expanding our local outreach initiatives",
      date: "October 12, 2023",
      link: "#",
      fullContent: "Our expanded community program will invest $2 million annually in education and workforce development initiatives, helping to create opportunities in underserved communities where we operate."
    },
    {
      id: 7,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Research Breakthrough",
      summary: "Groundbreaking study published in Science Journal",
      date: "November 3, 2023",
      link: "#",
      fullContent: "Our R&D team's latest findings, published in a leading peer-reviewed journal, demonstrate significant advancements in material science with potential applications across multiple industries."
    },
    {
      id: 8,
      image: '/assets/images/backgrounds/gao/head1.jpg',
      title: "Annual Conference",
      summary: "Join us for our flagship industry event",
      date: "December 15, 2023",
      link: "#",
      fullContent: "Mark your calendars for our premier industry gathering featuring keynote speakers, hands-on workshops, and exclusive previews of upcoming innovations. Early bird registration now open."
    }
  ];

  // Create seamless loop by duplicating the array
  const loopItems = [...pressReleases, ...pressReleases, ...pressReleases];

  const handleCardClick = (release) => {
    setSelectedRelease(release);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedRelease(null);
    document.body.style.overflow = 'auto';
  };

  // Improved hover handling for smoother pause/resume
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="press-release-section">
      <motion.div
        className="press-release-container"
        id="press-release"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="press-release-title">
          <span className="highlight">Latest</span> Press Releases
        </h2>

        <div 
          className="marquee-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="marquee-container" ref={marqueeRef}>
            <div className={`marquee-track ${isPaused ? 'paused' : ''}`}>
              {loopItems.map((release, index) => (
                <motion.div
                  className="press-card"
                  key={`${release.id}-${index}`}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onClick={() => handleCardClick(release)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="card-image-container">
                    <img 
                      src={release.image} 
                      alt={release.title}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-date">{release.date}</div>
                  </div>
                  <div className="card-content">
                    <h3>{release.title}</h3>
                    <p>{release.summary}</p>
                    <div className="card-link">
                      Read More
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Modal */}
      {selectedRelease && (
        <motion.div 
          className="press-modal-overlay"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="press-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button 
              className="press-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="press-modal-image-container">
              <img 
                src={selectedRelease.image} 
                alt={selectedRelease.title} 
                className="press-modal-image"
              />
            </div>
            <div className="press-modal-text">
              <h3>{selectedRelease.title}</h3>
              <div className="press-modal-date">{selectedRelease.date}</div>
              <p>{selectedRelease.fullContent}</p>
              <div className="press-modal-actions">
                <a href={selectedRelease.link} className="press-modal-link">
                  Read Full Release
                </a>
                <button 
                  className="press-modal-close-btn"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}