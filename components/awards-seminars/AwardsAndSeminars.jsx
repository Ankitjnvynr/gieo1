import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import AwardsSection from './AwardsSection/AwardsSection';
import SeminarSection from './SeminarSection/SeminarSection';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import CallToAction from './CallToAction/CallToAction';
import styles from './AwardsAndSeminars.module.css';

const AwardsAndSeminars = () => {
  return (
    <div className={styles.awardsSeminarsPage}>
      <HeroSection />
      <AwardsSection />
      <SeminarSection />
      {/* <UpcomingEvents />  */}
      <CallToAction />
    </div>
  );
};

export default AwardsAndSeminars;