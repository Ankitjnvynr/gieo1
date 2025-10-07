'use client';
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
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  },
};
export default function SlidingText() {
  

  return (
    <>
      {/* Sliding Text One Start */}
      <section className="sliding-text-one">
      <div className="container">
          {/* Swiper Slider */}
          <Swiper {...swiperOptions}>
            {/* Brand One Single */}
            <SwiperSlide>
            <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2 data-hover="GIEO" className="sliding-text__title">
                GIEO
              </h2>
            </li>
          </ul>
            </SwiperSlide>
            {/* Brand One Single */}
            <SwiperSlide>
            <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2 data-hover="Gita" className="sliding-text__title">
                Gita
              </h2>
            </li>
          </ul>
            </SwiperSlide>
            {/* Brand One Single */}
            <SwiperSlide>
            <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2 data-hover="GIEO" className="sliding-text__title">
                GIEO
              </h2>
            </li>
          </ul>
            </SwiperSlide>
            {/* Brand One Single */}
            <SwiperSlide>
            <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2 data-hover="Gita" className="sliding-text__title">
               Gita
              </h2>
            </li>
          </ul>
            </SwiperSlide>
            {/* Brand One Single */}
            <SwiperSlide>
            <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2 data-hover="Gita" className="sliding-text__title">
                Gita
              </h2>
            </li>
          </ul>
            </SwiperSlide>
            
          </Swiper>
          {/* If we need navigation buttons */}
        </div>
      </section>
      {/* Sliding Text One End */}
    </>
  );
}
