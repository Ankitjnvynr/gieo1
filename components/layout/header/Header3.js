import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <header className={`main-header-three ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/">
                                        <img src="/assets/images/resources/logo-3.png" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="main-menu-three__main-menu-box">
                                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </div>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__call-and-btn-box">
                                    <div className="main-menu-three__call">
                                        <div className="main-menu-three__call-number">
                                            <p>Need help?</p>
                                            <h5>
                                                <a href="tel:3075550133">(307) 555-0133</a>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="main-menu-three__btn-box">
                                        <Link href="/contact">
                                            <button className="main-menu-three__btn thm-btn">
                                                Contact US<span className="icon-dubble-arrow-right"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content" />
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/">
                                            <img src="/assets/images/resources/logo-3.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu-three__main-menu-box">
                                        <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars"></i>
                                        </div>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__call-and-btn-box">
                                        <div className="main-menu-three__call">
                                            <div className="main-menu-three__call-number">
                                                <p>Need help?</p>
                                                <h5>
                                                    <a href="tel:3075550133">(307) 555-0133</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="main-menu-three__btn-box">
                                            <Link href="/contact">
                                                <button className="main-menu-three__btn thm-btn">
                                                    Contact US<span className="icon-dubble-arrow-right"></span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
        </header>
    );
}
