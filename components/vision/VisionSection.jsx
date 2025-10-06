// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './VisionSection.css';

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState('vision');

//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             The Gieo Gita Vision
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Manifesting the Eternal Wisdom of the Bhagavad Gita in Modern Life
//           </motion.p>
//         </div>
//       </div>

//       {/* Professional Navigation */}
//       <nav className="professional-nav">
//         <div className="nav-container">
//           <ul>
//             {[
//               { id: 'vision', label: 'Our Vision', icon: '🌅' },
//               { id: 'mission', label: 'Our Mission', icon: '🎯' },
//               { id: 'values', label: 'Core Values', icon: '💎' },
//               { id: 'impact', label: 'Global Impact', icon: '🌍' },
//               { id: 'approach', label: 'Our Approach', icon: '🕉️' }
//             ].map(tab => (
//               <li key={tab.id}>
//                 <button 
//                   className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   <span className="nav-icon">{tab.icon}</span>
//                   <span className="nav-label">{tab.label}</span>
//                   <div className="nav-indicator"></div>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Content Sections */}
//       <div className="content-container">
//         {/* Vision Section */}
//         {activeTab === 'vision' && (
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="content-section"
//           >
//             <div className="section-header">
//               <div className="icon-container">
//                 <span className="icon">🌅</span>
//               </div>
//               <h2>Our Vision</h2>
//               <p className="section-subtitle">Illuminating the Path to Self-Realization</p>
//             </div>
            
//             <div className="section-content">
//               <div className="vision-intro">
//                 <div className="intro-text">
//                   <h3>The Guiding Light of Gieo Gita</h3>
//                   <p>
//                     At Gieo Gita, we envision a world where every individual has access to the 
//                     transformative wisdom of the Bhagavad Gita, enabling them to navigate life's 
//                     challenges with clarity, purpose, and inner peace. Our vision is rooted in 
//                     the ancient Vedic principle of "Vasudhaiva Kutumbakam" - the world as one family.
//                   </p>
//                   <p>
//                     We see a future where the timeless teachings of Lord Krishna are not confined 
//                     to temples or scriptures, but are integrated into daily life, transforming 
//                     individuals, communities, and ultimately, society at large.
//                   </p>
//                 </div>
//                 <div className="intro-image">
//                   <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
//                        alt="Ancient scriptures" />
//                 </div>
//               </div>

//               <div className="vision-pillars">
//                 <h3>The Three Pillars of Our Vision</h3>
//                 <div className="pillars-container">
//                   <div className="pillar">
//                     <div className="pillar-icon">🕉️</div>
//                     <h4>Spiritual Enlightenment</h4>
//                     <p>
//                       Creating pathways for individuals to discover their true nature beyond 
//                       temporary identities, as taught in Chapter 2 of the Gita: "The soul is 
//                       neither born nor does it ever die."
//                     </p>
//                   </div>
//                   <div className="pillar">
//                     <div className="pillar-icon">🌎</div>
//                     <h4>Global Community</h4>
//                     <p>
//                       Building a worldwide sangha (community) of truth-seekers who support 
//                       each other's spiritual growth, transcending geographical and cultural 
//                       boundaries.
//                     </p>
//                   </div>
//                   <div className="pillar">
//                     <div className="pillar-icon">🤝</div>
//                     <h4>Practical Application</h4>
//                     <p>
//                       Developing contemporary frameworks that make the Gita's 5000-year-old 
//                       wisdom immediately applicable to modern challenges in relationships, 
//                       work, and personal growth.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="vision-quote">
//                 <blockquote>
//                   "Just as the sun illuminates the entire world, the Bhagavad Gita illuminates 
//                   the path for all humanity. Our vision is to be the lens that focuses this 
//                   divine light into every heart and home."
//                 </blockquote>
//                 <div className="quote-author">- Gieo Gita Foundation</div>
//               </div>

