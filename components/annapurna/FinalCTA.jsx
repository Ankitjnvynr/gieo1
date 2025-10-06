// src/components/PrasadamPortal.jsx
import React, { useState } from 'react';
import './FinalCTA.css';

const PrasadamPortal = () => {
  const [activeTab, setActiveTab] = useState('ekadashi');
  const [selectedPrasadam, setSelectedPrasadam] = useState(0);
  
  const prasadamTypes = [
    { 
      name: "Ekadashi Prasadam", 
      items: [
        { id: 1, name: "Sabudana Khichdi", icon: "🍚", description: "Light fasting food made with sago pearls, peanuts, and potatoes" },
        { id: 2, name: "Singhare Ka Halwa", icon: "🧆", description: "Nourishing dessert made from water chestnut flour" },
        { id: 3, name: "Fruit Prasadam", icon: "🍎", description: "Assorted seasonal fruits offered to the deity" },
        { id: 4, name: "Panchamrit", icon: "🥣", description: "Divine mixture of milk, yogurt, honey, sugar, and ghee" }
      ]
    },
    { 
      name: "Sawan Prasadam", 
      items: [
        { id: 1, name: "Bhang Ladoo", icon: "🟢", description: "Traditional offering made with edible cannabis, nuts, and spices" },
        { id: 2, name: "Kuttu Ki Puri", icon: "🥯", description: "Buckwheat flour deep-fried bread served with potato curry" },
        { id: 3, name: "Milk Prasadam", icon: "🥛", description: "Sacred milk offered during Jalabhishek ceremony" },
        { id: 4, name: "Bilva Patra", icon: "🍃", description: "Sacred leaves offered to Lord Shiva" }
      ]
    }
  ];

  const currentPrasadam = prasadamTypes[activeTab === 'ekadashi' ? 0 : 1];

  return (
    <div className="prasadam-portal">
      {/* Sacred Header */}
      <div className="sacred-header">
        <div className="header-content">
          <h1>Divine Prasadam Distribution</h1>
          <p>Experience the blessings through sacred food offerings during Ekadashi & Sawan</p>
        </div>
      </div>
      
      {/* Occasion Tabs */}
      <div className="occasion-tabs">
        <button 
          className={`tab-btn ${activeTab === 'ekadashi' ? 'active' : ''}`}
          onClick={() => setActiveTab('ekadashi')}
        >
          Ekadashi Prasadam
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sawan' ? 'active' : ''}`}
          onClick={() => setActiveTab('sawan')}
        >
          Sawan Prasadam
        </button>
      </div>
      
      {/* Spiritual Significance */}
      <div className="spiritual-significance">
        <div className="significance-card">
          <div className="sacred-icon">🕉️</div>
          <h2>Spiritual Significance of Prasadam</h2>
          <p>
            Prasadam is not merely food - it's divine grace transformed into physical form. 
            When food is offered to the deity with devotion, it becomes sanctified and carries 
            spiritual energy that purifies the body and mind of the recipient.
          </p>
        </div>
      </div>
      
      {/* Prasadam Gallery */}
      <div className="prasadam-gallery">
        <h2 className="section-title">Sacred Offerings</h2>
        <p className="section-subtitle">Select a Prasadam to learn about its spiritual significance</p>
        
        <div className="prasadam-grid">
          {currentPrasadam.items.map((item, index) => (
            <div 
              key={item.id}
              className={`prasadam-card ${selectedPrasadam === index ? 'selected' : ''}`}
              onClick={() => setSelectedPrasadam(index)}
            >
              <div className="prasadam-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Detailed Information */}
        {selectedPrasadam !== null && (
          <div className="prasadam-detail">
            <div className="detail-header">
              <div className="detail-icon">{currentPrasadam.items[selectedPrasadam].icon}</div>
              <h3>{currentPrasadam.items[selectedPrasadam].name}</h3>
            </div>
            
            <div className="detail-content">
              {activeTab === 'ekadashi' ? (
                <div>
                  <h4>Spiritual Benefits:</h4>
                  <p>
                    This prasadam helps purify the body during fasting days, enhances spiritual awareness, 
                    and brings the blessings of Lord Vishnu. Consuming Ekadashi prasadam helps in developing 
                    self-control and devotion.
                  </p>
                  
                  <h4>Traditional Preparation:</h4>
                  <p>
                    Prepared without grains, using sattvic ingredients. Cooked in a sanctified kitchen 
                    while chanting sacred mantras. Offered to Lord Vishnu before distribution to devotees.
                  </p>
                  
                  <h4>Best Consumed:</h4>
                  <p>
                    After morning prayers during Ekadashi fasting. Should be consumed with reverence 
                    and gratitude as a form of divine grace.
                  </p>
                </div>
              ) : (
                <div>
                  <h4>Spiritual Benefits:</h4>
                  <p>
                    This offering is sacred to Lord Shiva and helps in purification of karma. 
                    It enhances devotion and is believed to bring the blessings of health, 
                    prosperity, and spiritual growth.
                  </p>
                  
                  <h4>Traditional Preparation:</h4>
                  <p>
                    Prepared with ingredients approved for Sawan fasting. Cooked by temple priests 
                    following ancient recipes. Offered to Lord Shiva during the sacred abhishek ceremony.
                  </p>
                  
                  <h4>Best Consumed:</h4>
                  <p>
                    After participating in Monday prayers during Sawan month. Should be consumed 
                    as a sacred sacrament with focused devotion to Lord Shiva.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Distribution Process */}
      <div className="distribution-process">
        <h2 className="section-title">Sacred Distribution Process</h2>
        
        <div className="process-steps">
          <div className="process-card">
            <div className="step-number">1</div>
            <h3>Preparation with Devotion</h3>
            <p>Food prepared in sanctified kitchens while chanting sacred mantras</p>
          </div>
          
          <div className="process-card">
            <div className="step-number">2</div>
            <h3>Divine Offering</h3>
            <p>Presented to the deity with elaborate rituals and prayers</p>
          </div>
          
          <div className="process-card">
            <div className="step-number">3</div>
            <h3>Blessing Ceremony</h3>
            <p>Priests perform aarti and invoke divine blessings into the food</p>
          </div>
          
          <div className="process-card">
            <div className="step-number">4</div>
            <h3>Distribution to Devotees</h3>
            <p>Shared with reverence to all participants in the sacred occasion</p>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="devotee-testimonials">
        <h2 className="section-title">Devotee Experiences</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="avatar">🙏</div>
            <div className="content">
              <p>"Receiving prasadam during Ekadashi at the temple filled me with divine energy. The taste was heavenly!"</p>
              <div className="name">- Rajesh, Mumbai</div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="avatar">🕉️</div>
            <div className="content">
              <p>"The Sawan prasadam had such purity. I felt Lord Shiva's blessings with every bite."</p>
              <div className="name">- Priya, Delhi</div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="avatar">🔔</div>
            <div className="content">
              <p>"Participating in the prasadam distribution as a volunteer was a spiritually uplifting experience."</p>
              <div className="name">- Amit, Varanasi</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sacred Footer */}
      <div className="sacred-footer">
        <p>"The food which is dear to the Divine is conducive to health, long life, strength, happiness, and satisfaction"</p>
        <p>- Bhagavad Gita</p>
        
        <div className="footer-links">
          <a href="/prasadam-schedule">Prasadam Schedule</a>
          <a href="/sacred-recipes">Sacred Recipes</a>
          <a href="/volunteer">Volunteer Opportunities</a>
        </div>
      </div>
    </div>
  );
};

export default PrasadamPortal;