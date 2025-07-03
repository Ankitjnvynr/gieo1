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
                      Driven by <span>Care</span><br /> Guided by Purpose
                    </h2>
                  </div>
                  <ul className="why-we-are__list list-unstyled">
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/accessible-healthcare">Accessible Healthcare for All</Link>
                        </h3>
                        <p>
                          Bridging the healthcare gap with affordable<br />
                          medical services for underserved communities.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/accessible-healthcare">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/specialist-consultations">Expert Consultations & Diagnostics</Link>
                        </h3>
                        <p>
                          Cardiac, general, dental, and diagnostic services<br />
                          under one roof with advanced facilities.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/specialist-consultations">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3>
                          <Link href="/csr-initiatives">A Mission Rooted in CSR</Link>
                        </h3>
                        <p>
                          Inspired by the belief that “Every Life is Precious” —<br />
                          making healthcare a right, not a privilege.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/csr-initiatives">
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
                      <img
                        src="/assets/images/resources/why-we-are-img-1.jpg"
                        alt="Medanta Outreach"
                      />
                    </div>
                    <div className="why-we-are__img-2">
                      <img
                        src="/assets/images/resources/why-we-are-img-2.jpg"
                        alt="Healthcare Service"
                      />
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
