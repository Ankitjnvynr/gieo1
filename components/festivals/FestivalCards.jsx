// import React from "react";
// import "./FestivalCards.css";

// const festivalData = [
//   {
//     title: "Maharaj Ji's Appearance Day",
//     image: "/assets/maharaj.jpg",
//     description:
//       "A celebration of the divine appearance of our spiritual master. The day is filled with kirtans, abhishekam, guru-puja, and heartfelt offerings. Devotees reflect on his teachings, express gratitude, and reaffirm their spiritual goals in his loving presence.",
//   },
//   {
//     title: "Sri Krishna Janmashtami",
//     image: "C:\Users\bhoom\Desktop\GIEO GITA\gieo1\app\festivals\public\images\heroimage.jpeg",
//     description:
//       "The most auspicious night marking Lord Krishna's appearance. Temples resound with bhajans, dramas, abhishekam, and midnight arati. The stories of Krishna's childhood pastimes fill the atmosphere with bliss and devotion.",
//   },
//   {
//     title: "Sri Radhashtami",
//     image: "/assets/radhaashtami.jpg",
//     description:
//       "Radharani's divine appearance is celebrated with loving bhajans, flower offerings, and glorifications. The pinnacle of devotion, Radha’s love is pure and selfless, teaching us the essence of bhakti.",
//   },
//   {
//     title: "Gita Jayanti",
//     image: "/assets/gita-jayanti.jpg",
//     description:
//       "The sacred day Lord Krishna imparted the Bhagavad Gita to Arjuna. Recitations, spiritual seminars, and study circles are held to deepen understanding and application of the timeless wisdom.",
//   },
// ];

// const FestivalCards = () => {
//   return (
//     <section className="festival-cards-section">
//       {festivalData.map((item, index) => (
//         <div
//           className={`festival-card ${index % 2 === 0 ? "" : "reverse"}`}
//           key={index}
//         >
//           <img src={item.image} alt={item.title} className="festival-image" />
//           <div className="festival-text">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//       <div className="spiritual-divider">ॐ</div>
//     </section>
//   );
// };

// export default FestivalCards;

// src/components/FestivalCards.js
// "use client";
// import React, { useState, useEffect } from "react";
// import "./FestivalCards.css";

// const festivalData = [
//   {
//     title: "Maharaj Ji's Appearance Day",
//     image: "",
//     description:
//       "A celebration of the divine appearance of our spiritual master. The day is filled with kirtans, abhishekam, guru-puja, and heartfelt offerings. Devotees reflect on his teachings, express gratitude, and reaffirm their spiritual goals in his loving presence.",
//     schedule: [
//       "5:00 AM - Mangala Arati",
//       "7:30 AM - Guru Puja",
//       "10:00 AM - Abhishekam",
//       "12:00 PM - Bhajan Kirtan",
//       "6:00 PM - Discourse on Guru Tattva",
//       "8:00 PM - Maha Arati"
//     ]
//   },
//   {
//     title: "Sri Krishna Janmashtami",
//     image: "/assets/krishna.jpg",
//     description:
//       "The most auspicious night marking Lord Krishna's appearance. Temples resound with bhajans, dramas, abhishekam, and midnight arati. The stories of Krishna's childhood pastimes fill the atmosphere with bliss and devotion. Devotees fast until midnight and celebrate with great enthusiasm.",
//     schedule: [
//       "4:00 AM - Fasting begins",
//       "10:00 AM - Krishna Lilas (Dramas)",
//       "4:00 PM - Bhagavad Gita Discourse",
//       "8:00 PM - Bhajan Sandhya",
//       "11:55 PM - Midnight Arati",
//       "12:30 AM - Prasadam Distribution"
//     ]
//   },
//   {
//     title: "Sri Radhashtami",
//     image: "/assets/radhaashtami.jpg",
//     description:
//       "Radharani's divine appearance is celebrated with loving bhajans, flower offerings, and glorifications. The pinnacle of devotion, Radha's love is pure and selfless, teaching us the essence of bhakti. Devotees offer special prayers and decorate the altar with flowers and ornaments.",
//     schedule: [
//       "5:30 AM - Radha-Krishna Arati",
//       "9:00 AM - Flower Offering Ceremony",
//       "11:00 AM - Kirtan of Radha's Glories",
//       "3:00 PM - Discourse on Radha Bhakti",
//       "6:30 PM - Bhajan and Meditation",
//       "8:30 PM - Grand Arati"
//     ]
//   },
//   {
//     title: "Gita Jayanti",
//     image: "/assets/gita-jayanti.jpg",
//     description:
//       "The sacred day Lord Krishna imparted the Bhagavad Gita to Arjuna. Recitations, spiritual seminars, and study circles are held to deepen understanding and application of the timeless wisdom. Devotees engage in group readings and discussions on the Gita's teachings.",
//     schedule: [
//       "6:00 AM - Gita Parayanam (Recitation)",
//       "10:00 AM - Seminar on Gita's Message",
//       "1:00 PM - Group Discussions",
//       "4:00 PM - Youth Gita Workshop",
//       "6:30 PM - Discourse on Selected Verses",
//       "8:00 PM - Gita Arati"
//     ]
//   }
// ];

// const FestivalCards = ({ selectedFestival }) => {
//   const [activeFestival, setActiveFestival] = useState(selectedFestival || 0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     if (selectedFestival !== undefined) {
//       setActiveFestival(selectedFestival);
//     }
    
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
    
//     return () => clearTimeout(timer);
//   }, [selectedFestival]);

//   return (
//     <section className={`festival-cards-section ${isVisible ? 'visible' : ''}`}>
//       <div className="section-header">
//         <h1>Sacred Festivals</h1>
//         <p>Divine celebrations that illuminate our spiritual path</p>
//       </div>
      
//       <div className="festival-navigation">
//         {festivalData.map((festival, index) => (
//           <button
//             key={index}
//             className={`nav-button ${index === activeFestival ? 'active' : ''}`}
//             onClick={() => setActiveFestival(index)}
//           >
//             {festival.title}
//           </button>
//         ))}
//       </div>
      
//       <div className="festival-card-container">
//         <div className="festival-card">
//           <div 
//             className="festival-image"
//             style={{ backgroundImage: `url(${festivalData[activeFestival].image})` }}
//           >
//             <div className="image-overlay"></div>
//           </div>
          
//           <div className="festival-content">
//             <h2>{festivalData[activeFestival].title}</h2>
//             <p>{festivalData[activeFestival].description}</p>
            
//             <div className="festival-schedule">
//               <h3>Festival Schedule</h3>
//               <ul>
//                 {festivalData[activeFestival].schedule.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="festival-actions">
//               <button className="action-button">
//                 <span>📅</span> Add to Calendar
//               </button>
//               <button className="action-button">
//                 <span>📱</span> Share Event
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="spiritual-divider">
//         <span>ॐ</span>
//       </div>
//     </section>
//   );
// };
// "use client";
// import React, { useEffect, useRef } from 'react';
// import './FestivalJourney.css';

// const FestivalJourney = () => {
//   const festivals = [
//     {
//       id: 1,
//       title: "Maharaj Ji's Appearance Day",
//       date: "March 15",
//       description: "Celebration of our spiritual master's divine appearance with kirtans, abhishekam, and heartfelt offerings.",
//       details: "Devotees reflect on teachings, express gratitude, and reaffirm spiritual goals. The day is filled with devotional activities and community gatherings.",
//       image: "",
//       color: "#a59069",
//       icon: "🪷"
//     },
//     {
//       id: 2,
//       title: "Sri Krishna Janmashtami",
//       date: "August 19",
//       description: "Auspicious night marking Lord Krishna's appearance with bhajans, dramas, and midnight arati.",
//       details: "Temples resound with celebrations as stories of Krishna's pastimes fill the atmosphere with bliss. Devotees fast until midnight in anticipation.",
//       image: "/assets/krishna.jpg",
//       color: "#5a3816",
//       icon: "🪔"
//     },
//     {
//       id: 3,
//       title: "Sri Radhashtami",
//       date: "September 7",
//       description: "Radharani's divine appearance celebrated with loving bhajans and flower offerings.",
//       details: "The pinnacle of devotion, Radha's pure love teaches the essence of bhakti. Altars are decorated with special care and devotion.",
//       image: "/assets/radhaashtami.jpg",
//       color: "#c19a6b",
//       icon: "🌺"
//     },
//     {
//       id: 4,
//       title: "Gita Jayanti",
//       date: "December 14",
//       description: "Sacred day Lord Krishna imparted the Bhagavad Gita to Arjuna.",
//       details: "Recitations, seminars, and study circles deepen understanding of this timeless wisdom. Devotees engage in group readings and discussions.",
//       image: "/assets/gita-jayanti.jpg",
//       color: "#8a7754",
//       icon: "📖"
//     }
//   ];

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, { threshold: 0.1 });

//     const festivalElements = containerRef.current.querySelectorAll('.festival-item');
//     festivalElements.forEach(el => observer.observe(el));
    
//     return () => festivalElements.forEach(el => observer.unobserve(el));
//   }, []);

//   return (
//     <div className="festival-journey" ref={containerRef}>
//       <div className="journey-header">
//         <h2>Sacred Festivals Journey</h2>
//         <div className="header-divider">
//           <div className="divider-line"></div>
//           <div className="divider-symbol">ॐ</div>
//           <div className="divider-line"></div>
//         </div>
//         <p>Divine celebrations illuminating our spiritual path</p>
//       </div>
      
//       <div className="festival-container">
//         {festivals.map((festival, index) => (
//           <React.Fragment key={festival.id}>
//             <div 
//               className="festival-item" 
//               style={{ '--festival-color': festival.color }}
//             >
//               <div className="festival-content">
//                 <div className="festival-header">
//                   <div className="festival-icon">{festival.icon}</div>
//                   <div>
//                     <h3>{festival.title}</h3>
//                     <div className="festival-date">{festival.date}</div>
//                   </div>
//                 </div>
                
//                 <div className="festival-body">
//                   <div 
//                     className="festival-image" 
//                     style={{ backgroundImage: `url(${festival.image})` }}
//                   >
//                     <div className="image-overlay"></div>
//                     <div className="image-decoration"></div>
//                   </div>
                  
//                   <div className="festival-text">
//                     <div className="festival-description">{festival.description}</div>
//                     <div className="festival-details">{festival.details}</div>
//                   </div>
//                 </div>
                
//                 <div className="spiritual-symbols">
//                   <span>☸️</span>
//                   <span>🕉️</span>
//                   <span>☯️</span>
//                 </div>
//               </div>
//             </div>
            
//             {index < festivals.length - 1 && (
//               <div className="artistic-divider">
//                 <div className="divider-wave">
//                   <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//                     <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
//                     <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
//                     <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
//                   </svg>
//                 </div>
//                 <div className="divider-symbol">❁</div>
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
      
//       <div className="journey-footer">
//         <div className="spiritual-divider">
//           <div className="divider-line"></div>
//           <div className="divider-symbol">☸️</div>
//           <div className="divider-line"></div>
//         </div>
//         <p>May these festivals illuminate your spiritual journey</p>
//       </div>
//     </div>
//   );
// };

// export default FestivalJourney;
"use client";
import React, { useEffect, useRef } from 'react';
import './EnhancedFestivalJourney.css';

