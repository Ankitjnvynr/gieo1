import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from '@/components/naturalConservation/HeroSection'
import Initiatives from "@/components/naturalConservation/Initiatives";
import NatureGallery from "@/components/naturalConservation/natureGallery";
import VedicWisdom from "@/components/naturalConservation/VedicWisdom";



export default function page() {
  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={"Nature Conservation"}>
    
    <HeroSection/>
    <Initiatives/>
    <NatureGallery/>
    {/* <VedicWisdom/> */}
     
    </Layout>
  );
}
