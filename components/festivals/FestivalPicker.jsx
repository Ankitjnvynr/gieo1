// import React from "react";
// import "./FestivalPicker.css";

// const FestivalPicker = () => {
//   return (
//     <div className="festival-picker">
//       <p>
//         “Festivals are the flowers of devotion. Every celebration is an
//         opportunity to connect with the Divine through joy, service, and
//         spiritual remembrance.”
//       </p>
//     </div>
//   );
// };

// export default FestivalPicker;
// "use client";
// import React, { useState, useEffect } from "react";
// import "./FestivalPicker.css";

// const FestivalPicker = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
    
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
    
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`festival-picker ${isVisible ? 'visible' : ''}`}>
//       <div className="quote-container">
//         <div className="quote-decoration top-left"></div>
//         <div className="quote-decoration top-right"></div>
//         <div className="quote-decoration bottom-left"></div>
//         <div className="quote-decoration bottom-right"></div>
        
//         <p className="quote-text">
//           <span className="quote-mark left">“</span>
//           Festivals are the flowers of devotion. Every celebration is an opportunity to connect with the Divine through joy, service, and spiritual remembrance.
//           <span className="quote-mark right">”</span>
//         </p>
        
//         <div className="author-signature">
//           <div className="signature-line"></div>
//           <div className="author-name">Sri Sathya Sai Baba</div>
//           <div className="signature-line"></div>
//         </div>
//       </div>
      
//       <div className="interactive-elements">
//         <div className="confetti">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="confetti-piece"
//               style={{
//                 '--delay': `${i * 0.1}s`,
//                 '--color': `hsl(${Math.random() * 360}, 70%, 60%)`,
//                 '--rotation': `${Math.random() * 360}deg`,
//                 '--size': `${5 + Math.random() * 10}px`,
//                 '--x-start': `${Math.random() * 100}%`,
//                 '--x-end': `${Math.random() * 100}%`,
//                 '--y-start': `${-10 - Math.random() * 20}%`,
//                 '--y-end': `${100 + Math.random() * 20}%`,
//               }}
//             ></div>
//           ))}
//         </div>
        
//         <div className="season-picker">
//           <div className="season-title">Select a Season:</div>
//           <div className="season-options">
//             {['Spring', 'Summer', 'Autumn', 'Winter'].map((season, index) => (
//               <div 
//                 key={index} 
//                 className="season-option"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = '#a59069';
//                   e.currentTarget.style.color = '#fff';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = '#f8f4e8';
//                   e.currentTarget.style.color = '#5a3816';
//                 }}
//               >
//                 {season}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FestivalPicker;

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "./FestivalPicker.css";

// const FestivalPicker = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFestival, setActiveFestival] = useState(0);
//   const festivalContainerRef = useRef(null);
  
//   const festivals = [
//     {
//       id: 1,
//       name: "Diwali",
//       color: "#FF9800",
//       date: "Oct 24-28, 2024",
//       location: "Varanasi, India"
//     },
//     {
//       id: 2,
//       name: "Rio Carnival",
//       color: "#E91E63",
//       date: "Feb 9-17, 2025",
//       location: "Rio de Janeiro"
//     },
//     {
//       id: 3,
//       name: "Oktoberfest",
//       color: "#4CAF50",
//       date: "Sep 21 - Oct 6, 2024",
//       location: "Munich, Germany"
//     },
//     {
//       id: 4,
//       name: "Holi",
//       color: "#9C27B0",
//       date: "Mar 14-15, 2025",
//       location: "Mathura, India"
//     },
//     {
//       id: 5,
//       name: "Lantern Festival",
//       color: "#2196F3",
//       date: "Feb 11-12, 2025",
//       location: "Pingxi, Taiwan"
//     }
//   ];

//   useEffect(() => {
//     // Trigger animation after component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
    
//     // Auto-rotate festivals
//     const rotateTimer = setInterval(() => {
//       setActiveFestival(prev => (prev + 1) % festivals.length);
//     }, 4000);
    
//     return () => {
//       clearTimeout(timer);
//       clearInterval(rotateTimer);
//     };
//   }, [festivals.length]);

//   const scrollToFestivals = () => {
//     document.getElementById('festivals')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleFestivalClick = (index) => {
//     setActiveFestival(index);
//     scrollToFestivals();
//   };

//   return (
//     <div className={`festival-picker ${isVisible ? 'visible' : ''}`}>
//       <div className="quote-container">
//         <div className="quote-decoration top-left"></div>
//         <div className="quote-decoration top-right"></div>
//         <div className="quote-decoration bottom-left"></div>
//         <div className="quote-decoration bottom-right"></div>
        
//         <p className="quote-text">
//           <span className="quote-mark left">“</span>
//           Festivals are the flowers of devotion. Every celebration is an opportunity to connect with the Divine through joy, service, and spiritual remembrance.
//           <span className="quote-mark right">”</span>
//         </p>
        
//         <div className="author-signature">
//           <div className="signature-line"></div>
//           <div className="author-name">Sri Sathya Sai Baba</div>
//           <div className="signature-line"></div>
//         </div>
//       </div>
      
