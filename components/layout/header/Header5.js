import Link from "next/link"
import OnePageMenuOne from "../OnePageMenuOne"
import OnePageMobileMenuOne from "../OnePageMobileMenuOne"
export default function Header01({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
              <div className="container">
                  <div className="main-menu__wrapper-inner">
                      <div className="main-menu__left">
                          <div className="main-menu__logo">
                              <Link href="/">
                                  <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                              </Link>
                          </div>
                      </div>
                      <div className="main-menu__main-menu-box">
                          <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                              <i className="fa fa-bars" />
                          </div>
                          <OnePageMenuOne />
                      </div>
                      <div className="main-menu__right">
                          <div className="main-menu__search-and-nav-sidebar-icon-box">
                              <div className="main-menu__search" onClick={handlePopup}>
                                  <i className="fa fa-search" />
                              </div>
                              <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                                  <div className="navSidebar-button">
                                      <span className="nav-sidebar-menu-1" />
                                      <span className="nav-sidebar-menu-2" />
                                      <span className="nav-sidebar-menu-3" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </nav>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
          <div className="sticky-header__content" />
            <nav className="main-menu">
              <div className="main-menu__wrapper">
                  <div className="container">
                      <div className="main-menu__wrapper-inner">
                          <div className="main-menu__left">
                              <div className="main-menu__logo">
                                  <Link href="/">
                                      <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                  </Link>
                              </div>
                          </div>
                          <div className="main-menu__main-menu-box">
                              <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                  <i className="fa fa-bars" />
                              </div>
                              <OnePageMenuOne />
                          </div>
                          <div className="main-menu__right">
                              <div className="main-menu__search-and-nav-sidebar-icon-box">
                                  <div className="main-menu__search" onClick={handlePopup}>
                                      <i className="fa fa-search" />
                                  </div>
                                  <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                                      <div className="navSidebar-button">
                                          <span className="nav-sidebar-menu-1" />
                                          <span className="nav-sidebar-menu-2" />
                                          <span className="nav-sidebar-menu-3" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </nav>
        </div>

      <OnePageMobileMenuOne handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>
    
    )
}