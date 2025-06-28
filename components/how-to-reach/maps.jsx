"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaDirections, 
  FaCar, 
  FaWalking, 
  FaBus,
  FaTrain,
  FaExpand,
  FaCompress,
  FaPhone,
  FaLink
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './page1.css';

const MapEmbed = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTransport, setActiveTransport] = useState('driving');
  const [showDirections, setShowDirections] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const transportModes = [
    { id: 'driving', label: 'Drive', icon: <FaCar /> },
    { id: 'walking', label: 'Walk', icon: <FaWalking /> },
    { id: 'transit', label: 'Transit', icon: <FaBus /> },
    { id: 'train', label: 'Train', icon: <FaTrain /> }
  ];

  const handleGetDirections = () => {
    setShowDirections(!showDirections);
  };

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoadingLocation(false);
    }
  };

  const generateDirectionsUrl = () => {
    const baseUrl = "https://www.google.com/maps/dir/?api=1";
    const destination = "GIEO+Gita+Temple,+Kurukshetra";
    const origin = currentLocation ? `${currentLocation.lat},${currentLocation.lng}` : "";
    const travelMode = activeTransport === 'train' ? 'transit' : activeTransport;
    
    return `${baseUrl}&destination=${destination}&origin=${origin}&travelmode=${travelMode}`;
  };

  return (
    <motion.section 
      className={`map-section ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="map-header">
        <motion.h2 
          className="section-heading"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaMapMarkerAlt className="heading-icon" />
          Location Map
        </motion.h2>
        
        <div className="map-controls">
          <motion.button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                <FaCompress /> Minimize
              </>
            ) : (
              <>
                <FaExpand /> Expand
              </>
            )}
          </motion.button>
        </div>
      </div>

      <div className="map-container-wrapper">
        <div className="map-container">
          <iframe
            title="GIEO Temple Location"
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.374538055039!2d76.82108871511774!3d29.96982628190761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911738be3f7c6fb%3A0x60a82f03fd67dc7c!2sGIEO%20Gita%20Temple%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1719399999999!5m2!1sen!2sin"
            width="600"
            height={isExpanded ? "600" : "400"}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="map-sidebar">
          <div className="location-info">
            <h3>GIEO Gita Temple</h3>
            <p>Near Jyotisar, Kurukshetra, Haryana 136118</p>
            
            <div className="contact-info">
              <a href="tel:+911234567890" className="contact-link">
                <FaPhone /> +91 1234567890
              </a>
              <a 
                href="https://www.google.com/maps/place/GIEO+Gita+Temple,+Kurukshetra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLink /> Open in Google Maps
              </a>
            </div>
          </div>

          <div className="directions-section">
            <motion.button
              className="directions-btn"
              onClick={handleGetDirections}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDirections /> Get Directions
            </motion.button>

            <AnimatePresence>
              {showDirections && (
                <motion.div
                  className="directions-options"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="transport-modes">
                    {transportModes.map((mode) => (
                      <button
                        key={mode.id}
                        className={`transport-btn ${activeTransport === mode.id ? 'active' : ''}`}
                        onClick={() => setActiveTransport(mode.id)}
                      >
                        {mode.icon} {mode.label}
                      </button>
                    ))}
                  </div>

                  {!currentLocation ? (
                    <button
                      className="location-btn"
                      onClick={getCurrentLocation}
                      disabled={isLoadingLocation}
                    >
                      {isLoadingLocation ? 'Detecting...' : 'Use My Current Location'}
                    </button>
                  ) : (
                    <div className="current-location">
                      <p>Starting from your current location</p>
                    </div>
                  )}

                  <a
                    href={generateDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-directions-btn"
                  >
                    Open Directions in Google Maps
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="landmarks">
            <h4>Nearby Landmarks:</h4>
            <ul>
              <li>Jyotisar (1.5 km)</li>
              <li>Kurukshetra University (4 km)</li>
              <li>Brahma Sarovar (6 km)</li>
              <li>Kurukshetra Railway Station (3 km)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MapEmbed;