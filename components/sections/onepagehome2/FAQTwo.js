'use client';
import React, { useState } from 'react';

export default function FAQTwo() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      {/* FAQ Two Start */}
      <section className="faq-two">
        <div className="faq-two__wrap">
          <div
            className="faq-two__bg-shape"
            style={{
              backgroundImage: 'url(/assets/images/shapes/faq-two-bg-shape.png)',
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-two__left">
                  <div className="faq-two__img">
                    <img
                      src="/assets/images/resources/faq-two-img-1.png"
                      alt="FAQ Image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-two__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Ask question</span>
                    </div>
                    <h2 className="section-title__title">
                      Roof Service Your Roof <br />Partner <span>for Life</span>
                    </h2>
                  </div>
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion-1"
                  >
                    {[{
                      question: 'What are the benefits of education?',
                      answer: 'The generated is therefore always free from repetition is the injected humour or words etc.',
                    }, {
                      question: 'What are the benefits of education?',
                      answer: 'The generated is therefore always free from repetition is the injected humour or words etc.',
                    }, {
                      question: 'Can I get financial for my education?',
                      answer: 'The generated is therefore always free from repetition is the injected humour or words etc.',
                    }].map((item, index) => (
                      <div
                        key={index}
                        className={`accrodion ${isActive.key === index + 1 ? 'active' : ''}`}
                      >
                        <div className="accrodion-title" onClick={() => handleToggle(index + 1)}>
                          <div className="faq-two__count"></div>
                          <h4>{item.question}</h4>
                        </div>
                        <div className={`accrodion-content ${isActive.key === index + 1 ? 'show' : ''}`}>
                          <div className="inner">
                            <p>{item.answer}</p>
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Two End */}
    </>
  );
}
