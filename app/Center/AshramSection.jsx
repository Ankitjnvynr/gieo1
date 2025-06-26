import React from 'react';
// Replace with your actual image path
import './AshramSection.css'

const AshramSection = () => {
  return (
    <>
    <div className="ashram-container">
      <div className="ashram-img">
        <img 
        src="/assets/images/Center/ashram1.jpg  "
        alt="Ashram View" />
      </div>
      <div className="ashram-description">
        <h2>Gita Ashram - Kurukshetra</h2>
        <p>
         The GIEO Gita Center in Kurukshetra serves as a vibrant spiritual and educational institution focused on the teachings of the Bhagavad Gita. Inspired by Swami Gyananand Ji Maharaj, the center conducts Gita classes, youth empowerment programs, and spiritual discourses to promote ethical living and inner peace. Located in the sacred land of Kurukshetra, where Lord Krishna spoke the Gita, the center fosters cultural preservation, value-based education, and community service. 

        </p>
      </div>
    </div>
    <div className="ashram-container">
      <div className="ashram-img">
        <img 
        src="/assets/images/Center/vrindavan.jpg"
        alt="Ashram View" />
      </div>
      <div className="ashram-description">
        <h2>Gita Ashram - Vrindavan </h2>
        <p>
         he GIEO Gita Center in Vrindavan, known as Shri Krishna Kripa Dham, is a spiritual and cultural hub dedicated to spreading the teachings of the Bhagavad Gita. Guided by Swami Gyananand Ji Maharaj, the center promotes values of devotion, service, and inner transformation through regular satsangs, Gita discourses, and community service. Located on the Parikrama Marg, it also supports cow protection, environmental awareness, and Vedic education. 
        </p>
      </div>
    </div>
    <div className="ashram-container">
      <div className="ashram-img">
        <img 
        src="/assets/images/Center/haridwar.jpg"
        alt="Ashram View" />
      </div>
      <div className="ashram-description">
        <h2>Gita Ashram - Haridwar </h2>
        <p>
          The GIEO Gita Center in Haridwar is a spiritual hub dedicated to disseminating the wisdom of the Bhagavad Gita. Guided by Swami Gyananand Ji Maharaj, the center organizes regular spiritual discourses, Gita teachings, and community service activities to inspire devotion and ethical living. Situated in the holy city of Haridwar, the center emphasizes the integration of spiritual knowledge with daily life, promoting inner growth and self-realization. 
        </p>
      </div>
    </div>






    </>
  );
};

export default AshramSection;
