'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
// data/testimonials.js
export const testimonials = [
  {
    imgSrc: '/assets/images/testimonial/testimonial-2-1.png',
    name: 'James Anderson',
    company: 'Roof Masters',
    text: 'Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle.',
  },
  {
    imgSrc: '/assets/images/testimonial/testimonial-2-2.png',
    name: 'Robert Son',
    company: 'Roof Masters',
    text: 'Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle.',
  },
  {
    imgSrc: '/assets/images/testimonial/testimonial-2-3.png',
    name: 'Adam Smith',
    company: 'Roof Masters',
    text: 'Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle.',
  },
];


// Swiper options
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-dot-style1',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
  },
};

export default function TestimonialTwo() {
  return (
    <>
      {/* Testimonial Two Start */}
      <section className="testimonial-two">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Clients testimonial</span>
            </div>
            <h2 className="section-title__title">
              Reach for the
              <span>
                Roof<br />
                Service
              </span>
              Experience
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-two__left">
                <Swiper {...swiperOptions}>
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-two__single">
                        <div className="testimonial-two__quote">
                          <span className="icon-quote"></span>
                        </div>
                        <div className="testimonial-two__client-info">
                          <div className="testimonial-two__client-img">
                            <img src={testimonial.imgSrc} alt={testimonial.name} />
                          </div>
                          <div className="testimonial-two__client-content">
                            <h3><Link href="/testimonials">{testimonial.name}</Link></h3>
                            <p>{testimonial.company}</p>
                          </div>
                        </div>
                        <p className="testimonial-two__text">
                          {testimonial.text}
                        </p>
                        <div className="testimonial-two__ratting">
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star"></span>
                          <span className="icon-star last-icon"></span>
                          <span className="icon-star last-icon"></span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial-two__right">
                <div className="testimonial-two__img">
                  <img
                    src="assets/images/testimonial/testimonial-two-img-1.jpg"
                    alt="Testimonial Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Two End */}
    </>
  );
}
