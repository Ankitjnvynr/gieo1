'use client'
import React from 'react';
import ServicesPage from '../../../components/ServicesPage/ServicesPage'
import Layout from "@/components/layout/Layout"
import CTASection from '../../../components/common/CTASection';
const servicesData = [
    {
      imgSrc: 'assets/images/services/services-1-1.jpg',
      iconClass: 'icon-paint',
      title: 'Reliable Roofing Pros',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'reliable-roof-repair',
    },
    {
      imgSrc: 'assets/images/services/services-1-2.jpg',
      iconClass: 'icon-paint',
      title: 'Superior Roofing Services',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'sure-guard-roofing-services',
    },
    {
      imgSrc: 'assets/images/services/services-1-3.jpg',
      iconClass: 'icon-paint',
      title: 'Roof Service Involves',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'peak-performance-roofing',
    },
    {
      imgSrc: 'assets/images/services/services-1-4.jpg',
      iconClass: 'icon-setting',
      title: 'Skyline Roofing',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'skyline-roofing-solutions',
    },
    {
      imgSrc: 'assets/images/services/services-1-5.jpg',
      iconClass: 'icon-box-2',
      title: 'Roofing Solutions',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'top-notch-roofing-restoration',
    },
    {
      imgSrc: 'assets/images/services/services-1-6.jpg',
      iconClass: 'icon-stairs',
      title: 'Peak Performance',
      description: 'Roof service involves the maintenance and repair of residential roofs.',
      link: 'peak-performance-roofing',
    },
  ];
  
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
            <div>
                {/*Services Page Start*/}
                <ServicesPage services={servicesData} />
                {/*Services Page End*/}
                {/* Other components and sections */}
                <CTASection
                    backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                    imgSrc="assets/images/resources/cta-two-img-1.png"
                    title="One Shingle at a Time"
                    text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                    />
                {/* Other components and sections */}
            </div>
            </Layout>
        </>
    )
}