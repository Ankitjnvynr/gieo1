'use client'
import Link from 'next/link';

export default function Footer1() {
  return (
    <footer className="site-footer">
      <div className="site-footer__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/site-footer-bg.png)" }}></div>
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <Link href="#" className="site-footer__top-content">Get In <span> Touch</span>
              <div className="site-footer__top-arrow">
                <img src="/assets/images/icon/arrow-up.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="site-footer__middle">
        <div className="container">
          <div className="site-footer__middle-inner">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <img src="/assets/images/resources/footer-logo-1.png" alt="" />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    It is a long established fact that a<br />
                    Empowering Communities
                  </p>
                  <div className="footer-widget__social">
                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                    <Link href="#"><span className="icon-Vector"></span></Link>
                    <Link href="#"><span className="icon-instagram"></span></Link>
                    <Link href="#"><span className="icon-pinterest"></span></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Services</h3>
                  </div>
                  <ul className="footer-widget__services-list list-unstyled">
                    <li>
                      <Link href="/reliable-roof-repair"><span className="icon-angle-left"></span>Roof Renewal</Link>
                    </li>
                    <li>
                      <Link href="/peak-performance-roofing"><span className="icon-angle-left"></span>Peak Protection </Link>
                    </li>
                    <li>
                      <Link href="/skyline-roofing-solutions"><span className="icon-angle-left"></span>Skyline Roof Care</Link>
                    </li>
                    <li>
                      <Link href="/sure-guard-roofing-services"><span className="icon-angle-left"></span>Guardian Roof </Link>
                    </li>
                    <li>
                      <Link href="/top-notch-roofing-restoration"><span className="icon-angle-left"></span>Top Notch Roof</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="footer-widget__column footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Contact</h3>
                  </div>
                  <div className="footer-widget__contact-inner">
                    <ul className="footer-widget__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-envelope"></span>
                        </div>
                        <div className="text">
                          <p><a href="mailto:debra.holt@example.com">debra.holt@example.com</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-location"></span>
                        </div>
                        <div className="text">
                          <p>3891 Ranchview Dr.<br /> Richardson</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-call"></span>
                        </div>
                        <div className="text">
                          <p><a href="tel:01245789321">01245789321</a>, <a href="tel:012457895146">012457895146</a></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="footer-widget__column footer-widget__newsletter">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Newsletter</h3>
                  </div>
                  <p className="footer-widget__newsletter-text">It is a long established fact that and Empowering Communities</p>
                  <form className="footer-widget__newsletter-form mc-form" data-url="MC_FORM_URL" noValidate>
                    <div className="footer-widget__newsletter-form-input-box">
                      <input type="email" placeholder="Enter your email" name="EMAIL" />
                      <button type="submit" className="footer-widget__newsletter-btn"><span className="icon-paper-plane"></span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__bottom-text">© themehealer 2024 | All Rights Reserved</p>
            <ul className="list-unstyled site-footer__bottom-menu">
              <li><Link href="/about">Terms & Condition</Link></li>
              <li><Link href="/about">Privacy Policy</Link></li>
              <li><Link href="/about">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
