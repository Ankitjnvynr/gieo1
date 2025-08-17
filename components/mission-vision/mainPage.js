import React, { useState, useEffect } from 'react';

const VisionMissionPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[id^="section"]').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const LotusIcon = () => (
    <svg width="60" height="60" viewBox="0 0 100 100" style={{ opacity: 0.6 }}>
      <path d="M50 85 C30 75, 15 60, 15 40 C15 25, 25 15, 40 15 C45 20, 50 25, 50 30 C50 25, 55 20, 60 15 C75 15, 85 25, 85 40 C85 60, 70 75, 50 85 Z" fill="#8B4513"/>
      <path d="M50 30 C40 35, 30 45, 30 55 C30 65, 40 70, 50 70 C60 70, 70 65, 70 55 C70 45, 60 35, 50 30 Z" fill="#D2691E"/>
      <circle cx="50" cy="55" r="8" fill="#F5DEB3"/>
    </svg>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        linear-gradient(135deg, #F5F5DC 0%, #E6D3A3 50%, #DDB892 100%),
        radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(210, 105, 30, 0.05) 0%, transparent 50%)
      `,
      fontFamily: "'Playfair Display', 'Georgia', serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(60px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-60px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(60px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
      
        
        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .card-elegant {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        
        .card-elegant::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.1), transparent);
          transition: left 0.6s;
        }
        
       
        
        .text-gradient {
          background: linear-gradient(135deg, #8B4513, #D2691E, #8B4513);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .ornate-divider {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #8B4513, #D2691E, #8B4513, transparent);
          margin: 20px auto;
          border-radius: 2px;
          position: relative;
        }
        
        .ornate-divider::before,
        .ornate-divider::after {
          content: '';
          position: absolute;
          top: -3px;
          width: 10px;
          height: 10px;
          background: #8B4513;
          border-radius: 50%;
        }
        
        .ornate-divider::before {
          left: -5px;
        }
        
        .ornate-divider::after {
          right: -5px;
        }
        
        .floating-pattern {
          position: absolute;
          opacity: 0.03;
          pointer-events: none;
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>

      <div className="floating-pattern" style={{ top: '10%', left: '10%', transform: 'rotate(-15deg)' }}>
        <LotusIcon />
      </div>
      <div className="floating-pattern" style={{ top: '60%', right: '15%', transform: 'rotate(25deg)' }}>
        <LotusIcon />
      </div>
      <div className="floating-pattern" style={{ top: '30%', right: '5%', transform: 'rotate(-30deg)' }}>
        <LotusIcon />
      </div>

      <header style={{
        position: 'relative',
        textAlign: 'center',
        padding: '120px 20px 80px',
        background: `
          linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(210, 105, 30, 0.05) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v60c16.569 0 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        transform: `translateY(${scrollY * 0.2}px)`
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 69, 19, 0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            marginBottom: '30px'
          }}>
            <LotusIcon />
          </div>
          
          <h1 className="text-gradient" style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '900',
            marginBottom: '20px',
            textShadow: '3px 3px 6px rgba(139, 69, 19, 0.1)',
            letterSpacing: '2px'
          }}>
            Mission & Vision
          </h1>
          
          <div className="ornate-divider" />
          
          <p style={{
            fontSize: '1.4rem',
            color: '#8B4513',
            maxWidth: '600px',
            margin: '30px auto 0',
            fontFamily: "'Crimson Text', serif",
            fontStyle: 'italic',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            A Divine Journey Towards Global Spiritual Awakening
          </p>
        </div>
      </header>

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <section 
          id="section-mission"
          className={`card-elegant ${isVisible['section-mission'] ? 'slide-in-left' : ''}`}
          style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 220, 0.8) 100%),
              url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")
            `,
            borderRadius: '25px',
            padding: '60px 50px',
            marginBottom: '80px',
            boxShadow: '0 15px 40px rgba(139, 69, 19, 0.15)',
            border: '2px solid rgba(139, 69, 19, 0.1)',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #8B4513, #D2691E)',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.3)',
            border: '3px solid #F5F5DC'
          }}>
            ✦ Our Sacred Mission ✦
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <p style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              lineHeight: '1.9',
              color: '#2F1B14',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '600',
              marginBottom: '40px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
              position: 'relative'
            }}>
              May Mankind across the globe, far and near, city dwellers and forest dwellers feel closeness to Gita, 
              may all be able to transform their field of work into field of righteousness and their lives into supreme bliss.
            </p>
            
            <div style={{
              background: `
                linear-gradient(135deg, rgba(245, 222, 179, 0.4) 0%, rgba(230, 211, 163, 0.3) 100%)
              `,
              padding: '35px',
              borderRadius: '20px',
              border: '2px solid rgba(139, 69, 19, 0.2)',
              position: 'relative',
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                background: '#8B4513',
                color: '#F5DEB3',
                padding: '5px 20px',
                borderRadius: '15px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Divine Inspiration
              </div>
              
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                lineHeight: '1.8',
                color: '#654321',
                fontFamily: "'Crimson Text', serif",
                margin: '20px 0 0 0',
                fontStyle: 'italic'
              }}>
                In the form of Global Inspiration and Enlightenment Organization of Gita the blessings of 
                <span style={{ 
                  fontWeight: '700', 
                  color: '#8B4513',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}> Shri Krishna</span> and Inspiration of 
                <span style={{ 
                  fontWeight: '700', 
                  color: '#8B4513',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>Pujya Gurudev Swami Shri Geetanandji Maharaj</span> are taking shape.
              </p>
            </div>
          </div>
        </section>

        {/* Motives Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}>
          <h2 className="text-gradient" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            With these Motives:
          </h2>
          <div className="ornate-divider" style={{ width: '200px' }} />
        </div>

        <section 
          id="section-global"
          className={`card-elegant ${isVisible['section-global'] ? 'slide-in-left' : ''}`}
          style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 220, 0.9) 100%)
            `,
            borderRadius: '20px',
            padding: '50px 45px',
            marginBottom: '50px',
            boxShadow: '0 12px 35px rgba(139, 69, 19, 0.12)',
            border: '1px solid rgba(139, 69, 19, 0.15)',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #8B4513, #D2691E, #8B4513)',
            borderRadius: '20px 20px 0 0'
          }} />
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #8B4513, #D2691E)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '25px',
              boxShadow: '0 8px 20px rgba(139, 69, 19, 0.3)',
              transform: 'rotate(5deg)'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L1 21h22L12 2zm0 3.8L19.1 19H4.9L12 5.8z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              color: '#2F1B14',
              fontWeight: '700',
              margin: 0,
              lineHeight: '1.3'
            }}>
              May Srimad Bhagwad Gita! become the inspiration of mankind across the globe
            </h3>
          </div>
          
          <div style={{
            display: 'grid',
            gap: '20px',
            paddingLeft: '85px'
          }}>
            {[
              'May there be an awakened outlook of fulfilling responsibilities',
              'May all Sorrow, Misery, Grief, depression, fear cease from the very root',
              'May mankind attain supreme bliss'
            ].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 25px',
                background: `
                  linear-gradient(135deg, rgba(245, 222, 179, 0.4) 0%, rgba(230, 211, 163, 0.3) 100%)
                `,
                borderRadius: '12px',
                borderLeft: '4px solid #8B4513',
                boxShadow: '0 4px 15px rgba(139, 69, 19, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.08)';
              }}
              >
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: 'linear-gradient(135deg, #8B4513, #D2691E)',
                  borderRadius: '50%',
                  marginRight: '20px',
                  marginTop: '6px',
                  minWidth: '12px',
                  boxShadow: '0 2px 8px rgba(139, 69, 19, 0.3)'
                }} />
                <p style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                  color: '#654321',
                  margin: 0,
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.7',
                  fontWeight: '500'
                }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section 
          id="section-national"
          className={`card-elegant ${isVisible['section-national'] ? 'slide-in-right' : ''}`}
          style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 220, 0.9) 100%)
            `,
            borderRadius: '20px',
            padding: '50px 45px',
            marginBottom: '50px',
            boxShadow: '0 12px 35px rgba(139, 69, 19, 0.12)',
            border: '1px solid rgba(139, 69, 19, 0.15)',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #D2691E, #8B4513, #D2691E)',
            borderRadius: '20px 20px 0 0'
          }} />
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #D2691E, #8B4513)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '25px',
              boxShadow: '0 8px 20px rgba(210, 105, 30, 0.3)',
              transform: 'rotate(-5deg)'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5z"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              color: '#2F1B14',
              fontWeight: '700',
              margin: 0,
              lineHeight: '1.3'
            }}>
              May Srimad Bhagwad Gita! become the national scripture of the nation without delay
            </h3>
          </div>
          
          <div style={{
            display: 'grid',
            gap: '20px',
            paddingLeft: '85px'
          }}>
            {[
              'Thus may all fellow Indians be free of stress, narrow mindedness, ill feelings, Attachment and aversion, ego sense of ownership, greed and deformities and unrighteousness thus arising from these.',
              'May corruption end from the very root'
            ].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 25px',
                background: `
                  linear-gradient(135deg, rgba(245, 222, 179, 0.4) 0%, rgba(230, 211, 163, 0.3) 100%)
                `,
                borderRadius: '12px',
                borderLeft: '4px solid #D2691E',
                boxShadow: '0 4px 15px rgba(210, 105, 30, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(210, 105, 30, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(210, 105, 30, 0.08)';
              }}
              >
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: 'linear-gradient(135deg, #D2691E, #8B4513)',
                  borderRadius: '50%',
                  marginRight: '20px',
                  marginTop: '6px',
                  minWidth: '12px',
                  boxShadow: '0 2px 8px rgba(210, 105, 30, 0.3)'
                }} />
                <p style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                  color: '#654321',
                  margin: 0,
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.7',
                  fontWeight: '500'
                }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {[
            { text: 'May there be an Encyclopedia on Gita', icon: '📚' },
            { text: 'May there be an independent Geeta University to study, think and research on Geeta.', icon: '🏛️' }
          ].map((item, index) => (
            <section 
              key={index}
              id={`section-${index + 3}`}
              className={`card-elegant ${isVisible[`section-${index + 3}`] ? 'slide-in-left' : ''}`}
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 220, 0.8) 100%)
                `,
                padding: '45px 35px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)',
                border: '1px solid rgba(139, 69, 19, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px',
                position: 'relative'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                filter: 'sepia(1) hue-rotate(20deg) saturate(1.2)'
              }}>
                {item.icon}
              </div>
              
              <p style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#2F1B14',
                fontWeight: '600',
                margin: 0,
                lineHeight: '1.5',
                fontFamily: "'Crimson Text', serif"
              }}>
                {item.text}
              </p>
              
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${index === 0 ? '#8B4513' : '#D2691E'}, transparent)`,
                borderRadius: '0 0 20px 20px'
              }} />
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <section 
          id="section-cta"
          className={`card-elegant ${isVisible['section-cta'] ? 'slide-in-left' : ''}`}
          style={{
            background: `
              linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%),
              url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F5DEB3' fill-opacity='0.1'%3E%3Cpath d='M15 15c0-8.284-6.716-15-15-15v30c8.284 0 15-6.716 15-15z'/%3E%3C/g%3E%3C/svg%3E")
            `,
            borderRadius: '25px',
            padding: '60px 50px',
            textAlign: 'center',
            color: '#F5DEB3',
            boxShadow: '0 20px 50px rgba(139, 69, 19, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(245, 222, 179, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(245, 222, 179, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{
              display: 'inline-block',
              marginBottom: '25px'
            }}>
              <LotusIcon />
            </div>
            
            <h3 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '25px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Join Our Sacred Mission
            </h3>
            
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              margin: '0 0 35px 0',
              lineHeight: '1.8',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontFamily: "'Crimson Text', serif",
              fontWeight: '500'
            }}>
              We invite and welcome with great respect any organization within India or outside India doing any work to join hands.
            </p>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{
                padding: '15px 35px',
                background: 'rgba(245, 222, 179, 0.2)',
                borderRadius: '30px',
                border: '2px solid rgba(245, 222, 179, 0.4)',
                fontSize: '1.1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(245, 222, 179, 0.3)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(245, 222, 179, 0.2)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
              >
                Connect With Us
              </div>
              
              <div style={{
                padding: '15px 35px',
                background: 'transparent',
                borderRadius: '30px',
                border: '2px solid rgba(245, 222, 179, 0.6)',
                fontSize: '1.1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(245, 222, 179, 0.15)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                Learn More
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '80px 20px 50px',
        background: `
          linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(210, 105, 30, 0.05) 100%),
          url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.02'%3E%3Cpath d='M25 25c0-13.807-11.193-25-25-25v50c13.807 0 25-11.193 25-25z'/%3E%3C/g%3E%3C/svg%3E")
        `,
        borderTop: '3px solid rgba(139, 69, 19, 0.1)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.3), transparent)'
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="ornate-divider" style={{ width: '250px', marginBottom: '40px' }} />
          
          <p style={{
            fontSize: '1.3rem',
            color: '#8B4513',
            fontFamily: "'Crimson Text', serif",
            fontStyle: 'italic',
            margin: '0 0 20px 0',
            fontWeight: '600'
          }}>
            "योगः कर्मसु कौशलम्"
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#A0522D',
            fontFamily: "'Crimson Text', serif",
            margin: '0 0 30px 0',
            opacity: 0.8
          }}>
            Excellence in action is Yoga
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            {['Global Inspiration', 'Spiritual Awakening', 'Divine Guidance'].map((text, i) => (
              <div key={i} style={{
                padding: '12px 25px',
                background: 'rgba(139, 69, 19, 0.1)',
                borderRadius: '20px',
                fontSize: '0.95rem',
                color: '#8B4513',
                fontWeight: '600',
                border: '1px solid rgba(139, 69, 19, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(139, 69, 19, 0.15)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(139, 69, 19, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionMissionPage;