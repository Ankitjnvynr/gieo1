import React, { useState, useEffect } from 'react';

export default function GuruDevJiBiography() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
   "/assets/images/about-swamiji/guru_dev_ji1.jpg",
   "/assets/images/about-swamiji/guru_dev_ji2.jpg",
   "/assets/images/about-swamiji/guru_dev_ji3.jpg",
   "/assets/images/about-swamiji/guru_dev_ji4.jpg",
  ];

  const slideDescriptions = [
    {
      title: "Spiritual Meditation",
      description: "Deep contemplation and spiritual practice in natural surroundings"
    },
    {
      title: "Teaching & Guidance", 
      description: "Sharing profound wisdom with devoted followers in peaceful settings"
    },
    {
      title: "Humanitarian Service",
      description: "Dedicated service through Sri Krishna Kripa Sewa Samiti"
    },
    {
      title: "Sacred Study",
      description: "Reading and contemplating spiritual texts in serene environments"
    }
  ];

  const milestones = [
    { year: '1955', event: 'Born on 14th May on Guru Nanak Dev Ji\'s birth anniversary' },
    { year: '1970s', event: 'Completed Political Science education with distinction' },
    { year: '1992', event: 'Founded Sri Krishna Kripa Sewa Samiti' },
    { year: '2015', event: 'Founded GEO GITA organization' },
    { year: 'Present', event: 'Continuing spiritual guidance worldwide' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <div style={{
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #fff7e9ff, #fffaefff)',
      fontFamily: "'Playfair Display', serif",
      color: '#5D4037'
    }}>
      
      <section style={{
  background: "url('/assets/images/about-swamiji/bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center ',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  padding: '1.5rem 1rem 2rem',
  textAlign: 'center',
  position: 'relative',
 
  width: '100%',       
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'   
}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(222, 184, 135, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(245, 245, 220, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(210, 180, 140, 0.2) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DEB887' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25S0 36.193 0 50s11.193 25 25 25 25-11.193 25-25zm25-25c0-13.807-11.193-25-25-25S25 11.193 25 25s11.193 25 25 25 25-11.193 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 2
        }}></div>
        
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          position: 'relative', 
          zIndex: 3,
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 220, 0.8))',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#8B4513',
            boxShadow: '0 20px 60px rgba(139, 69, 19, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.5)',
            border: '3px solid rgba(255, 255, 255, 0.6)'
          }}>
            ॐ
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '700',
            color: '#8B4513',
            margin: '0 0 1rem',
            
            textShadow: '3px 3px 12px rgba(139, 69, 19, 0.3)',
            letterSpacing: '2px',
            lineHeight: '1.1'
          }}>
            Swami Shri Gyananand Ji Maharaj
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem auto 2rem',
            gap: '2rem'
          }}>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
            }}></div>
            <div style={{
              fontSize: '4rem',
              color: '#D4AF37',
              textShadow: '2px 2px 8px rgba(212, 175, 55, 0.3)'
            }}>✦</div>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
            }}></div>
          </div>
          
          <p style={{
            fontSize: '1.6rem',
            color: '#A0522D',
            fontStyle: 'italic',
            margin: '0 0 2rem',
            fontWeight: '500',
            textShadow: '1px 1px 4px rgba(160, 82, 45, 0.2)'
          }}>
            Spiritual Guide, Humanitarian Leader & Founder of Sri Krishna Kripa Sewa Samiti
          </p>
          
          <blockquote style={{
            background: 'rgba(255, 255, 255, 0.4)',
            padding: '2.5rem 3rem',
            borderRadius: '25px',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: '#654321',
            maxWidth: '750px',
            margin: '0 auto',
            border: 'none',
            boxShadow: '0 15px 50px rgba(139, 69, 19, 0.15)',
            position: 'relative',
            backdropFilter: 'blur(10px)',
            textShadow: '1px 1px 3px rgba(101, 67, 33, 0.2)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '30px',
              fontSize: '5rem',
              color: '#D4AF37',
              lineHeight: '1',
              textShadow: '2px 2px 8px rgba(212, 175, 55, 0.3)'
            }}>"</div>
            A journey of enlightenment through service, meditation, and unwavering dedication to humanity's spiritual awakening
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '30px',
              fontSize: '5rem',
              color: '#D4AF37',
              lineHeight: '1',
              textShadow: '2px 2px 8px rgba(212, 175, 55, 0.3)'
            }}>"</div>
          </blockquote>
        </div>
      </section>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        
        <section style={{
          margin: '3rem 0',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '25px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(93, 64, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <div style={{
            padding: '3rem 3rem 1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(243, 222, 182, 1), rgba(255, 239, 206, 1))'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#6D4C41',
              margin: '0 0 1rem',
              fontWeight: '600'
            }}>
              Sacred Moments Gallery
            </h2>
            <p style={{
              color: '#8D6E63',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              margin: 0
            }}>
              Glimpses of a life dedicated to spiritual service and divine wisdom
            </p>
          </div>

          <div style={{
            position: 'relative',
            height: '400px',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.8s ease-in-out',
              height: '100%'
            }}>
              {slideImages.map((imageSrc, index) => (
                <div key={index} style={{
                  minWidth: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: "url('/assets/images/about-swamiji/bg-2.jpg')",
                   backgroundSize: 'cover',
  backgroundPosition: 'center ',
  backgroundRepeat: 'no-repeat',
                }}>
                  
                  <img 
                    src={imageSrc}
                    alt={slideDescriptions[index].title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '15px',
                      boxShadow: '0 20px 60px rgba(93, 64, 55, 0.3)'
                    }}
                    onError={(e) => {
                     
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  
                  <div style={{
                    display: 'none',
                    width: '500px',
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,235,220,0.9))',
                    borderRadius: '15px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 60px rgba(93, 64, 55, 0.2)',
                    border: '3px solid rgba(212, 175, 55, 0.3)',
                    fontSize: '1.2rem',
                    color: '#8B4513',
                    textAlign: 'center',
                    fontStyle: 'italic'
                  }}>
                    Image placeholder for:<br/>
                    {slideDescriptions[index].title}
                  </div>
                </div>
              ))}
            </div>


            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '15px',
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '10px 20px',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)'
            }}>
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === index ? '#D4AF37' : 'rgba(139, 69, 19, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: currentSlide === index ? '0 4px 12px rgba(212, 175, 55, 0.4)' : '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section style={{
          margin: '4rem 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {slideDescriptions.map((desc, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(93, 64, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 15px 40px rgba(93, 64, 55, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(93, 64, 55, 0.08)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                color: '#D4AF37',
                marginBottom: '1rem'
              }}>
                ✦
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#6D4C41',
                margin: '0 0 1rem',
                fontWeight: '600'
              }}>
                {desc.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#5D4037',
                fontStyle: 'italic',
                lineHeight: '1.6',
                margin: 0
              }}>
                {desc.description}
              </p>
            </div>
          ))}
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: '3rem',
          margin: '4rem 0',
          alignItems: 'start'
        }}>
          
          <article style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '25px',
            padding: '3rem',
            boxShadow: '0 15px 50px rgba(93, 64, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.1)'
          }}>
            
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                color: '#6D4C41',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                Early Life
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037'
              }}>
                Born on the auspicious day of Guru Nanak Dev Ji on 14th of May, 1955 Guru dev showed immense curiosity and enthusiasm from the childhood. As a youth he was brilliant and often stood first in his class provided by parents. He got strong philosophical gift as well working immeasurable at his mind from childhood itself and made him the guruya of his education as well.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                color: '#6D4C41',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                Career
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037'
              }}>
                After finishing his schooling from Ambala he went on to study political science till post graduation level. Like many graduates he gained a govt position. However fortunately should have have has True future then started his quest for divinity and growth. On the day of his first examination Of his final masters program Guru dev knew that his life was destined to solve the questions that disturbed him those early part of his life and made him face everything have itself and part was.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                color: '#6D4C41',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                The Quest and the Transformation
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037',
                marginBottom: '1rem'
              }}>
                On the day of his last examination of the masters program Guru dev felt the dire need of finding answers to some questions that disturbed him those early part of his life and made him face everything have itself and part was. Guru dev then left his job life, his family and destiny to live with the guru who in the past had become a Guru in Sharada Maharaj where he spent years.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037'
              }}>
                Why "Guru" is that after death They lived a good life "my meditation? Where is permanent peace? How can we achieve it"? The phase our family life years in Ketu Ashram Guru Sri Gyanand Ji Maharaj where he spent years searching the real and its perspective guided by "Yata" and meditation. Then he spent next 5 years in solitude meditation where he gave birth to the Guru master his base on the responsibility of enlightening and teaching.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                color: '#6D4C41',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                Foundation of Sri Krishna Kripa Sewa Samiti
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037'
              }}>
                Devoted to the divine ideals of meditation, service and dedication to humanity. Gurudev armed and spiritum Guru dev founded the Samiti organization. has has been teaching practical benefits of meditation and prayers where teaching the problems and their solutions in day-to-day life. since 1992. inspiring and transforming lives. This transformational organization has been proved as bringing about a change which resulted in the society formation.
              </p>
            </section>

            <section>
              <h2 style={{
                fontSize: '2rem',
                color: '#6D4C41',
                marginBottom: '1.5rem',
                fontWeight: '600',
                borderBottom: '3px solid #D4AF37',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>
                Milestones so far
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037',
                marginBottom: '1rem'
              }}>
                A world movement dedication to serving the move Gita through action postoperating their foot contribution and meditation camp for attaining that his life has been successful in building spiritual dharma of the world under Guru dev's guidance by so it is and all spiritual practice. Wonderful merging of Philosophy of life, Gita theme activity-Gita Devi Ashram; Devotional Struggle and "Unnatratariya Gurukula. including gurukula activities and with with many more activities.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                color: '#5D4037'
              }}>
                Under the same umbrella organization, in 2015 Guru dev founded GEO GITA to make him as accurate and permanently useful knowledge among people now their basic life. more comprehensive and applicable that aim and teach the virtue of his bringing. Gita is intended from the youth of this country so all.
              </p>
            </section>
          </article>

          <aside style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(93, 64, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#6D4C41',
                margin: '0 0 2rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                Sacred Timeline
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {milestones.map((milestone, index) => (
                  <div key={index} style={{
                    padding: '1.5rem',
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(245, 235, 220, 0.5))' 
                      : 'linear-gradient(135deg, rgba(141, 110, 99, 0.08), rgba(240, 230, 210, 0.5))',
                    borderRadius: '15px',
                    borderLeft: `5px solid ${index % 2 === 0 ? '#D4AF37' : '#8D6E63'}`,
                    position: 'relative'
                  }}>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#6D4C41',
                      marginBottom: '0.5rem'
                    }}>
                      {milestone.year}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#5D4037',
                      lineHeight: '1.5'
                    }}>
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(245, 235, 220, 0.3))',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#D4AF37',
                marginBottom: '1rem'
              }}>
                ॐ
              </div>
              <blockquote style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: '#6D4C41',
                margin: 0,
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                "The path to enlightenment unfolds through selfless service, deep meditation, and unwavering compassion for all beings"
              </blockquote>
            </div>
          </aside>
        </div>

        <section style={{
          margin: '4rem 0',
          textAlign: 'center',
          padding: '4rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(245, 235, 220, 0.6))',
          borderRadius: '25px',
          boxShadow: '0 15px 50px rgba(93, 64, 55, 0.08)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37, #B8960F)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            color: 'white',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
          }}>
            ॐ
          </div>
          <h3 style={{
            fontSize: '2.2rem',
            color: '#6D4C41',
            margin: '0 0 1.5rem',
            fontWeight: '600'
          }}>
            Eternal Legacy of Divine Service
          </h3>
          <p style={{
            fontSize: '1.3rem',
            fontStyle: 'italic',
            color: '#5D4037',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Through decades of unwavering dedication and profound spiritual wisdom, Swami Shri Gyananand Ji Maharaj continues to illuminate the path for countless souls seeking truth, peace, and divine connection.
          </p>
        </section>
      </div>
    </div>
  );
}