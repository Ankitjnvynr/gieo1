'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// data/team.js
export const teamMembers = [
  {
    imgSrc: '/assets/images/team/team-2-1.jpg',
    name: 'Brooklyn Simmons',
    title: 'Roof Masters',
    profileLink: '/team-details',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
      vector: '#',
      facebook: '#',
    },
  },
  {
    imgSrc: '/assets/images/team/team-2-2.jpg',
    name: 'Herbert Spin',
    title: 'Roofing Specialists',
    profileLink: '/team-details',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
      vector: '#',
      facebook: '#',
    },
  },
  {
    imgSrc: '/assets/images/team/team-2-3.jpg',
    name: 'Adam Smith',
    title: 'Roof Repair',
    profileLink: '/team-details',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
      vector: '#',
      facebook: '#',
    },
  },
  {
    imgSrc: '/assets/images/team/team-2-1.jpg',
    name: 'Brooklyn Simmons',
    title: 'Roof Masters',
    profileLink: '/team-details',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
      vector: '#',
      facebook: '#',
    },
  },
  // Add more team members here
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

export default function TeamTwo() {
  return (
    <section className="team-two" id="team">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">active member</span>
          </div>
          <h2 className="section-title__title">
            Let <span>Roof Service</span> Take You <br />to New Heights
          </h2>
        </div>
        <Swiper {...swiperOptions} className="team-two__carousel">
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-two__single">
                <div className="team-two__img-box">
                  <div className="team-two__img">
                    <img src={member.imgSrc} alt={member.name} />
                  </div>
                </div>
                <div className="team-two__content">
                  <h3 className="team-two__title">
                    <Link href={member.profileLink}>{member.name}</Link>
                  </h3>
                  <p className="team-two__sub-title">{member.title}</p>
                  <div className="team-two__social">
                    <Link href={member.socialLinks.instagram}><span className="icon-instagram"></span></Link>
                    <Link href={member.socialLinks.linkedin}><span className="icon-linkedin-in"></span></Link>
                    <Link href={member.socialLinks.vector}><span className="icon-Vector"></span></Link>
                    <Link href={member.socialLinks.facebook}><span className="icon-facebook-f"></span></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
