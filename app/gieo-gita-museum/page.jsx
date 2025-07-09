"use client";
import {motion} from 'framer-motion';
import HeroSection from '@/components/museum/HeroSection';
import Welcome from '@/components/museum/Welcome';
import About from '@/components/museum/About';
import ExperienceSection from '@/components/museum/ExperienceSection';
import Ticket from '@/components/museum/Ticket';
import Gallery from '@/components/museum/Gallery';
import ContactLocationSection from '@/components/museum/ContactLocationSection';
import Layout from "@/components/layout/Layout";


import '@/components/museum/page.css';
export default function MuseumPage() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <main>
          <HeroSection />
          <Welcome />
          <About />
          <ExperienceSection />
          <Ticket />
          <Gallery />
          <ContactLocationSection />
        </main>
      </motion.div>
    </Layout>
  );
}