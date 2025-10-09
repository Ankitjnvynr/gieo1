// components/Header3.js
"use client";
import React from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { Topbar } from "../Topbar";

// Full Menu Array with Submenus
const menuItems = [
    { name: "Home", path: "/", subMenu: [] },
    {
        name: "About",
        path: "/about-us",
        subMenu: [
            { name: "Mission & Vision", path: "/about/vision-mission", subMenu: [] },
            { name: "Our Founder (Swami Gyananand Ji Maharaj)", path: "/swami-gyananand-ji", subMenu: [] },
            { name: "Our Journey", path: "/about-us/history-of-gieogita", subMenu: [] },
        ]
    },
    {
        name: "IGM",
        path: "/gieo-festivals",
        subMenu: [
            { name: "Past Highlights", path: "/past", subMenu: [] },
            { name: "Media", path: "/events/news-media", subMenu: [] },
            { name: "Registration Info", path: "/gieo-festivals/registration", subMenu: [] },
        ]
    },
    {
        name: "GGS",
        path: "/gita-gyan-sansthanam",
        subMenu: [
            { name: "Overview", path: "/gita-gyan-sansthanam/overview", subMenu: [] },
            { name: "Museum", path: "/gieo-gita-museum", subMenu: [] },
            { name: "Auditorium", path: "/auditorium-room-booking", subMenu: [] },
            { name: "Wellness Centre & Hospital", path: "/services/health/medanta", subMenu: [] },
            { name: "Mandir & Jal Kund", path: "/gita-gyan-sansthanam/mandir", subMenu: [] },
            { name: "Pillar of 700 Verses", path: "/gita-gyan-sansthanam/pillar", subMenu: [] },
            { name: "Gaushalas", path: "/services/gaushala", subMenu: [] },
            { name: "Future Retreats", path: "/gita-gyan-sansthanam/retreats", subMenu: [] },
        ]
    },
    {
        name: "Initiatives",
        path: "/services",
        subMenu: [
            { 
                name: "Education", 
                path: "/services/education", 
                subMenu: [
                    { name: "Gita Prerna", path: "/education/gita-prerna", subMenu: [] },
                    { name: "Bal Sanskar", path: "/education/bal-sanskar", subMenu: [] },
                    { name: "Advance Programme", path: "/education/advance", subMenu: [] },
                ]
            },
            { name: "Health", path: "/services/health/medanta", subMenu: [] },
            { name: "Nature Conservation", path: "/services/nature-conservation", subMenu: [] },
            { name: "Gau Seva", path: "/services/gaushala", subMenu: [] },
        ]
    },
    {
        name: "Events",
        path: "/events",
        subMenu: [
            { name: "Upcoming Events", path: "/events/upcoming", subMenu: [] },
            { name: "Past Events", path: "/events/past", subMenu: [] },
            { name: "International Engagement", path: "/events/international", subMenu: [] },
        ]
    },
    {
        name: "Chapters",
        path: "/chapters",
        subMenu: [
            { name: "India", path: "/chapters/india", subMenu: [] },
            { name: "United Kingdom", path: "https://www.gieogita.org.uk", subMenu: [], external: true },
        ]
    },
    {
        name: "Community",
        path: "/community",
        subMenu: [
            { name: "Testimonials & Stories", path: "/community/testimonials", subMenu: [] },
            { name: "Shloka Learning Tools", path: "/about-us/history-of-gieogita/shlokas", subMenu: [] },
            { name: "Submit Photos/Videos", path: "/community/submit", subMenu: [] },
            { name: "Volunteer Sign-Up", path: "/volunteer", subMenu: [] },
        ]
    },
    {
        name: "Resources",
        path: "/download",
        subMenu: [
            { name: "E-books", path: "/download/e-book", subMenu: [] },
            { name: "Shloka Library", path: "/library", subMenu: [] },
            { name: "Blog/News", path: "/contact/blog", subMenu: [] },
            { name: "Gallery", path: "/gallery", subMenu: [] },
            { name: "Virtual Tour", path: "/virtual-tour", subMenu: [] },
        ]
    },
    {
        name: "Get Involved",
        path: "/get-involved",
        subMenu: [
            { name: "Membership", path: "/join-gieo-gita", subMenu: [] },
            { name: "Donate", path: "/donate", subMenu: [] },
            { name: "Contact", path: "/contact", subMenu: [] },
        ]
    },
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

            <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content" />
                <nav className="main-menu main-menu-three">
                    <div className="main-menu-three__wrapper">
                        <div className="container">
                            <div className="main-menu-three__wrapper-inner">
                                <div className="main-menu-three__left">
                                    <div className="main-menu-three__logo">
                                        <Link href="/">
                                            <img style={{width:70}} src="/assets/logos/logo.png" alt="Logo" />
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
