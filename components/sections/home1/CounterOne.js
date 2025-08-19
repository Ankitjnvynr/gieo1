'use client'; // Ensure this component is rendered on the client-side
import React from 'react';
import CountUp from 'react-countup';

export default function CounterOne() {
  return (
    <>
      {/* Counter One Start */}
      <section className="counter-one">
        <div className="counter-one__wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-one__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">number talks</span>
                    </div>
                    <h2 className="section-title__title">
                      Superior roofing <span>services</span> for all your needs
                    </h2>
                  </div>
                  <p className="counter-one__text">
                    Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings. Roofing contractors offer
                  </p>
                  <div className="counter-one__need-help">
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <div className="content">
                      <p>Need help?</p>
                      <h4><a href="tel:8085550111">(808) 555-0111</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="counter-one__right">
                  <div className="row">
                    {/* Counter One Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                      <div className="counter-one__single">
                        <div className="counter-one__icon-and-count-box">
                          <div className="counter-one__icon">
                            <span className="icon-setting"></span>
                          </div>
                          <div className="counter-one__count count-box">
                            <h3 className="count-text">
                              <CountUp end={20} duration={1.5} />
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                        </div>
                        <p>Our Project Complete</p>
                      </div>
                    </div>
                    {/* Counter One Single End */}
                    {/* Counter One Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                      <div className="counter-one__single">
                        <div className="counter-one__icon-and-count-box">
                          <div className="counter-one__icon">
                            <span className="icon-wall"></span>
                          </div>
                          <div className="counter-one__count count-box">
                            <h3 className="count-text">
                              <CountUp end={3} duration={1.5} />
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                        </div>
                        <p>Our Team Member</p>
                      </div>
                    </div>
                    {/* Counter One Single End */}
                    {/* Counter One Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                      <div className="counter-one__single">
                        <div className="counter-one__icon-and-count-box">
                          <div className="counter-one__icon">
                            <span className="icon-robotic-arm"></span>
                          </div>
                          <div className="counter-one__count count-box">
                            <h3 className="count-text">
                              <CountUp end={11} duration={1.5} />
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                        </div>
                        <p>Clients Reviews</p>
                      </div>
                    </div>
                    {/* Counter One Single End */}
                    {/* Counter One Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
                      <div className="counter-one__single">
                        <div className="counter-one__icon-and-count-box">
                          <div className="counter-one__icon">
                            <span className="icon-engineer"></span>
                          </div>
                          <div className="counter-one__count count-box">
                            <h3 className="count-text">
                              <CountUp end={1} duration={1.5} />
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                        </div>
                        <p>Our Winning Award</p>
                      </div>
                    </div>
                    {/* Counter One Single End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter One End */}
    </>
  );
}
