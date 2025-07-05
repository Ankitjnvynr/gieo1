
'use client';
import React from 'react';
import './AuditoriumDetails.css';

export default function AuditoriumDetail() {
  const auditoriums = [
    {
      name: 'Auditorium - 1',
      image: '/assets/images/backgrounds/ad1.jpeg',
      details: 'Capacity: 300 people | Timing: 9 AM - 9 PM',
    },
    {
      name: 'Auditorium - 2',
      image: '/assets/images/backgrounds/ad2.jpg',
      details: 'Capacity: 200 people | Timing: 10 AM - 8 PM',
    },
  ];

  return (
    <div className="auditorium-page">
      {auditoriums.map((audi, index) => (
        <div key={index} className="auditorium-wrapper" style={{paddingTop:"20px"}}>
          <div className="auditorium-title">{audi.name}</div>
          <div className="auditorium-content">
            {index % 2 === 0 ? (
              <>
                <div
                  className="auditorium-image normal-on-mobile"
                  style={{ backgroundImage: `url(${audi.image})` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('hovered');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('hovered');
                  }}
                  onTouchStart={(e) => {
                      e.currentTarget.classList.add('hovered');
                    }}
                    onTouchEnd={(e) => {
                      setTimeout(() => {
                        e.currentTarget.classList.remove('hovered');
                      }, 300); // Optional: 300ms to show effect
                    }}

                >
                  <div className=""></div>
                </div>

                <div
                  className="auditorium-about reverse-on-mobile"
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('hovered');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('hovered');
                  }}
                >
                  <h3>✨ About Auditorium</h3>
                  <p>{audi.details}</p>
                  <p className="audi-desc">
                    Spacious, well-equipped space ideal for events, seminars,
                    spiritual gatherings and educational programs.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="auditorium-about normal-on-mobile"
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('hovered');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('hovered');
                  }}
                >
                  <h3>✨ About Auditorium</h3>
                  <p>{audi.details}</p>
                  <p className="audi-desc">
                    Spacious, well-equipped space ideal for events, seminars,
                    spiritual gatherings and educational programs.
                  </p>
                </div>

                <div
                  className="auditorium-image reverse-on-mobile"
                  style={{ backgroundImage: `url(${audi.image})` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('hovered');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('hovered');
                  }}
                >
                  <div className=""></div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
