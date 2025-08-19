import Link from 'next/link';

// Footer data
const footerData = {
  backgroundImage: '/assets/images/shapes/site-footer-two-bg-shape.png',
  logoSrc: '/assets/images/resources/footer-logo-2.png',
  aboutText: (
    <>
      Transforming house into homes with<br />
      super roofing craftsmanship Financial<br />
      planners help people to gain
    </>
  ),
  contactEmail: 'debra.holt@example.com',
  contactAddress: `3891 Ranchview Dr.
                    Richardson`,
  contactPhone1: '01245789321',
  contactPhone2: '012457895146',
  footerText: `© themehealer 2024 | All Rights Reserved`,
  footerLinks: [
    { href: '/about', text: 'Trams & Condition' },
    { href: '/about', text: 'Privacy Policy' },
    { href: '/about', text: 'Contact Us' },
  ],
};

export default function Footer2() {
  return (
    <>
      {/* Site Footer Two Start */}
      <footer className="site-footer-two">
        <div
          className="site-footer-two__bg-shape float-bob-y"
          style={{ backgroundImage: `url(${footerData.backgroundImage})` }}
        ></div>
        <div className="site-footer-two__top">
          <div className="container">
            <div className="site-footer-two__top-inner">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget-two__column footer-widget-two__about">
                    <div className="footer-widget-two__logo">
                      <Link href="/">
                        <img src={footerData.logoSrc} alt="Footer Logo" />
                      </Link>
                    </div>
                    <p className="footer-widget-two__about-text">
                      {footerData.aboutText}
                    </p>
                    <div className="footer-widget-two__social">
                      <a href="#"><span className="icon-facebook-f"></span></a>
                      <a href="#"><span className="icon-Vector"></span></a>
                      <a href="#"><span className="icon-instagram"></span></a>
                      <a href="#"><span className="icon-pinterest"></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget-two__column footer-widget-two__contact">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Contact</h3>
                    </div>
                    <div className="footer-widget-two__contact-inner">
                      <ul className="footer-widget-two__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelope"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href={`mailto:${footerData.contactEmail}`}>
                                {footerData.contactEmail}
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-location"></span>
                          </div>
                          <div className="text">
                            <p>{footerData.contactAddress}</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href={`tel:${footerData.contactPhone1}`}>
                                {footerData.contactPhone1}
                              </a>
                              , 
                              <a href={`tel:${footerData.contactPhone2}`}>
                                {footerData.contactPhone2}
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="footer-widget-two__column footer-widget-two__newsletter">
                    <p className="footer-widget-two__newsletter-title">
                      <span>Subscribe</span> to Our<br />Newsletter
                    </p>
                    <form
                      className="footer-widget-two__newsletter-form mc-form"
                      data-url="MC_FORM_URL"
                      noValidate
                    >
                      <div className="footer-widget-two__newsletter-form-input-box">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          className="footer-widget-two__newsletter-btn"
                        >
                          <span className="icon-paper-plane"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer-two__bottom-text">
                {footerData.footerText}
              </p>
              <ul className="list-unstyled site-footer-two__bottom-menu">
                {footerData.footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer Two End */}
    </>
  );
}
