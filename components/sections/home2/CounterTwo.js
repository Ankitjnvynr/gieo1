'use client'; // Ensure this component is rendered on the client-side
import React from 'react';
import CountUp from 'react-countup';

export default function CounterTwo() {
  return (
    <>
      {/* Counter Two Start */}
      <section className="counter-two">
        <div className="counter-two__wrap">
          <div
            className="counter-two__bg-shape float-bob-y"
            style={{ backgroundImage: 'url(/assets/images/shapes/counter-two-bg-shape.png)' }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">why we are the best</span>
              </div>
              <h2 className="section-title__title">
                Reach for the <span>Roof <br />Service</span> Stars Trust Roof
              </h2>
            </div>
            <div className="row">
              <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="counter-two__left">
                  <ul className="counter-two__points-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-architect"></span>
                      </div>
                      <div className="content">
                        <h3>Reliable Roofing Pros</h3>
                        <p>
                          Roof service involves the installation, maintenance, and repair of roofs for the residential
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-blueprint"></span>
                      </div>
                      <div className="content">
                        <h3>Vertex Roofing Specialists</h3>
                        <p>
                          Roof service involves the installation, maintenance, and repair of roofs for the residential
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-wall"></span>
                      </div>
                      <div className="content">
                        <h3>Ridgeguard Roofing</h3>
                        <p>
                          Roof service involves the installation, maintenance, and repair of roofs for the residential
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="counter-two__right">
                  <div
                    className="counter-two__right-bg-shape"
                    style={{ backgroundImage: 'url(/assets/images/shapes/counter-two-right-bg-shape.png)' }}
                  ></div>
                  <div className="row">
                    {/* Counter Two Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="counter-two__single">
                        <div className="counter-two__icon">
                          <span className="icon-architect"></span>
                        </div>
                        <div className="counter-two__count-box">
                          <div className="counter-two__count count-box">
                            <h3 className="count-text">
                              <CountUp end={30} duration={1.5} /> {/* Dynamic count */}
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                          <p className="counter-two__count-text">Our Project Complete</p>
                        </div>
                      </div>
                    </div>
                    {/* Counter Two Single End */}
                    {/* Counter Two Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="counter-two__single">
                        <div className="counter-two__icon">
                          <span className="icon-paint-roller"></span>
                        </div>
                        <div className="counter-two__count-box">
                          <div className="counter-two__count count-box">
                            <h3 className="count-text">
                              <CountUp end={2} duration={1.5} /> {/* Dynamic count */}
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                          <p className="counter-two__count-text">Our Team Member</p>
                        </div>
                      </div>
                    </div>
                    {/* Counter Two Single End */}
                    {/* Counter Two Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="counter-two__single">
                        <div className="counter-two__icon">
                          <span className="icon-wall"></span>
                        </div>
                        <div className="counter-two__count-box">
                          <div className="counter-two__count count-box">
                            <h3 className="count-text">
                              <CountUp end={20} duration={1.5} /> {/* Dynamic count */}
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                          <p className="counter-two__count-text">Clients Reviews</p>
                        </div>
                      </div>
                    </div>
                    {/* Counter Two Single End */}
                    {/* Counter Two Single Start */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="counter-two__single">
                        <div className="counter-two__icon">
                          <span className="icon-stairs"></span>
                        </div>
                        <div className="counter-two__count-box">
                          <div className="counter-two__count count-box">
                            <h3 className="count-text">
                              <CountUp end={7} duration={1.5} /> {/* Dynamic count */}
                            </h3>
                            <span>k</span>
                            <span>+</span>
                          </div>
                          <p className="counter-two__count-text">Our Winning Award</p>
                        </div>
                      </div>
                    </div>
                    {/* Counter Two Single End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Two End */}
    </>
  );
}
