"use client";

import CountUp from 'react-countup';

export default function WhyWe() {
  return (
    <>
      {/* Why We Are Two Start */}
      <section className="why-we-are-two">
        <div className="why-we-are-two__wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="why-we-are-two__left">
                  <div className="why-we-are-two__img-box">
                    <div className="why-we-are-two__img">
                      <img src="/assets/images/resources/why-we-are-two-img-1.jpg" alt="" />
                    </div>
                    <div className="why-we-are-two__shape-1 float-bob-y">
                      <img src="/assets/images/shapes/why-we-are-two-shape-1.png" alt="" />
                    </div>
                    <div className="why-we-are-two__count-box">
                      <div className="why-we-are-two__count-icon">
                        <span className="icon-Flaticon"></span>
                      </div>
                      <div className="why-we-are-two__count-inner">
                        <div className="why-we-are-two__count count-box">
                          <h3 className="count-text">
                            <CountUp end={3000} duration={1.5} />
                          </h3>
                          <span className="why-we-are-two__count-plus">+</span>
                        </div>
                        <p className="why-we-are-two__count-text">Project Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="why-we-are-two__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <div className="section-title__shape"></div>
                      <span className="section-title__tagline">why we are the best</span>
                    </div>
                    <h2 className="section-title__title">
                      Reach for the <span>Roof Service</span><br /> Stars Trust Roof
                    </h2>
                  </div>
                  <ul className="why-we-are-two__list list-unstyled">
                    <li>
                      <div className="content">
                        <h3>Reliable Roofing Pros</h3>
                        <p>Roof service involves the installation, maintenance, and<br /> repair of roofs for the residential</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                    <li>
                      <div className="content">
                        <h3>Quality Roofs Quality Living</h3>
                        <p>Roof service involves the installation, maintenance, and<br /> repair of roofs for the residential</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                    <li>
                      <div className="content">
                        <h3>Building A Better Roof Tomorrow</h3>
                        <p>Roof service involves the installation, maintenance, and<br /> repair of roofs for the residential</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why We Are Two End */}
    </>
  );
}
