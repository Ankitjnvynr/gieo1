import React from 'react';
import './Upcoming.css';

const programs = [
  {
    title: 'Monthly Satsang',
    date: '6 Jul 2025',
    language: 'Hindi',
    location: 'Karnal, India',
  },
  {
    title: 'Monthly Satsang',
    date: '6 Jul 2025',
    language: 'English',
    location: 'Dehradun, India',
  },
  {
    title: 'Monthly Satsang',
    date: '6 Jul 2025',
    language: 'Hindi',
    location: 'Chandigarh, India',
  },
  {
    title: 'Guru Purnima Celebrations',
    date: '10 Jul 2025',
    language: 'English',
    location: 'Shimla, India',
  },
  {
    title: 'Monthly Satsang',
    date: '6 Jul 2025',
    language: 'Hindi',
    location: 'Ludhiana, India',
  },
  {
    title: 'Monthly Satsang',
    date: '6 Jul 2025',
    language: 'English',
    location: 'Noida, India',
  },
  {
    title: 'Surya Kriya',
    date: '3 - 6 Jul 2025',
    language: 'English',
    location: 'Sadhguru Sannidhi, Chattarpur, India',
  },
  {
    title: 'Inner Engineering 4 Days',
    date: '17 - 20 Jul 2025',
    language: 'English',
    location: 'Sadhguru Sannidhi, Chattarpur, Delhi, India',
  },
];

const UpcomingPrograms = () => {
  return (
    <>
        <h2 className="programs-heading" style={{textAlign:"center",fontSize:"30px"}}>Upcoming Programs</h2>

    <div className="program-grid">
       
      {programs.map((program, index) => (
        <div className="program-card" key={index}>
          <div className="program-title-bar">
            <h3>{program.title}</h3>
          </div>
          <div className="program-details">
            <p><strong>{program.date}</strong></p>
            <p>{program.language}</p>
            <div className="program-location">{program.location}</div>
          </div>
          <div style={{margin:"0 auto" , marginTop:'10px' , paddingBottom:'20px'}}><a href='#' className='cta-button'>Enroll now</a></div>
        </div>
      ))}
    </div>

    </>
  );
};

export default UpcomingPrograms;
