import React from 'react';
import BlogPage from '@/components/Blog/BlogPage';
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout"

const blogData = [
  {
    imgSrc: 'assets/images/blog/blog-1-1.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Trust the experts for all your roof service needs',
    link: '/blog-details',
    animationDirection: 'Left',
    delay: 100,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-2.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Enhance the functionality of your roof with our service',
    link: '/blog-details',
    animationDirection: 'Up',
    delay: 200,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-3.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Functionality of your roof with our service',
    link: '/blog-details',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-4.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Enhance the beau functionality of your our service',
    link: '/blog-details',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-5.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Functionality of your roof with our service',
    link: '/blog-details',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-6.jpg',
    author: 'admin',
    date: '23 December 2023',
    title: 'Trust the experts for all your roof service needs',
    link: '/blog-details',
    animationDirection: 'Right',
    delay: 300,
  },
  // Add more blog objects as needed...
];

export default function Home() {
  return (
    <div>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog">
        <>
        <BlogPage blogs={blogData} />
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
        </>
      </Layout>
    </div>
  );
}
