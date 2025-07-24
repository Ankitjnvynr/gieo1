// src/App.js
import React from 'react';
import HeroBanner from './HeroBanner';
import InitiativeOverview from './InitiativeOverview';
import HowItWorks from './HowItWorks';
import ImpactGallery from './ImpactGallery';
import DonationForm from './DonationForm';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
// import Footer from './Footer';
    import './main.css';

function App() {
  return (
    <div className="app">
      {/* <header className="header">
        <div className="container">
          <img src="https://donations.iskconbangalore.org/wp-content/uploads/2023/11/iskcon-bangalore-logo.png" alt="ISKCON Bangalore" className="logo" />
          <nav>
            <ul>
              <li><a href="#overview">About</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
      
      <HeroBanner />
      <InitiativeOverview />
      <HowItWorks />
      <ImpactGallery />
      <DonationForm />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      {/* <Footer /> */}
    </div>
  );
}

export default App;


