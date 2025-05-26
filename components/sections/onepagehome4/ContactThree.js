"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define a list of services for the dropdown
const services = [
  "Choose a Option",
  "Type Of Service 01",
  "Type Of Service 02",
  "Type Of Service 03",
  "Type Of Service 04",
  "Type Of Service 05"
];

export default function ContactThree() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      {/* Contact Three Start */}
      <section className="contact-three" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="contact-three__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Contact With Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Trust the <span>experts</span> in the a roofing services
                  </h2>
                </div>
                <div className="contact-three__img">
                  <img src="/assets/images/resources/contact-three-img-1.jpg" alt="" />
                </div>
                <ul className="contact-three__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Rise Above the Roof Service Professional roof services encompass</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Premier Roofing Specialists Roofing Excellence Every Time</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Safeguard Pro Surveillance a variety of offerings designed</p>
                  </li>
                </ul>
                <div className="contact-three__btn-box">
                  <Link href="/contact" className="contact-three__btn thm-btn">
                    Read more<span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="contact-three__right">
                <div className="contact-three__shape-1">
                  <img src="/assets/images/shapes/contact-three-shape-1.png" alt="" />
                </div>
                <h3 className="contact-three__right-title">Contact</h3>
                <form
                  className="contact-form-validated contact-three__form"
                  action="/assets/inc/sendemail.php"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-three__input-box">
                        <h4 className="contact-three__input-title">Name</h4>
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-three__input-box">
                        <h4 className="contact-three__input-title">Email</h4>
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-three__input-box">
                        <h4 className="contact-three__input-title">Number</h4>
                        <input type="text" name="Phone" placeholder="Your Number" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-three__input-box">
                        <h4 className="contact-three__input-title">Option</h4>
                        <div className="select-box">
                          <select
                            className="selectmenu wide"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                          >
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <h4 className="contact-three__input-title">Message</h4>
                      <div className="contact-three__input-box text-message-box">
                        <textarea name="message" placeholder="Message here.."></textarea>
                      </div>
                      <div className="contact-three__btn-box-two">
                        <button type="submit" className="thm-btn-two contact-three__btn-two">
                          Appointment Now<span className="icon-dubble-arrow-right"></span>
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
      {/* Contact Three End */}
    </>
  );
}
