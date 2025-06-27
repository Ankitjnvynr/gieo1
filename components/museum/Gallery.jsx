"use client";
import Marquee from 'react-fast-marquee';
export default function Gallery() {
  return (
    
       
      <div className="hero-marquee">
          <h2 className="gallery-title" > Museum Gallery</h2>
          <Marquee speed={25} gradient={false} pauseOnHover>
          <section className="gallery-section">
        
        <div className="gallery-grid">
        <img src="/assets/images/backgrounds/gal1.jpg" alt="Gallery 1" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (1).webp" alt="Gallery 2" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (2).webp" alt="Gallery 3" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (1).jpg" alt="Gallery 4" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (2).jpg" alt="Gallery 5" className="gallery-image" />
        </div>
        </section>
        </Marquee>
      </div>
  
  );
}
