

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './printmedia.css';

export default function PrintMedia() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef(null);
  const modalRef = useRef(null);
  const dragConstraintsRef = useRef(null);

  const mediaItems = [
    { 
      id: 1, 
      image: '/assets/images/backgrounds/gpic.jpg', 
      title: 'Tech Times Feature', 
      date: 'May 15, 2023',
      description: 'Our revolutionary AI platform featured on the cover',
      fullContent: 'Featured in Tech Times for our breakthrough AI technology.'
    },
    // ... rest of your mediaItems array
     { 
      id: 2, 
      image: '/assets/images/backgrounds/gpic.jpg', 
      title: 'Business Monthly', 
      date: 'June 22, 2023',
      description: 'Named "Company of the Year"',
      fullContent: 'Recognized as Company of the Year by Business Monthly.'
    },
    { 
      id: 3, 
      image: '/assets/images/backgrounds/gpic.jpg', 
      title: 'Financial Review', 
      date: 'July 10, 2023',
      description: 'Record Q2 earnings analysis',
      fullContent: 'Highlighted for 42% revenue growth in Q2.'
    },
    { 
      id: 4, 
      image: '/assets/images/backgrounds/gpic.jpg', 
      title: 'Innovation Journal', 
      date: 'August 5, 2023',
      description: 'Exclusive R&D lab tour',
      fullContent: 'Showcased our R&D facilities and innovations.'
    },
    { 
      id: 5, 
      image: '/assets/images/backgrounds/printmediademo.jpg', 
      title: 'Global Business', 
      date: 'September 18, 2023',
      description: 'Asia expansion coverage',
      fullContent: 'Featured for our successful Asia expansion.'
    },
    { 
      id: 6, 
      image: '/assets/images/backgrounds/printmediademo.jpg', 
      title: 'Tech Today', 
      date: 'October 3, 2023',
      description: 'Product launch special',
      fullContent: 'Covered for our flagship product launch.'
    },
    { 
      id: 7, 
      image: '/assets/images/backgrounds/printmediademo.jpg', 
      title: 'Leadership Quarterly', 
      date: 'November 12, 2023',
      description: 'Company culture spotlight',
      fullContent: 'Featured for our innovative company culture.'
    },
    { 
      id: 8, 
      image: '/assets/images/backgrounds/printmediademo.jpg', 
      title: 'Sunday Chronicle', 
      date: 'December 20, 2023',
      description: 'Sustainability initiatives',
      fullContent: 'Highlighted for our sustainability program.'
    }
  ];

  // Create seamless infinite loop
  const loopItems = [...mediaItems, ...mediaItems, ...mediaItems];

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const handleWheel = (e) => {
    if (!selectedItem || isDragging) return;
    e.preventDefault();
    
    const delta = -Math.sign(e.deltaY);
    const zoomSpeed = e.ctrlKey ? 0.05 : 0.1; // Fine control with Ctrl key
    const newScale = delta > 0 
      ? Math.min(scale + zoomSpeed, 3) 
      : Math.max(scale - zoomSpeed, 0.5);
    
    setScale(newScale);
  };

  const resetZoom = (e) => {
    e.stopPropagation();
    setScale(1);
  };

  const fitToScreen = (e) => {
    e.stopPropagation();
    if (imageRef.current) {
      const img = imageRef.current;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const screenRatio = window.innerWidth / window.innerHeight;
      
      const newScale = imgRatio > screenRatio 
        ? window.innerWidth * 0.8 / img.naturalWidth
        : window.innerHeight * 0.8 / img.naturalHeight;
      
      setScale(Math.min(newScale, 1));
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedItem) {
        closeModal();
      }
      // Reset zoom with '0' key
      if (e.key === '0' && selectedItem) {
        setScale(1);
      }
      // Fit to screen with '1' key
      if (e.key === '1' && selectedItem) {
        fitToScreen({ stopPropagation: () => {} });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  // Handle wheel events for zooming
  useEffect(() => {
    if (selectedItem) {
      const modal = modalRef.current;
      modal.addEventListener('wheel', handleWheel, { passive: false });
      return () => modal.removeEventListener('wheel', handleWheel);
    }
  }, [selectedItem, scale, isDragging]);

  // Update drag constraints when scale changes
  useEffect(() => {
    if (imageRef.current && selectedItem) {
      const img = imageRef.current;
      const scaledWidth = img.naturalWidth * scale;
      const scaledHeight = img.naturalHeight * scale;
      
      const horizontalDrag = Math.max(0, (scaledWidth - img.clientWidth) / 2);
      const verticalDrag = Math.max(0, (scaledHeight - img.clientHeight) / 2);
      
      dragConstraintsRef.current = {
        top: -verticalDrag,
        left: -horizontalDrag,
        right: horizontalDrag,
        bottom: verticalDrag
      };
    }
  }, [scale, selectedItem]);

  return (
    <section className="print-media-section">
      <motion.div
        className="print-media-container"
        id="print-media"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <h2 className="print-media-title">
          <span className="highlight">Press</span> Coverage
        </h2>
        <p className="print-media-subtitle">
          Featured in leading publications worldwide
        </p>

        <div 
          className="marquee-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="marquee-container">
            <div 
              className={`marquee-track ${isPaused ? 'paused' : ''}`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {loopItems.map((item, index) => (
                <motion.div
                  className="media-card"
                  key={`${item.id}-${index}`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  onClick={() => handleCardClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="media-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="media-image"
                      loading="lazy"
                    />
                    <div className="media-badge">{item.date}</div>
                    <div className="media-title-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="media-modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={modalRef}
          >
            <motion.div
              className="media-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                bounce: 0.2
              }}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh'
              }}
            >
              <button 
                className="media-modal-close" 
                onClick={closeModal}
                aria-label="Close modal"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ rotate: 90, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              
              <div className="media-modal-image-container">
                <motion.img 
                  ref={imageRef}
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="media-modal-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    transform: `scale(${scale})`,
                    cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  drag={scale > 1}
                  dragConstraints={dragConstraintsRef.current}
                  dragElastic={0.1}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => setIsDragging(false)}
                  onDoubleClick={resetZoom}
                />
                <motion.div 
                  className="media-modal-text-overlay"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3>{selectedItem.title}</h3>
                  <div className="media-modal-date">{selectedItem.date}</div>
                  <div className="zoom-controls">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setScale(Math.max(scale - 0.1, 0.5));
                      }}
                      aria-label="Zoom out"
                    >
                      -
                    </button>
                    <button 
                      onClick={resetZoom}
                      aria-label="Reset zoom"
                    >
                      {Math.round(scale * 100)}%
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setScale(Math.min(scale + 0.1, 3));
                      }}
                      aria-label="Zoom in"
                    >
                      +
                    </button>
                    <button 
                      onClick={fitToScreen}
                      aria-label="Fit to screen"
                      style={{ marginLeft: '8px', fontSize: '0.8rem' }}
                    >
                      Fit
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}