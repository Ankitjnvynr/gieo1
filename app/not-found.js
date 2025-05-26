import Link from "next/link";
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout";

export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="404 Error">
                <div>
                    {/* Error Page Start */}
                    <section className="error-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="error-page__inner">
                                        <div className="error-page__title-box">
                                            <h2 className="error-page__title">404</h2>
                                        </div>
                                        <h3 className="error-page__tagline">Sorry we can't find that page!</h3>
                                        <p className="error-page__text">The page you are looking for was never existed.</p>
                                        <form className="error-page__form">
                                            <div className="error-page__form-input">
                                                <input type="search" placeholder="Search here" />
                                                <button type="submit"><i className="icon-search"></i></button>
                                            </div>
                                        </form>
                                        <Link href="/" className="thm-btn error-page__btn">
                                            Back to home <span className="icon-dubble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Error Page End */}

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
    );
}
