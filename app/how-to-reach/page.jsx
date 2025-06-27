'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaOm, FaRoute, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { GiPathDistance, GiSpiralArrow } from 'react-icons/gi';
import { RiMapPinTimeLine } from 'react-icons/ri';
import './page1.css';

const CosmicJourney = () => {
  const [currentPlanet, setCurrentPlanet] = useState('earth');
  const [journeyStage, setJourneyStage] = useState(0);
  const constraintsRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const celestialPaths = {
    earth: {
      title: "Depart from Earth",
      content: "Begin your spiritual journey from your current location",
      duration: "0 light-years",
      icon: <FaRoute />,
      color: "#3A86FF"
    },
    moon: {
      title: "Lunar Reflection",
      content: "The Moon represents the mind - prepare for wisdom reception",
      duration: "1.3 light-seconds",
      icon: <RiMapPinTimeLine />,
      color: "#A2D2FF"
    },
    sun: {
      title: "Solar Illumination",
      content: "The Sun symbolizes divine knowledge - absorb its energy",
      duration: "8.3 light-minutes",
      icon: <FaOm />,
      color: "#FFBE0B"
    },
    jupiter: {
      title: "Jupiter's Wisdom",
      content: "Brihaspati's domain of sacred teachings",
      duration: "43 light-minutes",
      icon: <GiSpiralArrow />,
      color: "#FF9E00"
    },
    temple: {
      title: "Arrive at Gita Gyo",
      content: "The celestial destination where cosmic wisdom resides",
      duration: "You have arrived",
      icon: <FaInfoCircle />,
      color: "#8338EC"
    }
  };

  const travelInstructions = [
    {
      stage: 1,
      title: "Physical Journey",
      steps: [
        "From Delhi: NH44 to Kurukshetra (3.5 hrs)",
        "From Chandigarh: NH152 via Ambala (2 hrs)",
        "Nearest Airport: Chandigarh (IXC)"
      ]
    },
    {
      stage: 2,
      title: "Spiritual Preparation",
      steps: [
        "Read Bhagavad Gita Chapter 1-2",
        "Practice morning meditation",
        "Pack simple white clothing"
      ]
    },
    {
      stage: 3,
      title: "Temple Protocols",
      steps: [
        "Darshan timings: 5AM-9PM",
        "Remove shoes before entering",
        "Photography restricted in inner sanctum"
      ]
    }
  ];

  const handleDrag = (event, info) => {
    const planets = ['earth', 'moon', 'sun', 'jupiter', 'temple'];
    const currentIndex = planets.indexOf(currentPlanet);
    
    if (info.offset.x > 50 && currentIndex < planets.length - 1) {
      setCurrentPlanet(planets[currentIndex + 1]);
    } else if (info.offset.x < -50 && currentIndex > 0) {
      setCurrentPlanet(planets[currentIndex - 1]);
    }
  };

  return (
    <div className="cosmic-container">
      {/* Animated Cosmic Background */}
      <div className="starfield">
        {[...Array(100)].map((_, i) => (
          <motion.div 
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="cosmic-content">
        <motion.div 
          className="cosmic-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <FaOm className="om-icon" />
            Celestial Navigation to <span>Gita Gyo Temple</span>
          </h1>
          <p>Follow the cosmic path to divine wisdom</p>
        </motion.div>

        {/* Interactive Cosmic Path */}
        <div className="cosmic-path-container">
          <motion.div 
            className="cosmic-path"
            ref={constraintsRef}
          >
            <motion.div 
              className="planet-display"
              drag="x"
              dragConstraints={constraintsRef}
              onDrag={handleDrag}
              style={{ x, y, rotateX, rotateY }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlanet}
                  className="planet-card"
                  style={{ backgroundColor: celestialPaths[currentPlanet].color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="planet-icon">
                    {celestialPaths[currentPlanet].icon}
                  </div>
                  <h3>{celestialPaths[currentPlanet].title}</h3>
                  <p>{celestialPaths[currentPlanet].content}</p>
                  <div className="planet-distance">
                    <GiPathDistance /> {celestialPaths[currentPlanet].duration}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="path-progress">
              {Object.keys(celestialPaths).map((planet) => (
                <div 
                  key={planet}
                  className={`path-node ${currentPlanet === planet ? 'active' : ''}`}
                  onClick={() => setCurrentPlanet(planet)}
                >
                  <div className="node-indicator" style={{ 
                    backgroundColor: celestialPaths[planet].color 
                  }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Practical Journey Stages */}
        <div className="journey-stages">
          <h2>
            <FaCalendarAlt className="icon" />
            Your Pilgrimage Phases
          </h2>
          
          <div className="stage-selector">
            {travelInstructions.map((stage) => (
              <button
                key={stage.stage}
                className={journeyStage === stage.stage - 1 ? 'active' : ''}
                onClick={() => setJourneyStage(stage.stage - 1)}
              >
                Stage {stage.stage}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={journeyStage}
              className="stage-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{travelInstructions[journeyStage].title}</h3>
              <ul>
                {travelInstructions[journeyStage].steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cosmic Footer */}
        <motion.div 
          className="cosmic-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            "As the sun illuminates the cosmos, so does the Gita illuminate all wisdom"<br />
            - Bhagavad Gita 13.34
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmicJourney;