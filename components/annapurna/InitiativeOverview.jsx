// src/components/InitiativeOverview.jsx
import React, { useState, useEffect } from 'react';
import './InitiativeOverview.css';

const InitiativeOverview = () => {
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 50000, label: "Students Fed Annually", prefix: "+" },
    { id: 2, value: 0, target: 1000, label: "Schools Reached", prefix: "+" },
    { id: 3, value: 0, target: 10, label: "Meals Served", suffix: " Million+" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => 
          stat.value < stat.target 
            ? { ...stat, value: Math.min(stat.value + Math.ceil(stat.target / 100), stat.target) } 
            : stat
        )
      );
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="initiative-overview">
      <div className="container">
        <div className="section-title">
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">🕉️</div>
            <div className="decoration-line"></div>
          </div>
          <h2>Prasadam for Gita Gieo: Food for Body, Wisdom for Life</h2>
          <div className="title-subtext">
            Spiritual Sustenance • Sacred Nourishment • Divine Connection
          </div>
        </div>
        
        <div className="overview-content">
          <div className="overview-text">
            <p className="lead-text">In the sacred tradition of <span className="highlight">Annapurna Annadana</span>, ISKCON Bangalore combines spiritual nourishment with physical sustenance through our <span className="highlight">Prasadam for Gita Gieo</span> initiative. This program provides students across India with:</p>
            
            <ul className="sacred-list">
              <li>
                <div className="list-icon">📖</div>
                <div className="list-content">
                  <strong>A copy of the Bhagavad Gita</strong> - the timeless spiritual wisdom
                </div>
              </li>
              <li>
                <div className="list-icon">🍛</div>
                <div className="list-content">
                  Nutritious <strong>satvik prasadam</strong> - sanctified vegetarian meals prepared with devotion
                </div>
              </li>
              <li>
                <div className="list-icon">🙏</div>
                <div className="list-content">
                  The gift of <strong>spiritual awakening</strong> and physical nourishment
                </div>
              </li>
            </ul>
            
            <div className="spiritual-note">
              <div className="note-icon">🌿</div>
              <p>Our prasadam is prepared in state-of-the-art kitchens following strict hygiene standards while maintaining spiritual sanctity. Each meal is first offered to Lord Krishna before distribution, transforming ordinary food into divine nourishment.</p>
            </div>
            
            <div className="stats">
              {stats.map(stat => (
                <div key={stat.id} className="stat-item">
                  <div className="stat-value">
                    {stat.value}{stat.prefix || ""}{stat.suffix || ""}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="overview-image">
            <div className="image-card">
              <div className="image-frame">
                <img 
                  src="/assets/festival_images/Gita_image.jpg" 
                  alt="Prasadam Preparation" 
                  className="main-image"
                />
                <div className="frame-decoration"></div>
              </div>
              
              <div className="image-tag">
                <div className="tag-icon">🔹</div>
                <div className="tag-text">Sacred Food Preparation</div>
              </div>
              
              <div className="floating-element floating-1">
                <div className="element-icon">📚</div>
              </div>
              <div className="floating-element floating-2">
                <div className="element-icon">🍚</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativeOverview;