'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Testimonial data
const testimonials = [
  {
    name: 'Cameron Williamson',
    designation: 'Pro Roofing Experts',
    imgSrc: 'assets/images/testimonial/testimonial-1-1.jpg',
    quote: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    rating: 5,
  },
  {
    name: 'Sajid Hasan',
    designation: 'Roofing Masters',
    imgSrc: 'assets/images/testimonial/testimonial-1-2.jpg',
    quote: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    rating: 3,
  },
  {
    name: 'Cameron Williamson',
    designation: 'Pro Roofing Experts',
    imgSrc: 'assets/images/testimonial/testimonial-1-1.jpg',
    quote: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    rating: 5,
  },
  {
    name: 'Sajid Hasan',
    designation: 'Roofing Masters',
    imgSrc: 'assets/images/testimonial/testimonial-1-2.jpg',
    quote: 'Construction is an essential industry that involves building and designing structures such as buildings, roads, bridges, and more. It requires skilled workers, materials, and careful planning to ensure success.',
    rating: 3,
  },
  // Add more testimonials as needed
];

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
      slidesPerView: 2,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
  },
};

export default function TestimonialOne() {
  return (
    <>
      {/* Testimonial One Start */}
      <section className="testimonial-one">
        <div className="testimonial-one__wrap">
          <div className="testimonial-one__shape-1">
            <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Clients testimonial</span>
              </div>
              <h2 className="section-title__title">Sheltering You with <span>Strength</span></h2>
            </div>

            {/* Swiper Slider */}
            <Swiper {...swiperOptions}>
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                      <span className="icon-quote"></span>
                    </div>
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img src={testimonial.imgSrc} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-one__client-content">
                        <h3>
                          <Link href="/testimonials">{testimonial.name}</Link>
                        </h3>
                        <p>{testimonial.designation}</p>
                      </div>
                    </div>
                    <p className="testimonial-one__text">
                      {testimonial.quote}
                    </p>
                    <div className="testimonial-one__ratting">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="icon-star"></span>
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                        <span key={i} className="icon-star last-icon"></span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Testimonial One End */}
    </>
  );
}
