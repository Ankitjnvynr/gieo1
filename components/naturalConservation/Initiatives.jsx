'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './page4.css';

const Initiatives = () => {
  const initiatives = [
    {
      title: 'Vedic Tree Plantation',
      description: `At GIEO Gita, we believe that every tree is a sacred expression of divine life. Inspired by ancient Vedic scriptures, we conduct regular tree plantation drives across Kurukshetra and nearby villages. These initiatives not only help restore ecological balance but also instill a deeper respect for nature among youth and devotees. Each tree is planted with a mantra and prayer, symbolizing our bond with Mother Earth and our duty to protect Her.`,
      image: '/assets/images/backgrounds/nat8.jpg',
      color: 'linear-gradient(135deg, #2e8b57, #3cb371)',
      mantra: 'ॐ वृक्षाय नमः (Om Vrikshaya Namah)'
    },
    {
      title: 'Sacred River Cleanups',
      description: `Kurukshetra, being a land of sacred rivers and tanks, holds deep spiritual and ecological significance. GIEO Gita organizes river and pond cleanup campaigns to preserve the sanctity of holy waters like Brahma Sarovar. Through seva (selfless service), volunteers clean banks, remove plastic waste, and conduct awareness drives in local communities. These efforts are not just environmental—they are deeply devotional, connecting us to the sacredness of water in our scriptures.`,
      image: '/assets/images/backgrounds/nat13.jpg',
      color: 'linear-gradient(135deg, #1e90ff, #00bfff)',
      mantra: 'ॐ नमो भगवते वासुदेवाय (Om Namo Bhagavate Vasudevaya)'
    },
    
  ];

  return (
    <section className="initiatives-section">
      <motion.div 
        className="section-heading-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading">Our Green Initiatives</h2>
        <div className="heading-decoration"></div>
        <p className="section-subheading">
          Blending ancient wisdom with modern environmental action
        </p>
      </motion.div>

      <div className="initiatives-container">
        {initiatives.map((item, index) => (
          <motion.div
            className={`initiative-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="initiative-text"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <motion.div 
                className="initiative-underline"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <div className="mantra-tag">{item.mantra}</div>
            </motion.div>

            <motion.div
              className="initiative-image-wrapper"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} className="initiative-image" />
              <div className="image-overlay" style={{ background: item.color }}></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="initiatives-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Through these divine initiatives, GIEO Gita aspires to blend environmental action with spiritual elevation. 
          Join us in restoring the sacred bond between nature and humanity — as envisioned in the Bhagavad Gita.
        </p>
      </motion.div>
    </section>
  );
};

export default Initiatives;