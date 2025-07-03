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
    0: { slidesPerView: 1 },
    375: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
    1320: { slidesPerView: 3 },
  },
};

// ✅ Medanta OPD Services with Original Image Paths
const services = [
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-stethoscope',
    title: 'Cardiac Consultation',
    description: 'Heart health evaluation, risk assessment, and lifestyle guidance by expert cardiologists.',
    link: 'cardiac-consultation',
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-doctor',
    title: 'General Medical Consultation',
    description: 'Comprehensive health check-ups and treatment plans by experienced physicians.',
    link: 'general-consultation',
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-tooth',
    title: 'Dental Consultation',
    description: 'Oral exams, scaling, and upcoming services like fillings, RCT, and extractions.',
    link: 'dental-consultation',
  },
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-diagnosis',
    title: 'Diagnostic Services',
    description: 'Digital X-ray, ECG, ECHO, TMT, and PFT available for accurate diagnosis.',
    link: 'diagnostic-services',
  },
  {
    imgSrc: '/assets/images/services/services-4-2.jpg',
    iconClass: 'icon-lungs',
    title: 'Pulmonary Function Test (PFT)',
    description: 'Essential test for assessing lung capacity and diagnosing asthma and COPD.',
    link: 'pulmonary-function',
  },
  {
    imgSrc: '/assets/images/services/services-4-3.jpg',
    iconClass: 'icon-telemedicine',
    title: 'Telemedicine Consultation',
    description: 'Online consultation services for remote, elderly, and immobile patients.',
    link: 'telemedicine',
  },
  {
    imgSrc: '/assets/images/services/services-4-1.jpg',
    iconClass: 'icon-ultrasound',
    title: 'Ultrasound (Coming Soon)',
    description: 'Future service for soft tissue, abdominal, and pelvic imaging.',
    link: 'ultrasound',
  },
];

export default function ServicesFour() {
  return (
    <section className="services-four" id="services">
      <div className="services-four__wrap">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Healthcare Offerings</span>
            </div>
            <h2 className="section-title__title">
              Compassionate <span>Medical Care</span><br /> for Every Individual
            </h2>
          </div>
          <Swiper {...swiperOptions}>
            {services.map((service, index) => (
              <SwiperSlide key={index} className="item">
                <div className="services-four__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="services-four__img-box">
                    <div className="services-four__img">
                      <img src={service.imgSrc} alt={service.title} />
                    </div>
                  </div>
                  <div
                    className="services-four__content"
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '220px',
                      paddingTop: '20px',
                    }}
                  >
                    <h4 className="services-four__title">
                      <Link href={`/${service.link}`}>{service.title}</Link>
                    </h4>
                    <p className="services-four__text">{service.description}</p>
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
