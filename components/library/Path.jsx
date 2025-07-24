// // SpiritualBookSection.jsx
// import React, { useState } from 'react';
// import './Path.css';

// const ShlokaBanner = () => {
//   const [showFullShloka, setShowFullShloka] = useState(false);
  
//   return (
//     <div className="shloka-banner">
//       <div className="shloka-text">
//         <p className="sanskrit">"न जायते म्रियते वा कदाचित्..."</p>
//         {showFullShloka && (
//           <>
//             <p className="sanskrit">"नायं भूत्वा भविता वा न भूयः"</p>
//             <p className="sanskrit">"अजो नित्यः शाश्वतोऽयं पुराणो"</p>
//             <p className="sanskrit">"न हन्यते हन्यमाने शरीरे"</p>
//           </>
//         )}
//         <p className="translation">
//           "For the soul there is neither birth nor death at any time. 
//           {showFullShloka && " He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."}" 
//           – Bhagavad Gita 2.20
//         </p>
//         <button 
//           className="show-more-btn"
//           onClick={() => setShowFullShloka(!showFullShloka)}
//         >
//           {showFullShloka ? 'Show Less' : 'Show Full Shloka'}
//         </button>
//       </div>
//     </div>
//   );
// };

// const SacredKnowledge = () => (
//   <div className="sacred-knowledge">
//     <h3>Why Read Spiritual Books?</h3>
//     <div className="reasons">
//       <div className="reason">
//         <div className="reason-icon">🧘‍♂️</div>
//         <h4>Self-Realization</h4>
//         <p>Discover your true self beyond the body and mind through ancient wisdom.</p>
//       </div>
//       <div className="reason">
//         <div className="reason-icon">📿</div>
//         <h4>Devotion & Dharma</h4>
//         <p>Understand your sacred duty and cultivate divine connection.</p>
//       </div>
//       <div className="reason">
//         <div className="reason-icon">🕊️</div>
//         <h4>Inner Peace</h4>
//         <p>Experience lasting peace through timeless teachings and meditation.</p>
//       </div>
//       <div className="reason">
//         <div className="reason-icon">🌅</div>
//         <h4>Daily Guidance</h4>
//         <p>Find practical wisdom for navigating life's challenges with grace.</p>
//       </div>
//     </div>
//   </div>
// );

// const DailyWisdom = () => {
//   const [currentWisdom, setCurrentWisdom] = useState(0);
  
//   const wisdomList = [
//     {
//       text: "The mind is everything. What you think you become.",
//       source: "Buddha"
//     },
//     {
//       text: "Perform your obligatory duty, because action is indeed better than inaction.",
//       source: "Bhagavad Gita 3.8"
//     },
//     {
//       text: "The soul is neither born, nor does it ever die.",
//       source: "Bhagavad Gita 2.20"
//     }
//   ];

//   const nextWisdom = () => {
//     setCurrentWisdom((prev) => (prev + 1) % wisdomList.length);
//   };

//   const prevWisdom = () => {
//     setCurrentWisdom((prev) => (prev - 1 + wisdomList.length) % wisdomList.length);
//   };

//   return (
//     <div className="daily-wisdom">
//       <h3>Wisdom for Today</h3>
//       <div className="wisdom-carousel">
//         <button className="carousel-btn" onClick={prevWisdom}>‹</button>
//         <div className="wisdom-content">
//           <p className="wisdom-text">"{wisdomList[currentWisdom].text}"</p>
//           <p className="wisdom-source">— {wisdomList[currentWisdom].source}</p>
//         </div>
//         <button className="carousel-btn" onClick={nextWisdom}>›</button>
//       </div>
//     </div>
//   );
// };

// const SpiritualBookSection = () => {
//   return (
//     <section className="spiritual-book-section">
//       <div className="section-header">
//         <h2>Sacred Texts & Timeless Wisdom</h2>
//         <p>Discover our curated collection of scriptures and spiritual literature from various traditions.</p>
//         <div className="divider">
//           <span className="om-symbol"></span>
//         </div>
//       </div>

//       <ShlokaBanner />
//       <SacredKnowledge />
//       <DailyWisdom />
//     </section>
//   );
// };

// export default SpiritualBookSection;

import React, { useState, useEffect } from 'react';
import './Path.css';

const SpiritualBookSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const quotes = [
    {
      text: "The mind is everything. What you think you become.",
      source: "Buddha"
    },
    {
      text: "Perform your obligatory duty, because action is indeed better than inaction.",
      source: "Bhagavad Gita 3.8"
    },
    {
      text: "The soul is neither born, nor does it ever die.",
      source: "Bhagavad Gita 2.20"
    }
  ];

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(true);
    
    // Auto-rotate quotes
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="spiritual-container">
      {/* Floating particles background */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.2 + Math.random() * 0.8})`
          }}>ॐ</div>  
        ))}
      </div>
      
      {/* Shloka Section */}
      <div className={`shloka-section ${isVisible ? 'visible' : ''}`}>
        <div className="shloka-card">
          <div className="shloka-header">
            <div className="sanskrit-symbol floating">ॐ</div>
            <h3>Bhagavad Gita 2.20</h3>
          </div>
          <div className="shloka-content">
            <div className="sanskrit-text">
              <p>न जायते म्रियते वा कदाचित्</p>
              <p>नायं भूत्वा भविता वा न भूयः</p>
              <p>अजो नित्यः शाश्वतोऽयं पुराणो</p>
              <p>न हन्यते हन्यमाने शरीरे</p>
            </div>
            <div className="translation">
              <p>"For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval. He is not slain when the body is slain."</p>
            </div>
          </div>
          <div className="decorative-border"></div>
          <div className="mandala-decoration"></div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className={`benefits-section ${isVisible ? 'visible' : ''}`}>
        <h2>Why Read Spiritual Books?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <i className="fas fa-brain"></i>
              </div>
            </div>
            <h3>Self-Realization</h3>
            <p>Discover your true self beyond the body and mind through ancient wisdom.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <i className="fas fa-om"></i>
              </div>
            </div>
            <h3>Devotion & Dharma</h3>
            <p>Understand your sacred duty and cultivate divine connection.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <i className="fas fa-peace"></i>
              </div>
            </div>
            <h3>Inner Peace</h3>
            <p>Experience lasting peace through timeless teachings and meditation.</p>
          </div>
          
          <div className="benefit-card">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <i className="fas fa-compass"></i>
              </div>
            </div>
            <h3>Daily Guidance</h3>
            <p>Find practical wisdom for navigating life's challenges with grace.</p>
          </div>
        </div>
      </div>
      
      {/* Quotes Section */}
      <div className={`quotes-section ${isVisible ? 'visible' : ''}`}>
        <h2>Wisdom for Today</h2>
        <div className="quotes-container">
          <div className="quote-display">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className={`quote-content ${index === activeQuote ? 'active' : ''}`}
              >
                <div className="quote-text">"{quote.text}"</div>
                <div className="quote-source">— {quote.source}</div>
              </div>
            ))}
          </div>
          <div className="quote-controls">
            {quotes.map((_, index) => (
              <button 
                key={index}
                className={`quote-btn ${index === activeQuote ? 'active' : ''}`}
                onClick={() => setActiveQuote(index)}
              >
                <div className="quote-indicator"></div>
              </button>
            ))}
          </div>
          <div className="decorative-element">
            <div className="lotus-flower"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualBookSection;