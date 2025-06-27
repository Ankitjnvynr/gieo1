"use client";

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* 🔶 Background Image */}
      <div className="hero-bg-wrapper">
        <Image
          src="/assets/images/backgrounds/wel.webp"
          alt="Gita Museum"
          fill
          className="hero-bg"
          priority
        />
      </div>

      {/* 🔷 Hero Text Content */}
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          GIEO GITA MUSEUM  
          <br />KURUKSHETRA
        </h1>

        <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">
          Experience the essence of Shrimad Bhagavad Gita
        </p>

        <p className="hero-quote" data-aos="fade-up" data-aos-delay="400">
          “कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |<br />
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||”
        </p>

        <p className="hero-translation" data-aos="fade-up" data-aos-delay="600">
          “You have a right to perform your duty, but not to the results of your actions.”
        </p>
      </div>

      {/*  Marquee Section */}
      <div className="hero-marquee">
        <Marquee speed={50} gradient={false} pauseOnHover>
          <span className="marquee-text">
             Welcome to the GIEO Gita Museum – Discover the divine message of the Bhagavad Gita
          </span>
          <span className="marquee-text">
             “श्रीभगवानुवाच” – Explore the sacred dialogue between Krishna & Arjuna
          </span>
          <span className="marquee-text">
             Don’t miss the Light & Sound Show |  Spiritual Awakening Begins Here
          </span>
        </Marquee>
      </div>
    </section>
  );
}
