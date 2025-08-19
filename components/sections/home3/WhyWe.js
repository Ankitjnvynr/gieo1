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
                      <span className="section-title__tagline">why we are different</span>
                    </div>
                    <h2 className="section-title__title">
                      Spreading <span>Spiritual Wisdom</span><br /> through the Gita
                    </h2>
                  </div>
                  <ul className="why-we-are__list list-unstyled">
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/gita-classes">Gita Learning Programs</Link></h3>
                        <p>
                          Structured lessons based on the Bhagavad Gita,<br /> designed for seekers of all ages.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/gita-classes">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/bal-sanskar">Bal Sanskar for Kids</Link></h3>
                        <p>
                          Fun and educational activities to instill moral<br /> and spiritual values from an early age.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/bal-sanskar">
                          <span className="icon-arrow-right-2"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="why-we-are__list-content">
                        <h3><Link href="/spiritual-events">Satsangs & Events</Link></h3>
                        <p>
                          Join us for spiritual gatherings, kirtans,<br /> and life-transforming discourses.
                        </p>
                      </div>
                      <div className="why-we-are__list-arrow">
                        <Link href="/spiritual-events">
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
                      <img  src="/assets/images/resources/spritual copy.jpg" alt="Why We Are Image 1" />
                    </div>
                    <div className="why-we-are__img-2">
                      <img height={205} src="/assets/images/resources/why-we-are-img-2.jpg" alt="Why We Are Image 2" />
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
