"use client";

import CountUp from 'react-countup';

export default function WhyWe() {
  return (
    <>
      {/* Why We Are Two Start */}
      <section className="why-we-are-two">
        <div className="why-we-are-two__wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="why-we-are-two__left">
                  <div className="why-we-are-two__img-box">
                    <div className="why-we-are-two__img">
                      <img src="/assets/images/resources/why-we-are-two-img-1.jpg" alt="Why GIEO Gita" />
                    </div>
                    <div className="why-we-are-two__shape-1 float-bob-y">
                      <img src="/assets/images/shapes/why-we-are-two-shape-1.png" alt="" />
                    </div>
                    <div className="why-we-are-two__count-box">
                      <div className="why-we-are-two__count-icon">
                        <span className="icon-Flaticon"></span>
                      </div>
                      <div className="why-we-are-two__count-inner">
                        <div className="why-we-are-two__count count-box">
                          <h3 className="count-text">
                            <CountUp end={3000} duration={1.5} />
                          </h3>
                          <span className="why-we-are-two__count-plus">+</span>
                        </div>
                        <p className="why-we-are-two__count-text">Seva Contributions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="why-we-are-two__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <div className="section-title__shape"></div>
                      <span className="section-title__tagline">Why Choose GIEO Gita</span>
                    </div>
                    <h2 className="section-title__title">
                      Empowering Through <span>Gita Wisdom</span><br /> Serving Humanity with Values
                    </h2>
                  </div>
                  <ul className="why-we-are-two__list list-unstyled">
                    <li>
                      <div className="content">
                        <h3>Transforming Lives</h3>
                        <p>Spreading Bhagavad Gita knowledge to uplift individuals<br /> and guide them to a purposeful life.</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                    <li>
                      <div className="content">
                        <h3>Seva with Impact</h3>
                        <p>Initiatives like Gaushala, Gurukul, and Bal Sanskar<br /> programs help preserve dharma and culture.</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                    <li>
                      <div className="content">
                        <h3>Global Gita Mission</h3>
                        <p>Dedicated to creating a Gita-empowered society<br /> through global outreach and service projects.</p>
                      </div>
                      <div className="why-we-are-two__list-count"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why We Are Two End */}
    </>
  );
}
