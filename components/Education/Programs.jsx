import React from 'react';
import './Programs.css';

const programs = [
  {
    title: 'Bal Sanskar Camps',
    description: 'Bal Sanskar Camps by GIEO GITA nurture children with values, discipline, and spiritual wisdom through engaging activities, stories, and teachings from the Bhagavad Gita.',
    image: '/assets/images/education/balsanskar.jpg',
    link: '/education/beginner',
  },
  {
    title: 'Advanced Programs',
    description: 'GIEO GITA’s Advanced Programs offer in-depth study and practical application of the Bhagavad Gita, empowering participants to lead with clarity, purpose, and inner strength.',
    image: '/assets/images/education/prog2.avif',
    link: '/education/advance',
  },
  {
    title: "Children's Yoga",
    description: 'Children’s Yoga at GIEO GITA blends fun, movement, and mindfulness, helping young minds develop focus, confidence, and a joyful approach to life.',
    image: '/assets/images/education/prog3.avif',
    link: '',
  },
  {
    title: 'Hatha Yoga Programs',
    description: 'Hatha Yoga Programs at GIEO GITA provide authentic yogic practices for holistic well-being, taught in a supportive environment by experienced instructors.',
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