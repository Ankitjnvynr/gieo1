import React from 'react';
import BlogPage from '@/components/Blog/BlogPage';
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout"

export const blogData = [
  {
    imgSrc: 'assets/images/blog/blog-1-1.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '10 October 2025',
    title: 'Understanding the Essence of Bhagavad Gita in Daily Life',
    link: '/blog-details/essence-of-gita',
    animationDirection: 'Left',
    delay: 100,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-2.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '15 October 2025',
    title: 'Meditation and Mindfulness: Insights from the Gita',
    link: '/blog-details/meditation-mindfulness-gita',
    animationDirection: 'Up',
    delay: 200,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-3.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '20 October 2025',
    title: 'Karma Yoga: Transforming Actions into Spiritual Practice',
    link: '/blog-details/karma-yoga',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-4.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '25 October 2025',
    title: 'Leadership Lessons from Bhagavad Gita for Modern Life',
    link: '/blog-details/leadership-lessons-gita',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-5.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '30 October 2025',
    title: 'The Power of Self-Discipline as Taught in Gita',
    link: '/blog-details/self-discipline-gita',
    animationDirection: 'Right',
    delay: 300,
  },
  {
    imgSrc: 'assets/images/blog/blog-1-6.jpg',
    author: 'Swami Gyananand Ji Maharaj',
    date: '05 November 2025',
    title: 'Spiritual Wisdom to Overcome Daily Challenges',
    link: '/blog-details/spiritual-wisdom-daily-life',
    animationDirection: 'Right',
    delay: 300,
  },
];


export default function Home() {
  return (
    <div>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Blogs & News">
        <>
        <BlogPage blogs={blogData} />
       
        </>
      </Layout>
    </div>
  );
}
