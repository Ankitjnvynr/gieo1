// app/vision-mission/page.jsx
'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import VisionMissionPage from '@/components/vision/VisionMission';

const VisionMission = () => {
  return (
    <Layout headerStyle={3} footerStyle={3}>
    <main className="vision-mission-app-wrapper">
      <VisionMissionPage />
    </main>
    </Layout>
 
  );
};

export default VisionMission;

