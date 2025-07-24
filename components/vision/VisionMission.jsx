import React from 'react';
import HeroSection from './HeroSection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';
// import CoreValues from './CoreValues';
// import CallToAction from './CallToAction';
import FAQSection from './FAQSection';
import './VisionMission.css';

const VisionMissionPage = () => {
  return (
    <div className="vision-mission-container">
      <HeroSection /> 
      <VisionSection />
      <MissionSection />
      {/* <CoreValues />
      <CallToAction /> */}
      <FAQSection />
    </div>
  );
};

export default VisionMissionPage;