//               <div className="vision-manifesto">
//                 <h3>Our 10-Year Vision Manifesto</h3>
//                 <div className="manifesto-grid">
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">1</div>
//                     <p>
//                       Establish 108 Gieo Gita centers worldwide by 2033, serving as hubs for 
//                       spiritual learning and community support
//                     </p>
//                   </div>
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">2</div>
//                     <p>
//                       Translate and distribute the Gita's essence in all major world languages 
//                       with contemporary commentaries
//                     </p>
//                   </div>
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">3</div>
//                     <p>
//                       Develop educational programs integrating Gita wisdom into school curricula 
//                       for character development
//                     </p>
//                   </div>
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">4</div>
//                     <p>
//                       Create a digital platform reaching 10 million seekers with daily wisdom 
//                       and practical guidance
//                     </p>
//                   </div>
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">5</div>
//                     <p>
//                       Train 10,000 teachers capable of transmitting the Gita's wisdom with 
//                       authenticity and relevance
//                     </p>
//                   </div>
//                   <div className="manifesto-item">
//                     <div className="manifesto-number">6</div>
//                     <p>
//                       Partner with 100+ organizations to bring Gita-based solutions to 
//                       contemporary social challenges
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="vision-testimonials">
//                 <h3>Voices of Transformation</h3>
//                 <div className="testimonials-container">
//                   <div className="testimonial">
//                     <div className="testimonial-content">
//                       <p>
//                         "The Gieo Gita vision gave me a framework to understand my purpose. 
//                         After years of searching, I finally found the clarity I needed through 
//                         their programs."
//                       </p>
//                       <div className="testimonial-author">
//                         <div className="author-image"></div>
//                         <div className="author-info">
//                           <strong>Dr. Anika Patel</strong>
//                           <span>Psychologist, London</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="testimonial">
//                     <div className="testimonial-content">
//                       <p>
//                         "As a CEO, I've implemented Gieo Gita's leadership principles based on 
//                         Krishna's teachings to Arjuna. The results in our company culture have 
//                         been transformative."
//                       </p>
//                       <div className="testimonial-author">
//                         <div className="author-image"></div>
//                         <div className="author-info">
//                           <strong>Michael Zhang</strong>
//                           <span>Tech Entrepreneur, Singapore</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.section>
//         )}

