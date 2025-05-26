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
    imgSrc: 'assets/images/services/services-4-1.jpg',
    iconClass: 'icon-paint',
    title: 'Reliable Roofing Pros',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'reliable-roof-repair'
  },
  {
    imgSrc: 'assets/images/services/services-4-2.jpg',
    iconClass: 'icon-crane',
    title: 'Roof service involves',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'sure-guard-roofing-services'
  },
  {
    imgSrc: 'assets/images/services/services-4-3.jpg',
    iconClass: 'icon-crane-3',
    title: 'roofs for the residential',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'skyline-roofing-solutions'
  },
  {
    imgSrc: 'assets/images/services/services-4-1.jpg',
    iconClass: 'icon-paint',
    title: 'Reliable Roofing Pros',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'reliable-roof-repair'
  },
  {
    imgSrc: 'assets/images/services/services-4-2.jpg',
    iconClass: 'icon-crane',
    title: 'Roof service involves',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'skyline-roofing-solutions'
  },
  {
    imgSrc: 'assets/images/services/services-4-3.jpg',
    iconClass: 'icon-crane-3',
    title: 'roofs for the residential',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'top-notch-roofing-restoration'
  },
  {
    imgSrc: 'assets/images/services/services-4-1.jpg',
    iconClass: 'icon-paint',
    title: 'Reliable Roofing Pros',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'reliable-roof-repair'
  },
  {
    imgSrc: 'assets/images/services/services-4-2.jpg',
    iconClass: 'icon-crane',
    title: 'Roof service involves',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'skyline-roofing-solutions'
  },
  {
    imgSrc: 'assets/images/services/services-4-3.jpg',
    iconClass: 'icon-crane-3',
    title: 'roofs for the residential',
    description: 'Roof service involves maintenance and repair of residential',
    link: 'reliable-roof-repair'
  }
];

export default function ServicesFour() {
  return (
    <section className="services-four" id="services">
      <div className="services-four__wrap">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">latest service</span>
            </div>
            <h2 className="section-title__title">Quality roofing <span>solutions</span><br /> every time</h2>
          </div>
          <Swiper {...swiperOptions}>
            {services.map((service, index) => (
              <SwiperSlide key={index} className="item">
                <div className="services-four__single">
                  <div className="services-four__img-box">
                    <div className="services-four__img">
                      <img src={service.imgSrc} alt={service.title} />
                    </div>
                  </div>
                  <div className="services-four__content">
                    <div className="services-four__icon">
                      <span className={service.iconClass}></span>
                    </div>
                    <h4 className="services-four__title">
                      <Link href={`/${service.link}`}>{service.title}</Link>
                    </h4>
                    <p className="services-four__text">{service.description}</p>
                    <div className="services-four__btn-box">
                      <Link href={`/${service.link}`} className="services-four__btn thm-btn">
                        Read more<span className="icon-dubble-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation buttons */}
          {/* Pagination bullets */}
          
        </div>
      </div>
    </section>
  );
}
