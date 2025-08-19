'use client'; // Ensure this component is rendered on the client-side

import React from 'react';
import Link from 'next/link';   // Import Link from Next.js

export default function CTAOne() {
  return (
    // CTA One Start
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__shape-1">
            <img
              src="/assets/images/shapes/cta-one-shape-1.png"
              alt=""
            />
          </div>
          <div className="cta-one__img-one">
            <img
              src="/assets/images/resources/cta-one-img-1.png"
              alt=""
            />
          </div>
          <div className="cta-one__content">
            <div className="cta-one__icon">
              <span className="icon-box-2"></span>
            </div>
            <h3 className="cta-one__title">
              Raising the Standard<br /> One Roof at a Time
            </h3>
          </div>
          <div className="cta-one__btn-box">
            <Link href="/peak-performance-roofing" className="cta-one__btn thm-btn-two">
              get service<span className="icon-dubble-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    // CTA One End
  );
}
