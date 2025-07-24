// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "After receiving the Gita and prasadam, my students started discussing karma and dharma during lunch breaks! The meals are not only delicious but spiritually uplifting.",
      author: "Mrs. Reddy",
      role: "Bangalore School Teacher"
    },
    {
      id: 2,
      text: "The prasadam from GIEO GITA tastes divine! It's the highlight of our school week. The Gita has helped me understand my purpose better.",
      author: "Rahul Sharma",
      role: "Class 10 Student"
    },
    {
      id: 3,
      text: "Distributing prasadam and Gitas has been the most fulfilling experience of my life. Seeing the joy on children's faces when they receive these sacred gifts is priceless.",
      author: "Priya Patel",
      role: "GIEO GITA Volunteer"
    },
    {
      id: 4,
      text: "This initiative has transformed our school's atmosphere. Students are more respectful and thoughtful after engaging with these spiritual materials.",
      author: "Dr. Sanjay Kumar",
      role: "School Principal"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Stories of Transformation</h2>
          <p>Hear from those touched by this initiative</p>
        </div>
        
        <div className="testimonials-carousel">
          <div className="carousel-track" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="carousel-slide">
                <div className="testimonial-card">
                  <div className="quote-icon">“</div>
                  <p>{testimonial.text}</p>
                  <div className="author">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="carousel-arrow prev"
            onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button 
            className="carousel-arrow next"
            onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;