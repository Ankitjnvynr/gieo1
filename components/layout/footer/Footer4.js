import Link from 'next/link';

// Example footer data (replace with actual dynamic data)
const footerData = {
  logo: '/assets/images/resources/logo-1.png',
  socialLinks: [
  { href: '#', icon: 'icon-facebook-f', name: 'Facebook' },
  { href: '#', icon: 'icon-twitter', name: 'Twitter' },
  { href: '#', icon: 'icon-linkedin-in', name: 'LinkedIn' },
  { href: '#', icon: 'icon-youtube', name: 'YouTube' },
],
contact: {
  email: 'info@gieogita.org',
  phones: ['08000000000', '08000000001'],
},
services: [
  { href: '/bhagavad-gita-classes', text: 'Gita Classes' },
  { href: '/spiritual-counseling', text: 'Spiritual Counseling' },
  { href: '/meditation-sessions', text: 'Meditation Sessions' },
  { href: '/vedic-education', text: 'Vedic Education' },
],
pages: [
  { href: '/about', text: 'About Gieo Gita' },
  { href: '/services', text: 'Programs & Services' },
  { href: '/gallery', text: 'Gallery' },
  { href: '/contact', text: 'Contact' },
  { href: '/testimonials', text: 'Testimonials' },
],
bottomMenu: [
  { href: '/terms', text: 'Terms & Conditions' },
  { href: '/privacy-policy', text: 'Privacy Policy' },
  { href: '/donate', text: 'Donate' },
],
};

export default function Footer4() {
  return (
    <>
      {/* Site Footer Four Start */}
      <footer className="site-footer-four">
        <div className="site-footer-four__top">
          <div className="container">
            <div className="site-footer-four__top-inner">
              <div className="site-footer-four__logo">
                <Link href="/">
                  <img src={footerData.logo} alt="Footer Logo" />
                </Link>
              </div>
              <div className="site-footer-four__social">
                {footerData.socialLinks.map((social, index) => (
                  <a href={social.href} key={index}>
                    <span className={social.icon}></span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-four__middle">
  <div className="container">
    <div className="site-footer-four__middle-inner">
      <div className="row">
        <div className="col-xl-7 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
          <div className="footer-widget-four__column footer-widget-four__contact">
            <h3 className="footer-widget-four__contact-title">Connect With <br /> Gieogita</h3>
            <ul className="footer-widget-four__contact-list list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-envelope"></span>
                </div>
                <div className="text">
                  <p><a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a></p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-call"></span>
                </div>
                <div className="text">
                  {footerData.contact.phones.map((phone, index) => (
                    <p key={index}>
                      <a href={`tel:${phone}`}>{phone}</a>
                      {index < footerData.contact.phones.length - 1 && ', '}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="200ms">
          <div className="footer-widget-four__column footer-widget-four__services">
            <div className="footer-widget-four__title-box">
              <h3 className="footer-widget-four__title">Our Solutions</h3>
            </div>
            <ul className="footer-widget-four__services-list list-unstyled">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href}>
                    <span className="icon-angle-left"></span>{service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="200ms">
          <div className="footer-widget-four__column footer-widget-four__page">
            <div className="footer-widget-four__title-box">
              <h3 className="footer-widget-four__title">Quick Links</h3>
            </div>
            <ul className="footer-widget-four__page-list list-unstyled">
              {footerData.pages.map((page, index) => (
                <li key={index}>
                  <Link href={page.href}>{page.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       <div className="site-footer-four__bottom">
  <div className="container">
    <div className="site-footer-four__bottom-inner">
      <p className="site-footer-four__bottom-text">© Gieogita 2025 | Crafted with passion & purpose</p>
      <ul className="list-unstyled site-footer-four__bottom-menu">
        {footerData.bottomMenu.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>{menu.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

      </footer>
      {/* Site Footer Four End */}
    </>
  );
}
