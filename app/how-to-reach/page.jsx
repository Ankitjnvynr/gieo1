"use client";
import Layout from '@/components/layout/Layout';  
import HeroSection from '@/components/how-to-reach/heroSection';
import AboutSection from '@/components/how-to-reach/aboutSection';
import TransportModes from '@/components/how-to-reach/TransportModes';
import MapEmbed from '@/components/how-to-reach/maps';
import TravelTips from '@/components/how-to-reach/TravelTips';
import '@/components/how-to-reach/page1.css';

export default function HowToReach() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={4}>
      <HeroSection />
      <AboutSection />
      <TransportModes />
      <MapEmbed />
      <TravelTips />
      </Layout>
    </>
  );
}
