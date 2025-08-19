'use client';
import React from 'react';
import Link from 'next/link';

export default function ServicesTwo() {
  return (
    <>
      {/* Service Two Start */}
      <section className="service-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 wow fadeInLeft" data-wow-delay="100ms">
              <div className="service-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">latest service</span>
                  </div>
                  <h2 className="section-title__title">
                    Quality roofing <span>solutions</span>
                    <br /> every time
                  </h2>
                </div>
                <p className="service-two__text">
                  Roof service involves the installation, maintenance, and repair of roofs for the
                  <br /> residential and commercial buildings. The contractors offer a range of services.
                </p>
                <div className="service-two__view-all">
                  {/* Use <Link> for Next.js routing */}
                  <Link href="/all-services">
                    View All Services
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Two Single Start */}
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="200ms">
              <div className="service-two__single">
                <div className="service-two__icon-and-title">
                  <div className="service-two__icon">
                    <span className="icon-buildings"></span>
                  </div>
                  <div className="service-two__title">
                    {/* Use <Link> for Next.js routing */}
                    <Link href="/reliable-roof-repair">
                      Reliable Roof Repair
                    </Link>
                  </div>
                </div>
                <p className="service-two__single-text">
                  Roof service involves the installation, maintenance, and repair of roofs for commercial properties.
                </p>
                <div className="service-two__read-more">
                  {/* Use <Link> for Next.js routing */}
                  <Link href="/reliable-roof-repair">
                    Read more
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two Single End */}

            {/* Services Two Single Start */}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
              <div className="service-two__single">
                <div className="service-two__icon-and-title">
                  <div className="service-two__icon">
                    <span className="icon-tools"></span>
                  </div>
                  <div className="service-two__title">
                    {/* Use <Link> for Next.js routing */}
                    <Link href="/peak-performance-roofing">
                      Peak Performance
                    </Link>
                  </div>
                </div>
                <p className="service-two__single-text">
                  Roof service involves the installation, maintenance, and repair of roofs for commercial properties.
                </p>
                <div className="service-two__read-more">
                  {/* Use <Link> for Next.js routing */}
                  <Link href="/peak-performance-roofing">
                    Read more
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two Single End */}

            {/* Services Two Single Start */}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms">
              <div className="service-two__single">
                <div className="service-two__icon-and-title">
                  <div className="service-two__icon">
                    <span className="icon-crane-1"></span>
                  </div>
                  <div className="service-two__title">
                    {/* Use <Link> for Next.js routing */}
                    <Link href="/skyline-roofing-solutions">
                      Roofing Solutions
                    </Link>
                  </div>
                </div>
                <p className="service-two__single-text">
                  Roof service involves the installation, maintenance, and repair of roofs for commercial properties.
                </p>
                <div className="service-two__read-more">
                  {/* Use <Link> for Next.js routing */}
                  <Link href="/skyline-roofing-solutions">
                    Read more
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two Single End */}

            {/* Services Two Single Start */}
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="500ms">
              <div className="service-two__single">
                <div className="service-two__icon-and-title">
                  <div className="service-two__icon">
                    <span className="icon-hook"></span>
                  </div>
                  <div className="service-two__title">
                    {/* Use <Link> for Next.js routing */}
                    <Link href="/peak-performance-roofing">
                      Peak Performance
                    </Link>
                  </div>
                </div>
                <p className="service-two__single-text">
                  Roof service involves the installation, maintenance, and repair of roofs for commercial properties.
                </p>
                <div className="service-two__read-more">
                  {/* Use <Link> for Next.js routing */}
                  <Link href="/peak-performance-roofing">
                    Read more
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Services Two Single End */}
          </div>
        </div>
      </section>
      {/* Service Two End */}
    </>
  );
}
