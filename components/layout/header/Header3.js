// components/Header3.js

import React from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

// Full Menu Array with Submenus
const menuItems = [
    { name: "GIEO GITA", path: "/", subMenu: [] },
    { name: "Join Gieo Gita", path: "/join-gieo-gita", subMenu: [] },
    {
        name: "About Us",
        path: "/about-us",
        subMenu: [
            { name: "Swami ji", path: "/about-us/swami-ji", subMenu: [] },
            {
                name: "History of GieoGita",
                path: "/about-us/history-of-gieogita",
                subMenu: [
                    { name: "Shlokas", path: "/about-us/history-of-gieogita/shlokas", subMenu: [] },
                    { name: "Mission & Vision", path: "/about-us/history-of-gieogita/mission-vision", subMenu: [] },
                    { name: "Aims & Objectives", path: "/about-us/history-of-gieogita/aims-objectives", subMenu: [] },
                ]
            }
        ]
    },
    {
        name: "Services",
        path: "/services",
        subMenu: [
            { name: "Ashrams", path: "/services/ashrams", subMenu: [] },
            { name: "Gaushala", path: "/services/gaushala", subMenu: [] },
            { name: "Health", path: "/services/health", subMenu: [] },
            { name: "Nature Conservation", path: "/services/nature-conservation", subMenu: [] },
            { name: "Work opportunities", path: "/services/work-opportunities", subMenu: [] },
            { name: "Education", path: "/services/education", subMenu: [] },
        ]
    },
    { name: "Events", path: "/events", subMenu: [] },
    { name: "Gallery", path: "/gallery", subMenu: [] },
    {
        name: "Download",
        path: "/download",
        subMenu: [
            { name: "E-book", path: "/download/e-book", subMenu: [] },
            { name: "Patrika", path: "/download/patrika", subMenu: [] },
        ]
    },
    {
        name: "Contact",
        path: "/contact",
        subMenu: [
            { name: "Blog", path: "/contact/blog", subMenu: [] }
        ]
    },
    { name: "Virtual Tour", path: "/virtual-tour", subMenu: [] },
    { name: "Bal Sanskar", path: "/bal-sanskar", subMenu: [] }
];


export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar }) {
    return (
        <header className={`main-header-three ${scroll ? "fixed-header" : ""}`}>
         

            <nav className="main-menu main-menu-three">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/">
                                        <img height={70} src="/assets/images/resources/logo-7.png" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="main-menu-three__main-menu-box">
                                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </div>

                                    {/* Dynamic Menu */}
                                    <ul className="main-menu__list">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className={item.subMenu.length > 0 ? "has-submenu" : ""}>
                                                <Link href={item.path}>{item.name}</Link>
                                                {item.subMenu.length > 0 && (
                                                    <ul className="submenu">
                                                        {item.subMenu.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link href={subItem.path}>{subItem.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="main-menu-three__right">
                                <div className="main-menu-three__call-and-btn-box">
                                    <div className="main-menu-three__call">
                                        <div className="main-menu-three__call-number">
                                            <p>Need help?</p>
                                            <h5><a href="tel:3075550133">(307) 555-0133</a></h5>
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
                                            <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu-three__main-menu-box">
                                        <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars"></i>
                                        </div>

                                        {/* Dynamic Menu Again for Sticky Header */}
                                        <ul className="main-menu__list">
                                            {menuItems.map((item, index) => (
                                                <li key={index} className={item.subMenu.length > 0 ? "has-submenu" : ""}>
                                                    <Link href={item.path}>{item.name}</Link>
                                                    {item.subMenu.length > 0 && (
                                                        <ul className="submenu">
                                                            {item.subMenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link href={subItem.path}>{subItem.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__call-and-btn-box">
                                        <div className="main-menu-three__call">
                                            <div className="main-menu-three__call-number">
                                                <p>Need help?</p>
                                                <h5><a href="tel:3075550133">(307) 555-0133</a></h5>
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
