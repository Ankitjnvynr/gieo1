"use client";
export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title"> Museum Gallery</h2>

      <div className="gallery-grid">
        <img src="/assets/images/backgrounds/gal1.jpg" alt="Gallery 1" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (1).webp" alt="Gallery 2" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed (2).webp" alt="Gallery 3" className="gallery-image" />
        <img src="/assets/images/backgrounds/unnamed.webp" alt="Gallery 4" className="gallery-image" />
      </div>
    </section>
  );
}
