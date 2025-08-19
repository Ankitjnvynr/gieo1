"use client";

import { useState } from 'react';
import Link from 'next/link';

const donationOptions = [
  "Choose an Option",
  "Gaushala Seva",
  "Gurukul Support",
  "Annadan (Anpurna Kitchen)",
  "Bal Sanskar Support",
  "Dhyanam Meditation",
  "General Donation"
];

export default function ContactThree() {
  const [selectedService, setSelectedService] = useState(donationOptions[0]);

  return (
    <>
      {/* Contact Three Start */}
      <section className="contact-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="contact-three__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Support Our Mission</span>
                  </div>
                  <h2 className="section-title__title">
                    Be part of <span>Gita Seva</span><br /> Transform Lives Today
                  </h2>
                </div>
                <div className="contact-three__img">
                  <img src="/assets/images/resources/contact-three-img-1.jpg" alt="GIEO Gita Donation" />
                </div>
                <ul className="contact-three__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Contribute to Gaushala and serve cows with compassion</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Support Bal Sanskar to build future-ready children rooted in values</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-cheack"></span>
                    </div>
                    <p>Help spread Gita wisdom through Gurukul & Meditation programs</p>
                  </li>
                </ul>
                <div className="contact-three__btn-box">
                  <Link href="/donate" className="contact-three__btn thm-btn">
                    Learn more<span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="contact-three__right">
                <div className="contact-three__shape-1">
                  <img src="/assets/images/shapes/contact-three-shape-1.png" alt="Donation Shape" />
                </div>
                <h3 className="contact-three__right-title">Make a Donation</h3>
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
                        <h4 className="contact-three__input-title">Phone</h4>
                        <input type="text" name="Phone" placeholder="Your Phone Number" required />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-three__input-box">
                        <h4 className="contact-three__input-title">Donation Type</h4>
                        <div className="select-box">
                          <select
                            className="selectmenu wide"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                          >
                            {donationOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <h4 className="contact-three__input-title">Message</h4>
                      <div className="contact-three__input-box text-message-box">
                        <textarea name="message" placeholder="Your message or prayer..."></textarea>
                      </div>
                      <div className="contact-three__btn-box-two">
                        <button type="submit" className="thm-btn-two contact-three__btn-two">
                          Donate Now<span className="icon-dubble-arrow-right"></span>
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
