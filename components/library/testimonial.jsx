import React, { useEffect, useRef } from 'react';
import './testimonial.css';

const testimonials = [
  {
    name: "Aarav Sharma",
    image: "https://i.imgur.com/O1RmW5V.png",
    quote: "This library is a spiritual treasure trove. Every book deepened my understanding of the Gita.",
    location: "Delhi, India"
  },
  {
    name: "Priya Mehta",
    image: "https://i.imgur.com/5WzAAVM.png",
    quote: "I found rare and valuable insights here. It's beautifully organized and a joy to explore.",
    location: "Mumbai, India"
  },
  {
    name: "Rohan Das",
    image: "https://i.imgur.com/6mK8Kzg.png",
    quote: "Highly recommended for seekers of wisdom. The collection is divine!",
    location: "Kolkata, India"
  }
];

const TestimonialSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="testimonial-heading">What Readers Say</h2>
        <div className="divider"></div>
      </div>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            className="testimonial-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="image-container">
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <div className="quote-icon">“</div>
            </div>
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-footer">
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-location">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;