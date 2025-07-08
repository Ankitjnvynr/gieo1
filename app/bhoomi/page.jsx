'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import LibraryPage from '../../components/library/LibraryPage';
import './page12.css';

function Page12() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <div className="page12">
      <LibraryPage />
    </div>
    </Layout>
  );
}

export default Page12;
