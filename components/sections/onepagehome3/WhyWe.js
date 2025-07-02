import Link from 'next/link';

export default function WhyWe() {
  return (
    <>
      {/* Why We Are Start */}
      <section className="why-we-are">
        <div className="why-we-are__wrap">
          <div className="container">
            <div className="row">
              {/* Left Content */}
              <div className="col-xl-7">
                <div className="why-we-are__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">why choose medanta</span>
                    </div>
                    <h2 className="section-title__title">
                      Trusted for <span>Compassionate</span><br /> and Quality Healthcare
                    </h2>
                  </div>
                  <ul className="why-we-are__list list-unstyled">
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/medical-outreach-programs">Rural Health Outreach</Link>
                        </h3>
                        <p>
                          Delivering medical care to underserved villages<br />
                          through mobile clinics and wellness camps.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/medical-outreach-programs">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/free-treatment-initiatives">Free Treatment Initiatives</Link>
                        </h3>
                        <p>
                          Supporting economically weaker sections<br />
                          with advanced diagnostics and surgeries at no cost.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/free-treatment-initiatives">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/awareness-campaigns">Health Awareness Campaigns</Link>
                        </h3>
                        <p>
                          Educating communities on preventive care,<br />
                          nutrition, and lifestyle diseases.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/awareness-campaigns">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Images */}
              <div className="col-xl-5">
                <div
                  className="why-we-are__right wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="why-we-are__img-box">
                    <div className="why-we-are__img">
                      <img src="/assets/images/resources/why-we-are-img-1.jpg" alt="Medanta Outreach" />
                    </div>
                    <div className="why-we-are__img-2">
                      <img src="/assets/images/resources/why-we-are-img-2.jpg" alt="Healthcare Service" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* Why We Are End */}
    </>
  );
}
