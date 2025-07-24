'use client';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title" data-aos="zoom-in">
         What You’ll Experience
      </h2>

      <div className="about-grid">
        <div className="about-item" data-aos="fade-up" data-aos-delay="100">
           <span className="highlight">Collection of ancient Books</span>
        </div>

        <div className="about-item" data-aos="fade-up" data-aos-delay="200">
           <span className="highlight">Bhagavad Gita Sloka Wall with Translations</span>
        </div>

        <div className="about-item" data-aos="fade-up" data-aos-delay="300">
           <span className="highlight">Digital Gita Experience Hall</span>
        </div>

        <div className="about-item" data-aos="fade-up" data-aos-delay="400">
           <span className="highlight">GIEO GITA Organisation 3D Model </span>
        </div>
      </div>
    </section>
  );
}

