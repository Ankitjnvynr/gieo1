// File: components/News&Media/MainPage.jsx

'use client';

import { motion } from 'framer-motion';
import HeroSection from "./herosection/herosection";
import TopButtons from "./topbuttons/topbuttons";
import OnlineMedia from "./onlinemedia/onlinemedia";
import PrintMedia from "./printmedia/printmedia";
import PressRelease from "./pressrelease/pressrelease";

export default function Mainpage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <HeroSection />
      <TopButtons />
      <PrintMedia />
      <OnlineMedia />
      
      <PressRelease />
      
    </motion.div>
  );
}
