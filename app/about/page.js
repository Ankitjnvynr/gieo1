'use client'; // Add this line at the top
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import CounterUp from 'react-countup';
import TestimonialOne from '@/components/slider/TestimonialOne';
import BrandOne from '@/components/slider/BrandOne';
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout"


export default function Home() {
    useEffect(() => {
        // Hover Image
        const link = document.querySelectorAll(".hover-item");
        const linkHoverReveal = document.querySelectorAll(".hover-item__box");
        const linkImages = document.querySelectorAll(".hover-item__box-img");
    
        for (let i = 0; i < link.length; i++) {
          link[i].addEventListener("mousemove", (e) => {
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translate(-100%, -50%) rotate(0deg)`;
            linkImages[i].style.transform = "scale(1, 1)";
            linkHoverReveal[i].style.left = e.clientX + "px";
          });
          link[i].addEventListener("mouseleave", () => {
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(0deg)`;
            linkImages[i].style.transform = "scale(0.8, 0.8)";
          });
        }
      }, []); // Empty dependency array to run this effect only once after the initial render
        const [activeIndex, setActiveIndex] = useState(0);

        const handleOnClick = (index) => {
            setActiveIndex(index);
        };

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    
                    {/* About One Start */}
                    <section className="about-one">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                            <div
                                className="about-one__left wow slideInLeft"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                            >
                                <div className="about-one__img">
                                <img
                                    src="/assets/images/resources/about-one-img-1.png"
                                    alt=""
                                />
                                <div className="about-one__shape-3">
                                    <img
                                    src="/assets/images/shapes/about-shape-3.png"
                                    alt=""
                                    />
                                </div>
                                <div className="about-one__shape-4">
                                    <img
                                    src="/assets/images/shapes/about-shape-4.png"
                                    alt=""
                                    />
                                </div>
                                <div className="about-one__shape-1">
                                    <img
                                    src="/assets/images/shapes/about-shape-1.png"
                                    alt=""
                                    />
                                </div>
                                <div className="about-one__shape-2">
                                    <img
                                    src="/assets/images/shapes/about-shape-2.png"
                                    alt=""
                                    />
                                </div>
                                <div className="about-one__happy-client">
                                    <div className="about-one__client-img-box">
                                    <ul className="about-one__client-img-list list-unstyled">
                                        <li>
                                        <div className="about-one__client-img">
                                            <img
                                            src="/assets/images/resources/about-one-happy-client-img-1.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </li>
                                        <li>
                                        <div className="about-one__client-img">
                                            <img
                                            src="/assets/images/resources/about-one-happy-client-img-2.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </li>
                                        <li>
                                        <div className="about-one__client-img">
                                            <img
                                            src="/assets/images/resources/about-one-happy-client-img-3.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="about-one__happy-client-content">
                                    <div className="about-one__count count-box">
                                        <h3 className="count-text">
                                        <CounterUp end={2000} duration={1.5} />
                                        </h3>
                                        <span className="about-one__count-plus">+</span>
                                    </div>
                                    <p className="about-one__count-text">Happy Clients</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                            <div className="about-one__right">
                                <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">
                                    Trust the <span>experts</span> in the a roofing services
                                </h2>
                                </div>
                                <div className="about-one__main-tab-box tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li
                                    className={`tab-btn ${
                                        activeIndex === 0 ? "active-btn" : ""
                                    }`}
                                    onClick={() => handleOnClick(0)}
                                    >
                                    <p>Skills</p>
                                    </li>
                                    <li
                                    className={`tab-btn ${
                                        activeIndex === 1 ? "active-btn" : ""
                                    }`}
                                    onClick={() => handleOnClick(1)}
                                    >
                                    <p>Experience</p>
                                    </li>
                                    <li
                                    className={`tab-btn ${
                                        activeIndex === 2 ? "active-btn" : ""
                                    }`}
                                    onClick={() => handleOnClick(2)}
                                    >
                                    <p>Destination</p>
                                    </li>
                                </ul>
                                <div className="tabs-content">
                                    {/* Tab */}
                                    <div
                                    className={`tab ${activeIndex === 0 ? "active-tab" : ""}`}
                                    id="skills"
                                    >
                                    <div className="about-one__tab-content-box">
                                        <p className="about-one__text-1">
                                        Construction is an essential industry that involves
                                        building and designing structures such as buildings,
                                        roads, and bridges.
                                        </p>
                                        <div className="about-one__points-box">
                                        <ul className="about-one__points list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        <ul className="about-one__points list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Safeguard Pro Surveillance</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Elite Roofing Solutions</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="about-one__btn-box">
                                        <Link href="/about" className="about-one__btn thm-btn">
                                            Read more
                                            <span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Tab */}
                                    <div
                                    className={`tab ${
                                        activeIndex === 1 ? "active-tab" : ""
                                    }`}
                                    id="experience"
                                    >
                                    <div className="about-one__tab-content-box">
                                        <p className="about-one__text-1">
                                        Construction is an essential industry that involves
                                        building and designing structures such as buildings,
                                        roads, and bridges.
                                        </p>
                                        <div className="about-one__points-box">
                                        <ul className="about-one__points list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Safeguard Pro Surveillance</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Elite Roofing Solutions</p>
                                            </li>
                                        </ul>
                                        <ul className="about-one__points list-unstyled">                            
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="about-one__btn-box">
                                        <Link href="/about" className="about-one__btn thm-btn">
                                            Read more
                                            <span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Tab */}
                                    <div
                                    className={`tab ${
                                        activeIndex === 2 ? "active-tab" : ""
                                    }`}
                                    id="destination"
                                    >
                                    <div className="about-one__tab-content-box">
                                        <p className="about-one__text-1">
                                        Construction is an essential industry that involves
                                        building and designing structures such as buildings,
                                        roads, and bridges.
                                        </p>
                                        <div className="about-one__points-box">
                                        <ul className="about-one__points list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Elite Roofing Solutions</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Safeguard Pro Surveillance</p>
                                            </li>
                                        </ul>
                                        <ul className="about-one__points list-unstyled">                            
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack"></span>
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="about-one__btn-box">
                                        <Link href="/about" className="about-one__btn thm-btn">
                                            Read more
                                            <span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Tab */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* About One End */}

                    {/* Counter Two Start */}
                    <section className="counter-two">
                        <div className="counter-two__wrap">
                        <div
                            className="counter-two__bg-shape float-bob-y"
                            style={{ backgroundImage: 'url(/assets/images/shapes/counter-two-bg-shape.png)' }}
                        ></div>
                        <div className="container">
                            <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">why we are the best</span>
                            </div>
                            <h2 className="section-title__title">
                                Reach for the <span>Roof <br />Service</span> Stars Trust Roof
                            </h2>
                            </div>
                            <div className="row">
                            <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="counter-two__left">
                                <ul className="counter-two__points-list list-unstyled">
                                    <li>
                                    <div className="icon">
                                        <span className="icon-architect"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Reliable Roofing Pros</h3>
                                        <p>
                                        Roof service involves the installation, maintenance, and repair of roofs for the residential
                                        </p>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="icon">
                                        <span className="icon-blueprint"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Vertex Roofing Specialists</h3>
                                        <p>
                                        Roof service involves the installation, maintenance, and repair of roofs for the residential
                                        </p>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="icon">
                                        <span className="icon-wall"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Ridgeguard Roofing</h3>
                                        <p>
                                        Roof service involves the installation, maintenance, and repair of roofs for the residential
                                        </p>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="counter-two__right">
                                <div
                                    className="counter-two__right-bg-shape"
                                    style={{ backgroundImage: 'url(/assets/images/shapes/counter-two-right-bg-shape.png)' }}
                                ></div>
                                <div className="row">
                                    {/* Counter Two Single Start */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="counter-two__single">
                                        <div className="counter-two__icon">
                                        <span className="icon-architect"></span>
                                        </div>
                                        <div className="counter-two__count-box">
                                        <div className="counter-two__count count-box">
                                            <h3 className="count-text">
                                            <CounterUp end={30} duration={1.5} /> {/* Dynamic count */}
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-two__count-text">Our Project Complete</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Counter Two Single End */}
                                    {/* Counter Two Single Start */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="counter-two__single">
                                        <div className="counter-two__icon">
                                        <span className="icon-paint-roller"></span>
                                        </div>
                                        <div className="counter-two__count-box">
                                        <div className="counter-two__count count-box">
                                            <h3 className="count-text">
                                            <CounterUp end={2} duration={1.5} /> {/* Dynamic count */}
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-two__count-text">Our Team Member</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Counter Two Single End */}
                                    {/* Counter Two Single Start */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="counter-two__single">
                                        <div className="counter-two__icon">
                                        <span className="icon-wall"></span>
                                        </div>
                                        <div className="counter-two__count-box">
                                        <div className="counter-two__count count-box">
                                            <h3 className="count-text">
                                            <CounterUp end={20} duration={1.5} /> {/* Dynamic count */}
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-two__count-text">Clients Reviews</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Counter Two Single End */}
                                    {/* Counter Two Single Start */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="counter-two__single">
                                        <div className="counter-two__icon">
                                        <span className="icon-stairs"></span>
                                        </div>
                                        <div className="counter-two__count-box">
                                        <div className="counter-two__count count-box">
                                            <h3 className="count-text">
                                            <CounterUp end={7} duration={1.5} /> {/* Dynamic count */}
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-two__count-text">Our Winning Award</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Counter Two Single End */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* Counter Two End */}

                    {/* We Serve Start */}
                    <section className="we-serve">
                        <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                            <span className="section-title__tagline">We serve</span>
                            </div>
                            <h2 className="section-title__title">
                            Above All <span>Your Roof</span>
                            <br /> Very Matter
                            </h2>
                        </div>
                        <div className="we-serve__main-tab-box tabs-box">
                            <div className="row">
                            <div className="col-xl-3">
                                <div className="we-serve__left">
                                <ul className="tab-buttons list-unstyled">
                                    <li
                                    className={`tab-btn ${activeIndex === 0 ? 'active-btn' : ''}`}
                                    onClick={() => handleOnClick(0)}
                                    >
                                    <span>Roofing Layers</span>
                                    </li>
                                    <li
                                    className={`tab-btn ${activeIndex === 1 ? 'active-btn' : ''}`}
                                    onClick={() => handleOnClick(1)}
                                    >
                                    <span>Roof Solar Panels</span>
                                    </li>
                                    <li
                                    className={`tab-btn ${activeIndex === 2 ? 'active-btn' : ''}`}
                                    onClick={() => handleOnClick(2)}
                                    >
                                    <span>Roof Renovation</span>
                                    </li>
                                    <li
                                    className={`tab-btn ${activeIndex === 3 ? 'active-btn' : ''}`}
                                    onClick={() => handleOnClick(3)}
                                    >
                                    <span>Roof Installation</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="tabs-content">
                                {/* Tab 1 */}
                                <div
                                    className={`tab ${activeIndex === 0 ? 'active-tab' : ''}`}
                                    id="roofing-layers"
                                >
                                    <div className="we-serve__right">
                                    <div className="we-serve__content-box">
                                        <div className="we-serve__content-left">
                                        <span className="we-serve__content-tagline">About Us</span>
                                        <h2 className="we-serve__content-title">
                                            Trust the <span>experts</span> in the a<br />
                                            roofing services
                                        </h2>
                                        <p className="we-serve__text">
                                            Construction is an essential industry that involves
                                            <br />
                                            building and designing the structures such
                                        </p>
                                        <ul className="we-serve__points-box list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="we-serve__content-right">
                                        <div className="we-serve__content-count-box">
                                            <div className="we-serve__content-count-shape-1">
                                            <img
                                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                                alt="Count Shape"
                                            />
                                            </div>
                                            <div className="we-serve__count count-box">
                                            <h3 className="count-text">
                                                <CounterUp end={11} duration={1.5} />
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                            </div>
                                            <p className="we-serve__count-text">Clients Reviews</p>
                                        </div>
                                        <div className="we-serve__content-rating-box">
                                            <div className="we-serve__content-ratting">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star last-icon"></span>
                                            </div>
                                            <p>Score 4.1 (from clients)</p>
                                            <div className="we-serve__content-review">
                                            <Link href="#">
                                                Read reviews
                                                <span className="icon-double-arrow-right" />
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* Tab 2 */}
                                <div
                                    className={`tab ${activeIndex === 1 ? 'active-tab' : ''}`}
                                    id="roof-solar"
                                >
                                    <div className="we-serve__right">
                                    <div className="we-serve__content-box">
                                        <div className="we-serve__content-left">
                                        <span className="we-serve__content-tagline">About Us</span>
                                        <h2 className="we-serve__content-title">
                                            Trust the <span>experts</span> in the a<br />
                                            roofing services
                                        </h2>
                                        <p className="we-serve__text">
                                            Construction is an essential industry that involves
                                            <br />
                                            building and designing the structures such
                                        </p>
                                        <ul className="we-serve__points-box list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="we-serve__content-right">
                                        <div className="we-serve__content-count-box">
                                            <div className="we-serve__content-count-shape-1">
                                            <img
                                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                                alt="Count Shape"
                                            />
                                            </div>
                                            <div className="we-serve__count count-box">
                                            <h3 className="count-text">
                                                <CounterUp end={11} duration={1.5} />
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                            </div>
                                            <p className="we-serve__count-text">Clients Reviews</p>
                                        </div>
                                        <div className="we-serve__content-rating-box">
                                            <div className="we-serve__content-ratting">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star last-icon"></span>
                                            </div>
                                            <p>Score 4.1 (from clients)</p>
                                            <div className="we-serve__content-review">
                                            <Link href="#">
                                                Read reviews
                                                <span className="icon-double-arrow-right" />
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* Tab 3 */}
                                <div
                                    className={`tab ${activeIndex === 2 ? 'active-tab' : ''}`}
                                    id="roof-renovation"
                                >
                                    <div className="we-serve__right">
                                    <div className="we-serve__content-box">
                                        <div className="we-serve__content-left">
                                        <span className="we-serve__content-tagline">About Us</span>
                                        <h2 className="we-serve__content-title">
                                            Trust the <span>experts</span> in the a<br />
                                            roofing services
                                        </h2>
                                        <p className="we-serve__text">
                                            Construction is an essential industry that involves
                                            <br />
                                            building and designing the structures such
                                        </p>
                                        <ul className="we-serve__points-box list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="we-serve__content-right">
                                        <div className="we-serve__content-count-box">
                                            <div className="we-serve__content-count-shape-1">
                                            <img
                                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                                alt="Count Shape"
                                            />
                                            </div>
                                            <div className="we-serve__count count-box">
                                            <h3 className="count-text">
                                                <CounterUp end={11} duration={1.5} />
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                            </div>
                                            <p className="we-serve__count-text">Clients Reviews</p>
                                        </div>
                                        <div className="we-serve__content-rating-box">
                                            <div className="we-serve__content-ratting">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star last-icon"></span>
                                            </div>
                                            <p>Score 4.1 (from clients)</p>
                                            <div className="we-serve__content-review">
                                            <Link href="#">
                                                Read reviews
                                                <span className="icon-double-arrow-right" />
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* Tab 4 */}
                                <div
                                    className={`tab ${activeIndex === 3 ? 'active-tab' : ''}`}
                                    id="roof-installation"
                                >
                                    <div className="we-serve__right">
                                    <div className="we-serve__content-box">
                                        <div className="we-serve__content-left">
                                        <span className="we-serve__content-tagline">About Us</span>
                                        <h2 className="we-serve__content-title">
                                            Trust the <span>experts</span> in the a<br />
                                            roofing services
                                        </h2>
                                        <p className="we-serve__text">
                                            Construction is an essential industry that involves
                                            <br />
                                            building and designing the structures such
                                        </p>
                                        <ul className="we-serve__points-box list-unstyled">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Rise Above the Roof Service</p>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-cheack" />
                                            </div>
                                            <p>Premier Roofing Specialists</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="we-serve__content-right">
                                        <div className="we-serve__content-count-box">
                                            <div className="we-serve__content-count-shape-1">
                                            <img
                                                src="/assets/images/shapes/we-serve-count-shape-1.png"
                                                alt="Count Shape"
                                            />
                                            </div>
                                            <div className="we-serve__count count-box">
                                            <h3 className="count-text">
                                                <CounterUp end={11} duration={1.5} />
                                            </h3>
                                            <span>k</span>
                                            <span>+</span>
                                            </div>
                                            <p className="we-serve__count-text">Clients Reviews</p>
                                        </div>
                                        <div className="we-serve__content-rating-box">
                                            <div className="we-serve__content-ratting">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star last-icon"></span>
                                            </div>
                                            <p>Score 4.1 (from clients)</p>
                                            <div className="we-serve__content-review">
                                            <Link href="#">
                                                Read reviews
                                                <span className="icon-double-arrow-right" />
                                            </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* We Serve End */}

                    {/* Testimonial One Start */}
                    <section className="testimonial-one">
                        <div className="testimonial-one__wrap">
                        <div className="testimonial-one__shape-1">
                            <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">Clients testimonial</span>
                            </div>
                            <h2 className="section-title__title">Sheltering You with <span>Strength</span></h2>
                            </div>
                            <TestimonialOne/>
                        </div>
                        </div>
                    </section>
                    {/* Testimonial One End */}

                    {/* Brand One Start */}
                    <section className="brand-one brand-two">
                        <div className="container">
                        {/* Swiper Slider */}
                        <BrandOne/>
                        </div>
                    </section>
                    {/* Brand One End */}

                    {/* Service Three Start */}
                    <section className="services-three">
                        <div className="container">
                        <div className="services-three__inner">
                            <ul className="services-three__service-list list-unstyled">
                            <li className="hover-item">
                                <div className="services-three__service-list-single">
                                <Link href="#" className="services-three__long-arrow">
                                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                                </Link>
                                <div className="services-three__sub-title">
                                    <p>Maintenance</p>
                                </div>
                                <h3 className="services-three__title">
                                    <Link href="/peak-performance-roofing">
                                    Elevation Elite Roof
                                    </Link>
                                </h3>
                                </div>
                                <div className="hover-item__box">
                                <img
                                    src="/assets/images/services/services-three-service-list-img-1.jpg"
                                    alt="Image"
                                    className="hover-item__box-img"
                                />
                                </div>
                            </li>
                            <li className="hover-item active">
                                <div className="services-three__service-list-single">
                                <Link href="#" className="services-three__long-arrow">
                                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                                </Link>
                                <div className="services-three__sub-title">
                                    <p>Repairs</p>
                                </div>
                                <h3 className="services-three__title">
                                    <Link href="/sure-guard-roofing-services">
                                    Zenith Roofing
                                    </Link>
                                </h3>
                                </div>
                                <div className="hover-item__box">
                                <img
                                    src="/assets/images/services/services-three-service-list-img-2.jpg"
                                    alt="Image"
                                    className="hover-item__box-img"
                                />
                                </div>
                            </li>
                            <li className="hover-item">
                                <div className="services-three__service-list-single">
                                <Link href="#" className="services-three__long-arrow">
                                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                                </Link>
                                <div className="services-three__sub-title">
                                    <p>Inspections</p>
                                </div>
                                <h3 className="services-three__title">
                                    <Link href="/skyline-roofing-solutions">
                                    Skyline Pro Roofing
                                    </Link>
                                </h3>
                                </div>
                                <div className="hover-item__box">
                                <img
                                    src="/assets/images/services/services-three-service-list-img-3.jpg"
                                    alt="Image"
                                    className="hover-item__box-img"
                                />
                                </div>
                            </li>
                            <li className="hover-item">
                                <div className="services-three__service-list-single">
                                <Link href="#" className="services-three__long-arrow">
                                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                                </Link>
                                <div className="services-three__sub-title">
                                    <p>Restoration</p>
                                </div>
                                <h3 className="services-three__title">
                                    <Link href="/top-notch-roofing-restoration">
                                    Altitude Roof Expert
                                    </Link>
                                </h3>
                                </div>
                                <div className="hover-item__box">
                                <img
                                    src="/assets/images/services/services-three-service-list-img-4.jpg"
                                    alt="Image"
                                    className="hover-item__box-img"
                                />
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    {/* Service Three End */}

                    {/* CTA Two Start */}
                    <CTASection
                        backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="assets/images/resources/cta-two-img-1.png"
                        title="One Shingle at a Time"
                        text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                        buttonText="Contact Us"
                        buttonLink="/contact"
                    />
                    {/* CTA Two End */}
                </div>
            </Layout>
        </>
    )
}