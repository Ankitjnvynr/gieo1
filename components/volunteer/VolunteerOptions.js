
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
const VolunteerOptions = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [activeOrb, setActiveOrb] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 3,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.4,
    }));
    setParticles(newParticles);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionStyle = {
    minHeight: '100vh',
    background: `
      linear-gradient(135deg, #f9f1e2 0%, #edd5af 50%, #d8be99 100%),
      url('/assets/textures/parchment-light.png')
    `,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    position: 'relative',
    overflow: 'hidden',
    color: '#5e3e20',
    fontFamily: `'Segoe UI', sans-serif`,
  };
 const handleVolunteerClick = () => {
    router.push("/volunteer/volunteerform");
  };

  const starsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(2px 2px at 20px 30px, #dab078, transparent),
      radial-gradient(1px 1px at 80px 90px, #f0dbb2, transparent),
      radial-gradient(2px 2px at 150px 50px, #b88f5a, transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    opacity: 0.5,
    animation: 'twinkle 5s ease-in-out infinite',
    zIndex: 1,
  };
const headerStyle = {
    background: "linear-gradient(135deg, #FFFDF6 0%, #FFFDEC 100%)",
    color: " #6b3e26",
    padding: "60px 20px",
    textAlign: "center",
    position: "relative",
  };
  const containerStyle = {
    position: 'relative',
    zIndex: 10,
    padding: '6rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
    fontWeight: 500,
    background: 'linear-gradient(120deg, #b88960, #8d6748, #c19b6b)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginBottom: '1.5rem',
    textShadow: '0 0 18px #d7b78b88',
  };

  const orbContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '3rem',
    marginTop: '4rem',
  };

  const orbStyle = (index, isActive) => ({
    background: `
      radial-gradient(circle at 30% 30%, 
        #6b4a2e${isActive ? 'dd' : 'bb'} 0%,
        #7a5535${isActive ? 'cc' : 'aa'} 20%,
        #8d633f${isActive ? 'bb' : '99'} 70%
      )
    `,
    borderRadius: '50%',
    padding: '3rem 2rem',
    minHeight: '360px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.6s ease',
    transform: isActive ? 'scale(1.07) translateY(-15px)' : 'scale(1)',
    boxShadow: isActive
      ? '0 30px 60px #a67c5277, inset 0 0 40px #c3a16a99'
      : '0 15px 30px #7a5d4244, inset 0 0 20px #f5ead933',
    border: "3px solid #f5ead955",
    position: 'relative',
    overflow: 'hidden',
  });

  const orbImageStyle = {
    width: '200px',
    height: '170px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #c8a874',
    marginBottom: '1.2rem',
    boxShadow: '0 0 12px #e5d0a0',
  };

  const orbTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f0e5d2',
    marginBottom: '1rem',
    letterSpacing: '1px',
    textShadow: '0 0 6px #f0e4c788',
  };

  const orbDescStyle = {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#ead5b8',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  };

  const enterPathButton = (isHovered) => ({
    background: isHovered
      ? 'linear-gradient(135deg, #c49b5e, #e0c498)'
      : 'linear-gradient(135deg, #d8b987, #f5e7c4)',
    border: '2px solid #c8a874cc',
    color: '#3d2b18',
    padding: '1rem 2.2rem',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: isHovered
      ? '0 0 25px #decba777, inset 0 0 10px #fff3e5'
      : '0 0 15px #c8a87466',
    transform: isHovered ? 'translateY(-3px)' : 'none',
  });

  const sacredPaths = [
    {
      title: 'Ashram Volunteering',
      description: 'Support daily operations at the Yoga Center and help maintain sacred spaces.',

    },
    {
      title: 'Prana Daanam',
      description: 'Offer your life energy in community outreach and spiritual programs.',
    },
    {
      title: 'Gau Seva',
      description: 'Serve during special events, festivals, and gatherings worldwide.',
    },
    {
      title: 'Program Volunteering',
      description: 'Assist in program logistics, registrations, and guiding participants.',
    },
    {
      title: 'Green Hands',
      description: 'Join environmental initiatives, tree planting, and sustainability drives.',
    },
    {
      title: 'Teaching and Mentoring',
      description: 'Engage in consecrated spaces by sharing knowledge and guidance.',
    },
  ];

  const orbImages = [
    '/assets/images/volunteer/ashramVolunteering.webp',
    '/assets/images/volunteer/pranaVolunteering.webp',
    '/assets/images/volunteer/gauSeva.webp',
    '/assets/images/volunteer/programVolunteer.jpg',
    '/assets/images/volunteer/plantingTrees.webp',
    '/assets/images/volunteer/teaching.webp',
  ];

  return (
    <>
      {/* Shloka and divider above the main background */}
      <div style={{
        color: "#6b3e26",
        padding: "20px 20px 20px 20px",
        textAlign: "center",
        position: "relative",
        background: "transparent"
      }}>
        <p style={{
          fontSize: "20px",
          fontStyle: "italic",
          marginBottom: "8px",
          opacity: 0.9,
        }}>
          अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव।
        </p>
        <p style={{
          fontSize: "20px",
          fontStyle: "italic",
          opacity: 0.9,
        }}>
          मदर्थमपि कर्माणि कुर्वन् सिद्धिमवाप्स्यसि॥
        </p>
        <img
          src="/assets/images/donation/DIVIDER.png"
          style={{ marginTop: "20px", width: "250px", height: "auto" }}
        />
      </div>

      <section style={sectionStyle}>
        <style>
          {`
            @keyframes twinkle {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.9; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}
        </style>
        <div style={starsStyle} />
        {particles.map(p => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: 'radial-gradient(circle, #d8b987aa, transparent)',
              borderRadius: '50%',
              opacity: p.opacity,
              animation: `float ${3 + p.speed}s ease-in-out infinite`,
              animationDelay: `${p.id * 0.2}s`,
              zIndex: 2,
            }}
          />
        ))}

        <div style={containerStyle}>
          {/* Decorative ring behind the main title */}
          <div
            style={{
              position: 'absolute',
              top: '40px', // adjust as needed for vertical alignment
              left: '50%',
              transform: 'translateX(-50%)',
              width: '350px',
              height: '350px',
              border: '2px solid #c59f6955',
              borderRadius: '50%',
              animation: 'rotate 20s linear infinite',
              zIndex: 0,
            }}
          />
          <h1 style={titleStyle}>✦ HOW CAN YOU VOLUNTEER? ✦</h1>
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            color: '#7a5b39',
            fontStyle: 'italic',
            maxWidth: '750px',
            margin: '1rem auto 6rem',

            lineHeight: '1.8',
          }}>
            "सेवा परमो धर्मः" — Service is the highest dharma. Join hands with Isha's vision and transform lives through sacred volunteering.
          </p>

          <div style={orbContainerStyle}>
            {sacredPaths.map((path, index) => (
              <div
                key={index}
                style={orbStyle(index, activeOrb === index)}
                onMouseEnter={() => setActiveOrb(index)}
                onMouseLeave={() => setActiveOrb(null)}
              >
                <img src={orbImages[index % orbImages.length]} alt={path.title} style={orbImageStyle} />
                <h3 style={orbTitleStyle}>{path.title}</h3>
                <p style={orbDescStyle}>{path.description}</p>
                <button
                  style={enterPathButton(hoveredButton === index)}
                  onClick={handleVolunteerClick}
                  onMouseEnter={() => setHoveredButton(index)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '5rem',
            textAlign: 'center',
            background: 'linear-gradient(to right, #f9f1e2, #ecd6ae)',
            padding: '3rem',
            borderRadius: '30px',
            boxShadow: '0 0 30px #d8b98744',
            backdropFilter: 'blur(10px)',
            border: '2px solid #e8d3aa',
          }}>
            <h3 style={{
              fontSize: '2.4rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #b88960, #d3b181)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              ✧ Ready to Transform Through Service? ✧
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: '#7a5a3a',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 2rem',
            }}>
              Take the first step toward a purposeful life. Begin your sacred journey with Isha's volunteer opportunities.
            </p>
            <button
              style={{
                ...enterPathButton(hoveredButton === 'apply'),
                fontSize: '1.3rem',
                padding: '1.2rem 3rem',
              }}
              onClick={handleVolunteerClick}
              onMouseEnter={() => setHoveredButton('apply')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerOptions;