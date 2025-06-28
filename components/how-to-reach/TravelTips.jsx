"use client";
import React from 'react';
import { 
  FaSun, 
  FaWater, 
  FaCarAlt, 
  FaClock,
  FaUmbrellaBeach,
  FaFirstAid,
  FaWifi,
  FaMoneyBillWave
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './page1.css';

const tips = [
  { 
    id: 1,
    text: 'Start early (6-8 AM) to avoid highway traffic',
    icon: <FaClock className="tip-icon" />,
    category: 'timing'
  },
  { 
    id: 2,
    text: 'Carry sufficient water and energy snacks',
    icon: <FaWater className="tip-icon" />,
    category: 'essentials'
  },
  { 
    id: 3,
    text: 'Auto-rickshaws are available at all major stations (~₹50-100 per km)',
    icon: <FaCarAlt className="tip-icon" />,
    category: 'transport'
  },
  { 
    id: 4,
    text: 'Summer months (Apr-Jun) are extremely hot – carry sunscreen, hat and sunglasses',
    icon: <FaSun className="tip-icon" />,
    category: 'weather'
  },
  { 
    id: 5,
    text: 'Monsoon (Jul-Sep) - carry rain gear and waterproof bags',
    icon: <FaUmbrellaBeach className="tip-icon" />,
    category: 'weather'
  },
  { 
    id: 6,
    text: 'Basic first aid kit recommended for long journeys',
    icon: <FaFirstAid className="tip-icon" />,
    category: 'health'
  },
  { 
    id: 7,
    text: 'Free WiFi available at major stations and airports',
    icon: <FaWifi className="tip-icon" />,
    category: 'amenities'
  },
  { 
    id: 8,
    text: 'Carry some cash as digital payments may not work everywhere',
    icon: <FaMoneyBillWave className="tip-icon" />,
    category: 'money'
  }
];

const categories = [
  { id: 'all', name: 'All Tips' },
  { id: 'timing', name: 'Timing' },
  { id: 'essentials', name: 'Essentials' },
  { id: 'transport', name: 'Transport' },
  { id: 'weather', name: 'Weather' },
  { id: 'health', name: 'Health' },
  { id: 'amenities', name: 'Amenities' },
  { id: 'money', name: 'Money' }
];

const TravelTips = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredTips = tips.filter(tip => {
    const matchesCategory = activeCategory === 'all' || tip.category === activeCategory;
    const matchesSearch = tip.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section 
      className="tips-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="tips-header">
        <motion.h2 
          className="section-heading"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Travel Tips & Advice
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Essential information to make your journey comfortable
        </motion.p>
      </div>

      <div className="tips-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {filteredTips.length > 0 ? (
        <motion.ul 
          className="tips-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredTips.map((tip, index) => (
            <motion.li 
              key={tip.id}
              className="tip-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="tip-icon-container">
                {tip.icon}
              </div>
              <p>{tip.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No tips found matching your criteria</p>
          <button 
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </motion.div>
      )}

      <div className="emergency-info">
        <h3>Emergency Contacts</h3>
        <div className="emergency-cards">
          <div className="emergency-card">
            <h4>Police</h4>
            <p>100</p>
          </div>
          <div className="emergency-card">
            <h4>Ambulance</h4>
            <p>108</p>
          </div>
          <div className="emergency-card">
            <h4>Highway Patrol</h4>
            <p>1033</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TravelTips;