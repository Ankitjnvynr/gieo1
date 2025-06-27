"use client";

export default function Ticket() {
  return (
    <section className="ticket-section" id="ticket">
      <h2 className="ticket-title" data-aos="fade-up"> Museum Timings & Tickets</h2>

      <div className="ticket-card" data-aos="zoom-in-up">
        <div className="ticket-info">
          <h3 className="ticket-label"> Timings</h3>
          <p className="ticket-text">10:00 AM – 7:00 PM (All Days)</p>
        </div>

        <div className="ticket-info">
          <h3 className="ticket-label"> Entry Ticket</h3>
          <p className="ticket-text">₹10 per person</p>
        </div>

        <div className="ticket-info">
          <h3 className="ticket-label"> Address</h3>
          <p className="ticket-text">GIEO Gita Museum, Kurukshetra, Haryana</p>
        </div>

        <div className="ticket-info">
          <h3 className="ticket-label">Contact us  </h3>
          <p className="ticket-text">96710xxxxx </p>
        </div>
      </div>
    </section>
  );
}

