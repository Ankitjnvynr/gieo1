'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './page4.css';

const galleryItems = [
  {
    title: 'Vedic Nature Harmony',
    image: '/assets/images/backgrounds/nat14.jpg',
    quote: "The Earth is our mother, and we are all her children.",
    author: "Atharva Veda"
  },
  {
    title: 'Sacred Rivers Flow',
    image: '/assets/images/backgrounds/river.jpg',
    quote: "As the rivers flow into the ocean, all paths lead to the divine.",
    author: "Bhagavad Gita"
  },
  {
    title: 'Meditative Landscapes',
    image: '/assets/images/backgrounds/nat5.jpg',
    quote: "In the silence of mountains, find the voice of the eternal.",
    author: "Upanishads"
  },
  {
    title: 'Divine Tree Energy',
    image: '/assets/images/backgrounds/nat17.jpg',
    quote: "One tree equals ten sons - it gives shade, fruits and oxygen.",
    author: "Vrikshayurveda"
  },
  {
    title: 'Land of Sacred Flora',
    image: '/assets/images/backgrounds/nat10.jpg',
    quote: "Nature is the greatest teacher, revealing the divine within.",
    author: "Atharva Veda"
  }

 ];

const NatureGallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <motion.h2 
          className="gallery-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Witness <span>Nature's Glory</span> in our <em>Gallery</em>
        </motion.h2>

        <motion.p 
          className="gallery-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Explore our curated gallery collection inspired by the wisdom of the Bhagavad Gita and Vedic ecology — where each artwork tells a spiritual story of nature, compassion, and consciousness.
        </motion.p>
      </div>

      <div className="marquee-container">
        <div className="marquee-wrapper">
          <motion.div 
            className="marquee-content"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <motion.div 
                className="marquee-item"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="image-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                  />
                  <div className="quote-overlay">
                    <blockquote>"{item.quote}"</blockquote>
                    <cite>- {item.author}</cite>
                  </div>
                </div>
                <p className="item-title">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="cta-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
       >
       {/* <p>Want to see more of our spiritual nature collection?</p> */}
       {/* <button className="cta-button">Visit Full Gallery</button> */}
      </motion.div>
    </section>
  );
};

export default NatureGallery;