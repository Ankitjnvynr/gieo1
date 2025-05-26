"use client"; // Ensure this component runs on the client side
import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
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
                <div className="about-one__img, p-3 mt-5">
                  <img
                    src="/assets/images/resources/about-one-img-1.png"
                    alt=""
                  />
                  {/* <div className="about-one__shape-3">
                    <img
                      src="/assets/images/shapes/about-shape-3.png"
                      alt=""
                    />
                  </div> */}
                  <div className="about-one__shape-4">
                    <img
                      src="/assets/images/shapes/about-shape-4.png"
                      alt=""
                    />
                  </div>
                  {/* <div className="about-one__shape-1">
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
                  </div> */}
                  {/* <div className="about-one__happy-client">
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
                          <CountUp end={2000} duration={1.5} />
                        </h3>
                        <span className="about-one__count-plus">+</span>
                      </div>
                      <p className="about-one__count-text">Happy Clients</p>
                    </div>
                  </div> */}
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
        Guided by the <span>wisdom</span> of the Gita
      </h2>
    </div>
    <div className="about-one__main-tab-box tabs-box">
      <ul className="tab-buttons clearfix list-unstyled">
        <li
          className={`tab-btn ${activeIndex === 0 ? "active-btn" : ""}`}
          onClick={() => handleOnClick(0)}
        >
          <p>Teachings</p>
        </li>
        <li
          className={`tab-btn ${activeIndex === 1 ? "active-btn" : ""}`}
          onClick={() => handleOnClick(1)}
        >
          <p>Journey</p>
        </li>
        <li
          className={`tab-btn ${activeIndex === 2 ? "active-btn" : ""}`}
          onClick={() => handleOnClick(2)}
        >
          <p>Purpose</p>
        </li>
      </ul>
      <div className="tabs-content">
        {/* Tab - Teachings */}
        <div className={`tab ${activeIndex === 0 ? "active-tab" : ""}`} id="teachings">
          <div className="about-one__tab-content-box">
            <p className="about-one__text-1">
              At Gieogita, we are devoted to sharing the eternal teachings of the Bhagavad Gita—
              a timeless scripture guiding humanity through Bhakti, Karma, and Jnana.
            </p>
            <div className="about-one__points-box">
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Empowering lives through divine knowledge</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Daily spiritual practices and inspiration</p>
                </li>
              </ul>
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Bhakti-led transformation and service</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Krishna’s Kirpa as our guiding light</p>
                </li>
              </ul>
            </div>
            <div className="about-one__btn-box">
              <Link href="/about" className="about-one__btn thm-btn">
                Read more <span className="icon-dubble-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Tab - Journey */}
        <div className={`tab ${activeIndex === 1 ? "active-tab" : ""}`} id="journey">
          <div className="about-one__tab-content-box">
            <p className="about-one__text-1">
              Our journey is rooted in spreading light through the verses of the Gita,
              building a community of seekers and sadhaks connected by Krishna Bhakti.
            </p>
            <div className="about-one__points-box">
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Inspired by timeless wisdom</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Leading a path of devotion and truth</p>
                </li>
              </ul>
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Uplifting souls with purpose</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Embracing divine Kirpa</p>
                </li>
              </ul>
            </div>
            <div className="about-one__btn-box">
              <Link href="/about" className="about-one__btn thm-btn">
                Read more <span className="icon-dubble-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Tab - Purpose */}
        <div className={`tab ${activeIndex === 2 ? "active-tab" : ""}`} id="purpose">
          <div className="about-one__tab-content-box">
            <p className="about-one__text-1">
              Gieogita’s purpose is to awaken spiritual consciousness through the divine words of Krishna. 
              We strive to live by the message of the Gita and serve others with humility and love.
            </p>
            <div className="about-one__points-box">
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Chanting, meditating, and living Gita wisdom</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Building a community of seekers</p>
                </li>
              </ul>
              <ul className="about-one__points list-unstyled">
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Serving with devotion and compassion</p>
                </li>
                <li>
                  <div className="icon"><span className="icon-cheack"></span></div>
                  <p>Krishna is the doer; we are but instruments</p>
                </li>
              </ul>
            </div>
            <div className="about-one__btn-box">
              <Link href="/about" className="about-one__btn thm-btn">
                Read more <span className="icon-dubble-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gita Shloka */}
      <div className="about-one__quote-box">
        <blockquote>
          <p>
            <em>
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
              मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥"
            </em>
            <br />
            — Bhagavad Gita 2.47
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      {/* About One End */}
    </>
  );
}
