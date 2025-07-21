"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import Image from 'next/image';

export default function Banner({
  subTitle = 'Medanta Foundation OPD Centre',
  title = 'Delivering Compassionate Healthcare to the Underserved',
  text = 'In collaboration with Gita Gyan Sansthanam and RJ Foundation, Medanta Foundation OPD Centre was inaugurated on 05/09/2024. As part of our CSR initiative, we offer advanced yet accessible medical services, bridging the healthcare gap for underprivileged communities. From cardiac and general consultation to telemedicine and diagnostic services, our mission is to ensure “Every Life is Precious.”',
  videoUrl = 'https://www.youtube.com/watch?v=Get7rqXYrbQ',
  trustedClientsCount = 4000,
  trustedClientsImages = [
    '/assets/images/resources/banner-two-trusted-clients-1-1.jpg',
    '/assets/images/resources/banner-two-trusted-clients-1-2.jpg',
    '/assets/images/resources/banner-two-trusted-clients-1-3.jpg'
  ],
  imgList = [

    '/assets/images/resources/banner-two-img-1-2.jpg',

  ]
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Banner Two Start */}
      <section className="banner-two" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="banner-two__left wow fadeInLeft" data-wow-delay="100ms">
                <div className="banner-two__title-box">
                  <p className="banner-two__sub-title">{subTitle}</p>
                  <h2 className="banner-two__title">{title}</h2>
                </div>
                <p className="banner-two__text">{text}</p>
                <div className="banner-two__btn-and-video-box">

                  <div className="banner-two__video-link">
                    <button
                      className="video-popup"
                      onClick={() => setIsOpen(true)}
                    >
                      <div className="banner-two__video-icon">
                        <span className="fas fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </button>
                    <h4 className="banner-two__video-text">See How It Works</h4>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xl-6">
              <div className="banner-two__right wow fadeInRight" data-wow-delay="300ms">
                <div className="banner-two__shape-1"></div>
                <div className="banner-two__shape-2"></div>
                <Image
                  width={800}
                  height={600}
                  src={'/assets/images/medanta/health1.png'}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '30px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'  // Smooth and elegant shadow
                  }}
                />

                {/* <ul className="list-unstyled banner-two__img-list">
                  {imgList.map((src, index) => (
                    <li key={index}>
                      <div className="banner-two__img-single">
                        <img src={src} alt={`Image ${index + 1}`} />
                      </div>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Two End */}
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId={new URL(videoUrl).searchParams.get('v')}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
