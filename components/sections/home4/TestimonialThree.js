"use client";
import React from 'react';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Gieogita testimonials
export const testimonials = [
  {
    id: 1,
    text: 'Gieogita transformed our event with their impeccable organization and creativity. Truly exceptional service!',
    clientName: 'Priya Desai',
    clientTitle: 'Event Coordinator, Viva Celebrations',
    clientImg: '/assets/images/testimonial/gieogita-1.jpg'
  },
  {
    id: 2,
    text: 'Working with GIEO Gita was a delight. Their team brought our vision to life flawlessly.',
    clientName: 'Rahul Mehta',
    clientTitle: 'CEO, Fusion Tech',
    clientImg: '/assets/images/testimonial/gieogita-2.jpg'
  },
  {
    id: 3,
    text: 'From planning to execution, Gieogita exceeded our expectations. We highly recommend their services!',
    clientName: 'Anjali Sharma',
    clientTitle: 'Marketing Head, Bloom Events',
    clientImg: '/assets/images/testimonial/gieogita-3.jpg'
  }
];

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
    0: { slidesPerView: 1 },
    375: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    1200: { slidesPerView: 1 },
    1320: { slidesPerView: 1 },
  },
};

export default function TestimonialThree() {
  return (
    <section className="testimonial-four">
      <div className="testimonial-four__bg"
        style={{ backgroundImage: 'url(/assets/images/backgrounds/aaaa.jpeg)' }}>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-four__slider">
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
                          {/* <div className="testimonial-four__img-holder">
                            <img src={testimonial.clientImg} alt={testimonial.clientName} />
                          </div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
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
  );
}
