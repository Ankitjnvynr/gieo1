import Link from 'next/link';


export default function WhyWe() {
  return (
    <>
      {/* Why We Are Start */}
      <section className="why-we-are">
        <div className="why-we-are__wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="why-we-are__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">why we are the best</span>
                    </div>
                    <h2 className="section-title__title">
                      Reach for the <span>Roof Service</span><br /> Stars Trust Roof
                    </h2>
                  </div>
                  <ul className="why-we-are__list list-unstyled">
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/reliable-roof-repair">Reliable Roofing Pros</Link></h3>
                        <p>
                          Roof service involves the installation maintenance<br /> and repair of roofs for the residential
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/reliable-roof-repair">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/sure-guard-roofing-services">Ridgeguard Roofing</Link></h3>
                        <p>
                          Roof service involves the installation maintenance<br /> and repair of roofs for the residential
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/sure-guard-roofing-services">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/top-notch-roofing-restoration">Overhead Guardian Services</Link></h3>
                        <p>
                          Roof service involves the installation maintenance<br /> and repair of roofs for the residential
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/top-notch-roofing-restoration">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="why-we-are__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div className="why-we-are__img-box">
                    <div className="why-we-are__img">
                      <img src="/assets/images/resources/why-we-are-img-1.jpg" alt="Why We Are Image 1" />
                    </div>
                    <div className="why-we-are__img-2">
                      <img src="/assets/images/resources/why-we-are-img-2.jpg" alt="Why We Are Image 2" />
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
