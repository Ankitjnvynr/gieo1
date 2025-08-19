"use client";
import { useState } from "react";

export default function ContactLocationSection() {
  return (
    <section className="contact-location-section">
      <h2 className="section-title"> Contact & Location</h2>

      <div className="contact-location-container">
    
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
            
            <div className="form-group">
            <label>Phone no.</label>
            <input type="phone no." placeholder="Your Phone no." required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="4" required />
          </div>
          
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="map-container">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13750.125575387785!2d76.8210042!3d29.9695126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911a73a73f7313f%3A0xa98fcf75c56ed29a!2sGIEO%20Gita%20Museum%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1718800000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
