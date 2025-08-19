import React from 'react';
import './Programs.css';

const programs = [
  {
    title: 'Bal Sanskar Camps',
    description: 'Take a step towards your wellbeing with these yoga programs, designed by Sadhguru and suitable for beginners. With an array of options available.',
    image: '/assets/images/education/balsanskar.jpg',
    link: '/education/beginner',
  },
  {
    title: 'Advanced Programs',
    description: 'Isha Yoga Advanced Programs include Bhava Spandana Program, Shoonya Intensive, and Samyama, which allow an individual to experience life beyond the limitations of the body and mind.',
    image: '/assets/images/education/prog2.avif',
    link: '/education/advance',
  },
  {
    title: 'Children\'s Yoga',
    description: 'Specially designed for children, these programs bring focus, balance and inner joy through fun-filled activities and yogic practices.',
    image: '/assets/images/education/prog3.avif',
    link: '',
  },
  {
    title: 'Hatha Yoga Programs',
    description: 'Traditional Hatha Yoga practices taught in their full depth and dimension, under the guidance of trained teachers in consecrated spaces.',
    image: '/assets/images/education/prog4.avif',
    link: '',
  },
];

const Programs = () => {
  return (
    <section className="programs-section" id='divsection'>
      <div className="programs-container">
        {programs.map((program, index) => (
          <article className="program-cards" key={index}>
            <div className="image-container">
              <img 
                src={program.image} 
                alt={program.title} 
                className="program-image" 
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{program.title}</h3>
              <p className="card-description">{program.description}</p>
              <a 
                href={program.link} 
                className="cta-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore Program
              </a>  
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Programs;