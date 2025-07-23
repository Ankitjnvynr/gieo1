"use client";
import Layout from '@/components/layout/Layout';    
import React from 'react';
import Image from 'next/image';
import HeroSection from '@/components/naturalConservation/HeroSection';
import VedicWisdom from '@/components/naturalConservation/VedicWisdom';
import Initiatives from '@/components/naturalConservation/Initiatives';
import NatureGallery from '@/components/naturalConservation/natureGallery';
import '@/components/naturalConservation/page4.css';


const GioGitaHero = () => {
  return (
    <Layout headerStyle={3} footerStyle={4}>
        <HeroSection />
        <VedicWisdom />
        <Initiatives />
        <NatureGallery />
    </Layout>
  )
};
export default GioGitaHero;