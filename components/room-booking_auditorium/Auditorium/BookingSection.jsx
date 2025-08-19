import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function BookingSection() {
  return (
    <>
      <section className="rba-booking-section">
        {/* Background Image */}
        <Image
          src="/assets/images/backgrounds/bsbg.jpg"
          alt="Booking Background"
          fill
          className="booking-bg"
          priority
        />

        {/* Booking Content */}
        <div className="booking-content">
          <h2 className="rba-title">Our Rooms</h2>
          <div className="rba-room-cards">
            <div className="rba-room-card">
              <img
                src="/assets/images/backgrounds/rm4.jpg"
                alt="Normal Room"
                className="rba-room-image"
              />
              <h3>Normal Room</h3>
              <p className="rba-price">Price: ₹1350</p>
              <p className="rba-stars">★★★☆☆</p>
            </div>
            <div className="rba-room-card">
              <img
                src="/assets/images/backgrounds/rm1.jpg"
                alt="Deluxe Room"
                className="rba-room-image"
              />
              <h3>Deluxe Room</h3>
              <p className="rba-price">Price: ₹1750</p>
              <p className="rba-stars">★★★★☆</p>
            </div>
            <div className="rba-room-card">
              <img
                src="/assets/images/backgrounds/rm2.jpg"
                alt="Super Deluxe Room"
                className="rba-room-image"
              />
              <h3>Super Deluxe Room</h3>
              <p className="rba-price">Price: ₹2650</p>
              <p className="rba-stars">★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="hero-marquee">
        <Marquee speed={50} gradient={false} pauseOnHover>
          <span className="marquee-icon">◆</span>
          <span className="marquee-text">
            Spacious & serene rooms for your spiritual stay – Book now at GIEO GITA!
          </span>
          <span className="marquee-icon">◆</span>
          <span className="marquee-text">
            AC & Non-AC options | Attached bathroom | 24x7 Hot Water & Wi-Fi | Peaceful surroundings
          </span>
          <span className="marquee-icon">◆</span>
          <span className="marquee-text">
            Ideal for families, groups & solo travelers | Clean, safe & comfortable lodging
          </span>
        </Marquee>
      </div>
    </>
  );
}

