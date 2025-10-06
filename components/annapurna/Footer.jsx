// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <img src="https://donations.iskconbangalore.org/wp-content/uploads/2023/11/iskcon-bangalore-logo.png" alt="ISKCON Bangalore" className="footer-logo" />
            <p>ISKCON Bangalore is dedicated to spreading spiritual wisdom and providing nourishment to those in need through our Annapurna Annadana program.</p>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Hare Krishna Hill, Chord Road<br />Bangalore, Karnataka 560010</p>
            <p>Email: annadana@iskconbangalore.org</p>
            <p>Phone: +91 80 2347 1956</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About ISKCON Bangalore</a></li>
              <li><a href="#">Gita Gieo Initiative</a></li>
              <li><a href="#">Annapurna Annadana</a></li>
              <li><a href="#">Volunteer Opportunities</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ISKCON Bangalore. All Rights Reserved. | 80G Registration No: AAATI1234F</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;