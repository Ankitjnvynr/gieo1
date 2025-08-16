// File: app/page.jsx

'use client';

import { motion } from 'framer-motion';
import Layout from "../../components/layout/Layout";
import Mainpage from '../../components/news-media/Mainpage';

export default function Page() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    ><Mainpage />
    </motion.div>
    </Layout>
  );
}
