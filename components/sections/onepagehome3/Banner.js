// Add this at the very top of your file
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';

export default function Banner({
  subTitle = 'FinTech Fusion',
  title = 'Top-Quality Roofing Services for Home',
  text = 'As an AI language model, I don’t have personal opinions or points of However I can tell you that design is a multifaceted field',
  videoUrl = 'https://www.youtube.com/watch?v=Get7rqXYrbQ',
  trustedClientsCount = 4000,
  trustedClientsImages = [
    '/assets/images/resources/banner-two-trusted-clients-1-1.jpg',
    '/assets/images/resources/banner-two-trusted-clients-1-2.jpg',
    '/assets/images/resources/banner-two-trusted-clients-1-3.jpg'
  ],
  imgList = [
    '/assets/images/resources/banner-two-img-1-1.jpg',
    '/assets/images/resources/banner-two-img-1-2.jpg',
    '/assets/images/resources/banner-two-img-1-3.jpg'
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
                  <div className="banner-two__btn-box">
                    <Link href="/about" className="banner-two__btn thm-btn">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div>
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
                <div className="banner-two__trusted-clients">
                  <ul className="list-unstyled banner-two__trusted-clients-list">
                    {trustedClientsImages.map((src, index) => (
                      <li key={index}>
                        <div className="banner-two__trusted-clients-img">
                          <img src={src} alt={`Trusted Client ${index + 1}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="banner-two__trusted-clients-content">
                    <div className="banner-two__trusted-clients-count">
                      <div className="banner-two__count count-box">
                        <CountUp end={trustedClientsCount} duration={1.5} />
                        <span>+</span>
                      </div>
                      <p className="banner-two__trusted-clients-text">Trusted Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="banner-two__right wow fadeInRight" data-wow-delay="300ms">
                <div className="banner-two__shape-1"></div>
                <div className="banner-two__shape-2"></div>
                <ul className="list-unstyled banner-two__img-list">
                  {imgList.map((src, index) => (
                    <li key={index}>
                      <div className="banner-two__img-single">
                        <img src={src} alt={`Image ${index + 1}`} />
                      </div>
                    </li>
                  ))}
                </ul>
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
