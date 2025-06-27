"use client";

import React from 'react';

export default function QualityWork() {
  return (
    <>
      {/* Charity Partners Start */}
      <section className="quality-work">
        <div className="container">
          <div className="quality-work__inner">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Charity Partners</span>
              </div>
              <h2 className="section-title__title">
                Working Together with <span>GIEO Gita</span>
              </h2>
              <p className="quality-work__text">
                We proudly collaborate with dedicated foundations to further our mission of spiritual and social service.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6 text-center">
                <img src="assets/images/backgrounds/rj.jpg" alt="Foundation Partner 1" height={5} className="img-fluid" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 text-center">
                <img src="assets/images/backgrounds/medanta.jpg" alt="Medanta Foundation" height={5} className="img-fluid" />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 text-center">
                <img src="assets/images/backgrounds/gieo.jpg" alt="GIEO Gita Logo" height={5} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Charity Partners End */}
    </>
  );
}
