'use client'; // Ensure this component is rendered on the client-side
import React, { useState } from 'react';

export default function CounterTwo() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      {/* Contact Two Start */}
      <section className="contact-two" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Talk to us</span>
                  </div>
                  <h2 className="section-title__title">
                    Peak Protection Roofing Trust the experts
                  </h2>
                </div>
                <p className="contact-two__text">
                  Construction is an essential industry that involves building
                  and designing structures such as buildings, roads, bridges
                </p>
                <ul className="contact-two__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-location"></span>
                    </div>
                    <div className="content">
                      <p>Address</p>
                      <h4>66 Broklyant, India</h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <div className="content">
                      <p>Phone Number</p>
                      <h4>
                        <a href="tel:01959701730">01959701730</a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-envelope"></span>
                    </div>
                    <div className="content">
                      <p>Email</p>
                      <h4>
                        <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="contact-two__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <h3 className="contact-two__right-title">Contact</h3>
                <form
                  className="contact-form-validated contact-two__form"
                  action="/api/sendemail" // Update this to your actual API route
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-two__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-two__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-two__input-box">
                        <input
                          type="text"
                          name="Phone"
                          placeholder="Your Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-two__input-box">
                        <div className="select-box">
                          <select
                            className="selectmenu wide"
                            value={selectedOption}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Choose an Option
                            </option>
                            <option value="service1">Type Of Service 01</option>
                            <option value="service2">Type Of Service 02</option>
                            <option value="service3">Type Of Service 03</option>
                            <option value="service4">Type Of Service 04</option>
                            <option value="service5">Type Of Service 05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-two__input-box text-message-box">
                        <textarea name="message" placeholder="Message here.."></textarea>
                      </div>
                      <div className="contact-two__btn-box">
                        <button
                          type="submit"
                          className="thm-btn-two contact-two__btn"
                        >
                          Appointment Now
                          <span className="icon-dubble-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Two End */}
    </>
  );
}
