import React from 'react'
import Layout from "@/components/layout/Layout"
import AboutSection from '@/components/howtoreach/AboutSection'
import TransportModes from '@/components/howtoreach/TransportModes'
import Maps from '@/components/howtoreach/Maps'
import TravelTips from '@/components/howtoreach/TravelTips'
import '@/components/howtoreach/page1.css'
import HeroSection from '@/components/howtoreach/HeroSection'

const page = () => {
  return (
    <>
    <Layout headerStyle={3} footerStyle={4}>
         <HeroSection/>
         <AboutSection />
         <TransportModes />
         <Maps/> 
         <TravelTips /> 
    </Layout>
    </>
  )
}

export default page
