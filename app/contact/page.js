

import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import Link from "next/link";

export default function Home() {
    const contactInfo = {
        phone: [
            { number: "99965 51615 (Kurukshetra)", link: "tel:99965 51615" },
            { number: "88993 63611 (Varindavan)", link: "tel:08899363611" },
            { number: "94101 72013 (Haridwar)", link: "tel:094101 72013" },
            // { number: "(208) 555-0112", link: "tel:2085550112" }
        ],
        email: [
            { address: "info@gieogita.org", link: "mailto:info@gieogita.org" },
            { address: "gieogita@gmail.com", link: "mailto:gieogita@gmail.com" }
        ],
        Kurukshetra: "GIEO Gita, KDB Road, Kurukshetra, Haryana, India",
        Varindavan: "Shri Krishan Kripa Dham, Vrindavan, UP, India",
        Haridwar: "Shri Krishan Kripa Dham, Haridwar, India",
    };



    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="CONTACT US">
                <div>
                    {/* Google Map Start */}
                    <section className="google-map-one">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1331AdslevaFWwhqDqr7nfc_ljydWlCE&ehbc=2E312F"
                            className="google-map__one"
                            allowFullScreen
                        />
                    </section>
                    {/* Google Map End */}

                    {/* Contact Page Start */}
                    <section className="contact-page">
                        <div className="container">
                            <div className="contact-page__inner">
                                <p className="contact-page__sub-title">Contact Us</p>
                                <h3 className="contact-page__title">Get In Touch</h3>
                                <form
                               
                                    className="contact-form-validated contact-page__form"
                                    action="assets/inc/sendemail.php"
                                    method="post"
                                    noValidate
                                >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Your Number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-page__input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option value="">Choose an Option</option>
                                                        <option>Type Of Service 01</option>
                                                        <option>Type Of Service 02</option>
                                                        <option>Type Of Service 03</option>
                                                        <option>Type Of Service 04</option>
                                                        <option>Type Of Service 05</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box text-message-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message here.."
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="contact-page__btn-box">
                                                <button type="submit" className="thm-btn-two contact-page__btn">
                                                    Appointment Now
                                                    <span className="icon-dubble-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="contact-page__contact-list">
                                <div className="row">
                                    {/* Contact Page Contact List Single Start */}
                                    {Object.entries(contactInfo).map(([key, values]) => (
                                        <div key={key} className="col-xl-4 col-lg-4">
                                            <div className="contact-page__contact-list-single">
                                                <div className="contact-page__contact-list-icon">
                                                    <span className={`icon-${key === 'phone' ? 'call' : key === 'email' ? 'envelope' : 'location'}`} />
                                                </div>
                                                <div className="contact-page__contact-list-content">
                                                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                                    {Array.isArray(values) ? (
                                                        values.map((item, index) => (
                                                            <p key={index}>
                                                                <Link href={item.link}>{item.number || item.address}</Link>
                                                            </p>
                                                        ))
                                                    ) : (
                                                        <p>{values}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Contact Page Contact List Single End */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Page End */}

                    {/* CTA Two Start */}
                    {/* <CTASection
                        backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="assets/images/resources/cta-two-img-1.png"
                        title="One Shingle at a Time"
                        text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                        buttonText="Contact Us"
                        buttonLink="/contact"
                    /> */}
                    {/* CTA Two End */}
                </div>
            </Layout>
        </>
    );
}
