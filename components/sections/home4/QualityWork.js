"use client";

import React from 'react';

export default function QualityWork() {
  return (
    <>
      {/* Quality Work Start */}
      <section className="quality-work">
        <div className="container">
          <div className="quality-work__inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="quality-work__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Serving with Purpose</span>
                    </div>
                    <h2 className="section-title__title">
                      Dedicated to <span>Spiritual Upliftment</span><br /> and Social Transformation
                    </h2>
                  </div>
                  <p className="quality-work__text">
                    GIEO Gita is committed to spreading the teachings of the Bhagavad Gita<br />
                    while driving impact through seva projects, education, and value-based initiatives.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="quality-work__right">
                  <ul className="quality-work__progress-box list-unstyled">
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Seva Outreach</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: '90%' }}>
                            <div className="count-text">90%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Spiritual Impact</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: '85%' }}>
                            <div className="count-text">85%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Public Trust</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: '95%' }}>
                            <div className="count-text">95%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quality Work End */}
    </>
  );
}
