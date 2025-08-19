import Link from "next/link";
import { useState } from "react";

const MobileNav = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="/assets/images/resources/logo-1.png"
                width={140}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list one-page-scroll-menu">
              <li className={isActive.key === "home" ? "dropdown current" : "dropdown"}>
                <Link href="/" onClick={handleMobileMenu}>Home</Link>
                <ul style={{ display: `${isActive.key === "home" ? "block" : "none"}` }}>
                  <li><Link href="/" onClick={handleMobileMenu}>Home One</Link></li>
                  <li><Link href="/index-2" onClick={handleMobileMenu}>Home Two</Link></li>
                  <li><Link href="/index-3" onClick={handleMobileMenu}>Home Three</Link></li>
                  <li><Link href="/index-4" onClick={handleMobileMenu}>Home Four</Link></li>
                  <li className={isActive.subMenuKey === "header-styles" ? "dropdown current" : "dropdown"}>
                    <a href="#" onClick={() => handleToggle("home", "header-styles")}>Header Styles</a>
                    <ul style={{ display: `${isActive.subMenuKey === "header-styles" ? "block" : "none"}` }}>
                      <li><Link href="/" onClick={handleMobileMenu}>Header One</Link></li>
                      <li><Link href="/index-2" onClick={handleMobileMenu}>Header Two</Link></li>
                      <li><Link href="/index-3" onClick={handleMobileMenu}>Header Three</Link></li>
                      <li><Link href="/index-4" onClick={handleMobileMenu}>Header Four</Link></li>
                    </ul>
                    <div className={isActive.subMenuKey === "header-styles" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("home", "header-styles")}>
                      <span className="fa fa-angle-right" />
                    </div>
                  </li>
                  <li className={isActive.subMenuKey === "one-page-styles" ? "dropdown current" : "dropdown"}>
                    <a href="#" onClick={() => handleToggle("home", "one-page-styles")}>One Page Styles</a>
                    <ul style={{ display: `${isActive.subMenuKey === "one-page-styles" ? "block" : "none"}` }}>
                      <li><Link href="/index-one-page" onClick={handleMobileMenu}>One Page Styles One</Link></li>
                      <li><Link href="/index2-one-page" onClick={handleMobileMenu}>One Page Styles Two</Link></li>
                      <li><Link href="/index3-one-page" onClick={handleMobileMenu}>One Page Styles Three</Link></li>
                      <li><Link href="/index4-one-page" onClick={handleMobileMenu}>One Page Styles Four</Link></li>
                    </ul>
                    <div className={isActive.subMenuKey === "one-page-styles" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("home", "one-page-styles")}>
                      <span className="fa fa-angle-right" />
                    </div>
                  </li>
                </ul>
                <div className={isActive.key === "home" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("home")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="scrollToLink">
                  <Link href="#services" onClick={handleMobileMenu}>Services</Link>
              </li>
              <li className="scrollToLink">
                  <Link href="#about" onClick={handleMobileMenu}>About Us</Link>
              </li>
              <li className="scrollToLink">
                  <Link href="#projects" onClick={handleMobileMenu}>projects</Link>
              </li>
              <li className="scrollToLink">
                  <Link href="#contact" onClick={handleMobileMenu}>Contact</Link>
              </li>
              <li className="scrollToLink">
                  <Link href="#testimonial" onClick={handleMobileMenu}>Testimonial</Link>
              </li>
              <li className="scrollToLink">
                  <Link href="#blog" onClick={handleMobileMenu}>Blog</Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@maroof.com">needhelp@maroof.com</a>
            </li>
            <li>
              <i className="fas fa-phone" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};

export default MobileNav;
