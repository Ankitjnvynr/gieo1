'use client'
import Link from 'next/link';
import React from 'react';

export default function ProjectOne() {
  return (
    <section className="project-one" id="projects">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">latest gallery</span>
          </div>
          <h2 className="section-title__title">
            Quality roofing <span>solutions</span> <br />
            every time
          </h2>
        </div>
        <div className="row">
          {/* Project One Single Start */}
          <div className="col-xl-6 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="100ms">
            <div className="project-one__single">
              <div className="project-one__img-box">
                <div className="project-one__img">
                  <img src="/assets/images/project/project-1-1.jpg" alt="Roof Renewal" />
                </div>
                <div className="project-one__content">
                  <p className="project-one__sub-title">Roof Renewal</p>
                  <h4 className="project-one__title">
                    <Link href="/project-details">Expert roof expectations</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Project One Single End */}

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row">
              {/* Project One Single Start */}
              <div className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="200ms">
                <div className="project-one__single">
                  <div className="project-one__img-box">
                    <div className="project-one__img">
                      <img src="/assets/images/project/project-1-2.jpg" alt="Roof Renewal" />
                    </div>
                    <div className="project-one__content">
                      <p className="project-one__sub-title">Roof Renewal</p>
                      <h4 className="project-one__title">
                        <Link href="/project-details">Expert Roof Layers</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project One Single End */}
              
              {/* Project One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="project-one__single">
                  <div className="project-one__img-box">
                    <div className="project-one__img">
                      <img src="/assets/images/project/project-1-3.jpg" alt="Roof Renewal" />
                    </div>
                    <div className="project-one__content">
                      <p className="project-one__sub-title">Roof Renewal</p>
                      <h4 className="project-one__title">
                        <Link href="/project-details">Expert Roof Renovation</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project One Single End */}
              
              {/* Project One Single Start */}
              <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="project-one__single">
                  <div className="project-one__img-box">
                    <div className="project-one__img">
                      <img src="/assets/images/project/project-1-4.jpg" alt="Roof Renewal" />
                    </div>
                    <div className="project-one__content">
                      <p className="project-one__sub-title">Roof Renewal</p>
                      <h4 className="project-one__title">
                        <Link href="/project-details">Expert Roof Installation</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project One Single End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
