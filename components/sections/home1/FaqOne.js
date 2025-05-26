'use client'
import React, { useState } from 'react';
import CounterUp from 'react-countup'; // Make sure you have this installed

export default function FaqOne() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <section className="faq-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Ask question</span>
                </div>
                <h2 className="section-title__title">Trust the experts for and a your roof service</h2>
              </div>
              <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                <div className={`accrodion ${isActive.key === 1 ? 'active' : ''}`} onClick={() => handleToggle(1)}>
                  <div className="accrodion-title">
                    <h4>How often should I have my Skyline Roof Care?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 1 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Roof Service is a vital aspect of home maintenance a repair. It encompasses a wide range of the services</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 2 ? 'active' : ''}`} onClick={() => handleToggle(2)}>
                  <div className="accrodion-title">
                    <h4>What Is The Peak Protection Roofing?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 2 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Roof Service is a vital aspect of home maintenance a repair. It encompasses a wide range of the services</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 3 ? 'active' : ''}`} onClick={() => handleToggle(3)}>
                  <div className="accrodion-title">
                    <h4>What Is The Elite Roof Service?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 3 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Roof Service is a vital aspect of home maintenance a repair. It encompasses a wide range of the services</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 4 ? 'active' : ''}`} onClick={() => handleToggle(4)}>
                  <div className="accrodion-title">
                    <h4>What Is The Elite Roof Service?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 4 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Roof Service is a vital aspect of home maintenance a repair. It encompasses a wide range of the services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq-one__right">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="faq-one__img-1">
                    <img src="/assets/images/resources/faq-one-img-1.jpg" alt="" />
                  </div>
                  <div className="faq-one__count-box">
                    <div className="faq-one__icon">
                      <span className="icon-Group"></span>
                    </div>
                    <div className="faq-one__count-inner count-box">
                      <div className="faq-one__count count-box">
                        <h3 className="count-text">
                            <CounterUp end={5} />
                        </h3>
                        <span>k</span>
                        <span>+</span>
                      </div>
                      <p>Trusted Customer</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="faq-one__img-2">
                    <img src="/assets/images/resources/faq-one-img-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
