"use client";
import Layout from "../../components/layout/Layout";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GaushalaPage from "../../components/gaushala/gaushala";

// Optional: Lazy load Framer Motion page if needed (for performance)
// const GaushalaPage = dynamic(() => import('../../components/gaushala/Gaushala'), { ssr: false });

export default function Gaushala() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <GaushalaPage />
    </motion.div>
    </Layout>
  );
}
