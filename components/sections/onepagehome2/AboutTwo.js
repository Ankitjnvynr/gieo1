'use client'; // Add this line at the top

import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

export default function AboutTwo() {
  return (
    <>
      {/* About Two Start */}
      <section className="about-two" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-two__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img src="assets/images/resources/about-two-img-1.jpg" alt="" />
                  </div>
                  <div className="about-two__shape-1">
                    <img src="assets/images/shapes/about-two-shape-1.png" alt="" />
                  </div>
                  <div className="about-two__count-box">
                    <div className="about-two__count-icon">
                      <span className="icon-wall"></span>
                    </div>
                    <div className="about-two__count-inner">
                      <div className="about-two__count count-box">
                        <h3 className="count-text">
                          <CountUp end={20} duration={1.5} /> {/* CountUp component */}
                        </h3>
                        <span className="about-two__count-plus">k</span>
                        <span className="about-two__count-plus">+</span>
                      </div>
                      <p className="about-two__count-text">Clients Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Quality roofing <span>solutions</span>
                    <br /> the every time
                  </h2>
                </div>
                <p className="about-two__text">
                  Roof service involves the installation, maintenance, and repair of roofs for the
                  residential and commercial buildings. The contractors offer a range of and services
                  Roof service involves
                </p>
                <ul className="about-two__progress-box list-unstyled">
                  <li>
                    <div className="about-two__progress">
                      <h4 className="about-two__progress-title">Keep up</h4>
                      <div className="bar">
                        <div className="bar-inner-one count-bar" data-percent="85%">
                          <div className="count-text">85%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-two__progress">
                      <h4 className="about-two__progress-title">Roof Service</h4>
                      <div className="bar">
                        <div className="bar-inner-two count-bar" data-percent="77%">
                          <div className="count-text">77%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-two__progress">
                      <h4 className="about-two__progress-title">Trust Roof</h4>
                      <div className="bar">
                        <div className="bar-inner-three count-bar" data-percent="95%">
                          <div className="count-text">95%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="about-two__btn-box">
                  {/* Use Next.js <Link> for navigation */}
                  <Link href="/about" className="about-two__btn thm-btn-two">
                    Read more
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Two End */}
    </>
  );
}
