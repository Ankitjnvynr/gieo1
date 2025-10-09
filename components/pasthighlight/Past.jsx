'use client'
import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import { useState } from 'react';
import Link from "next/link";

export default function Home() {
    // State to hold dynamic content for Past Highlights
    const [serviceDetails] = useState({
        title: "Celebrating Our Memorable Moments",
        text1: "Past Highlights showcases our journey through spectacular events and unforgettable experiences. From vibrant festivals to meaningful community gatherings, each moment captures the essence of joy, connection, and celebration. Our collection features stunning photography and heartwarming memories that bring our community together.",
        image1: "assets/images/services/service-details-img-1-1.jpg",
        title2: "Our Event Journey",
        text2: "Every event we organize is crafted with passion and dedication to create lasting memories. Our past highlights reflect the diversity of celebrations, from music festivals and charity galas to art exhibitions and seasonal festivities. Each gathering brings together people from all walks of life, creating moments that resonate with warmth and joy.",
        points: [
            "Capturing unforgettable moments through professional photography",
            "Creating meaningful connections within our community",
            "Celebrating diversity with vibrant cultural events",
            "Sharing memories across social media platforms",
        ],
        images: [
            "assets/images/services/service-details-images-1-1.jpg",
            "assets/images/services/service-details-images-1-2.jpg",
        ],
        content3Title: "Reliving Beautiful Memories",
        text3: "Each highlight represents more than just an event—it's a story of people coming together, sharing laughter, and creating bonds that last beyond the celebration. Our commitment to excellence ensures every detail is captured, from the grand moments to the intimate interactions that make each event special.",
        text4: "Browse through our collection of past events and experience the magic of our celebrations. Connect with us on Facebook and Instagram to see exclusive photos, behind-the-scenes moments, and relive the memories that shaped our community.",
        features: [
            {
                icon: "icon-crane-1",
                title: "Summer Music Festival",
                text: "An unforgettable evening filled with live performances, food, and entertainment for all ages",
                link: "#",
            },
            {
                icon: "icon-buildings",
                title: "Annual Charity Gala",
                text: "A glamorous night of giving back, featuring auctions, dinner, and inspiring stories of impact",
                link: "#",
            },
        ],
        sidebarLinks: [
            { href: "summer-music-festival", text: "Summer Music Festival 2024" },
            { href: "annual-charity-gala", text: "Annual Charity Gala" },
            { href: "spring-art-exhibition", text: "Spring Art Exhibition" },
            { href: "winter-wonderland-festival", text: "Winter Wonderland Festival" },
            { href: "community-food-festival", text: "Community Food Festival" },
        ],
    });
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Past Highlights">
                <div>
                    {/* Service Details Start */}
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__content-one">
                                            <h2 className="service-details__title-one">{serviceDetails.title}</h2>
                                            <p className="service-details__text-1">{serviceDetails.text1}</p>
                                            <div className="service-details__img-one">
                                                <img src={serviceDetails.image1} alt="" />
                                            </div>
                                        </div>
                                        <div className="service-details__content-two">
                                            <h4 className="service-details__title-two">{serviceDetails.title2}</h4>
                                            <p className="service-details__text-2">{serviceDetails.text2}</p>
                                            <ul className="list-unstyled service-details__points">
                                                {serviceDetails.points.map((point, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <div className="text">
                                                            <p>{point}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="service-details__images-box">
                                            <div className="row">
                                                {serviceDetails.images.map((image, index) => (
                                                    <div key={index} className="col-xl-6 col-lg-6">
                                                        <div className="service-details__images-single">
                                                            <img src={image} alt="" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="service-details__content-three">
                                            <h4 className="service-details__title-four">{serviceDetails.content3Title}</h4>
                                            <p className="service-details__text-3">{serviceDetails.text3}</p>
                                            <p className="service-details__text-4">{serviceDetails.text4}</p>
                                        </div>
                                        <div className="service-details__feature-box">
                                            <div className="row">
                                                {serviceDetails.features.map((feature, index) => (
                                                    <div key={index} className="col-xl-6">
                                                        <div className="service-details__feature-single">
                                                            <div className="service-details__feature-icon-box">
                                                                <div className="service-details__feature-icon">
                                                                    <span className={feature.icon} />
                                                                </div>
                                                                <h4 className="service-details__feature-title">
                                                                    <Link href={feature.link}>{feature.title}</Link>
                                                                </h4>
                                                            </div>
                                                            <p className="service-details__feature-text">{feature.text}</p>
                                                            <Link href={feature.link} className="service-details__read-more">
                                                                Read more <span className="icon-dubble-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="service-details__sidebar">
                                        <div className="service-details__service-list-box">
                                            <h4 className="service-details__sidebar-title">Featured Events</h4>
                                            <ul className="service-details__service-list list-unstyled">
                                                {serviceDetails.sidebarLinks.map((link, index) => (
                                                    <li key={index} className={index === 0 ? "active" : ""}>
                                                        <Link href={link.href}>
                                                            <span className="icon-dubble-arrow-right" />
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Service Details End */}
                    {/* CTA Two Start */}
                        <CTASection
                        backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="assets/images/resources/cta-two-img-1.png"
                        title="Follow Our Journey on Social Media"
                        text="Stay connected with us on Facebook and Instagram to see exclusive photos, behind-the-scenes moments, and upcoming events. Join our growing community!"
                        buttonText="View Gallery"
                        buttonLink="/past-highlights"
                        />
                    {/* CTA Two End */}
                </div>
            </Layout>
        </>
    )
}