"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GaushalaPage from "../../components/gaushala/Gaushala";

// Optional: Lazy load Framer Motion page if needed (for performance)
// const GaushalaPage = dynamic(() => import('../../components/gaushala/Gaushala'), { ssr: false });

export default function Gaushala() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <GaushalaPage />
    </motion.div>
  );
}
