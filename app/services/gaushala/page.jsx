"use client";
import Layout from "../../../components/layout/Layout";
import { motion } from "framer-motion";
import GaushalaPage from "../../../components/gaushala/gaushala";

export default function Gaushala() {
  return (
    <Layout headerStyle={3} footerStyle={3}>
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
