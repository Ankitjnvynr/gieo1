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
                src="/assets/images/resources/logo-1.png" // Adjusted path for Next.js
                width={140}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
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
              <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
              <li className={isActive.key === "pages" ? "dropdown current" : "dropdown"}>
                <a href="#" onClick={() => handleToggle("pages")}>Pages</a>
                <ul style={{ display: `${isActive.key === "pages" ? "block" : "none"}` }}>
                  <li><Link href="/team" onClick={handleMobileMenu}>Team</Link></li>
                  <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                  <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>Faq</Link></li>
                  <li><Link href="/404" onClick={handleMobileMenu}>404 Error</Link></li>
                </ul>
                <div className={isActive.key === "pages" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("pages")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={isActive.key === "services" ? "dropdown current" : "dropdown"}>
                <a href="#" onClick={() => handleToggle("services")}>Services</a>
                <ul style={{ display: `${isActive.key === "services" ? "block" : "none"}` }}>
                  <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                  <li><Link href="/peak-performance-roofing" onClick={handleMobileMenu}>Peak Performance Roofing</Link></li>
                  <li><Link href="/skyline-roofing-solutions" onClick={handleMobileMenu}>Skyline Roofing Solutions</Link></li>
                  <li><Link href="/sure-guard-roofing-services" onClick={handleMobileMenu}>Sure Guard Roofing Services</Link></li>
                  <li><Link href="/reliable-roof-repair" onClick={handleMobileMenu}>Reliable Roof Repair</Link></li>
                  <li><Link href="/top-notch-roofing-restoration" onClick={handleMobileMenu}>Top Notch Roofing Restoration</Link></li>
                </ul>
                <div className={isActive.key === "services" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("services")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={isActive.key === "projects" ? "dropdown current" : "dropdown"}>
                <a href="#" onClick={() => handleToggle("projects")}>Projects</a>
                <ul style={{ display: `${isActive.key === "projects" ? "block" : "none"}` }}>
                  <li><Link href="/project" onClick={handleMobileMenu}>Projects</Link></li>
                  <li><Link href="/project-details" onClick={handleMobileMenu}>Project Details</Link></li>
                </ul>
                <div className={isActive.key === "projects" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("projects")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={isActive.key === "blog" ? "dropdown current" : "dropdown"}>
                <a href="#" onClick={() => handleToggle("blog")}>Blog</a>
                <ul style={{ display: `${isActive.key === "blog" ? "block" : "none"}` }}>
                  <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                  <li><Link href="/blog-list" onClick={handleMobileMenu}>Blog List</Link></li>
                  <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                </ul>
                <div className={isActive.key === "blog" ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle("blog")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
