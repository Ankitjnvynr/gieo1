'use client';
import Layout from '@/components/layout/Layout';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/geetash/HeroSection';
import AboutSection from '@/components/geetash/AboutSection';
import ShlokaCard from '@/components/geetash/ShlokaCard';
import shlokas from '../../../components/geetash/Shlokas.json';
import '@/components/geetash/page3.css';

const Page = () => {
  const [language, setLanguage] = useState('hindi');

  return (
    <Layout headerStyle={3} footerStyle={3}>
    <main>
      <HeroSection />
      <AboutSection />
      <motion.div 
        className="language-toggle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
      
        <motion.button
          onClick={() => setLanguage('hindi')}
          className={language === 'hindi' ? 'active' : ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          हिंदी (Hindi)
        </motion.button>
        <motion.button
          onClick={() => setLanguage('english')}
          className={language === 'english' ? 'active' : ''}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          English
        </motion.button>
      </motion.div>

      {/* Shlokas Section */}
      <section className="shloka-list" id="shlokas">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🕉️ Explore 18 Divine Shlokas
        </motion.h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {shlokas.map((shloka) => (
            <ShlokaCard 
              key={shloka.id} 
              shloka={shloka} 
              language={language} 
            />
          ))}
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default Page;