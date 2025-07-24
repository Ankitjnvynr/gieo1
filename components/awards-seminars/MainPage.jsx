import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, ChevronRight, Star, Clock } from 'lucide-react';

const AwardsAndSeminars = () => {
  const awards = [
    {
      id: 1,
      title: "Spiritual Leadership Award 2024",
      recipient: "Dr. Rajesh Mehta",
      description: "For lifelong dedication to Gita studies and community service.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Excellence in Teaching Award",
      recipient: "Prof. Suman Jain",
      description: "Outstanding contribution to spiritual education and mentorship.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Community Service Recognition",
      recipient: "Arjun Sharma",
      description: "Exceptional dedication to serving the community through Gita teachings.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Youth Inspiration Award",
      recipient: "Priya Patel",
      description: "Inspiring young minds through innovative spiritual programs.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Youth Inspiration Award",
      recipient: "Priya Patel",
      description: "Inspiring young minds through innovative spiritual programs.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    }
  ];

  const seminars = [
    {
      id: 1,
      title: "Gita & Mindfulness in Modern Times",
      speaker: "Prof. Suman Jain",
      date: "March 15, 2025",
      description: "A deep dive into applying Gita philosophy in contemporary life.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "Karma Yoga in Daily Practice",
      speaker: "Dr. Rajesh Mehta",
      date: "April 20, 2025",
      description: "Understanding the path of selfless action and its practical applications.",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      duration: "1.5 hours"
    },
    {
      id: 3,
      title: "Meditation Techniques from the Gita",
      speaker: "Swami Ananda",
      date: "May 10, 2025",
      description: "Exploring various meditation practices mentioned in the Bhagavad Gita.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      duration: "2.5 hours"
    },
    {
      id: 4,
      title: "Youth and Ancient Wisdom",
      speaker: "Priya Patel",
      date: "June 5, 2025",
      description: "Connecting young minds with timeless spiritual teachings.",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      duration: "1 hour"
    },
    {
      id: 5,
      title: "Youth and Ancient Wisdom",
      speaker: "Priya Patel",
      date: "June 5, 2025",
      description: "Connecting young minds with timeless spiritual teachings.",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      duration: "1 hour"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Youth Gita Seminar",
      date: "July 25, 2025",
      time: "5:00 PM",
      venue: "Online (Zoom)",
      type: "Seminar"
    },
    {
      id: 2,
      name: "Annual Awards Ceremony",
      date: "August 15, 2025",
      time: "6:00 PM",
      venue: "Community Center, Delhi",
      type: "Award Ceremony"
    },
    {
      id: 3,
      name: "Meditation Workshop",
      date: "September 10, 2025",
      time: "10:00 AM",
      venue: "Yoga Studio, Mumbai",
      type: "Workshop"
    }
  ];

  return (
    <div className="awards-seminars-page">
      <style jsx>{`
        .awards-seminars-page {
          background-color: #FDF8F0;
          min-height: 100vh;
          font-family: 'Georgia', serif;
          color: #333;
          line-height: 1.6;
        }

        .hero {
          background: linear-gradient(135deg, rgba(255, 179, 71, 0.1), rgba(154, 208, 236, 0.1)),
                      url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 179, 71, 0.3), rgba(154, 208, 236, 0.2));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #333;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          font-weight: 400;
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .hero-button {
          background: linear-gradient(45deg, #FFB347, #FFE0B3);
          color: #333;
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 179, 71, 0.3);
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 179, 71, 0.4);
        }

        .section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #333;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(45deg, #FFB347, #9AD0EC);
          border-radius: 2px;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .award-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .award-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(45deg, #FFB347, #9AD0EC);
        }

        .award-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .award-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .award-year {
          background: linear-gradient(45deg, #FFB347, #FFE0B3);
          color: #333;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 15px;
        }

        .award-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .award-recipient {
          color: #FFB347;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .award-description {
          color: #666;
          line-height: 1.6;
        }

        .seminars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .seminar-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          position: relative;
        }

        .seminar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .seminar-thumbnail {
          width: 100%;
          height: 200px;
          object-fit: cover;
          position: relative;
        }

        .seminar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 179, 71, 0.8), rgba(154, 208, 236, 0.8));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .seminar-card:hover .seminar-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #FFB347;
        }

        .seminar-content {
          padding: 25px;
        }

        .seminar-date {
          background: #9AD0EC;
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.9rem;
          display: inline-block;
          margin-bottom: 15px;
        }

        .seminar-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .seminar-speaker {
          color: #FFB347;
          font-weight: bold;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .seminar-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .seminar-duration {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #888;
          font-size: 0.9rem;
        }

        .upcoming-events {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-top: 50px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .events-list {
          display: grid;
          gap: 20px;
          margin-top: 30px;
        }

        .event-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #FDF8F0;
          border-radius: 15px;
          border-left: 4px solid #FFB347;
          transition: all 0.3s ease;
        }

        .event-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .event-date {
          background: linear-gradient(45deg, #FFB347, #FFE0B3);
          color: #333;
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          min-width: 100px;
          font-weight: bold;
        }

        .event-details {
          flex: 1;
        }

        .event-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .event-info {
          color: #666;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 5px;
        }

        .event-type {
          background: #9AD0EC;
          color: white;
          padding: 3px 10px;
          border-radius: 10px;
          font-size: 0.8rem;
        }

        .register-button {
          background: linear-gradient(45deg, #FFB347, #FFE0B3);
          color: #333;
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 179, 71, 0.3);
        }

        .cta {
          background: linear-gradient(135deg, #FFB347, #9AD0EC);
          padding: 80px 20px;
          text-align: center;
          color: white;
          margin-top: 80px;
        }

        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .cta p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          background: white;
          color: #333;
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero p {
            font-size: 1.1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .awards-grid,
          .seminars-grid {
            grid-template-columns: 1fr;
          }
          
          .event-item {
            flex-direction: column;
            text-align: center;
          }
          
          .cta h2 {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Awards & Seminars
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Celebrating Spiritual Excellence & Learning
          </motion.p>
          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Next Event
          </motion.button>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Awards & Recognition
        </motion.h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="award-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={award.image} alt={award.title} className="award-image" />
              <div className="award-year">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <div className="award-recipient">
                <Award size={16} />
                {award.recipient}
              </div>
              <p className="award-description">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seminars Section */}
      <section className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Seminars Gallery
        </motion.h2>
        <div className="seminars-grid">
          {seminars.map((seminar, index) => (
            <motion.div
              key={seminar.id}
              className="seminar-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'relative' }}>
                <img src={seminar.thumbnail} alt={seminar.title} className="seminar-thumbnail" />
                <div className="seminar-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="seminar-content">
                <div className="seminar-date">{seminar.date}</div>
                <h3 className="seminar-title">{seminar.title}</h3>
                <div className="seminar-speaker">
                  <Users size={16} />
                  {seminar.speaker}
                </div>
                <p className="seminar-description">{seminar.description}</p>
                <div className="seminar-duration">
                  <Clock size={16} />
                  {seminar.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <motion.div
          className="upcoming-events"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="event-date">
                  <div>{event.date.split(' ')[1]}</div>
                  <div style={{ fontSize: '0.8rem' }}>{event.date.split(' ')[0]}</div>
                </div>
                <div className="event-details">
                  <h3 className="event-name">{event.name}</h3>
                  <div className="event-info">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={14} />
                      {event.time}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={14} />
                      {event.venue}
                    </span>
                  </div>
                  <div className="event-type">{event.type}</div>
                </div>
                <motion.button
                  className="register-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Ready to Join Us in this Journey of Wisdom & Service?</h2>
        <p>Be part of our growing community dedicated to spiritual growth and learning</p>
        <div className="cta-buttons">
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nominate for Awards
          </motion.button>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Attend a Seminar
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AwardsAndSeminars;