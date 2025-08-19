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
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-three__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="about-three__img-box">
                  <div className="about-three__img">
                    <img src="/assets/images/resources/gita ji book copy.jpg" alt="About Image 1" />
                  </div>
                  <div className="about-three__img-2">
                    <img height={318} src="/assets/images/resources/about-three-img-2.jpg" alt="About Image 2" />
                  </div>
                  {/* <div className="circle-text__rounded-text">
                    <Link href="/contact" className="circle-text__curved-circle-box">
                      <div className="curved-circle">
                        <span className="curved-circle--item">
                        GIEO Gita   |  GIEO Gita |
                        </span>
                      </div>
                    </Link>
                    <div className="circle-text__icon">
                      <a href="#"><span className="icon-down-arrow"></span></a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-three__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Our Services</span>
                  </div>
                  <h2 className="section-title__title">
                    Empowering Lives through <span>Spiritual Knowledge</span> <br /> and Cultural Education
                  </h2>
                </div>
                <ul className="about-three__icon-list list-unstyled">
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-paint"></span>
                      </div>
                      <h3 className="about-three__title">Gita Classes</h3>
                    </div>
                  </li>
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-tools"></span>
                      </div>
                      <h3 className="about-three__title">Bal Sanskar Programs</h3>
                    </div>
                  </li>
                  <li>
                    <div className="about-three__icon-and-title">
                      <div className="about-three__icon">
                        <span className="icon-robotic-arm"></span>
                      </div>
                      <h3 className="about-three__title">Spiritual Workshops</h3>
                    </div>
                  </li>
                </ul>
                <ul className="about-three__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>In-depth Bhagavad Gita study with modern applications</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Value-based education for children through stories and activities</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Retreats and satsangs for inner peace and spiritual growth</p>
                  </li>
                </ul>
                <div className="about-three__btn-box">
                  <Link href="/services" className="about-three__btn thm-btn">
                    Explore Services<span className="icon-dubble-arrow-right"></span>
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
