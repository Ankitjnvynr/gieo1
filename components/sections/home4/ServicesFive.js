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
    el: '.swiper-pagination',
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
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-child',
    title: 'Bal Sanskar',
    description: 'Instilling spiritual values in children through Vedic teachings and cultural education.',
    link: 'bal-sanskar'
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-group',
    title: 'Join GIEO Gita',
    description: 'Be a part of our mission to spread the wisdom of the Bhagavad Gita across the globe.',
    link: 'join-gieo-gita'
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-cow',
    title: 'GIEO Gaushala',
    description: 'Promoting cow protection and seva for preserving indigenous cow breeds.',
    link: 'gieo-gaushala'
  },
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-book',
    title: 'GIEO Gurukul',
    description: 'Blending ancient Gurukul values with modern learning for holistic education.',
    link: 'gieo-gurukul'
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-lotus',
    title: 'Dhyanam',
    description: 'Experience peace through meditation and mindful practices guided by scriptures.',
    link: 'gieo-dhyanam'
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-food',
    title: 'Annapurna Seva',
    description: 'Serving healthy meals as an offering of love and compassion to the needy.',
    link: 'annapurna-seva'
  }
];

export default function ServicesFive() {
return (
  <section className="services-five">
    <div className="container">
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Our Initiatives</span>
        </div>
        <h2 className="section-title__title">
          Serving with <span>Spiritual Purpose</span><br /> and Social Responsibility
        </h2>
      </div>
      <Swiper {...swiperOptions} className="services-five__carousel">
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="services-five__single">
              <div className="services-five__img-box">
                <div className="services-five__img">
                  <img src={service.imgSrc} alt={service.title} />
                </div>
                <div className="services-five__icon">
                  <span className={service.iconClass}></span>
                </div>
              </div>
              <div className="services-five__content">
                <h3 className="services-five__title">
                  <Link href={`/${service.link}`}>{service.title}</Link>
                </h3>
                <p className="services-five__description">{service.description}</p>
                <div className="services-five__btn-box">
                  <Link href={`/${service.link}`} className="services-five__btn thm-btn">
                    Read more<span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

}
