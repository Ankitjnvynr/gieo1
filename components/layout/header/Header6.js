import Link from "next/link";
import OnePageMenuTwo from "../OnePageMenuTwo";
import OnePageMobileMenuTwo from "../OnePageMobileMenuTwo";

export default function Header6({ scroll, handleMobileMenu, handlePopup, handleSidebar, isSidebar }) {
    return (
        <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
            <div className="main-menu-two__top">
                <div className="container">
                    <div className="main-menu-two__top-inner">
                        <ul className="list-unstyled main-menu-two__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <a href="tel:629555-0129">(629) 555-0129</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu-two__top-right">
                            <div className="main-menu-two__social">
                                <a href="#"><i className="icon-instagram"></i></a>
                                <a href="#"><i className="icon-linkedin-in"></i></a>
                                <a href="#"><i className="icon-Vector"></i></a>
                                <a href="#"><i className="icon-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="container">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/">
                                        <img src="/assets/images/resources/logo-2.png" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__main-menu-box">
                                    <div
                                        className="mobile-nav__toggler"
                                        onClick={handleMobileMenu}
                                    >
                                        <i className="fa fa-bars"></i>
                                    </div>
                                    <OnePageMenuTwo />
                                </div>
                                <div className="main-menu-two__search-btn-box">
                                    <div
                                        className="main-menu-two__search search-toggler icon-search"
                                        onClick={handlePopup}
                                    ></div>
                                    <div className="main-menu-two__btn-box">
                                        <Link href="/contact" className="thm-btn-two main-menu-two__btn">
                                            Get a quote<span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content" />
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__logo">
                                        <Link href="/">
                                            <img src="/assets/images/resources/logo-2.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__main-menu-box">
                                        <div
                                            className="mobile-nav__toggler"
                                            onClick={handleMobileMenu}
                                        >
                                            <i className="fa fa-bars"></i>
                                        </div>
                                        <OnePageMenuTwo />
                                    </div>
                                    <div className="main-menu-two__search-btn-box">
                                        <div
                                            className="main-menu-two__search search-toggler icon-search"
                                            onClick={handlePopup}
                                        ></div>
                                        <div className="main-menu-two__btn-box">
                                            <Link href="/contact" className="thm-btn-two main-menu-two__btn">
                                                Get a quote<span className="icon-dubble-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <OnePageMobileMenuTwo handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
        </header>
    );
}
