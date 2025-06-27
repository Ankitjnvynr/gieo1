"use client";
import Image from 'next/image';

export default function Welcome() {
  return (
    <section className="welcome-section" id="welcome">
      <div className="welcome-wrapper">
        {/* Left side: Image */}
        {/* <div className="welcome-image" data-aos="fade-right">
          <Image
            src="/gita-welcome.jpg" //  Replace with actual image
            alt="Gita Museum Visual"
            width={500}
            height={500}
            className="welcome-img"
          />
        </div> */}
        <div className="video-wrapper">
        <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/nHwhtUTfRy4"
         title="GIEO Gita Museum Video"
         frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
         ></iframe>
        </div>

        <div className="welcome-text" data-aos="fade-left" data-aos-delay="150">
          <div className="welcome-banner">WELCOME TO GIEO GITA MUSEUM</div>
          <h2 className="welcome-heading">A Spiritual Journey Through the Bhagavad Gita</h2>
          <p className="welcome-para">
            Located in the divine land of <span className="highlight">Kurukshetra</span>, the GIEO Gita Museum brings alive the
            timeless message of the <span className="highlight">Shrimad Bhagavad Gita</span> through immersive storytelling,
            digital exhibits, and artistic recreations.
          </p>
          <p className="welcome-para">
            From the epic battlefield scenes to the divine wisdom of Lord Krishna, each space is crafted to inspire, educate,
            and spiritually uplift every visitor.
          </p>
          <p className="welcome-para">
            Explore rare manuscripts, 3D models of the Mahabharata, sloka walls, and serene light and sound shows — all under
            one sacred roof.
          </p>
        </div>
      </div>
    </section>
  );
}