//       <div className="interactive-elements">
//         <div className="confetti">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i} 
//               className="confetti-piece"
//               style={{
//                 '--delay': `${i * 0.1}s`,
//                 '--color': `hsl(${Math.random() * 360}, 70%, 60%)`,
//                 '--rotation': `${Math.random() * 360}deg`,
//                 '--size': `${5 + Math.random() * 10}px`,
//                 '--x-start': `${Math.random() * 100}%`,
//                 '--x-end': `${Math.random() * 100}%`,
//                 '--y-start': `${-10 - Math.random() * 20}%`,
//                 '--y-end': `${100 + Math.random() * 20}%`,
//               }}
//             ></div>
//           ))}
//         </div>
        
//         <div className="festival-navigator">
//           <div className="navigator-title">Explore Featured Festivals</div>
//           <div className="navigator-subtitle">Click any festival to learn more</div>
          
//           <div className="festival-previews" ref={festivalContainerRef}>
//             {festivals.map((festival, index) => (
//               <div 
//                 key={festival.id}
//                 className={`festival-preview ${index === activeFestival ? 'active' : ''}`}
//                 onClick={() => handleFestivalClick(index)}
//                 style={{
//                   '--festival-color': festival.color,
//                   '--position': index - activeFestival
//                 }}
//               >
//                 <div className="festival-emoji">
//                   {festival.name === "Diwali" && "🪔"}
//                   {festival.name === "Rio Carnival" && "🎉"}
//                   {festival.name === "Oktoberfest" && "🍺"}
//                   {festival.name === "Holi" && "🎨"}
//                   {festival.name === "Lantern Festival" && "🏮"}
//                 </div>
//                 <div className="festival-info">
//                   <h3 className="festival-name">{festival.name}</h3>
//                   <div className="festival-date">{festival.date}</div>
//                   <div className="festival-location">{festival.location}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="festival-indicators">
//             {festivals.map((_, index) => (
//               <button 
//                 key={index}
//                 className={`indicator ${index === activeFestival ? 'active' : ''}`}
//                 onClick={() => setActiveFestival(index)}
//                 aria-label={`Select ${festivals[index].name} festival`}
//               />
//             ))}
//           </div>
          
//           <button className="view-all-button" onClick={scrollToFestivals}>
//             View All Festivals
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FestivalPicker;

// src/components/FestivalPicker.js
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "./FestivalPicker.css";

// const FestivalPicker = ({ onFestivalSelect }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFestival, setActiveFestival] = useState(null);
//   const scrollContainer = useRef(null);

