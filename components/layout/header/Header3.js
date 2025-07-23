// components/Header3.js
"use client";
import React from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { Topbar } from "../Topbar";

// Full Menu Array with Submenus
const menuItems = [
    { name: "GIEO GITA", path: "/", subMenu: [] },
    { name: "Join GIEO Gita", path: "/join-gieo-gita", subMenu: [] },
    {
        name: "About",
        path: "/about-us",
        subMenu: [
            { name: "Swami ji", path: "/swami-gyananand-ji", subMenu: [] },
            { name: "Awards", path: "/swami-gyananand-ji-awards", subMenu: [] },
            { name: "Biography", path: "/swami-gyananand-ji-biography", subMenu: [] },
            {
                name: "History of GIEO Gita",
                path: "/about-us/history-of-gieogita",
                subMenu: [
                    { name: "Shlokas", path: "/about-us/history-of-gieogita/shlokas", subMenu: [] },
                    { name: "Mission & Vision", path: "/about-us/history-of-gieogita/mission-vision", subMenu: [] },
                    { name: "Aims & Objectives", path: "/about-us/history-of-gieogita/aims-objectives", subMenu: [] },
                ]
            },
            { name: "GIEO Museum", path: "/gieo-gita-museum", subMenu: [] },
            { name: "GIEO Library", path: "/library", subMenu: [] },
            { name: "Books", path: "/books", subMenu: [] },
            { name: "Virtual Tour", path: "/virtual-tour", subMenu: [] },
            { name: "Bhajan & Kirtan", path: "/bhajan-kirtan", subMenu: [] },
            { name: "How To Reach", path: "/how-to-reach", subMenu: [] },
        ]
    },
    {
        name: "Services",
        path: "/services",
        subMenu: [
            { name: "Ashrams", path: "/services/ashrams", subMenu: [] },
            {
                name: "Education", path: "/services/education", subMenu: [
                    { name: "Gita Prerna", path: "/education/gita-prerna", subMenu: [] },
                    { name: "Bal Sanskar", path: "/education/bal-sanskar", subMenu: [] },
                    { name: "Advance Programme", path: "/education/advance", subMenu: [] },
                ]
            },
            { name: "Gaushala", path: "/services/gaushala", subMenu: [] },
            { name: "Food Distribution", path: "/services/food-distribution", subMenu: [] },
            { name: "Health", path: "/services/health/medanta", subMenu: [] },
            { name: "Nature Conservation", path: "/services/nature-conservation", subMenu: [] },

            
            
            { name: 'Rooms & Auditorium', path: '/auditorium-room-booking', subMenu: [] },
        ]
    },
    {
        name: "Events", path: "/events", subMenu: [
            { name: "Monthly Events", path: "/events", subMenu: [] },
            { name: "GIEO Festivals", path: "/gieo-festivals", subMenu: [] },
            { name: "News & Media", path: "/events/news-media", subMenu: [] },
        ]
    },
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

    { name: "Get Involved", path: "/", subMenu: [
        { name: "Volunteer", path: "/volunteer", subMenu: [] },
        { name: "Careers", path: "/careers", subMenu: [] }
    ] }
];
const renderMenuItems = (items) => {
    return items.map((item, index) => (
        <li key={index} className={item.subMenu && item.subMenu.length > 0 ? "has-submenu" : ""}>
            <Link href={item.path}>{item.name}</Link>
            {item.subMenu && item.subMenu.length > 0 && (
                <ul className="submenu">
                    {renderMenuItems(item.subMenu)}
                </ul>
            )}
        </li>
    ));
};




export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar }) {
    return (
        <header className={`main-header-three ${scroll ? "fixed-header" : ""}`}>

            <nav className="main-menu main-menu-three">
                <Topbar />
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
                                        {renderMenuItems(menuItems)}
                                    </ul>

                                </div>
                            </div>

                            <div className="main-menu-three__right">
                                <div className="main-menu-three__call-and-btn-box">

                                    <div className="main-menu-three__btn-box">
                                        <Link href="/donate">
                                            <button className="main-menu-three__btn thm-btn">
                                                Pledge<span className="icon-dubble-arrow-right"></span>
                                            </button>
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
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/">
                                            <img height={70} src="/assets/logos/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu-three__main-menu-box">
                                        <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars"></i>
                                        </div>

                                        {/* Dynamic Menu */}
                                        <ul className="main-menu__list">
                                            {renderMenuItems(menuItems)}
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-three__right">
                                    <div className="main-menu-three__call-and-btn-box">

                                        <div className="main-menu-three__btn-box">
                                            <Link href="/donate">
                                                <button className="main-menu-three__btn thm-btn">
                                                    Pledge<span className="icon-dubble-arrow-right"></span>
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
