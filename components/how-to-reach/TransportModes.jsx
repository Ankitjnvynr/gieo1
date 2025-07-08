import React, { useState } from "react";
import { 
  FaTrain, 
  FaPlane, 
  FaBus, 
  FaCar, 
  FaParking, 
  FaTaxi, 
  FaMapMarkerAlt, 
  FaRoute, 
  FaClock, 
  FaInfoCircle,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./page1.css";


const transportData = [
  { 
    id: 1,
    title: "By Train", 
    desc: "Kurukshetra Station – 2.8 km", 
    note: "Shatabdi, Intercity available", 
    icon: <FaTrain className="transport-icon" />,
    image: "/assets/images/backgrounds/download.jpg",
    details: [
      { icon: <FaMapMarkerAlt />, text: "Nearest station: Kurukshetra Junction (KKDE)" },
      { icon: <FaRoute />, text: "Distance from campus: 2.8 km (5-10 min by auto)" },
      { icon: <FaClock />, text: "Direct trains from Delhi (2-3 hours journey)" }
    ],
    mapLink: "https://www.google.com/maps/dir/?api=1&origin=Kurukshetra+Junction+Railway+Station&destination=GIEO+Gita+Temple,+Kurukshetra&travelmode=transit",
    
  },
  { 
    id: 2,
    title: "By Air", 
    desc: "Delhi IGI Airport – 174 km", 
    note: "Taxi & Buses available", 
    icon: <FaPlane className="transport-icon" />,
    image: "/assets/images/backgrounds/images4.jpg",
    details: [
      { icon: <FaMapMarkerAlt />, text: "Nearest airport: Indira Gandhi International (DEL)" },
      { icon: <FaRoute />, text: "Travel time: ~3.5 hours by road" },
      { icon: <FaInfoCircle />, text: "Pre-paid taxi service available (~₹2500-3000)" }
    ],
    mapLink: "https://www.google.com/maps/dir/?api=1&origin=Indira+Gandhi+International+Airport&destination=GIEO+Gita+Temple,+Kurukshetra&travelmode=driving",
   
  },
  { 
    id: 3,
    title: "By Bus", 
    desc: "Kurukshetra Bus Stand – 4.5 km", 
    note: "Frequent services", 
    icon: <FaBus className="transport-icon" />,
    image: "/assets/images/backgrounds/images3.jpg",
    details: [
      { icon: <FaMapMarkerAlt />, text: "Haryana Roadways buses from Delhi (ISBT)" },
      { icon: <FaRoute />, text: "Travel time: ~4 hours" },
      { icon: <FaInfoCircle />, text: "Local auto-rickshaws available from bus stand" }
    ],
    mapLink: "https://www.google.com/maps/dir/?api=1&destination=GIEO+Gita+Temple,+Kurukshetra&travelmode=transit",
   
  },
  { 
    id: 4,
    title: "By Car", 
    desc: "Via NH-44 (Delhi: 3.5 hrs)", 
    note: "Parking available", 
    icon: <FaCar className="transport-icon" />,
    image: "/assets/images/backgrounds/download1.jpg",
    details: [
      { icon: <FaMapMarkerAlt />, text: "Route: Delhi → Panipat → Kurukshetra (NH-44)" },
      { icon: <FaRoute />, text: "Distance: ~160 km from Delhi" },
      { icon: <FaParking />, text: "Campus parking facilities available" }
    ],
    mapLink: "https://www.google.com/maps/dir/?api=1&destination=GIEO+Gita+Temple,+Kurukshetra&travelmode=driving",
    
  },
];

const TransportModes = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = transportData.filter(mode => {
    const matchesSearch = mode.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mode.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || mode.title.toLowerCase().includes(activeTab);
    return matchesSearch && matchesTab;
  });

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const closeExpandedView = (e) => {
    e.stopPropagation();
    setExpandedCard(null);
  };

  return (
    <section className="transport-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        <h2 className="section-heading">How to Reach Us</h2>
        <p className="section-subtitle">Explore convenient travel options to our location</p>
        
        <div className="controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search transport options..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="filter-tabs">
            <button 
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button 
              className={activeTab === "train" ? "active" : ""}
              onClick={() => setActiveTab("train")}
            >
              <FaTrain /> Train
            </button>
            <button 
              className={activeTab === "air" ? "active" : ""}
              onClick={() => setActiveTab("air")}
            >
              <FaPlane /> Air
            </button>
            <button 
              className={activeTab === "bus" ? "active" : ""}
              onClick={() => setActiveTab("bus")}
            >
              <FaBus /> Bus
            </button>
            <button 
              className={activeTab === "car" ? "active" : ""}
              onClick={() => setActiveTab("car")}
            >
              <FaCar /> Car
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="transport-grid">
        <AnimatePresence>
          {filteredData.map((mode) => (
            <React.Fragment key={mode.id}>
              {/* Normal Card View */}
              {expandedCard !== mode.id && (
                <motion.div
  layoutId={`card-${mode.id}`}
  className={`transport-card ${expandedCard === mode.id ? "expanded" : ""}`}
  onClick={() => toggleCard(mode.id)}
  style={{
    backgroundImage: `url(${mode.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <div className="transport-overlay">
    <div className="transport-icon-container">
      {mode.icon}
    </div>
    <div className="transport-content">
      <motion.h3 layout="position">{mode.title}</motion.h3>
      <motion.p className="desc" layout="position">{mode.desc}</motion.p>
      <motion.p className="note" layout="position">{mode.note}</motion.p>
    </div>
  </div>
</motion.div>

              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {expandedCard && (
          (() => {
            const mode = transportData.find(m => m.id === expandedCard);
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="expanded-overlay"
                onClick={closeExpandedView}
              >
                <motion.div
                  layoutId={`card-${mode.id}`}
                  className="expanded-card"
                  onClick={(e) => e.stopPropagation()}
                  style={{ "--card-color": mode.color }}
                >
                  <div 
                    className="expanded-card-bg"
                    style={{ backgroundImage: `url(${mode.image})` }}
                  />
                  <div className="expanded-card-content">
                    <button className="close-button" onClick={closeExpandedView}>
                      <FaTimes />
                    </button>
                    
                    <div className="transport-icon-container expanded">
                      {mode.icon}
                    </div>
                    
                    <div className="transport-content">
                      <h3>{mode.title}</h3>
                      <p className="desc">{mode.desc}</p>
                      <p className="note">{mode.note}</p>
                      
                      <div className="transport-details">
                        <ul>
                          {mode.details.map((detail, i) => (
                            <li key={i}>
                              <span className="detail-icon">{detail.icon}</span>
                              {detail.text}
                            </li>
                          ))}
                        </ul>
                        
                        <motion.a
                          href={mode.mapLink}
                          className="map-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Route on Map
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()
        )}
      </AnimatePresence>
      
      {filteredData.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No transport options found matching your criteria.
        </motion.div>
      )}
      
      <motion.div 
        className="additional-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3>Travel Tips & Information</h3>
        <ul>
          <li>
            <FaTaxi /> <strong>Taxi Services:</strong> Pre-paid taxi counters available at Delhi airport and railway stations
          </li>
          <li>
            <FaClock /> <strong>Best Time to Travel:</strong> Early morning to avoid traffic (6-8 AM recommended)
          </li>
          <li>
            <FaInfoCircle /> <strong>Local Transport:</strong> Auto-rickshaws available throughout the city (~₹50-100 for short distances)
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default TransportModes;