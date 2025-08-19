'use client';
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout";
import { useState } from 'react';

export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: null,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="FAQ">
                <div>
                    {/* Faq Page Start */}
                    <section className="faq-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="faq-one__left">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={`accrodion ${isActive.status && isActive.key === 1 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(1)}>
                                                    <h4>How often should I have my Skyline Roof Care?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 1 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`accrodion ${isActive.status && isActive.key === 2 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(2)}>
                                                    <h4>What Is The Peak Protection Roofing?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 2 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`accrodion ${isActive.status && isActive.key === 3 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(3)}>
                                                    <h4>What Is The Elite Roof Service?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 3 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="faq-one__left">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                            <div className={`accrodion ${isActive.status && isActive.key === 4 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(4)}>
                                                    <h4>How often should I have my Skyline Roof Care?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 4 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`accrodion ${isActive.status && isActive.key === 5 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(5)}>
                                                    <h4>What Is The Peak Protection Roofing?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 5 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`accrodion ${isActive.status && isActive.key === 6 ? 'active' : ''}`}>
                                                <div className="accrodion-title" onClick={() => handleToggle(6)}>
                                                    <h4>What Is The Elite Roof Service?</h4>
                                                </div>
                                                <div className="accrodion-content" style={{ display: isActive.status && isActive.key === 6 ? 'block' : 'none' }}>
                                                    <div className="inner">
                                                        <p>Roof Service is a vital aspect of home maintenance and repair. It encompasses a wide range of services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq Page End */}

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
