"use client"; // Ensure this component runs on the client side
import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* About One Start */}
      <section className="about-one" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div
                className="about-one__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img">
                  <img
                    src="/assets/images/resources/about-one-img-1.png"
                    alt=""
                  />
                  <div className="about-one__shape-3">
                    <img
                      src="/assets/images/shapes/about-shape-3.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-4">
                    <img
                      src="/assets/images/shapes/about-shape-4.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-1">
                    <img
                      src="/assets/images/shapes/about-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-2">
                    <img
                      src="/assets/images/shapes/about-shape-2.png"
                      alt=""
                    />
                  </div>
                  <div className="about-one__happy-client">
                    <div className="about-one__client-img-box">
                      <ul className="about-one__client-img-list list-unstyled">
                        <li>
                          <div className="about-one__client-img">
                            <img
                              src="/assets/images/resources/about-one-happy-client-img-1.jpg"
                              alt=""
                            />
                          </div>
                        </li>
                        <li>
                          <div className="about-one__client-img">
                            <img
                              src="/assets/images/resources/about-one-happy-client-img-2.jpg"
                              alt=""
                            />
                          </div>
                        </li>
                        <li>
                          <div className="about-one__client-img">
                            <img
                              src="/assets/images/resources/about-one-happy-client-img-3.jpg"
                              alt=""
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="about-one__happy-client-content">
                      <div className="about-one__count count-box">
                        <h3 className="count-text">
                          <CountUp end={2000} duration={1.5} />
                        </h3>
                        <span className="about-one__count-plus">+</span>
                      </div>
                      <p className="about-one__count-text">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Trust the <span>experts</span> in the a roofing services
                  </h2>
                </div>
                <div className="about-one__main-tab-box tabs-box">
                  <ul className="tab-buttons clearfix list-unstyled">
                    <li
                      className={`tab-btn ${
                        activeIndex === 0 ? "active-btn" : ""
                      }`}
                      onClick={() => handleOnClick(0)}
                    >
                      <p>Skills</p>
                    </li>
                    <li
                      className={`tab-btn ${
                        activeIndex === 1 ? "active-btn" : ""
                      }`}
                      onClick={() => handleOnClick(1)}
                    >
                      <p>Experience</p>
                    </li>
                    <li
                      className={`tab-btn ${
                        activeIndex === 2 ? "active-btn" : ""
                      }`}
                      onClick={() => handleOnClick(2)}
                    >
                      <p>Destination</p>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    {/* Tab */}
                    <div
                      className={`tab ${activeIndex === 0 ? "active-tab" : ""}`}
                      id="skills"
                    >
                      <div className="about-one__tab-content-box">
                        <p className="about-one__text-1">
                          Construction is an essential industry that involves
                          building and designing structures such as buildings,
                          roads, and bridges.
                        </p>
                        <div className="about-one__points-box">
                          <ul className="about-one__points list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                          <ul className="about-one__points list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Safeguard Pro Surveillance</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Elite Roofing Solutions</p>
                            </li>
                          </ul>
                        </div>
                        <div className="about-one__btn-box">
                          <Link href="/about" className="about-one__btn thm-btn">
                            Read more
                            <span className="icon-dubble-arrow-right"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Tab */}
                    <div
                      className={`tab ${
                        activeIndex === 1 ? "active-tab" : ""
                      }`}
                      id="experience"
                    >
                      <div className="about-one__tab-content-box">
                        <p className="about-one__text-1">
                          Construction is an essential industry that involves
                          building and designing structures such as buildings,
                          roads, and bridges.
                        </p>
                        <div className="about-one__points-box">
                          <ul className="about-one__points list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Safeguard Pro Surveillance</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Elite Roofing Solutions</p>
                            </li>
                          </ul>
                          <ul className="about-one__points list-unstyled">                            
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                          </ul>
                        </div>
                        <div className="about-one__btn-box">
                          <Link href="/about" className="about-one__btn thm-btn">
                            Read more
                            <span className="icon-dubble-arrow-right"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Tab */}
                    <div
                      className={`tab ${
                        activeIndex === 2 ? "active-tab" : ""
                      }`}
                      id="destination"
                    >
                      <div className="about-one__tab-content-box">
                        <p className="about-one__text-1">
                          Construction is an essential industry that involves
                          building and designing structures such as buildings,
                          roads, and bridges.
                        </p>
                        <div className="about-one__points-box">
                          <ul className="about-one__points list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Elite Roofing Solutions</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Safeguard Pro Surveillance</p>
                            </li>
                          </ul>
                          <ul className="about-one__points list-unstyled">                            
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack"></span>
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                        </div>
                        <div className="about-one__btn-box">
                          <Link href="/about" className="about-one__btn thm-btn">
                            Read more
                            <span className="icon-dubble-arrow-right"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Tab */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About One End */}
    </>
  );
}
