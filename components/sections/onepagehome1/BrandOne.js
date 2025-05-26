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
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
  },
};

// Dynamic data array
const brandData = [
  { src: '/assets/images/brand/brand-1-1.png', alt: 'Brand 1' },
  { src: '/assets/images/brand/brand-1-2.png', alt: 'Brand 2' },
  { src: '/assets/images/brand/brand-1-3.png', alt: 'Brand 3' },
  { src: '/assets/images/brand/brand-1-4.png', alt: 'Brand 4' },
  { src: '/assets/images/brand/brand-1-5.png', alt: 'Brand 5' },
  { src: '/assets/images/brand/brand-1-1.png', alt: 'Brand 6' },
  { src: '/assets/images/brand/brand-1-2.png', alt: 'Brand 7' },
  { src: '/assets/images/brand/brand-1-3.png', alt: 'Brand 8' },
  { src: '/assets/images/brand/brand-1-4.png', alt: 'Brand 9' },
  { src: '/assets/images/brand/brand-1-5.png', alt: 'Brand 10' },
];

export default function BrandOne() {
  return (
    <>
      {/* Brand One Start */}
      <section className="brand-one">
        <div className="container">
          {/* Swiper Slider */}
          <Swiper {...swiperOptions}>
            {brandData.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src={brand.src} alt={brand.alt} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Brand One End */}
    </>
  );
}
