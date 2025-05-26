import React from 'react';
import Link from 'next/link';

export default function Banner() {
  return (
    <>
      {/* Banner One Start */}
      <section className="banner-one">
        <div
          className="banner-one__shape-1 float-bob-y"
          style={{
            backgroundImage: "url(/assets/images/shapes/banner-one-shape-1.png)", // Background image URL remains the same
          }}
        />
        <div className="banner-one__shape-2 float-bob-x">
          <img
            src="/assets/images/shapes/banner-one-shape-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="banner-one__left">
                <div className="banner-one__title-box">
                  <p className="banner-one__sub-title">Build Rooftop</p>
                  <h3 className="banner-one__title">
                    Trust the <span className="color-text">experts</span> <br />in 
                    <span className="normal-text">
                      the A roofing <br /> services
                    </span>
                  </h3>
                </div>
                <p className="banner-one__text">
                  Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings.
                </p>
                <ul className="list-unstyled banner-one__points">
                  <li>
                    <div className="banner-one__single">
                      <div className="banner-one__icon">
                        <span className="icon-paint-roller" />
                      </div>
                      <div className="banner-one__content">
                        <h5>
                          <Link href="/skyline-roofing-solutions">
                            Roofing Solutions
                          </Link>
                        </h5>
                        <p>Roof services maintenance and repair of roofs</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__single">
                      <div className="banner-one__icon">
                        <span className="icon-buildings" />
                      </div>
                      <div className="banner-one__content">
                        <h5>
                          <Link href="/sure-guard-roofing-services">
                            Rise Above the Rest
                          </Link>
                        </h5>
                        <p>Roof services maintenance and repair of roofs</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="400ms">
              <div className="banner-one__right">
                <ul className="list-unstyled banner-one__img-list">
                  <li>
                    <div className="banner-one__img-list-single">
                      <div className="banner-one__img">
                        <img
                          src="/assets/images/resources/banner-one-img-1-1.jpg"
                          alt=""
                        />
                        <div
                          className="banner-one__img-shape-1"
                          style={{
                            backgroundImage: "url(/assets/images/shapes/banner-one-img-shape-1.png)", // Background image URL remains the same
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-one__img-list-single">
                      <div className="banner-one__img">
                        <img
                          src="/assets/images/resources/banner-one-img-1-2.jpg"
                          alt=""
                        />
                        <div
                          className="banner-one__img-shape-1"
                          style={{
                            backgroundImage: "url(/assets/images/shapes/banner-one-img-shape-1.png)", // Background image URL remains the same
                          }}
                        ></div>
                      </div>
                      <div className="banner-one__img mt-12">
                        <img
                          src="/assets/images/resources/banner-one-img-1-3.jpg"
                          alt=""
                        />
                        <div
                          className="banner-one__img-shape-1"
                          style={{
                            backgroundImage: "url(/assets/images/shapes/banner-one-img-shape-1.png)", // Background image URL remains the same
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner One End */}
    </>
  );
}
