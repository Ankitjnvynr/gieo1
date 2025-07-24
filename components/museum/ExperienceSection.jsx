
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Digital Gita Experience Hall",
    description: "Step into a modern multimedia space that brings the teachings of the Gita to life with visuals, narration, and lighting.",
  
  },
  {
    title: "Sloka Wall with Translations",
    description: "Explore beautifully inscribed slokas from the Bhagavad Gita, translated into multiple languages for better understanding.",
    
  },
  {
    title: "Light & Sound Show",
    description: "A mesmerizing light and sound experience narrating the epic tale of Mahabharata and Lord Krishna's message.",
  }
];

export default function ExperienceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        nextSlide();
      }
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="experience-slider">
      <div
        className="experience-slider-wrapper"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div
          className="experience-slider-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              {/* <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="experience-img"
              /> */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow left-arrow" onClick={prevSlide}>&#8592;</button>
      <button className="arrow right-arrow" onClick={nextSlide}>&#8594;</button>
    </section>
  );
}
