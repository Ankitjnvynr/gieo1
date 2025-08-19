import React from 'react';
import './Image.css'; 


const ImageBanner = () => {
  return (
    <div className="image-container">
      <img
        src="/assets/images/Center/mainImg.jpg"
        alt="Campus"
        className="responsive-image"
      />
      <div className="overlay-text">
        <h1>"Come home to your true self<br/> — at GIEO GITA Ashram."</h1>
        
      </div>

     
    </div>
  );
};

export default ImageBanner;
