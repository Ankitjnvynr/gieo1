'use client'; // Ensure this component is rendered on the client-side

import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Banner data array (you can pass this data via props or import from elsewhere)
const bannerData = [
  {
    id: 1,
    text: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    clientName: 'Cameron Williamson',
    clientTitle: 'Pro Roofing Experts',
    clientImg: '/assets/images/testimonial/testimonial-3-1.jpg'
  },
  {
    id: 2,
    text: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    clientName: 'Robert Son',
    clientTitle: 'Pro Roofing Experts',
    clientImg: '/assets/images/testimonial/testimonial-3-2.jpg'
  },
  {
    id: 3,
    text: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    clientName: 'Adam Smith',
    clientTitle: 'Pro Roofing Experts',
    clientImg: '/assets/images/testimonial/testimonial-3-3.jpg'
  }
];

const defaultCounterData = [
  { value: 40, label: 'Winning award' },
  { value: 100, label: 'Complete project' },
  { value: 800, label: 'Client review' }
];

export default function Banner({ slides = bannerData, counterData = defaultCounterData, imgSrc = "/assets/images/resources/main-slider-two-img-1.jpg" }) {
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      0: { spaceBetween: 0, slidesPerView: 1 },
      375: { spaceBetween: 0, slidesPerView: 1 },
      575: { spaceBetween: 0, slidesPerView: 1 },
      768: { spaceBetween: 30, slidesPerView: 1 },
      992: { spaceBetween: 30, slidesPerView: 1 },
      1200: { spaceBetween: 30, slidesPerView: 1 },
      1320: { spaceBetween: 30, slidesPerView: 1 },
    },
  };

  return (
    <>
      {/* Main Slider Two Start */}
      <section className="main-slider-two" id="home">
        <div className="main-slider-two__social">
          <Link href="#"><span className="icon-facebook-f"></span></Link>
          <Link href="#"><span className="icon-Vector"></span></Link>
          <Link href="#"><span className="icon-instagram"></span></Link>
          <Link href="#"><span className="icon-pinterest"></span></Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <Swiper {...swiperOptions}>
                {slides.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <div className="main-slider-two__content">
                      <h2 className="main-slider-two__title">
                        Invest in Quality <span>Roofing for Peace</span>
                      </h2>
                      <p className="main-slider-two__text">{slide.text}</p>
                      <div className="main-slider-two__btn-and-call-box">
                        <div className="main-slider-two__btn-box">
                          <Link href="/services" className="thm-btn-two main-slider-two__btn">
                            get service <span className="icon-dubble-arrow-right"></span>
                          </Link>
                        </div>
                        <div className="main-slider-two__call">
                          <div className="main-slider-two__call-icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="main-slider-two__call-number">
                            <p>Need help?</p>
                            <h5><Link href="tel:8085550111">(808) 555-0111</Link></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="main-slider-two__img-box wow fadeInLeft" data-wow-delay="300ms">
                <div className="main-slider-two__img">
                  <img src={imgSrc} alt="Main Slider Image" />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4">
              <div className="main-slider-two__counter-box wow fadeInRight" data-wow-delay="600ms">
                <ul className="list-unstyled main-slider-two__counter">
                  {counterData.map((counter, index) => (
                    <li key={index}>
                      <div className="main-slider-two__counter-single">
                        <div className="main-slider-two__count count-box">
                          <h3 className="count-text">
                            <CountUp end={counter.value} duration={1.5} />
                          </h3>
                          <span>+</span>
                        </div>
                        <p className="main-slider-two__count-text">{counter.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Slider Two End */}
    </>
  );
}
