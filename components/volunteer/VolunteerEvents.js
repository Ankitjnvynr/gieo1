
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Clock, Target, Heart, Star } from 'lucide-react';
import { useRouter } from "next/navigation";
const VolunteerEvents = () => {
    const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      date: 'Aug 9, 2025',
      title: 'Janamashtmi',
      subtitle: 'Offer Your Seva on Krishna\'s Divine Appearance Day',
      description: 'Join hands in organizing a blissful celebration of Lord Krishna\'s birth. Volunteer in decorations, prasadam distribution, crowd management, and more to serve thousands of devotees with love.',
      duration: '4 Hours',
      ageGroup: 'All Ages',
      color: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      image: "/assets/images/volunteer/janmashtami.jpeg"
    },
    {
      id: 2,
      date: 'Aug 15, 2025',
      title: 'Independence Day',
      subtitle: 'Serve the Nation Through Spiritual Seva',
      description: 'Celebrate true freedom by volunteering in community outreach programs, Gita distribution drives, and helping with service stalls to spread values of peace, selflessness, and dharma.',
      duration: '6 Hours',
      ageGroup: 'Ages 8+',
      color: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      image: "/assets/images/volunteer/independence.jpg"
    },
    {
      id: 3,
      date: 'Aug 26, 2025',
      title: 'Ganesh Chaturthi',
      subtitle: 'Serve with Devotion on the Day of Remover of Obstacles',
      description: 'Be a part of spiritual service during Ganesh Utsav — assist in altar arrangements, prasadam service, eco-friendly idol awareness campaigns, and managing devotional kirtan gatherings.',
      duration: '3 Hours',
      ageGroup: 'All Ages',
      color: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      image: "/assets/images/volunteer/ganesh-chaturthi.webp"
    },
    {
      id: 4,
      date: 'Aug 16, 2025',
      title: 'Rakhi',
      subtitle: 'Serve to Strengthen Bonds of Love and Dharma',
      description: 'Celebrate Raksha Bandhan with seva — tying Rakhis to cow mothers (Gau Seva), visiting orphanages or old age homes, and distributing food and Gita books to spread Krishna\'s love.',
      duration: '5 Hours',
      ageGroup: 'Ages 6+',
      color: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      image: "/assets/images/volunteer/rakhi.webp"
    },
    {
      id: 5,
      date: 'Sept 30, 2025',
      title: 'Cleanliness Drive',
      subtitle: 'Serving Mother Earth Through Seva',
      description: 'Participate in sacred seva by cleaning temples, parks, and streets. Spread awareness on "Clean Mind, Clean Surroundings" as taught in the Gita — a truly sattvic offering.',
      duration: '4 Hours',
      ageGroup: 'Ages 5+',
      color: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      image: "/assets/images/volunteer/cleaniness.webp"
    }
  ];
const handleVolunteerClick = () => {
    router.push("/volunteer/volunteerform");
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    minHeight: '80vh',
    background: "#fff1e0",

    padding: '40px 20px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #8B4513, #A0522D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: '#8B4513',
    maxWidth: '600px',
    margin: '0 auto 40px',
    lineHeight: '1.6'
  };

  const sliderStyle = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '30px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
  };

  const slideContainerStyle = {
    display: 'flex',
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const slideStyle = {
    minWidth: '100%',
    background: 'rgba(255,255,255,0.95)',
    padding: '60px',
    display: 'flex',
    alignItems: 'center',
    gap: '60px'
  };

  const imageStyle = {
    width: '300px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '15px',
    minWidth: '300px',
    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
  };

  const contentStyle = {
    flex: 1
  };

  const eventTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: "#a15f38",
    marginBottom: '15px'
  };

  const eventSubtitleStyle = {
    fontSize: '1.3rem',
    color: '#8B7355',
    marginBottom: '25px',
    fontStyle: 'italic'
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#6B5B47',
    lineHeight: '1.7',
    marginBottom: '30px'
  };

  const statsStyle = {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px'
  };

  const statStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#8B4513',
    fontSize: '1rem',
    fontWeight: '600'
  };

  const buttonStyle = {
    background: events[currentSlide].color,
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const navButtonStyle = (direction) => ({
    position: 'absolute',
    top: '50%',
    [direction]: '20px',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    zIndex: 10
  });

  const dotsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '30px'
  };

  const dotStyle = (active) => ({
    width: active ? '30px' : '12px',
    height: '12px',
    borderRadius: '6px',
    background: active ? 'linear-gradient(45deg, #8B4513, #A0522D)' : 'rgba(139, 69, 19, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Volunteer with Heart</h1>
        <p style={subtitleStyle}>
          Be part of joyous events where seva, family bonding, and spiritual learning meet.
        </p>
      </div>

      <div style={sliderStyle}>
        <div style={slideContainerStyle}>
          {events.map((event, index) => (
            <div key={event.id} style={slideStyle}>
              <img src={event.image} alt={event.title} style={imageStyle} />
              <div style={contentStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Calendar size={20} color="#8B4513" />
                  <span style={{ color: '#8B4513', fontWeight: '600' }}>{event.date}</span>
                </div>
                <h3 style={eventTitleStyle}>{event.title}</h3>
                <p style={eventSubtitleStyle}>{event.subtitle}</p>
                <p style={descriptionStyle}>{event.description}</p>
                <div style={statsStyle}>
                  <div style={statStyle}>
                    <Clock size={20} />
                    <span>{event.duration}</span>
                  </div>
                  <div style={statStyle}>
                    <Target size={20} />
                    <span>{event.ageGroup}</span>
                  </div>
                </div>
                <button style={buttonStyle} onClick={handleVolunteerClick}>Join Now</button>
              </div>
            </div>
          ))}
        </div>
        <button style={navButtonStyle('left')} onClick={prevSlide}>
          <ChevronLeft size={24} color="#8B4513" />
        </button>
        <button style={navButtonStyle('right')} onClick={nextSlide}>
          <ChevronRight size={24} color="#8B4513" />
        </button>
        <div style={dotsStyle}>
          {events.map((_, index) => (
            <div
              key={index}
              style={dotStyle(index === currentSlide)}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerEvents;