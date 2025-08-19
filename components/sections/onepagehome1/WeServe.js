"use client";

import { useState } from 'react';
import Link from 'next/link';
import CounterUp from 'react-countup';

export default function WeServe() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* We Serve Start */}
      <section className="we-serve">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">We serve</span>
            </div>
            <h2 className="section-title__title">
              Above All <span>Your Roof</span>
              <br /> Very Matter
            </h2>
          </div>
          <div className="we-serve__main-tab-box tabs-box">
            <div className="row">
              <div className="col-xl-3">
                <div className="we-serve__left">
                  <ul className="tab-buttons list-unstyled">
                    <li
                      className={`tab-btn ${activeIndex === 0 ? 'active-btn' : ''}`}
                      onClick={() => handleOnClick(0)}
                    >
                      <span>Roofing Layers</span>
                    </li>
                    <li
                      className={`tab-btn ${activeIndex === 1 ? 'active-btn' : ''}`}
                      onClick={() => handleOnClick(1)}
                    >
                      <span>Roof Solar Panels</span>
                    </li>
                    <li
                      className={`tab-btn ${activeIndex === 2 ? 'active-btn' : ''}`}
                      onClick={() => handleOnClick(2)}
                    >
                      <span>Roof Renovation</span>
                    </li>
                    <li
                      className={`tab-btn ${activeIndex === 3 ? 'active-btn' : ''}`}
                      onClick={() => handleOnClick(3)}
                    >
                      <span>Roof Installation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="tabs-content">
                  {/* Tab 1 */}
                  <div
                    className={`tab ${activeIndex === 0 ? 'active-tab' : ''}`}
                    id="roofing-layers"
                  >
                    <div className="we-serve__right">
                      <div className="we-serve__content-box">
                        <div className="we-serve__content-left">
                          <span className="we-serve__content-tagline">About Us</span>
                          <h2 className="we-serve__content-title">
                            Trust the <span>experts</span> in the a<br />
                            roofing services
                          </h2>
                          <p className="we-serve__text">
                            Construction is an essential industry that involves
                            <br />
                            building and designing the structures such
                          </p>
                          <ul className="we-serve__points-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                        </div>
                        <div className="we-serve__content-right">
                          <div className="we-serve__content-count-box">
                            <div className="we-serve__content-count-shape-1">
                              <img
                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                alt="Count Shape"
                              />
                            </div>
                            <div className="we-serve__count count-box">
                              <h3 className="count-text">
                                <CounterUp end={11} duration={1.5} />
                              </h3>
                              <span>k</span>
                              <span>+</span>
                            </div>
                            <p className="we-serve__count-text">Clients Reviews</p>
                          </div>
                          <div className="we-serve__content-rating-box">
                            <div className="we-serve__content-ratting">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star last-icon"></span>
                            </div>
                            <p>Score 4.1 (from clients)</p>
                            <div className="we-serve__content-review">
                              <Link href="#">
                                Read reviews
                                <span className="icon-double-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab 2 */}
                  <div
                    className={`tab ${activeIndex === 1 ? 'active-tab' : ''}`}
                    id="roof-solar"
                  >
                    <div className="we-serve__right">
                      <div className="we-serve__content-box">
                        <div className="we-serve__content-left">
                          <span className="we-serve__content-tagline">About Us</span>
                          <h2 className="we-serve__content-title">
                            Trust the <span>experts</span> in the a<br />
                            roofing services
                          </h2>
                          <p className="we-serve__text">
                            Construction is an essential industry that involves
                            <br />
                            building and designing the structures such
                          </p>
                          <ul className="we-serve__points-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                        </div>
                        <div className="we-serve__content-right">
                          <div className="we-serve__content-count-box">
                            <div className="we-serve__content-count-shape-1">
                              <img
                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                alt="Count Shape"
                              />
                            </div>
                            <div className="we-serve__count count-box">
                              <h3 className="count-text">
                                <CounterUp end={11} duration={1.5} />
                              </h3>
                              <span>k</span>
                              <span>+</span>
                            </div>
                            <p className="we-serve__count-text">Clients Reviews</p>
                          </div>
                          <div className="we-serve__content-rating-box">
                            <div className="we-serve__content-ratting">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star last-icon"></span>
                            </div>
                            <p>Score 4.1 (from clients)</p>
                            <div className="we-serve__content-review">
                              <Link href="#">
                                Read reviews
                                <span className="icon-double-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab 3 */}
                  <div
                    className={`tab ${activeIndex === 2 ? 'active-tab' : ''}`}
                    id="roof-renovation"
                  >
                    <div className="we-serve__right">
                      <div className="we-serve__content-box">
                        <div className="we-serve__content-left">
                          <span className="we-serve__content-tagline">About Us</span>
                          <h2 className="we-serve__content-title">
                            Trust the <span>experts</span> in the a<br />
                            roofing services
                          </h2>
                          <p className="we-serve__text">
                            Construction is an essential industry that involves
                            <br />
                            building and designing the structures such
                          </p>
                          <ul className="we-serve__points-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                        </div>
                        <div className="we-serve__content-right">
                          <div className="we-serve__content-count-box">
                            <div className="we-serve__content-count-shape-1">
                              <img
                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                alt="Count Shape"
                              />
                            </div>
                            <div className="we-serve__count count-box">
                              <h3 className="count-text">
                                <CounterUp end={11} duration={1.5} />
                              </h3>
                              <span>k</span>
                              <span>+</span>
                            </div>
                            <p className="we-serve__count-text">Clients Reviews</p>
                          </div>
                          <div className="we-serve__content-rating-box">
                            <div className="we-serve__content-ratting">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star last-icon"></span>
                            </div>
                            <p>Score 4.1 (from clients)</p>
                            <div className="we-serve__content-review">
                              <Link href="#">
                                Read reviews
                                <span className="icon-double-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab 4 */}
                  <div
                    className={`tab ${activeIndex === 3 ? 'active-tab' : ''}`}
                    id="roof-installation"
                  >
                    <div className="we-serve__right">
                      <div className="we-serve__content-box">
                        <div className="we-serve__content-left">
                          <span className="we-serve__content-tagline">About Us</span>
                          <h2 className="we-serve__content-title">
                            Trust the <span>experts</span> in the a<br />
                            roofing services
                          </h2>
                          <p className="we-serve__text">
                            Construction is an essential industry that involves
                            <br />
                            building and designing the structures such
                          </p>
                          <ul className="we-serve__points-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Rise Above the Roof Service</p>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-cheack" />
                              </div>
                              <p>Premier Roofing Specialists</p>
                            </li>
                          </ul>
                        </div>
                        <div className="we-serve__content-right">
                          <div className="we-serve__content-count-box">
                            <div className="we-serve__content-count-shape-1">
                              <img
                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                alt="Count Shape"
                              />
                            </div>
                            <div className="we-serve__count count-box">
                              <h3 className="count-text">
                                <CounterUp end={11} duration={1.5} />
                              </h3>
                              <span>k</span>
                              <span>+</span>
                            </div>
                            <p className="we-serve__count-text">Clients Reviews</p>
                          </div>
                          <div className="we-serve__content-rating-box">
                            <div className="we-serve__content-ratting">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star last-icon"></span>
                            </div>
                            <p>Score 4.1 (from clients)</p>
                            <div className="we-serve__content-review">
                              <Link href="#">
                                Read reviews
                                <span className="icon-double-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* We Serve End */}
    </>
  );
}
