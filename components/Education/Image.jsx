import React from 'react';
import './Image.css';

import Programs from './Programs';
const BannerImage = () => {
  return (
    <>
    <div className="banner-container">
      
      <div className="banner-image">
        <div className="image-overlay">
          <img src='/assets/images/education/gurukul.jpeg' alt="Banner" width={"100%"} height={"400px"} />
        </div>
      </div>
      
      
     
    </div>
    
  <div className="containers">
      <h1 className="main-heading">GIEO Gita Education Program</h1>
      <p className="subheading"> Discover timeless wisdom from the Bhagavad Gita and transform your life through spiritual education.</p>
      <div className="button-group">
        <a href='#divsection'><button className="btn primary">Explore More</button></a>
        <a href='#textsection'><button className="btn secondary">Learn More</button></a>
      </div>
    </div>
   
    </>
  );
};

export default BannerImage;