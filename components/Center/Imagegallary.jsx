import React from 'react';
import './Imagegallary.css';

const ashrams = [
  { src: '/assets/images/Center/as1.jpg', name: 'Ashram 1' },
  { src: '/assets/images/Center/as2.jpg', name: 'Ashram 2'},
  { src: '/assets/images/Center/as3.jpg', name: 'Ashram 3' },
  { src: '/assets/images/Center/as4.jpg', name: 'Ashram 4' },
  { src: '/assets/images/Center/as5.jpg', name: 'Ashram 5' },
  { src: '/assets/images/Center/as6.jpg', name: 'Ashram 6' },
];

const Imagegallary = () => {
  return (
    <div className="ashram-gallery">
      <h2 style={{fontSize:"50px"}}>Ashrams in India</h2>
      <p style={{fontSize:"30px"}}>Ashrams at a Glance</p>
      <div className="ashram-grid">
        {ashrams.map((ashram, index) => (
          <div className="ashram-card" key={index}>
            <img src={ashram.src} alt={ashram.name} />
            <div className="ashram-name">{ashram.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagegallary;
