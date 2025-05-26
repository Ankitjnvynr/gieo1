"use client"; // Ensure this component is rendered on the client-side
import React from 'react';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data for testimonials
export const testimonials = [
  {
    id: 1,
    text: 'Events are special occasions where people ga toge a celebrate a Events are a special occasions where people ga toge a celebrate a commemorat participate in a purpose or theme Events are special occasions where people gat together celebrate Events commemorate, or participate in a purpose',
    clientName: 'Cameron Williamson',
    clientTitle: 'Pro Roofing Experts',
    clientImg: '/assets/images/testimonial/testimonial-3-1.jpg'
  },
  {
    id: 2,
    text: 'Events are special occasions where people ga toge a celebrate a Events are a special occasions where people ga toge a celebrate a commemorat participate in a purpose or theme Events are special occasions where people gat together celebrate Events commemorate, or participate in a purpose',
    clientName: 'Robert Son',
    clientTitle: 'Pro Roofing Experts',
    clientImg: '/assets/images/testimonial/testimonial-3-2.jpg'
  },
  {
    id: 3,
    text: 'Events are special occasions where people ga toge a celebrate a Events are a special occasions where people ga toge a celebrate a commemorat participate in a purpose or theme Events are special occasions where people gat together celebrate Events commemorate, or participate in a purpose',
    clientName: 'Adam Smith',
    clientTitle: 'Pro Roofing Experts',
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
      {/* Testimonial Four Start */}
      <section className="testimonial-four" id="testimonial">
        <div className="testimonial-four__bg"
            style={{ backgroundImage: 'url(/assets/images/backgrounds/testimonial-four-bg.jpg)' }}>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-four__slider">
                {/* Thumbnail Carousel */}
                <div className="testimonial-four__thumb-outer-box">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={4}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="testimonial-four__thumb-carousel"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial-four__thumb-item">
                          <div className="testimonial-four__img-holder-box">
                            <div className="testimonial-four__img-holder">
                              <img src={testimonial.clientImg} alt={testimonial.clientName} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Main Content Carousel */}
                <div className="testimonial-four__main-content">
                  <Swiper {...swiperOptions} className="testimonial-four__carousel">
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial-four__item">
                          <div className="testimonial-four__inner-content">
                            <p className="testimonial-four__text">{testimonial.text}</p>
                            <div className="testimonial-four__client-info">
                              <div className="testimonial-four__client-quote">
                                <span className="icon-quote"></span>
                              </div>
                              <div className="testimonial-four__client-content">
                                <h4 className="testimonial-four__client-name">
                                  <Link href="/testimonials">
                                    {testimonial.clientName}
                                  </Link>
                                </h4>
                                <p className="testimonial-four__client-sub-title">{testimonial.clientTitle}</p>
                              </div>
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
        </div>
      </section>
      {/* Testimonial Four End */}
    </>
  );
}
