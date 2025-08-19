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

// Blog items data
const blogItems = [
  {
    id: 1,
    image: '/assets/images/blog/blog-2-1.jpg',
    date: '09 Apr',
    title: 'Trust the experts for all your roof service needs',
    link: '/blog-details',
  },
  {
    id: 2,
    image: '/assets/images/blog/blog-2-2.jpg',
    date: '09 Apr',
    title: 'Enhance the beau functionality of your roof service',
    link: '/blog-details',
  },
  {
    id: 3,
    image: '/assets/images/blog/blog-2-3.jpg',
    date: '09 Apr',
    title: 'Functionality of your roof with our service',
    link: '/blog-details',
  },
  {
    id: 4,
    image: '/assets/images/blog/blog-2-1.jpg',
    date: '09 Apr',
    title: 'Trust the experts for all your roof service needs',
    link: '/blog-details',
  },
  // Add more blog items as needed
];

export default function BlogTwo() {
  return (
    <>
      {/* Blog Two Start */}
      <section className="blog-two" id="blog">
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">blog & news</span>
            </div>
            <h2 className="section-title__title">
              Quality roofing <span>solutions</span>
            </h2>
          </div>
          <Swiper {...swiperOptions} className="blog-two__carousel">
            {blogItems.map(item => (
              <SwiperSlide key={item.id}>
                <div className="blog-two__single">
                  <div className="blog-two__img-box">
                    <div className="blog-two__img">
                      <img src={item.image} alt={item.title} />
                      <div className="blog-two__date">
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-two__content">
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <a href="#"><span className="icon-user"></span>By admin</a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-callender"></span>23 December 2023
                        </a>
                      </li>
                    </ul>
                    <h3 className="blog-two__title">
                      <Link href={item.link}>{item.title}</Link>
                    </h3>
                    <div className="blog-two__btn-box">
                      <Link href={item.link} className="blog-two__btn">
                        Read more<span className="icon-dubble-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Blog Two End */}
    </>
  );
}
