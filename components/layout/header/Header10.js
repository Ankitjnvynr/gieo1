import Link from "next/link";
import OnePageMenuFour from "../OnePageMenuFour";
import OnePageMobileMenuFour from "../OnePageMobileMenuFour";

export default function Header8({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <header className={`main-header-three ${scroll ? "fixed-header" : ""}`}>
            <nav className="main-menu main-menu-four">
                <div className="main-menu-four__wrapper">
                    <div className="container">
                        <div className="main-menu-four__wrapper-inner">
                            <div className="main-menu-four__left">
                                <div className="main-menu-four__logo">
                                    <Link href="/">
                                        <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-four__main-menu-box">
                                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="fa fa-bars"></i>
                                </div>
                                <OnePageMenuFour />
                            </div>
                            <div className="main-menu-four__right">
                                <div className="main-menu-four__btn-box">
                                    <Link href="/contact" className="thm-btn-two main-menu-four__btn">
                                        Get a quote<span className="icon-dubble-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`stricky-header stricked-menu main-menu main-menu-four ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content" />
                <nav className="main-menu main-menu-four">
                    <div className="main-menu-four__wrapper">
                        <div className="container">
                            <div className="main-menu-four__wrapper-inner">
                                <div className="main-menu-four__left">
                                    <div className="main-menu-four__logo">
                                        <Link href="/">
                                            <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu-four__main-menu-box">
                                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </div>
                                    <OnePageMenuFour />
                                </div>
                                <div className="main-menu-four__right">
                                    <div className="main-menu-four__btn-box">
                                        <Link href="/contact" className="thm-btn-two main-menu-four__btn">
                                            Get a quote<span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <OnePageMobileMenuFour handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
        </header>
    );
}