//   const festivals = [
//     {
//       id: 0,
//       title: "Maharaj Ji's Appearance Day",
//       icon: "🪷",
//       bgImage: "/assets/maharaj.jpg",
//       quote: "The true celebration is when the heart blossoms with divine love.",
//       author: "Maharaj Ji"
//     },
//     {
//       id: 1,
//       title: "Sri Krishna Janmashtami",
//       icon: "🪔",
//       bgImage: "/assets/krishna.jpg",
//       quote: "When Krishna enters your heart, every day becomes Janmashtami.",
//       author: "Bhagavad Gita"
//     },
//     {
//       id: 2,
//       title: "Sri Radhashtami",
//       icon: "🌺",
//       bgImage: "/assets/radhaashtami.jpg",
//       quote: "Radha's love teaches us the purest form of devotion.",
//       author: "Vedic Scriptures"
//     },
//     {
//       id: 3,
//       title: "Gita Jayanti",
//       icon: "📖",
//       bgImage: "/assets/gita-jayanti.jpg",
//       quote: "The Gita's wisdom illuminates the path to eternal truth.",
//       author: "Lord Krishna"
//     },
//     {
//       id: 4,
//       title: "Diwali",
//       icon: "🪔",
//       bgImage: "/assets/diwali.jpg",
//       quote: "The light of wisdom dispels the darkness of ignorance.",
//       author: "Upanishads"
//     },
//     {
//       id: 5,
//       title: "Holi",
//       icon: "🌈",
//       bgImage: "/assets/holi.jpg",
//       quote: "Colors of joy wash away the dust of worldly attachments.",
//       author: "Ancient Proverb"
//     }
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleCardClick = (festival) => {
//     setActiveFestival(festival);
//     onFestivalSelect(festival.id);
    
//     // Scroll to center the selected card
//     const card = document.querySelector(`.preview-card[data-id="${festival.id}"]`);
//     if (card && scrollContainer.current) {
//       const container = scrollContainer.current;
//       const cardRect = card.getBoundingClientRect();
//       const containerRect = container.getBoundingClientRect();
//       const scrollLeft = card.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
      
//       container.scrollTo({
//         left: scrollLeft,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className={`festival-picker ${isVisible ? 'visible' : ''}`}>
//       <div className="quote-container">
//         <div className="quote-decoration top-left"></div>
//         <div className="quote-decoration top-right"></div>
//         <div className="quote-decoration bottom-left"></div>
//         <div className="quote-decoration bottom-right"></div>
        
//         <div className="quote-content">
//           <div className="quote-mandala"></div>
//           <p className="quote-text">
//             <span className="quote-mark left">“</span>
//             {activeFestival ? activeFestival.quote : "Festivals are the flowers of devotion. Every celebration is an opportunity to connect with the Divine through joy, service, and spiritual remembrance."}
//             <span className="quote-mark right">”</span>
//           </p>
//           <div className="quote-flower-decoration"></div>
//         </div>
        
//         <div className="author-signature">
//           <div className="signature-line"></div>
//           <div className="author-name">
//             {activeFestival ? activeFestival.author : "Sri Sathya Sai Baba"}
//           </div>
//           <div className="signature-line"></div>
//         </div>
//       </div>
      
//       <div className="interactive-elements">
//         <div className="festival-previews">
//           <div className="preview-title">Select a Festival to Explore</div>
//           <div className="preview-subtitle">Click any festival to learn more</div>
          
//           <div className="preview-cards-container" ref={scrollContainer}>
//             <div className="preview-cards">
//               {festivals.map((festival) => (
//                 <div
//                   key={festival.id}
//                   data-id={festival.id}
//                   className={`preview-card ${activeFestival?.id === festival.id ? 'active' : ''}`}
//                   onClick={() => handleCardClick(festival)}
//                   style={{ 
//                     backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${festival.bgImage})`
//                   }}
//                 >
//                   <div className="card-overlay"></div>
//                   <h3>{festival.title}</h3>
//                   <div className="card-icon">{festival.icon}</div>
//                   {activeFestival?.id === festival.id && (
//                     <div className="active-indicator"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="scroll-hint">← Scroll to explore →</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FestivalPicker;
"use client";
import React, { useState, useEffect, useRef } from "react";
import "./FestivalPicker.css";

const TeachingsCarousel = ({ onTeachingSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTeaching, setActiveTeaching] = useState(0);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const teachings = [
    {
      id: 0,
      title: "The Path of Love",
      symbol: "🕉️",
      verse: "When love flows unconditionally from the heart, the divine reveals itself in every moment.",
      source: "Bhagavad Gita 12.13"
    },
    {
      id: 1,
      title: "Wisdom of Stillness",
      symbol: "☯️",
      verse: "In the silence between thoughts, the universe whispers its eternal truths.",
      source: "Upanishads"
    },
    {
      id: 2,
      title: "Service as Worship",
      symbol: "🙏",
      verse: "To serve others selflessly is the highest form of worship to the Divine.",
      source: "Maharaj Ji"
    },
    {
      id: 3,
      title: "The Light Within",
      symbol: "🪔",
      verse: "The same light that illuminates the sun dwells within your own consciousness.",
      source: "Yoga Vasishta"
    },
    {
      id: 4,
      title: "Eternal Joy",
      symbol: "🕉️",
      verse: "True happiness comes not from external possessions but from inner realization.",
      source: "Sri Sathya Sai Baba"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Auto-rotate teachings
    intervalRef.current = setInterval(() => {
      setActiveTeaching(prev => (prev + 1) % teachings.length);
      setProgress(0);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => prev + 0.5);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleDotClick = (index) => {
    setActiveTeaching(index);
    setProgress(0);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTeaching(prev => (prev + 1) % teachings.length);
      setProgress(0);
    }, 8000);
  };

  const handlePrev = () => {
    setActiveTeaching(prev => (prev - 1 + teachings.length) % teachings.length);
    setProgress(0);
    resetInterval();
  };

  const handleNext = () => {
    setActiveTeaching(prev => (prev + 1) % teachings.length);
    setProgress(0);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTeaching(prev => (prev + 1) % teachings.length);
      setProgress(0);
    }, 8000);
  };

  return (
    <div className={`teachings-carousel ${isVisible ? 'visible' : ''}`}>
      <div className="carousel-header">
        <h2>Sacred Wisdom</h2>
        <p>Timeless teachings for modern life</p>
      </div>
      
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {teachings.map((teaching, index) => (
            <div 
              key={teaching.id}
              className={`teaching-card ${index === activeTeaching ? 'active' : ''}`}
              aria-hidden={index !== activeTeaching}
            >
              <div className="teaching-symbol">{teaching.symbol}</div>
              <h3>{teaching.title}</h3>
              <blockquote>
                <p>{teaching.verse}</p>
                <footer>— {teaching.source}</footer>
              </blockquote>
            </div>
          ))}
        </div>
        
        <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous teaching">
          <span className="nav-arrow">‹</span>
        </button>
        <button className="carousel-nav next" onClick={handleNext} aria-label="Next teaching">
          <span className="nav-arrow">›</span>
        </button>
        
        <div className="progress-indicator">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        
        <div className="carousel-dots">
          {teachings.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTeaching ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to teaching ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* <div className="carousel-footer">
        <p>Tap or click to explore more divine wisdom</p>
      </div> */}
    </div>
  );
};

export default TeachingsCarousel;