'use client'
import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import { useState } from 'react';
import Link from "next/link";

export default function Home() {
    const [serviceDetails] = useState({
        title: "Rise Above the Rest with Roof",
        text1: "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity",
        image1: "/assets/images/services/service-details-img-1-3.jpg",
        title2: "Service all details",
        text2: "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity",
        points: [
            "Transforming houses into homes with superior",
            "Experience peace of mind under a sturdy",
            "Rise Above the Roof Service",
            "Roofing solutions tailored to your budget",
        ],
        images: [
            "/assets/images/services/service-details-images-1-1.jpg",
            "/assets/images/services/service-details-images-1-2.jpg",
        ],
        content3Title: "Elevating Excellence",
        text3: "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity",
        text4: "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for",
        features: [
            {
                icon: "icon-crane-1",
                title: "Reliable Roof Repair",
                text: "Roof service involves the installation, maintenance, and repair of roofs for the commercial",
                link: "#",
            },
            {
                icon: "icon-buildings",
                title: "Building Roof Repair",
                text: "Roof service involves the installation, maintenance, and repair of roofs for the commercial",
                link: "#",
            },
        ],
        sidebarLinks: [
            { href: "/peak-performance-roofing", text: "Peak Performance Roofing" },
            { href: "/skyline-roofing-solutions", text: "Skyline Roofing Solutions" },
            { href: "/sure-guard-roofing-services", text: "Sure Guard Roofing Services" },
            { href: "/reliable-roof-repair", text: "Reliable Roof Repair" },
            { href: "/top-notch-roofing-restoration", text: "Top Notch Roofing Restoration" },
        ],
    });

   

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Peak Performance Roofing">
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
                                                <img src={serviceDetails.image1} alt={serviceDetails.title} />
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
                                                            <img src={image} alt={`Service detail ${index + 1}`} />
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
                                            <h4 className="service-details__sidebar-title">Main Service</h4>
                                            <ul className="service-details__service-list list-unstyled">
                                                {serviceDetails.sidebarLinks.map((link, index) => (
                                                    <li key={index} className={index === 2 ? "active" : ""}>
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
                        backgroundImage="/assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="/assets/images/resources/cta-two-img-1.png"
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