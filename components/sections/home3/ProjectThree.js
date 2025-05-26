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
      <section className="project-three">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">latest gallery</span>
            </div>
            <h2 className="section-title__title">
              Quality roofing <span>solutions</span><br /> every time
            </h2>
          </div>
          <Swiper {...swiperOptions}>
            {[
              {
                imgSrc: '/assets/images/project/project-3-1.jpg',
                subTitle: 'Roof Renewal',
                title: 'Expert Roof Layers',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-2.jpg',
                subTitle: 'Roof Renewal',
                title: 'Expert roof expectations',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-3.jpg',
                subTitle: 'Roof Renewal',
                title: 'Expert Roof Installation',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-4.jpg',
                subTitle: 'Expert Roof Layers',
                title: 'Expert Roof Renovation',
                link: '/project-details',
              },
              {
                imgSrc: '/assets/images/project/project-3-1.jpg',
                subTitle: 'Roof Renewal',
                title: 'Expert Roof Layers',
                link: '/project-details',
              },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-three__single">
                  <div className="project-three__img-box">
                    <div className="project-three__img">
                      <img src={project.imgSrc} alt="" />
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
