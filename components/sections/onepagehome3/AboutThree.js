'use client'; // Add this line at the top

import React, { useEffect } from 'react';
import Link from 'next/link';
import CircleType from 'circletype'; // Import CircleType

export default function AboutThree() {
  useEffect(() => {
    // Initialize CircleType if element is present
    if (document.querySelector('.curved-circle')) {
      new CircleType(document.querySelector('.curved-circle')).radius(80);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      {/* About Three Start */}
      <section className="about-three" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-three__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="about-three__img-box">
                  <div className="about-three__img">
                    <img src="/assets/images/resources/about-three-img-1.jpg" alt="About Image 1" />
                  </div>
                  <div className="about-three__img-2">
                    <img src="/assets/images/resources/about-three-img-2.jpg" alt="About Image 2" />
                  </div>
                  <div className="circle-text__rounded-text">
                    <Link href="/testimonials" className="circle-text__curved-circle-box">
                      <div className="curved-circle">
                        <span className="curved-circle--item">
                          contactcontact 
                        </span>
                      </div>
                      {/* /.curved-circle */}
                    </Link>
                    <div className="circle-text__icon">
                      <a href="#"><span className="icon-down-arrow"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-three__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Trust the <span>experts</span> in the <br /> roofing services
                  </h2>
                </div>
                <ul className="about-three__icon-list list-unstyled">
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-paint"></span>
                      </div>
                      <h3 className="about-three__title">Roof Masters</h3>
                    </div>
                  </li>
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-tools"></span>
                      </div>
                      <h3 className="about-three__title">Roof Care</h3>
                    </div>
                  </li>
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-robotic-arm"></span>
                      </div>
                      <h3 className="about-three__title">Roof Repairs</h3>
                    </div>
                  </li>
                </ul>
                <ul className="about-three__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Rise Above the Roof Service Professional roof services encompass</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Premier Roofing Specialists Roofing Excellence Every Time</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Safeguard Pro Surveillance a variety of offerings designed to maintain</p>
                  </li>
                </ul>
                <div className="about-three__btn-box">
                  <Link href="/about" className="about-three__btn thm-btn">
                    Read more<span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Three End */}
    </>
  );
}
