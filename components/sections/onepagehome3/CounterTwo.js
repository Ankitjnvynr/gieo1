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
            {/* Left Side Info */}
            <div className="col-xl-6 col-lg-6">
              <div className="contact-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Talk to us</span>
                  </div>
                  <h2 className="section-title__title">
                    Medanta Foundation<br /> Connect with Us
                  </h2>
                </div>
                <p className="contact-two__text">
                  Whether you're seeking medical support, want to collaborate for community outreach, 
                  or looking to volunteer—our team is ready to support and respond. Together, we serve 
                  the vision that "Every Life is Precious."
                </p>
                <ul className="contact-two__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-location"></span>
                    </div>
                    <div className="content">
                      <p>Address</p>
                      <h4>Medanta OPD Centre, Gieo Gita Gyan Sansthanam, Kurukshetra, Haryana</h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-call"></span>
                    </div>
                    <div className="content">
                      <p>Phone Number</p>
                      <h4>
                        <a href="tel:01959701730">01959 701730</a>
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
                        <a href="mailto:info@medantafoundation.org">info@medantafoundation.org</a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="contact-two__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <h3 className="contact-two__right-title">Request Assistance</h3>
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
                          placeholder="Your Phone"
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
                            required
                          >
                            <option value="" disabled>
                              Select a Purpose
                            </option>
                            <option value="inquiry">General Inquiry</option>
                            <option value="consultation">OPD Consultation Request</option>
                            <option value="diagnostics">Diagnostic Services</option>
                            <option value="telemedicine">Telemedicine Help</option>
                            <option value="volunteer">Volunteer With Us</option>
                            <option value="csr">Partnership / CSR Collaboration</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-two__input-box text-message-box">
                        <textarea name="message" placeholder="Write your message here..."></textarea>
                      </div>
                      <div className="contact-two__btn-box">
                        <button
                          type="submit"
                          className="thm-btn-two contact-two__btn"
                        >
                          Submit Now
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
