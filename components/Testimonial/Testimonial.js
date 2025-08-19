// components/Testimonial.js
import Link from 'next/link';
import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="testimonial-one__single">
        <div className="testimonial-one__quote">
          <span className="icon-quote" />
        </div>
        <div className="testimonial-one__client-info">
          <div className="testimonial-one__client-img">
            <img src={testimonial.imgSrc} alt={testimonial.name} />
          </div>
          <div className="testimonial-one__client-content">
            <h3>
              <Link href={testimonial.link}>{testimonial.name}</Link>
            </h3>
            <p>{testimonial.title}</p>
          </div>
        </div>
        <p className="testimonial-one__text">{testimonial.text}</p>
        <div className="testimonial-one__ratting">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} className="icon-star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
