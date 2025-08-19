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
                      <span className="section-title__tagline">Quality Work</span>
                    </div>
                    <h2 className="section-title__title">
                      Roof service <span>Profession</span><br /> services encompass
                    </h2>
                  </div>
                  <p className="quality-work__text">
                    Roof service involves the installation, maintenance, and<br /> repair of roofs for the residential and commercial building contractors
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="quality-work__right">
                  <ul className="quality-work__progress-box list-unstyled">
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Keep up</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: '85%' }}>
                            <div className="count-text">85%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Roof Service</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" style={{ width: '77%' }}>
                            <div className="count-text">77%</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="quality-work__progress">
                        <h4 className="quality-work__progress-title">Trust Roof</h4>
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
