import React from 'react';
import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team Details">
                <div>
                    {/* Team Details Start */}
                    <section className="team-details">
                        <div className="container">
                            <div className="team-details__top">
                                <div className="team-details__img">
                                    <img src="/assets/images/team/team-details-img-1.jpg" alt="" />
                                </div>
                                <div className="team-details__content">
                                    <div className="team-details__name-and-social-box">
                                        <div className="team-details__name-box">
                                            <div className="team-details__name-box-shape">
                                                <img src="/assets/images/shapes/team-details-name-box-shape.png" alt="" />
                                            </div>
                                            <h3 className="team-details__name">Wade Warren</h3>
                                            <p className="team-details__sub-title">CEO/Founder</p>
                                        </div>
                                        <div className="team-details__social">
                                            <Link href="#"><span className="icon-facebook-f"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-linkedin-in"></span></Link>
                                        </div>
                                    </div>
                                    <p className="team-details__top-text">
                                        Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity and durability of roofs Roof Service is a category encompasses.
                                    </p>
                                    <div className="team-details__btn-contact-inner">
                                        <div className="team-details__btn-contact">
                                            <div className="team-details__btn-box">
                                                <Link href="/contact" className="team-details__btn thm-btn-two">
                                                    Contact <span className="icon-dubble-arrow-right"></span>
                                                </Link>
                                            </div>
                                            <div className="team-details__contact">
                                                <div className="icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <h3><a href="tel:01959701730">01959701730</a></h3>
                                            </div>
                                        </div>
                                        <div className="team-details__sign">
                                            <img src="/assets/images/shapes/sign.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details__bottom">
                                <div className="team-details__progress-inner">
                                    <h3 className="team-details__progress-title-1">Skills</h3>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="team-details__progress-list">
                                                <ul className="team-details__progress-box list-unstyled">
                                                    <li>
                                                        <div className="team-details__progress">
                                                            <h4 className="team-details__progress-title">Developing process</h4>
                                                            <div className="bar">
                                                                <div className="bar-inner_one count-bar" data-percent="70%">
                                                                    <div className="count-text">70%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="team-details__progress">
                                                            <h4 className="team-details__progress-title">Market product launch</h4>
                                                            <div className="bar">
                                                                <div className="bar-inner_three count-bar" data-percent="80%">
                                                                    <div className="count-text">80%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="team-details__progress-list team-details__progress-list-2">
                                                <ul className="team-details__progress-box list-unstyled">
                                                    <li>
                                                        <div className="team-details__progress">
                                                            <h4 className="team-details__progress-title">Management</h4>
                                                            <div className="bar">
                                                                <div className="bar-inner_two count-bar" data-percent="50%">
                                                                    <div className="count-text">50%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="team-details__progress">
                                                            <h4 className="team-details__progress-title">Business Advice</h4>
                                                            <div className="bar">
                                                                <div className="bar-inner_four count-bar" data-percent="90%">
                                                                    <div className="count-text">90%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="team-details__bottom-title-1">Honors & Awards</h3>
                                <p className="team-details__bottom-text-1">
                                    Web designing in a powerful way of just not an only professions, however, in a passion Company. have a tendency to believe the idea that smart-looking any website is the impression on visitors. Web designing in a powerful way only professions Web designing in a powerful way of just not an only profess however in passion Company. have a tendency to believe Roof Service is a category that encompasses a range of services related to roofs.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Team Details End */}

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
    );
}
