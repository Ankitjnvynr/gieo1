// pages/index.js
import React from 'react';
import Layout from "@/components/layout/Layout";
import Testimonial from '@/components/Testimonial/Testimonial';
import CTASectionTwo from '@/components/common/CTASectionTwo';

const testimonials = [
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-1.jpg',
    name: 'Arjun Mehta',
    title: 'Spiritual Seeker',
    text: 'Listening to the wisdom of Bhagavad Gita through Swami Gyananand Ji has transformed my life. It has given me clarity, peace of mind, and a deeper purpose.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-2.jpg',
    name: 'Sajid Hasan',
    title: 'Devotee',
    text: 'GIEO Gita has helped me overcome challenges by applying the timeless teachings of Krishna. It feels like a guiding light in today’s world.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-3.jpg',
    name: 'Ananya Sharma',
    title: 'Student',
    text: 'The sessions of GIEO Gita inspired me to focus on self-discipline, positivity, and balance in life. Truly a life-changing experience.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-4.jpg',
    name: 'Rohan Verma',
    title: 'Entrepreneur',
    text: 'Applying Gita’s principles in my professional and personal life has helped me stay calm, make better decisions, and lead with compassion.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-5.jpg',
    name: 'Meera Kapoor',
    title: 'Meditation Practitioner',
    text: 'Through GIEO Gita, I discovered the joy of mindfulness and devotion. It has brought inner peace and harmony into my daily routine.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-6.jpg',
    name: 'Vikram Singh',
    title: 'Youth Volunteer',
    text: 'Being part of GIEO Gita events has given me the opportunity to serve and grow spiritually. It’s a community that uplifts and inspires.',
    rating: 5,
    link: '/testimonials',
  },
  // More testimonials can be added here...
];


export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Testimonials">
        <div>
          {/*Testimonial Page Start*/}
          <section className="testimonial-page">
            <div className="container">
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>
          {/*Testimonial Page End*/}

         
        </div>
      </Layout>
    </>
  );
}
