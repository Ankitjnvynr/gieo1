// pages/index.js
import React from 'react';
import Layout from "@/components/layout/Layout";
import Testimonial from '@/components/Testimonial/Testimonial';
import CTASectionTwo from '@/components/common/CTASectionTwo';

const testimonials = [
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-1.jpg',
    name: 'Cameron Williamson',
    title: 'Pro Roofing Experts',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-2.jpg',
    name: 'Sajid Hasan',
    title: 'Roofing Masters',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-3.jpg',
    name: 'Adam Smith',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-4.jpg',
    name: 'Robert Son',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-5.jpg',
    name: 'Adam Milne',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-6.jpg',
    name: 'Robert Illingworth',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  // Add more testimonials as needed...
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Testimonials">
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

          {/*CTA Two Start*/}
            <CTASectionTwo
                backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                imgSrc="assets/images/resources/cta-two-img-1.png"
                title="One Shingle at a Time"
                text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                buttonText="Contact Us"
                buttonLink="/contact"
            />
          {/*CTA Two End*/}
        </div>
      </Layout>
    </>
  );
}
