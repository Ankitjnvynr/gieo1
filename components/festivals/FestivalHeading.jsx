// import React from "react";
// import "./FestivalHeading.css";

// const FestivalHeading = () => {
//   return (
//     <section className="festival-hero">
//       <h1 className="heading-title"> Gieo Gita Festivals</h1>
//       <div className="heading-divider">
//         <div className="line" />
//         <span className="icon">✦</span>
//         <div className="line" />
//       </div>
//       <img
//         src= "/assets/festival_images/heroimage.jpeg"
//         alt="Festivals Celebration"
//         className="hero-image"
//       />
//     </section>
//   );
// };

// export default FestivalHeading;


// "use client";
// import React, { useState, useEffect } from 'react';
// import "./FestivalHeading.css";

// const FestivalHeader = () => {
//   const [activeQuote, setActiveQuote] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   const spiritualIcons = ["🌸", "🕉️", "🪔", "📿", "🪷", "✨", "🙏", "🔔"];
//   const gitaQuotes = [
//     "Festivals are the soul's journey to the divine",
//     "Celebrations that connect us to our inner light",
//     "Sacred traditions that illuminate our path",
//     "Moments of spiritual awakening and joy"
//   ];

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Auto-advance quotes
//     const interval = setInterval(() => {
//       setActiveQuote(prev => (prev + 1) % gitaQuotes.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="festival-header">
//       {/* Background with Gyannand Maharaj Ji */}
//       <div className="background-container">
//         <div className="image-overlay"></div>
//       </div>
      
//       {/* Floating icons */}
//       <div className="floating-icons">
//         {spiritualIcons.map((icon, index) => (
//           <div 
//             key={index}
//             className="floating-icon"
//             style={{
//               top: `${10 + Math.random() * 80}%`,
//               left: `${5 + Math.random() * 90}%`,
//               fontSize: `${20 + Math.random() * 24}px`,
//               animationDelay: `${index * 0.5}s`,
//               animationDuration: `${15 + Math.random() * 15}s`
//             }}
//           >
//             {icon}
//           </div>
//         ))}
//       </div>
      
//       {/* Content */}
//       <div className={`content ${isVisible ? 'visible' : ''}`}>
//         <div className="title-container">
//           <h1 className="title">Spiritual Festivals</h1>
//           <div className="divider">
//             <div className="divider-line"></div>
//             <div className="divider-icon">🪔</div>
//             <div className="divider-line"></div>
//           </div>
//           <p className="subtitle">Celebrating divine connections through sacred traditions</p>
//         </div>
        
//         {/* Quote section */}
//         <div className="quote-container">
//           <div className="quote-icon">❝</div>
//           <div className="quote-slider">
//             {gitaQuotes.map((quote, index) => (
//               <div 
//                 key={index} 
//                 className={`quote ${index === activeQuote ? 'active' : ''}`}
//               >
//                 {quote}
//               </div>
//             ))}
//           </div>
//           <div className="quote-source">- Gieo Gita</div>
//         </div>
//       </div>
      
//       {/* Navigation dots */}
//       <div className="quote-controls">
//         {gitaQuotes.map((_, index) => (
//           <div 
//             key={index}
//             className={`control-dot ${index === activeQuote ? 'active' : ''}`}
//             onClick={() => setActiveQuote(index)}
//           />
//         ))}
//       </div>

//         </div>
//   );
// };

// export default FestivalHeader;
"use client";
import React, { useState } from "react";
import "./FestivalHeading.css";

const CompactSpiritualHero = () => {
  const [activeTab, setActiveTab] = useState(0);

  const spiritualTabs = [
    {
      title: "Divine Wisdom",
      text: "Immerse in the eternal knowledge of Bhagavad Gita",
      image: "/assets/festival_images/Gita_image (2).jpg",
      symbol: "🕉️",
      verse: "The soul is eternal, indestructible",
    },
    {
      title: "Sacred Community",
      text: "Join satsangs and spiritual gatherings",
      image: "/assets/festival_images/satsang.jpg",
      symbol: "🪷",
      verse: "Devotees meditate on Me with great faith",
    },
    {
      title: "Selfless Service",
      text: "Practice karma yoga through seva initiatives",
      image: "/assets/festival_images/image1.jpg",
      symbol: "🙏",
      verse: "Work done as sacrifice leads to spiritual freedom",
    },
  ];

  return (
    <section className="spiritual-compact-hero">
      <div className="floating-om">ॐ</div>
      <div className="floating-lotus">🪷</div>

      <div className="spiritual-header">
        <div className="title-container">
          <h1>
            <span className="sacred-brown">GIEO </span>
            <span className="sacred-gold">GITA </span>
            <span className="sacred-brown">FESTIVALS</span>
          </h1>
          <div className="sacred-divider"></div>
        </div>

        <div className="spiritual-tabs">
          {spiritualTabs.map((tab, index) => (
            <button
              key={index}
              className={`spiritual-tab ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-symbol">{tab.symbol}</span>
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="spiritual-content">
        <div className="sacred-text-content">
          <div className="verse-highlight">
            <span className="verse-symbol">❝</span>
            <p>{spiritualTabs[activeTab].verse}</p>
          </div>
          <h2>{spiritualTabs[activeTab].title}</h2>
          <p className="sacred-description">
            {spiritualTabs[activeTab].text}
          </p>
        </div>

        <div className="sacred-image-container">
          <img
            src={spiritualTabs[activeTab].image}
            alt={spiritualTabs[activeTab].title}
            className="sacred-image"
          />
          <div className="image-symbol">{spiritualTabs[activeTab].symbol}</div>
        </div>
      </div>
    </section>
  );
};

export default CompactSpiritualHero;
