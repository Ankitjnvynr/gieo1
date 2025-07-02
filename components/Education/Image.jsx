import React from 'react';
import './Image.css';

import Programs from './Programs';
const BannerImage = () => {
  return (
    <>
    <div className="banner-container">
      
      <div className="banner-image">
        <div className="image-overlay"></div>
      </div>
      
      
     
    </div>

    {/* <div id='divsection'><Programs /></div> */}
    <div className="banner-content">
    <div className="banner-text">
      <h1>Empowering Futures Through Education</h1>
      <p>
        Join us in our mission to provide quality education and resources to
        those in need. Together, we can make a difference.</p>
      <button className="learn-more-button">Learn More</button>
    </div>
    </div>
    </>
  );
};

export default BannerImage;