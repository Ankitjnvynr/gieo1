"use client";

import { useState } from 'react';

export default function ContactOne() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <section className="contact-one" id="contact">
      <div className="contact-one__wrap">
        <div className="contact-one__shape-1">
          <img src="/assets/images/shapes/contact-one-shape-1.png" alt="Shape 1" />
        </div>
        <div className="contact-one__shape-3">
          <img src="/assets/images/shapes/contact-one-shape-3.png" alt="Shape 3" />
        </div>
        <div className="contact-one__shape-4">
          <img src="/assets/images/shapes/contact-one-shape-4.png" alt="Shape 4" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Talk to us</span>
                  </div>
                  <h2 className="section-title__title">Peak Protection Roofing Trust the experts</h2>
                </div>
                <form
                  className="contact-form-validated contact-one__form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select
                            className="selectmenu wide"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled>
                              Choose a Option
                            </option>
                            <option value="Type Of Service 01">Type Of Service 01</option>
                            <option value="Type Of Service 02">Type Of Service 02</option>
                            <option value="Type Of Service 03">Type Of Service 03</option>
                            <option value="Type Of Service 04">Type Of Service 04</option>
                            <option value="Type Of Service 05">Type Of Service 05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Message here.."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="contact-one__btn-box">
                        <button type="submit" className="thm-btn-two contact-one__btn">
                          Appointment Now<span className="icon-dubble-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-one__right">
                <div
                  className="contact-one__img wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="/assets/images/resources/contact-one-img-1.png" alt="Contact Image" />
                  <div className="contact-one__shape-2">
                    <img src="/assets/images/shapes/contact-one-shape-2.png" alt="Shape 2" />
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
