'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import App from '../../components/annapurna/main';
// import './app.css';

function app() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <div className="app">
      <App />
    </div>
    </Layout>
  );
}

export default app;
