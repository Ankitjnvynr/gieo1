// 'use client';

// import { motion } from 'framer-motion';
// import './onlinemedia.css';

// export default function OnlineMedia() {
//   return (
//     <motion.div
//       className="online-media-container"
//       id='online-media'
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="online-media-title">Online Media</h2>
//       <div className="online-media-items">
//         <div className="media-card">
//           <img src="/images/sample1.jpg" alt="News 1" className="media-image" />
//           <p className="media-description">Coverage of our recent event in major news portals.</p>
//         </div>
//         <div className="media-card">
//           <img src="/images/sample2.jpg" alt="News 2" className="media-image" />
//           <p className="media-description">Exclusive interview published in digital magazines.</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './onlinemedia.css';

export default function OnlineMedia() {
  const [showAll, setShowAll] = useState(false);

  const mediaItems = [
    {
      id: 1,
      image: '/images/sample1.jpg',
      title: 'Tech Summit Feature',
      description: 'Our keynote presentation at the Global Tech Summit 2023',
      date: 'May 15, 2023'
    },
    {
      id: 2,
      image: '/images/sample2.jpg',
      title: 'Product Launch Coverage',
      description: 'Media highlights from our flagship product unveiling',
      date: 'June 22, 2023'
    },
    {
      id: 3,
      image: '/images/sample3.jpg',
      title: 'Industry Recognition',
      description: 'Winning the Innovation Excellence Award 2023',
      date: 'July 10, 2023'
    },
    {
      id: 4,
      image: '/images/sample4.jpg',
      title: 'Community Impact',
      description: 'Featured for our social responsibility initiatives',
      date: 'August 5, 2023'
    },
    {
      id: 5,
      image: '/images/sample1.jpg',
      title: 'Digital Transformation',
      description: 'How we\'re reshaping industry standards',
      date: 'September 18, 2023'
    },
    {
      id: 6,
      image: '/images/sample2.jpg',
      title: 'Leadership Insights',
      description: 'CEO interview on future market trends',
      date: 'October 3, 2023'
    },
    {
      id: 7,
      image: '/images/sample3.jpg',
      title: 'Research Breakthrough',
      description: 'Our latest findings published in Tech Journal',
      date: 'November 12, 2023'
    },
    {
      id: 8,
      image: '/images/sample4.jpg',
      title: 'Annual Conference',
      description: 'Media coverage of our flagship event',
      date: 'December 7, 2023'
    }
  ];

  const visibleItems = showAll ? mediaItems : mediaItems.slice(0, 4);

  return (
    <motion.section
      className="online-media-section"
      id="online-media"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="online-media-container">
        <div className="section-header">
          <h2 className="section-title">
            Media <span className="highlight">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Featured coverage across digital platforms and publications
          </p>
        </div>

        <div className="media-grid">
          {visibleItems.map((item) => (
            <motion.article
              className="media-card"
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="card-image"
                  loading="lazy"
                  width={320}
                  height={180}
                />
                <span className="card-date">{item.date}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <button className="card-action">
                  View Coverage
                  <svg width="16" height="16" viewBox="0 0 24 24" className="action-icon">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="view-more-container">
          <button 
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show Less' : 'Show More'}
            <svg width="16" height="16" viewBox="0 0 24 24" className="btn-icon">
              <path d={showAll ? "M7 15l5-5 5 5" : "M7 10l5 5 5-5"}/>
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
}