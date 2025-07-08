// src/App.js
"use client";
import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Featured books data
  const featuredBooks = [
    {
      id: 1,
      title: "Bhagavad Gita",
      author: "Sri Vyasadeva",
      description: "The eternal wisdom of yoga, devotion, and the purpose of life",
      category: "Core Scripture"
    },
    {
      id: 2,
      title: "Srimad Bhagavatam",
      author: "Sri Vyasadeva",
      description: "The ripened fruit of the tree of Vedic literature",
      category: "Purana"
    },
    {
      id: 3,
      title: "Sri Isopanisad",
      author: "Unknown",
      description: "One of the principal Upanishads with essential spiritual truths",
      category: "Upanishad"
    },
    {
      id: 4,
      title: "Chaitanya Charitamrita",
      author: "Krishnadasa Kaviraja Goswami",
      description: "Biography of Sri Chaitanya Mahaprabhu",
      category: "Biography"
    }
  ];
  
  // Categories data
  const categories = [
    { id: 1, name: "Vedas", count: 48, icon: "📜", color: "#a59069" },
    { id: 2, name: "Upanishads", count: 108, icon: "🕉️", color: "#5a3816" },
    { id: 3, name: "Puranas", count: 18, icon: "📖", color: "#a59069" },
    { id: 4, name: "Bhagavad Gita", count: 1, icon: "🕊️", color: "#5a3816" },
    { id: 5, name: "Commentaries", count: 87, icon: "✍️", color: "#a59069" },
    { id: 6, name: "Meditation Guides", count: 34, icon: "🧘", color: "#5a3816" }
  ];
  
  // Daily verse
  const verse = {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    translation: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
    source: "Bhagavad Gita 4.7"
  };

  return (
    <div className="gieo-gita-library">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <div className="lotus-icon">
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="center"></div>
            </div>
            <h1>GIEÓ Gita Vedic Library</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#books">Scriptures</a>
            <a href="#categories">Categories</a>
            <a href="#daily-verse">Daily Verse</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Discover Eternal Wisdom</h2>
            <p>Journey through sacred texts and find spiritual enlightenment</p>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search scriptures, verses, or topics..." 
            />
            <button className="search-btn">
              <i className="search-icon"></i>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Sacred Texts</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Commentaries</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Accessible Wisdom</p>
            </div>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="floating sanskrit">ॐ</div>
          <div className="floating book"></div>
          <div className="floating lotus"></div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books" id="books">
        <div className="section-header">
          <h2>Featured Scriptures</h2>
          <div className="decorative-line"></div>
        </div>
        
        <div className="books-grid">
          {featuredBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </section>

      {/* Book Categories */}
      <section className="categories" id="categories">
        <div className="section-header">
          <h2>Explore by Category</h2>
          <div className="decorative-line"></div>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              style={{ 
                '--category-color': category.color,
                animationDelay: `${category.id * 0.1}s`
              }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} texts</p>
              <div className="expand-icon">{activeCategory === category.id ? '−' : '+'}</div>
              
              {activeCategory === category.id && (
                <div className="category-expanded">
                  <p>Explore sacred texts and commentaries in this category</p>
                  <button className="explore-btn">View All</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Daily Verse */}
      <section className="daily-verse" id="daily-verse">
        <div className="section-header">
          <h2>Verse of the Day</h2>
          <div className="decorative-line"></div>
        </div>
        
        <div className="verse-container">
          <div className="sanskrit-text" onClick={() => setShowTranslation(!showTranslation)}>
            {verse.sanskrit}
          </div>
          
          <div className={`translation ${showTranslation ? 'show' : ''}`}>
            <p>{verse.translation}</p>
            <p className="source">{verse.source}</p>
          </div>
          
          <div className="verse-actions">
            <button 
              className="toggle-btn"
              onClick={() => setShowTranslation(!showTranslation)}
            >
              {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
            <button className="share-btn">Share</button>
          </div>
        </div>
        
        <div className="floating-symbols">
          <div className="symbol om">ॐ</div>
          <div className="symbol swastika">卐</div>
        </div>
      </section>

      {/* Reading Journey */}
      <section className="reading-journey" id="journey">
        <div className="section-header">
          <h2>Your Reading Journey</h2>
          <div className="decorative-line"></div>
        </div>
        
        <div className="journey-container">
          <div className="progress-section">
            <div className="progress-circle">
              <div className="progress-track">
                <div 
                  className="progress-bar" 
                  style={{ transform: `rotate(234deg)` }}
                ></div>
              </div>
              <div className="progress-text">65%</div>
            </div>
            <p>Yearly Goal Completion</p>
          </div>
          
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-value">27</div>
              <div className="stat-label">Books Read</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">2465</div>
              <div className="stat-label">Minutes Read</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-value">5</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </div>
        
        <div className="milestones">
          <h3>Upcoming Milestones</h3>
          <div className="milestone-track">
            <div className="milestone active" data-text="25 Books"></div>
            <div className="milestone" data-text="50 Books"></div>
            <div className="milestone" data-text="100 Books"></div>
            <div className="milestone" data-text="Golden Reader"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="lotus-icon">
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="center"></div>
            </div>
            <h3>GIEÓ Gita Vedic Library</h3>
            <p>Preserving and sharing eternal wisdom</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <a href="#books">Sacred Texts</a>
              <a href="#categories">Categories</a>
              <a href="#daily-verse">Daily Verse</a>
              <a href="#journey">Reading Journey</a>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#">Study Guides</a>
              <a href="#">Audio Library</a>
              <a href="#">Meditation Resources</a>
              <a href="#">Events Calendar</a>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <a href="#">Contact Us</a>
              <a href="#">Donate</a>
              <a href="#">Volunteer</a>
              <a href="#">Community Forum</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GIEÓ Gita Vedic Library. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Book Card Component
const BookCard = ({ book, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className={`book-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="book-inner">
        <div className="book-front">
          <div className="book-cover">
            <div className="book-spine"></div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
          </div>
          <div className="book-info">
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="category">{book.category}</p>
            <button className="read-btn">Explore</button>
          </div>
        </div>
        
        <div className="book-back">
          <h3>{book.title}</h3>
          <p className="description">{book.description}</p>
          <div className="book-actions">
            <button className="btn">Read Online</button>
            <button className="btn">Download PDF</button>
            <button className="btn">Audio Version</button>
          </div>
          <div className="flip-hint">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

export default App;