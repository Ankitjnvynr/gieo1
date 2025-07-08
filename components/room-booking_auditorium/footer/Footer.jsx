
export default function Footer() {
  return (
    <footer className="rba-footer">
      <div className="footer-content">
        <div className="footer-section welcome">
          <h2>Welcome</h2>
          <p>Your home away from home in <br /> GIEO GITA.</p>
        </div>
        <div className="footer-section support">
          <h3>SUPPORT</h3>
          <p>tel: +91 9050645839</p>
          <p>info@gieogitaguesthouse.com</p>
        </div>
        <div className="footer-section contact">
          <h3>CONTACT</h3>
          <label htmlFor="phone">Enter your phone number</label>
          <input type="text" id="phone" placeholder="Your phone for inquiries" />
          <button>Submit your inquiry now</button>
        </div>
      </div>
      {/* <p className="copyright">Copyright © 2025. All rights reserved. Gieogita Guest House</p> */}
    </footer>
  );
}
