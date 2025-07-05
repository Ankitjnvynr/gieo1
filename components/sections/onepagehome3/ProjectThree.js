'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      spaceBetween: 0,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 4,
    },
    1320: {
      spaceBetween: 0,
      slidesPerView: 4,
    },
  },
};

export default function ProjectThree() {
  return (
    <>
      {/* Project Three Start */}
      <section className="project-three" id="projects">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">latest gallery</span>
            </div>
            <h2 className="section-title__title">
              Medanta Foundation <span>initiatives</span><br /> in the community
            </h2>
          </div>
          <Swiper {...swiperOptions}>
            {[
              {
                imgSrc: '/assets/images/project/project-3-1.jpg',
                subTitle: 'Inauguration',
                title: 'Launch of Medanta OPD Centre – 05/09/2024',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-2.jpg',
                subTitle: 'Consultations',
                title: 'Cardiac, General & Dental Check-ups',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-3.jpg',
                subTitle: 'Diagnostics',
                title: 'ECG, ECHO, TMT, PFT & X-Ray Services',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-4.jpg',
                subTitle: 'Virtual Care',
                title: 'Telemedicine for Rural & Elderly',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-1.jpg',
                subTitle: 'Community Impact',
                title: 'Every Life is Precious – CSR Commitment',
                link: '/project-details',
              },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-three__single">
                  <div className="project-three__img-box">
                    <div className="project-three__img">
                      <img src={project.imgSrc} alt={project.title} />
                    </div>
                  </div>
                  <div className="project-three__content">
                    <p className="project-three__sub-title">{project.subTitle}</p>
                    <h4 className="project-three__title">
                      <a href={project.link}>{project.title}</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Project Three End */}
    </>
  );
}
