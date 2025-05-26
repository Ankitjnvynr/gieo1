'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// data/projects.js
export const projectImages = [
    '/assets/images/project/project-2-1.jpg',
    '/assets/images/project/project-2-2.jpg',
    '/assets/images/project/project-2-3.jpg',
    '/assets/images/project/project-2-4.jpg',
    '/assets/images/project/project-2-1.jpg',
    '/assets/images/project/project-2-2.jpg',
    '/assets/images/project/project-2-3.jpg',
    '/assets/images/project/project-2-4.jpg',
  ];
  

// Swiper options
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
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
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
};

export default function ProjectTwo() {
  return (
    <>
      {/* Project Two Start */}
      <section className="project-two" id="projects">
        <div className="container">
          {/* Swiper Slider */}
          <Swiper {...swiperOptions}>
            {projectImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="project-two__single">
                  <div className="project-two__img">
                    <img src={src} alt={`Project ${index + 1}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Project Two End */}
    </>
  );
}