const EnhancedFestivalJourney = () => {
  const festivals = [
    {
      id: 1,
      title: "Maharaj Ji's Appearance Day",
      date: "March 15",
      description: "Celebration of our spiritual master's divine appearance with kirtans, abhishekam, and heartfelt offerings.",
      details: "Devotees reflect on teachings, express gratitude, and reaffirm spiritual goals. The day is filled with devotional activities and community gatherings.",
      image: "/assets/festival_images/Birthday.jpg",
      color: "#a59069",
      icon: "🪷"
    },
    {
      id: 2,
      title: "Sri Krishna Janmashtami",
      date: "August 19",
      description: "Auspicious night marking Lord Krishna's appearance with bhajans, dramas, and midnight arati.",
      details: "Temples resound with celebrations as stories of Krishna's pastimes fill the atmosphere with bliss. Devotees fast until midnight in anticipation.",
      image: "/assets/krishna.jpg",
      color: "#5a3816",
      icon: "🪔"
    },
    {
      id: 3,
      title: "Sri Radhashtami",
      date: "September 7",
      description: "Radharani's divine appearance celebrated with loving bhajans and flower offerings.",
      details: "The pinnacle of devotion, Radha's pure love teaches the essence of bhakti. Altars are decorated with special care and devotion.",
      image: "/assets/radhaashtami.jpg",
      color: "#c19a6b",
      icon: "🌺"
    },
    {
      id: 4,
      title: "Gita Jayanti",
      date: "December 14",
      description: "Sacred day Lord Krishna imparted the Bhagavad Gita to Arjuna.",
      details: "Recitations, seminars, and study circles deepen understanding of this timeless wisdom. Devotees engage in group readings and discussions.",
      image: "/assets/gita-jayanti.jpg",
      color: "#8a7754",
      icon: "📖"
    }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const festivalElements = containerRef.current.querySelectorAll('.festival-item');
    festivalElements.forEach(el => observer.observe(el));
    
    return () => festivalElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="festival-journey" ref={containerRef}>
      <div className="journey-header">
        <div className="header-decoration">
          <div className="deco-circle"></div>
          <div className="deco-line"></div>
          <div className="deco-circle"></div>
        </div>
        <h2>Sacred Festivals Journey</h2>
        <div className="header-divider">
          <div className="divider-line"></div>
          <div className="divider-symbol">ॐ</div>
          <div className="divider-line"></div>
        </div>
        <p>Divine celebrations illuminating our spiritual path</p>
      </div>
      
      <div className="festival-container">
        {festivals.map((festival, index) => (
          <React.Fragment key={festival.id}>
            <div 
              className="festival-item" 
              style={{ '--festival-color': festival.color }}
            >
              <div className="festival-content">
                <div className="festival-header">
                  <div className="festival-icon" style={{ backgroundColor: `${festival.color}22` }}>
                    {festival.icon}
                  </div>
                  <div className="festival-title-container">
                    <h3>{festival.title}</h3>
                    <div className="festival-date">{festival.date}</div>
                  </div>
                </div>
                
                <div className="festival-body">
                  <div className="image-container">
                    <div 
                      className="festival-image" 
                      style={{ backgroundImage: `url(${festival.image})` }}
                    >
                      <div className="image-overlay"></div>
                      <div className="image-frame"></div>
                      <div className="image-reflection"></div>
                    </div>
                    <div className="image-decoration">
                      <div className="deco-element"></div>
                      <div className="deco-element"></div>
                      <div className="deco-element"></div>
                    </div>
                  </div>
                  
                  <div className="festival-text">
                    <div className="festival-description">
                      <div className="quote-icon">“</div>
                      <p>{festival.description}</p>
                    </div>
                    <div className="festival-details">
                      <p>{festival.details}</p>
                      <div className="spiritual-symbols">
                        <span>☸️</span>
                        <span>🕉️</span>
                        <span>☯️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {index < festivals.length - 1 && (
              <div className="artistic-divider">
                <div className="divider-wave">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="divider-symbol">
                  <div className="rotating-symbol">❁</div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="journey-footer">
        <div className="spiritual-divider">
          <div className="divider-line"></div>
          <div className="divider-symbol">☸️</div>
          <div className="divider-line"></div>
        </div>
        <p>May these festivals illuminate your spiritual journey</p>
      </div>
    </div>
  );
};

export default EnhancedFestivalJourney;