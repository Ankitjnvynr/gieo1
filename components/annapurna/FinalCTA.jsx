// src/components/FinalCTA.jsx
import React from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="impact-statement">
            <h2>Help Us Reach 100,000 Students This Year</h2>
            <p className="cta-subtitle">
              Your contribution provides nutritious meals and educational resources to students across rural India
            </p>
          </div>
          
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">42,850</div>
              <div className="stat-label">Students Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">78%</div>
              <div className="stat-label">Progress Toward Goal</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1,200</div>
              <div className="stat-label">Schools Impacted</div>
            </div>
          </div>
          
          <div className="donation-options">
            <div className="donation-card">
              <h3>Essential Support</h3>
              <div className="donation-amount">₹500</div>
              <p>Provides meals for 1 student for a month</p>
              <a href="#donate" className="donate-btn">Donate Now</a>
            </div>
            
            <div className="donation-card featured">
              <div className="popular-tag">Most Popular</div>
              <h3>Scholar's Package</h3>
              <div className="donation-amount">₹1,500</div>
              <p>Supports 3 students with meals and books</p>
              <a href="#donate" className="donate-btn">Donate Now</a>
            </div>
            
            <div className="donation-card">
              <h3>School Champion</h3>
              <div className="donation-amount">₹5,000</div>
              <p>Feeds an entire classroom for a week</p>
              <a href="#donate" className="donate-btn">Donate Now</a>
            </div>
          </div>
          
          <div className="trust-assurance">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>80G Tax Benefits</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>Secure Payment Gateway</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>Transparent Fund Allocation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;