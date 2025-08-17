


//3RD CODE 
import React, { useState, useEffect } from 'react';

const AimsObjectivesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSection, setVisibleSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);

      // Determine visible section
      const sections = ['hero', 'mission', 'aims', 'objectives', 'goals', 'impact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollTop + 100) {
          setVisibleSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const data = {
    aims: [
      { title: "Global Unity", subtitle: "Worldwide Community", desc: "Unite like-minded individuals globally through Gita philosophy" },
      { title: "Digital Innovation", subtitle: "Modern Outreach", desc: "Advanced webcasting and digital platforms for Gita teachings" },
      { title: "Academic Excellence", subtitle: "Gita University", desc: "Establish premier institution for Bhagavad Gita research" },
      { title: "Universal Access", subtitle: "Multilingual Initiative", desc: "Make Gita available in 100+ languages worldwide" },
      { title: "Cultural Recognition", subtitle: "National Status", desc: "Achieve recognition as universal spiritual scripture" },
      { title: "Global Distribution", subtitle: "Publishing Network", desc: "Comprehensive publishing and distribution ecosystem" },
      { title: "Community Platform", subtitle: "Digital Forums", desc: "Create collaborative spaces for Gita practitioners" },
      { title: "Research Support", subtitle: "Academic Grants", desc: "Fund scholarship and research in Vedantic studies" }
    ],
    objectives: [
      { title: "Social Harmony", subtitle: "Universal Brotherhood", desc: "Promote Karma-Dharma principles for global unity" },
      { title: "Institutional Growth", subtitle: "Advisory Bodies", desc: "Establish governance and financing frameworks" },
      { title: "Inter-faith Dialogue", subtitle: "Religious Tolerance", desc: "Foster peaceful coexistence among communities" },
      { title: "Infrastructure Development", subtitle: "Physical Assets", desc: "Build facilities and spaces for organizational activities" },
      { title: "Educational Integration", subtitle: "Curriculum Inclusion", desc: "Integrate Gita teachings in academic institutions" },
      { title: "Strategic Partnerships", subtitle: "Collaborative Networks", desc: "Build alliances with aligned organizations" },
      { title: "Spiritual Unity", subtitle: "Sarva Dharma Sambhav", desc: "Promote unity of all religions message" },
      { title: "Media Excellence", subtitle: "Broadcasting Network", desc: "Professional media operations for Gita content" }
    ],
    goals: [
      { title: "Ethical Leadership", subtitle: "Moral Solutions", desc: "Position Gita as framework for ethical decision-making" },
      { title: "Cultural Renaissance", subtitle: "Heritage Programs", desc: "Revitalize appreciation for Vedantic wisdom" },
      { title: "Character Building", subtitle: "Youth Development", desc: "Implement moral strength programs globally" },
      { title: "Financial Sustainability", subtitle: "Asset Portfolio", desc: "Develop diversified resources for independence" },
      { title: "Global Events", subtitle: "Conference Series", desc: "Annual international gatherings for practitioners" },
      { title: "Operational Excellence", subtitle: "Organizational Model", desc: "Exemplary structure demonstrating best practices" },
      { title: "International Presence", subtitle: "Global Centers", desc: "Network of specialized hubs worldwide" },
      { title: "Recognition Program", subtitle: "Awards System", desc: "Prestigious acknowledgment for outstanding contributions" }
    ]
  };

  return (
    <div style={{
     
      background: '#FAFAFA',
      overflow: 'hidden auto'
    }}>
      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress * 100}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #8B4513, #CD853F)',
        zIndex: 1000,
        transition: 'width 0.1s ease'
      }} />

      

      {/* Hero Section */}
      <section id="hero" style={{
        height: '60vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #CD853F, #8B4513)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            margin: '0 auto 3rem',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🕉️
          </div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }}>
            GIEO GITA
          </h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: 0.8,
            fontWeight: '300',
            letterSpacing: '8px',
            marginBottom: '3rem'
          }}>
            ORGANIZATION
          </p>
          <div style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, #CD853F, #8B4513)',
            margin: '0 auto'
          }} />
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" style={{
        padding: '8rem 2rem',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 4rem)',
            fontWeight: '300',
            color: '#2C2C2C',
            marginBottom: '3rem',
            lineHeight: '1.2',
            letterSpacing: '-1px'
          }}>
            Transforming consciousness through
            <span style={{ color: '#8B4513', fontWeight: '600' }}> divine wisdom</span>
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: '300'
          }}>
            We are dedicated to spreading the timeless teachings of Bhagavad Gita through innovative approaches, 
            creating a global community united by spiritual wisdom and ethical values.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {Object.entries(data).map(([key, items], sectionIndex) => (
        <section 
          key={key}
          id={key}
          style={{
            padding: '8rem 2rem',
            background: sectionIndex % 2 === 0 ? '#F8F8F8' : 'white'
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '800px 1fr',
              gap: '6rem',
              alignItems: 'start'
            }}>
              {/* Section Info */}
              <div style={{
                position: 'sticky',
                top: '2rem',
                [sectionIndex % 2 === 0 ? 'order' : '']: sectionIndex % 2 === 0 ? '2' : '1'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #8B4513, #CD853F)',
                  width: '500px',
                  height: '600px',
                  borderRadius: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '40px 40px'
                  }} />
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {key === 'aims' ? '🎯' : key === 'objectives' ? '🎪' : '⚡'}
                  </div>
                  <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {key}
                  </h2>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginTop: '1rem',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {items.length} ITEMS
                  </div>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#2C2C2C',
                  margin: '0 0 1rem 0'
                }}>
                  Our Strategic {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.6',
                  fontWeight: '300'
                }}>
                  {key === 'aims' ? 'Foundational aspirations that define our long-term vision for global spiritual transformation.' :
                   key === 'objectives' ? 'Strategic frameworks ensuring systematic implementation of our divine mission.' :
                   'Measurable outcomes demonstrating our commitment to spreading Gita wisdom worldwide.'}
                </p>
              </div>

              {/* Items Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                [sectionIndex % 2 === 0 ? 'order' : '']: sectionIndex % 2 === 0 ? '1' : '2'
              }}>
                {items.map((item, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    minHeight: '280px',
display: 'flex',
flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 69, 19, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${key === 'aims' ? '#8B4513' : key === 'objectives' ? '#A0522D' : '#CD853F'}15, transparent)`,
                      borderBottomLeftRadius: '20px'
                    }} />
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `linear-gradient(135deg, ${key === 'aims' ? '#8B4513' : key === 'objectives' ? '#A0522D' : '#CD853F'}, ${key === 'aims' ? '#A0522D' : key === 'objectives' ? '#CD853F' : '#D2B48C'})`,
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '1.5rem'
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#2C2C2C',
                      margin: '0 0 0.5rem 0',
                      flexShrink: 0,
                      lineHeight: '1.3'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: key === 'aims' ? '#8B4513' : key === 'objectives' ? '#A0522D' : '#CD853F',
                      fontWeight: '600',
                      margin: '0 0 1rem 0',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                      letterSpacing: '1px'
                    }}>
                      {item.subtitle}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: '#666',
                      lineHeight: '1.5',
                      flexShrink: 1,
                      margin: 0,
                      fontWeight: '300'
                    }}>
                      {item.desc}
                    </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

     

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default AimsObjectivesPage;