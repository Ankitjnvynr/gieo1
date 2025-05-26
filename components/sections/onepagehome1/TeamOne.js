'use client';

import Link from 'next/link';
import React from 'react';

export default function TeamOne() {
  return (
    <>
      {/* Team One Start */}
      <section className="team-one" id="team">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">active members</span>
            </div>
            <h2 className="section-title__title">
              Expert roof <span>service that</span> <br /> exceed expectations
            </h2>
          </div>
          <div className="row">
            {/* Team One Single Start */}
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="/assets/images/team/team-1-1.jpg" alt="Brooklyn Simmons - Roof Renewal Expert" />
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__title">
                    <Link href="/team-details">Brooklyn Simmons</Link>
                  </h3>
                  <p className="team-one__sub-title">Roof Renewal</p>
                  <p className="team-one__text">
                    Roof service involves the installation, maintenance, and repair of roofs for residential and commercial properties.
                  </p>
                  <div className="team-one__social">
                    <Link href="#"><span className="icon-instagram"></span></Link>
                    <Link href="#"><span className="icon-linkedin-in"></span></Link>
                    <Link href="#"><span className="icon-Vector"></span></Link>
                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Team One Single End */}

            {/* Team One Single Start */}
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="/assets/images/team/team-1-2.jpg" alt="Warner David - Roof Pros" />
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__title">
                    <Link href="/team-details">Warner David</Link>
                  </h3>
                  <p className="team-one__sub-title">Roof Pros</p>
                  <p className="team-one__text">
                    Roof service involves the installation, maintenance, and repair of roofs for residential and commercial properties.
                  </p>
                  <div className="team-one__social">
                    <Link href="#"><span className="icon-instagram"></span></Link>
                    <Link href="#"><span className="icon-linkedin-in"></span></Link>
                    <Link href="#"><span className="icon-Vector"></span></Link>
                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Team One Single End */}

            {/* Team One Single Start */}
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="/assets/images/team/team-1-3.jpg" alt="Shaib Khan - Roofing Service Expert" />
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__title">
                    <Link href="/team-details">Shaib Khan</Link>
                  </h3>
                  <p className="team-one__sub-title">Roofing Service Man</p>
                  <p className="team-one__text">
                    Roof service involves the installation, maintenance, and repair of roofs for residential and commercial properties.
                  </p>
                  <div className="team-one__social">
                    <Link href="#"><span className="icon-instagram"></span></Link>
                    <Link href="#"><span className="icon-linkedin-in"></span></Link>
                    <Link href="#"><span className="icon-Vector"></span></Link>
                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Team One Single End */}

            {/* Team One Single Start */}
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="400ms">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="/assets/images/team/team-1-4.jpg" alt="David Hais - Roof Master" />
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__title">
                    <Link href="/team-details">David Hais</Link>
                  </h3>
                  <p className="team-one__sub-title">Roof Master</p>
                  <p className="team-one__text">
                    Roof service involves the installation, maintenance, and repair of roofs for residential and commercial properties.
                  </p>
                  <div className="team-one__social">
                    <Link href="#"><span className="icon-instagram"></span></Link>
                    <Link href="#"><span className="icon-linkedin-in"></span></Link>
                    <Link href="#"><span className="icon-Vector"></span></Link>
                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Team One Single End */}
          </div>
        </div>
      </section>
      {/* Team One End */}
    </>
  );
}
