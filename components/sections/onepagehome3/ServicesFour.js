'use client';

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// ✅ Medanta-themed services
const services = [
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-heartbeat',
    title: 'Free Health Checkups',
    description: 'Providing free medical screenings and diagnostics to underserved communities.',
    link: 'free-health-checkups',
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-hospital',
    title: 'Mobile Medical Vans',
    description: 'Bringing essential healthcare to rural and remote areas through mobile clinics.',
    link: 'mobile-medical-vans',
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-awareness',
    title: 'Health Awareness Programs',
    description: 'Conducting education drives on hygiene, nutrition, and preventive healthcare.',
    link: 'health-awareness',
  },
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-family',
    title: 'Women & Child Care',
    description: 'Focused programs for maternal health, vaccinations, and nutrition for children.',
    link: 'women-child-care',
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-stethoscope',
    title: 'Specialist Consultations',
    description: 'Access to expert doctors from Medanta across multiple specialties.',
    link: 'specialist-consultations',
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-spiritual',
    title: 'Spiritual Wellness Camps',
    description: 'In collaboration with Gieo Gita and RJ to promote inner peace and healing.',
    link: 'spiritual-wellness',
  },
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-medical-kit',
    title: 'Free Medicine Distribution',
    description: 'Supplying essential medicines to economically weaker sections.',
    link: 'medicine-distribution',
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-support',
    title: 'Patient Support Services',
    description: 'Guidance and financial aid support for critical treatments.',
    link: 'patient-support',
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-mental-health',
    title: 'Mental Health Counseling',
    description: 'Emotional and psychological support by trained counselors.',
    link: 'mental-health',
  },
];

export default function ServicesFour() {
  return (
    <section className="services-four" id="services">
      <div className="services-four__wrap">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Initiatives</span>
            </div>
            <h2 className="section-title__title">
              Serving with <span>Compassion</span><br /> and Care
            </h2>
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
                    {/* <div className="services-four__icon">
                      <span className={service.iconClass}></span>
                    </div> */}
                    <h4 className="services-four__title">
                      <Link href={`/${service.link}`}>{service.title}</Link>
                    </h4>
                    <p className="services-four__text">{service.description}</p>
                    <div className="services-four__btn-box">
                      {/* <Link href={`/${service.link}`} className="services-four__btn thm-btn">
                        Read more<span className="icon-dubble-arrow-right"></span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
