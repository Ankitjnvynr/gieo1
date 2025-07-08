'use client'; // Ensure this component is rendered on the client-side
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// Testimonials specific to Medanta
export const testimonials = [
  {
    id: 1,
    text: 'Medanta Foundation has been a lifeline for my family. The medical camp they organized in our village offered free checkups and vital medicines we couldn’t otherwise afford.',
    clientName: 'Suman Devi',
    clientTitle: 'Beneficiary - Gieo Gita Health Camp',
    clientImg: '/assets/images/testimonial/testimonial-3-1.jpg'
  },
  {
    id: 2,
    text: 'I collaborated with Medanta for a blood donation drive. Their team was incredibly professional, and the impact we created together saved lives. Highly commendable initiative.',
    clientName: 'Dr. Rajeev Mehta',
    clientTitle: 'Medical Volunteer',
    clientImg: '/assets/images/testimonial/testimonial-3-2.jpg'
  },
  {
    id: 3,
    text: 'Thanks to Medanta Foundation, we now have regular awareness sessions in Kurukshetra. They’re truly bringing change by reaching the underserved with compassion.',
    clientName: 'Anjali Sharma',
    clientTitle: 'Community Organizer',
    clientImg: '/assets/images/testimonial/testimonial-3-3.jpg'
  }
];

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
      spaceBetween: 30,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
  },
};

export default function TestimonialThree() {
  return (
    <>
      {/* Testimonial Three Start */}
      <section className="testimonial-three" id="testimonial">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">What people say</span>
            </div>
            <h2 className="section-title__title">
              Stories of <span>Hope & Healing</span> with Medanta
            </h2>
          </div>
          <div className="row">
            {/* Left Image */}
            <div className="col-xl-7 col-lg-6">
              <div className="testimonial-three__left">
                <div className="testimonial-three__img">
                  <img src="/assets/images/testimonial/testimonial-three-img-1.jpg" alt="Testimonial Visual" />
                </div>
              </div>
            </div>

            {/* Right Swiper Slider */}
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-three__right">
                <Swiper {...swiperOptions}>
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-three__single">
                        <div className="testimonial-three__quote-and-ratting">
                          <div className="testimonial-three__quote">
                            <span className="icon-quote"></span>
                          </div>
                          <div className="testimonial-three__ratting">
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star last-icon"></span>
                            <span className="icon-star last-icon"></span>
                          </div>
                        </div>
                        <p className="testimonial-three__text">{testimonial.text}</p>
                        <div className="testimonial-three__client-info">
                          <div className="testimonial-three__client-img">
                            <img src={testimonial.clientImg} alt={testimonial.clientName} />
                          </div>
                          <div className="testimonial-three__client-content">
                            <h3><Link href="/testimonials">{testimonial.clientName}</Link></h3>
                            <p>{testimonial.clientTitle}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Three End */}
    </>
  );
}
