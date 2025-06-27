// export default function Reviews() {
//   return (
//     <section className="rba-reviews">
//       <h2>What People Say</h2>
//       <p>“Best place to conduct events!”</p>
//     </section>
//   );
// }



'use client';
import { useEffect, useState, useRef } from 'react';
import '../Main_page/RoomBooking_Auditorium.css';

const reviews = [
  { name: 'Anita Sharma', text: 'Wonderful experience at GIEO GITA Guest House.', stars: 5 },
  { name: 'Rajesh Kumar', text: 'Exceptional hospitality and welcoming atmosphere.', stars: 5 },
  { name: 'Meena Joshi', text: 'Peaceful surroundings and clean rooms.', stars: 4 },
  { name: 'Amit Verma', text: 'Staff was helpful and polite throughout my stay.', stars: 5 },
  { name: 'Pooja Yadav', text: 'Perfect place for a spiritual retreat.', stars: 5 },
  { name: 'Vikas Singh', text: 'Clean, serene and well maintained guest house.', stars: 4 },
  { name: 'Neha Agarwal', text: 'Great food and excellent service.', stars: 5 },
  { name: 'Manoj Das', text: 'Enjoyed the peaceful vibes and greenery.', stars: 4 },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered.current) {
          nextReview();
        }
      }, 15000);
    };

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
  <section className="rba-reviews-slider">
    <h2>Guest Reviews</h2>

    <div
      className="review-slider-wrapper"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <div
        className="review-slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {'★'.repeat(review.stars).padEnd(5, '☆')}
            </div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">– {review.name}</p>
          </div>
        ))}
      </div>
    </div>

    <button className="arrow left-arrow" onClick={prevReview}>&#8592;</button>
    <button className="arrow right-arrow" onClick={nextReview}>&#8594;</button>
  </section>
);

}

