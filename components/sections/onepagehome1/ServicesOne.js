'use client';
import Link from 'next/link';
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
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
};

// Sample service data
const services = [
  {
    imgName: 'services-1-1.jpg',
    title: 'Reliable Roofing Pros',
    link: '/reliable-roof-repair',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'services-1-2.jpg',
    title: 'Superior Roofing Services',
    link: '/sure-guard-roofing-services',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'services-1-3.jpg',
    title: 'Roof Service Involves',
    link: '/peak-performance-roofing',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'services-1-4.jpg',
    title: 'Skyline Roofing',
    link: '/skyline-roofing-solutions',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'services-1-5.jpg',
    title: 'Roofing Solutions',
    link: '/skyline-roofing-solutions',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
];

export default function ServicesOne() {
  return (
    <section className="services-one" id="services">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">latest service</span>
          </div>
          <h2 className="section-title__title">
            Quality roofing <span>solutions</span> <br /> every time
          </h2>
        </div>
        <div className="services-one__carousel">
          <Swiper {...swiperOptions}>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src={`/assets/images/services/${service.imgName}`}
                        alt={service.title}
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-paint"></span>
                    </div>
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h3>
                    <p className="services-one__text">{service.description}</p>
                    <div className="services-one__btn-box">
                      <Link href={service.link} className="services-one__btn thm-btn">
                        Read more
                        <span className="icon-dubble-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons */}
        
        {/* Pagination */}
        
      </div>
    </section>
  );
}