//         {/* Other sections (Mission, Values, etc.) would follow the same enhanced pattern */}
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './VisionSection.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE GIEO GITA PHILOSOPHY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Manifesting the Eternal Wisdom of the Bhagavad Gita in Modern Life
          </motion.p>
        </div>
      </div>

      {/* Professional Navigation */}
      <nav className="professional-nav">
        <div className="nav-container">
          <ul>
            <li>
              <button 
                className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                Our Vision
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Core Values
              </button>
            </li>
            <li>
              {/* <button 
                className={`nav-link ${activeTab === 'impact' ? 'active' : ''}`}
                onClick={() => setActiveTab('impact')}
              >
                Global Impact
              </button> */}
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'approach' ? 'active' : ''}`}
                onClick={() => setActiveTab('approach')}
              >
                About Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="content-container">
        {/* Vision Section */}
        {activeTab === 'vision' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-section"
          >
            <div className="section-header">
              <div className="icon-container">
                <span className="icon">🌅</span>
              </div>
              <h2>Our Vision</h2>
              <p className="section-subtitle">Illuminating the Path to Self-Realization</p>
            </div>
            
            <div className="section-content">
              <div className="vision-intro">
                <div className="intro-text">
                  <h3 class name="vision-title" style={{fontSize:"2.5rem"}}>The Guiding Light of Gieo Gita</h3>
                  <p>
                    At Gieo Gita, we envision a world where every individual has access to the 
                    transformative wisdom of the Bhagavad Gita, enabling them to navigate life's 
                    challenges with clarity, purpose, and inner peace. Our vision is rooted in 
                    the ancient Vedic principle of "Vasudhaiva Kutumbakam" - the world as one family.
                  </p>
                  <p>
                    We see a future where the timeless teachings of Lord Krishna are not confined 
                    to temples or scriptures, but are integrated into daily life, transforming 
                    individuals, communities, and ultimately, society at large.
                  </p>
                </div>
                <div className="intro-image">
                  <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                       alt="Ancient scriptures" />
                </div>
              </div>

              <div className="vision-pillars">
                <h3>The Three Pillars of Our Vision</h3>
                <div className="pillars-container">
                  <div className="pillar">
                    <div className="pillar-icon">🕉️</div>
                    <h4>Spiritual Enlightenment</h4>
                    <p>
                      Creating pathways for individuals to discover their true nature beyond 
                      temporary identities, as taught in Chapter 2 of the Gita: "The soul is 
                      neither born nor does it ever die."
                    </p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">🌎</div>
                    <h4>Global Community</h4>
                    <p>
                      Building a worldwide sangha (community) of truth-seekers who support 
                      each other's spiritual growth, transcending geographical and cultural 
                      boundaries.
                    </p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">🤝</div>
                    <h4>Practical Application</h4>
                    <p>
                      Developing contemporary frameworks that make the Gita's 5000-year-old 
                      wisdom immediately applicable to modern challenges in relationships, 
                      work, and personal growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="vision-quote">
                <blockquote>
                  "Just as the sun illuminates the entire world, the Bhagavad Gita illuminates 
                  the path for all humanity. Our vision is to be the lens that focuses this 
                  divine light into every heart and home."
                </blockquote>
                <div className="quote-author">- Gieo Gita Foundation</div>
              </div>

              <div className="vision-manifesto">
                <h3>Our 10-Year Vision Manifesto</h3>
                <div className="manifesto-grid">
                  <div className="manifesto-item">
                    <div className="manifesto-number">1</div>
                    <p>
                      Establish 108 Gieo Gita centers worldwide by 2033, serving as hubs for 
                      spiritual learning and community support
                    </p>
                  </div>
                  <div className="manifesto-item">
                    <div className="manifesto-number">2</div>
                    <p>
                      Translate and distribute the Gita's essence in all major world languages 
                      with contemporary commentaries
                    </p>
                  </div>
                  <div className="manifesto-item">
                    <div className="manifesto-number">3</div>
                    <p>
                      Develop educational programs integrating Gita wisdom into school curricula 
                      for character development
                    </p>
                  </div>
                  <div className="manifesto-item">
                    <div className="manifesto-number">4</div>
                    <p>
                      Create a digital platform reaching 10 million seekers with daily wisdom 
                      and practical guidance
                    </p>
                  </div>
                  <div className="manifesto-item">
                    <div className="manifesto-number">5</div>
                    <p>
                      Train 10,000 teachers capable of transmitting the Gita's wisdom with 
                      authenticity and relevance
                    </p>
                  </div>
                  <div className="manifesto-item">
                    <div className="manifesto-number">6</div>
                    <p>
                      Partner with 100+ organizations to bring Gita-based solutions to 
                      contemporary social challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
        
        {/* Mission Section */}
        {activeTab === 'mission' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-section"
          >
            <div className="section-header">
              <div className="icon-container">
                <span className="icon">🎯</span>
              </div>
              <h2>Our Mission</h2>
              <p className="section-subtitle">Bringing the Gita's Wisdom to Life</p>
            </div>
            
            <div className="section-content">
              <div className="mission-intro">
                <div className="intro-text">
                  <h3>Our Sacred Commitment</h3>
                  <p>
                    Gieo Gita's mission is to make the profound teachings of the Bhagavad Gita 
                    accessible, practical, and transformative for people from all walks of life. 
                    We bridge ancient wisdom with contemporary application, helping individuals 
                    live with greater purpose, clarity, and inner peace.
                  </p>
                  <p>
                    Inspired by Lord Krishna's words to Arjuna in the battlefield of Kurukshetra, 
                    we empower modern seekers to face life's challenges with the same wisdom and 
                    courage.
                  </p>
                </div>
                <div className="intro-image">
                  <img src="https://images.unsplash.com/photo-1545912452-8aea3e25a631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                       alt="Bhagavad Gita teachings" />
                </div>
              </div>

              <div className="mission-strategy">
                <h3>Our Strategic Approach</h3>
                <div className="strategy-container">
                  <div className="strategy-item">
                    <h4>1. Education & Learning</h4>
                    <p>
                      Develop comprehensive study programs for all age groups and backgrounds, 
                      from introductory courses to advanced philosophical studies.
                    </p>
                  </div>
                  <div className="strategy-item">
                    <h4>2. Community Building</h4>
                    <p>
                      Create supportive sanghas (communities) where seekers can study, practice, 
                      and grow together in applying Gita principles.
                    </p>
                  </div>
                  <div className="strategy-item">
                    <h4>3. Digital Accessibility</h4>
                    <p>
                      Leverage technology to make Gita wisdom available globally through apps, 
                      online courses, and multimedia content.
                    </p>
                  </div>
                  <div className="strategy-item">
                    <h4>4. Leadership Development</h4>
                    <p>
                      Train teachers and mentors who can preserve the authenticity of the teachings 
                      while making them relevant to contemporary life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mission-quote">
                <blockquote>
                  "Our mission is not merely to disseminate information about the Bhagavad Gita, 
                  but to facilitate transformation through its timeless wisdom - helping individuals 
                  move from knowledge to realization, from theory to lived experience."
                </blockquote>
                <div className="quote-author">- Gieo Gita Teaching Committee</div>
              </div>

              <div className="mission-programs">
                <h3>Key Initiatives</h3>
                <div className="programs-grid">
                  <div className="program-card">
                    <h4>Gita Study Circles</h4>
                    <p>
                      Weekly study groups meeting in homes, community centers, and online to 
                      systematically study the Gita verse by verse.
                    </p>
                  </div>
                  <div className="program-card">
                    <h4>Corporate Wisdom Programs</h4>
                    <p>
                      Tailored workshops bringing Gita principles into business leadership, 
                      decision-making, and workplace culture.
                    </p>
                  </div>
                  <div className="program-card">
                    <h4>Youth Enlightenment</h4>
                    <p>
                      Engaging programs designed specifically for teenagers and young adults 
                      facing modern challenges.
                    </p>
                  </div>
                  <div className="program-card">
                    <h4>Gita in Daily Life</h4>
                    <p>
                      Practical courses showing how to apply Gita wisdom in relationships, 
                      parenting, and personal development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Values Section */}
        {activeTab === 'values' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-section"
          >
            <div className="section-header">
              <div className="icon-container">
                <span className="icon">💎</span>
              </div>
              <h2>Core Values</h2>
              <p className="section-subtitle">The Foundation of Our Work</p>
            </div>
            
            <div className="section-content">
              <div className="values-intro">
                <div className="intro-text">
                  <h3>Living the Teachings</h3>
                  <p>
                    At Gieo Gita, our values are not just words - they are principles we strive 
                    to embody in all our activities and interactions. These values emerge directly 
                    from the essential teachings of the Bhagavad Gita and guide our organizational 
                    culture and decision-making.
                  </p>
                  <p>
                    We believe that the authenticity of any spiritual organization lies in the 
                    degree to which its members live the values they teach.
                  </p>
                </div>
                <div className="intro-image">
                  <img src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80" 
                       alt="Values in action" />
                </div>
              </div>

              <div className="values-grid">
                <div className="value-card">
                  <h4>Dharma (Righteousness)</h4>
                  <p>
                    Aligning all actions with universal principles of truth and righteousness, 
                    as taught in Chapter 3 of the Gita: "Better one's own dharma imperfectly 
                    performed than the dharma of another perfectly performed."
                  </p>
                </div>
                <div className="value-card">
                  <h4>Compassion (Karuna)</h4>
                  <p>
                    Seeing the divine in all beings and treating everyone with kindness, 
                    understanding, and respect, following Krishna's example with Arjuna.
                  </p>
                </div>
                <div className="value-card">
                  <h4>Wisdom (Jnana)</h4>
                  <p>
                    Valuing true knowledge that leads to self-realization over mere information, 
                    as emphasized throughout the Gita's teachings.
                  </p>
                </div>
                <div className="value-card">
                  <h4>Selfless Service (Nishkama Karma)</h4>
                  <p>
                    Performing all actions as offerings to the Divine without attachment to 
                    results, following the central teaching of karma yoga.
                  </p>
                </div>
                <div className="value-card">
                  <h4>Unity in Diversity</h4>
                  <p>
                    Honoring all genuine spiritual paths while maintaining the purity of the 
                    Gita's teachings, as Krishna declares: "All paths lead to Me."
                  </p>
                </div>
                <div className="value-card">
                  <h4>Integrity (Satya)</h4>
                  <p>
                    Maintaining consistency between our words, thoughts, and actions, embodying 
                    the quality of truthfulness praised in the scriptures.
                  </p>
                </div>
              </div>

              <div className="values-quote">
                <blockquote>
                  "These values are not merely organizational guidelines, but living principles 
                  that each member of Gieo Gita strives to cultivate within themselves. We 
                  believe that the transformation of society begins with the transformation of 
                  individuals."
                </blockquote>
              </div>

              <div className="values-application">
                <h3>How We Apply These Values</h3>
                <div className="application-list">
                  <div className="application-item">
                    <h4>In Teaching</h4>
                    <p>
                      We present the Gita's wisdom without dilution or distortion, while making 
                      it accessible to contemporary audiences.
                    </p>
                  </div>
                  <div className="application-item">
                    <h4>In Governance</h4>
                    <p>
                      Our organizational decisions are made through consultation and with 
                      consideration for dharma, not merely expediency.
                    </p>
                  </div>
                  <div className="application-item">
                    <h4>In Community</h4>
                    <p>
                      We create environments where all feel welcomed and valued, regardless of 
                      background or level of knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Impact Section */}
        {/* {activeTab === 'impact' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-section"
          >
            <div className="section-header">
              <div className="icon-container">
                <span className="icon">✨</span>
              </div>
              <h2>Global Impact</h2>
              <p className="section-subtitle">Transforming Lives Through Gita Wisdom</p>
            </div>
            
            <div className="section-content">
              <div className="impact-intro">
                <div className="intro-text">
                  <h3>Our Worldwide Reach</h3>
                  <p>
                    Since our founding, Gieo Gita has touched thousands of lives across six 
                    continents, bringing the transformative wisdom of the Bhagavad Gita to 
                    diverse cultures and communities. Our impact extends beyond numbers - we 
                    measure success by the depth of transformation in each individual's life.
                  </p>
                  <p>
                    The following highlights demonstrate how Krishna's ancient teachings are 
                    creating modern miracles in people's lives around the world.
                  </p>
                </div>
                <div className="intro-image">
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                       alt="Global community" />
                </div>
              </div>

              <div className="impact-stats">
                <h3>By The Numbers</h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">15,000+</div>
                    <div className="stat-label">Lives Touched</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">42</div>
                    <div className="stat-label">Countries Reached</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">24</div>
                    <div className="stat-label">Languages Supported</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">108+</div>
                    <div className="stat-label">Study Groups</div>
                  </div>
                </div>
              </div>

              <div className="impact-stories">
                <h3>Stories of Transformation</h3>
                <div className="stories-container">
                  <div className="story-card">
                    <div className="story-content">
                      <p>
                        "After attending Gieo Gita's corporate workshop, I completely transformed 
                        my leadership style. I now approach challenges with the equanimity Krishna 
                        teaches, and my team's productivity and satisfaction have soared."
                      </p>
                      <div className="story-author">
                        <strong>— Michael Chen</strong>, CEO, Singapore
                      </div>
                    </div>
                  </div>
                  <div className="story-card">
                    <div className="story-content">
                      <p>
                        "As a college student struggling with anxiety, the Gieo Gita youth program 
                        gave me tools to find inner peace. The teachings about the eternal nature 
                        of the soul changed my perspective on everything."
                      </p>
                      <div className="story-author">
                        <strong>— Priya Sharma</strong>, University Student, London
                      </div>
                    </div>
                  </div>
                  <div className="story-card">
                    <div className="story-content">
                      <p>
                        "The Gita's teachings on selfless service through Gieo Gita inspired me 
                        to start a community kitchen. We now feed 200 people daily, and it's 
                        become my spiritual practice."
                      </p>
                      <div className="story-author">
                        <strong>— Carlos Mendez</strong>, Social Worker, Mexico City
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="impact-future">
                <h3>Future Goals</h3>
                <div className="future-goals">
                  <div className="goal-item">
                    <h4>Global Expansion</h4>
                    <p>
                      Establish centers in all major world cities by 2030, creating hubs for 
                      Gita study and community service.
                    </p>
                  </div>
                  <div className="goal-item">
                    <h4>Digital Reach</h4>
                    <p>
                      Develop a comprehensive online platform offering courses, resources, and 
                      community support in 50 languages.
                    </p>
                  </div>
                  <div className="goal-item">
                    <h4>Youth Programs</h4>
                    <p>
                      Launch specialized initiatives to bring Gita wisdom to 1 million young 
                      people worldwide in the next decade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )} */}

        {/* Approach Section */}
        {activeTab === 'approach' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-section"
          >
            <div className="section-header">
              <div className="icon-container">
                <span className="icon">🕉️</span>
              </div>
              <h2>Our Approach</h2>
              <p className="section-subtitle">Methodology for Spiritual Transmission</p>
            </div>
            
            <div className="section-content">
              <div className="approach-intro">
                <div className="intro-text">
                  <h3>The Gieo Gita Methodology</h3>
                  <p>
                    Our approach to sharing the Bhagavad Gita's wisdom combines ancient tradition 
                    with contemporary educational methods. We honor the parampara (lineage) of 
                    authentic transmission while making the teachings accessible to modern seekers.
                  </p>
                  <p>
                    Krishna's instruction to Arjuna in the Gita serves as our model - personalized, 
                    practical, and profound guidance tailored to the individual's needs and 
                    capacity.
                  </p>
                </div>
                <div className="intro-image">
                  <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                       alt="Study approach" />
                </div>
              </div>

              <div className="approach-methods">
                <h3>Key Methodological Principles</h3>
                <div className="methods-container">
                  <div className="method-card">
                    <h4>1. Verse-by-Verse Study</h4>
                    <p>
                      We systematically study the Gita in its original context, examining each 
                      verse's Sanskrit meaning, traditional commentaries, and contemporary 
                      relevance.
                    </p>
                  </div>
                  <div className="method-card">
                    <h4>2. Threefold Learning</h4>
                    <p>
                      Our programs integrate sravana (hearing), manana (contemplation), and 
                      nididhyasana (meditation) - the traditional Vedic method of assimilation.
                    </p>
                  </div>
                  <div className="method-card">
                    <h4>3. Practical Application</h4>
                    <p>
                      Each teaching is accompanied by specific practices and reflections to 
                      integrate wisdom into daily life.
                    </p>
                  </div>
                  <div className="method-card">
                    <h4>4. Personalized Guidance</h4>
                    <p>
                      Recognizing that each seeker's path is unique, we offer individualized 
                      mentorship and support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="approach-quote">
                <blockquote>
                  "Just as Krishna adapted his teachings to Arjuna's specific needs on the 
                  battlefield, we strive to present the Gita's eternal truths in ways that 
                  resonate with each seeker's life circumstances and level of understanding."
                </blockquote>
                <div className="quote-author">- Gieo Gita Teaching Manual</div>
              </div>

              <div className="approach-programs">
                <h3>Our Educational Framework</h3>
                <div className="programs-list">
                  <div className="program-tier">
                    <h4>Foundation Level</h4>
                    <p>
                      Introductory courses covering the Gita's core teachings on the nature of 
                      the self, karma yoga, and finding purpose.
                    </p>
                  </div>
                  <div className="program-tier">
                    <h4>Intermediate Level</h4>
                    <p>
                      Deeper study of bhakti yoga, jnana yoga, and the Gita's philosophical 
                      foundations.
                    </p>
                  </div>
                  <div className="program-tier">
                    <h4>Advanced Level</h4>
                    <p>
                      Detailed verse-by-verse study with traditional commentaries and 
                      comparative philosophy.
                    </p>
                  </div>
                  <div className="program-tier">
                    <h4>Specialized Applications</h4>
                    <p>
                      Programs focusing on specific life areas: leadership, relationships, 
                      health, and creative expression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="approach-resources">
                <h3>Learning Resources</h3>
                <div className="resources-grid">
                  <div className="resource-card">
                    <h4>Printed Materials</h4>
                    <p>
                      Carefully curated books, study guides, and workbooks for personal and 
                      group study.
                    </p>
                  </div>
                  <div className="resource-card">
                    <h4>Digital Content</h4>
                    <p>
                      Video lectures, podcasts, and interactive online courses for remote learning.
                    </p>
                  </div>
                  <div className="resource-card">
                    <h4>Retreats</h4>
                    <p>
                      Residential programs offering immersive study in traditional gurukula style.
                    </p>
                  </div>
                  <div className="resource-card">
                    <h4>Community Learning</h4>
                    <p>
                      Local study groups and discussion circles for shared exploration of the teachings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default AboutPage;