// import React from "react";
// import "./GieoGitaFooter.css";

// const GieoGitaFooter = () => {
//   return (
//     <footer className="footer">
//       <h3>Gieo Gita Foundation</h3>
//       <p>
//         Empowering lives through the timeless teachings of the Bhagavad Gita.
//         Join us in spreading the divine message.
//       </p>
//       <p>&copy; 2025 Gieo Gita. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default GieoGitaFooter;
"use client";
import React, { useState } from 'react';
import './GieoGitaFooter.css';

const GieoGitaFooter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="gieo-footer">
      {/* Decorative top border */}
      <div className="footer-top-border">
        <div className="pattern-dot"></div>
        <div className="pattern-wave"></div>
        <div className="pattern-dot"></div>
      </div>
      
      {/* Main footer content */}
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-wrapper">
            <div className="main-logo">
              <span className="gg-logo">GG</span>
            </div>
            <div className="logo-glow"></div>
          </div>
          <h3 className="footer-title">
            Gieo<span>Gita</span>
          </h3>
          <p className="tagline">
            Spreading divine wisdom through sacred festivals
          </p>
        </div>
        
        <div className="footer-info">
          <div className="festival-highlight">
            <div className="highlight-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div>
              <h4>Upcoming Festival</h4>
              <p>Bhagavad Gita Mahotsav</p>
              <p className="festival-date">15-17 July, 2025</p>
            </div>
          </div>
          
          <div className="newsletter">
            <h4>Stay Updated</h4>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          
          <div className="quick-links">
            <a href="#">Festival Schedule</a>
            <a href="#">Volunteer</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Footer bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2025 Gieo Gita Foundation. All Rights Reserved.
        </p>
        <div className="divider"></div>
        <p className="tagline-bottom">
          Empowering lives through the timeless teachings of the Bhagavad Gita
        </p>
      </div>
    </footer>
  );
};

export default GieoGitaFooter;