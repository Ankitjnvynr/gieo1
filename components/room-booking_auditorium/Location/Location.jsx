
"use client";
import { useState } from "react";
import "./Location.css";

export default function Location() {
  const [selectedForm, setSelectedForm] = useState("room");

  return (
    <section
      className="rba-location contact-location-section"
      style={{ minHeight: "60rem", backgroundColor: "#e0d2b8" }}
    >
      <h2 className="section-title" style={{ left: "45%" }}>
        Contact & Location
      </h2>

      <div className="form-toggle-buttons">
        <button
          className={`toggle-btn ${selectedForm === "room" ? "active" : ""}`}
          onClick={() => setSelectedForm("room")}
        >
          Room Enquiry
        </button>
        <button
          className={`toggle-btn ${selectedForm === "auditorium" ? "active" : ""}`}
          onClick={() => setSelectedForm("auditorium")}
        >
          Auditorium Enquiry
        </button>
      </div>

      <div className="contact-location-container">
        {/* Room Form */}
        <form
          className={`contact-form ${selectedForm === "room" ? "visible" : "hidden"}`}
        >
          <h3>Room Booking Enquiry</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="4" required />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {/* Auditorium Form */}
        <form
          className={`contact-form ${selectedForm === "auditorium" ? "visible" : "hidden"}`}
        >
          <h3>Auditorium Booking Enquiry</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="4" required />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {/* Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13750.125575387785!2d76.8210042!3d29.9695126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911a73a73f7313f%3A0xa98fcf75c56ed29a!2sGIEO%20Gita%20Museum%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1718800000000"
            allowFullScreen=""
            loading="lazy"
            title="GIEO Gita Museum Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Info, Notice & Quote */}
      <div className="contact-extra-info">
        <p className="contact-quote">
          “Let your journey begin where silence meets the soul.”
        </p>
        <p className="contact-details">
          📞 <strong>Phone:</strong> +91-99999 88888 &nbsp;|&nbsp; ✉️ <strong>Email:</strong> contact@gieogita.org
        </p>
        <p className="offline-booking-notice">
          🔔 <strong>Note:</strong> All bookings are handled **offline**. Kindly reach out via phone or visit us directly.
        </p>
      </div>
    </section>
  );
}

