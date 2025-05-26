import Link from 'next/link';

export default function WorkProcess() {
  return (
    <>
      {/* Work Process Start */}
      <section className="work-process">
        <div className="work-process__inner">
          <div className="container">
            <div className="row">
              {/* Work Process Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="work-process__single">
                  <div className="work-process__count"></div>
                  <div className="work-process__icon">
                    <span className="icon-buildings"></span>
                  </div>
                  <p className="work-process__text">Roof service involves the maintenance and repair of roofs commercial</p>
                  <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Work Process Single End */}
              {/* Work Process Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                <div className="work-process__single">
                  <div className="work-process__count"></div>
                  <div className="work-process__icon">
                    <span className="icon-crane"></span>
                  </div>
                  <p className="work-process__text">Roof service involves the maintenance and repair of roofs commercial</p>
                  <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Work Process Single End */}
              {/* Work Process Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                <div className="work-process__single">
                  <div className="work-process__count"></div>
                  <div className="work-process__icon">
                    <span className="icon-caren"></span>
                  </div>
                  <p className="work-process__text">Roof service involves the maintenance and repair of roofs commercial</p>
                  <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Work Process Single End */}
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}
    </>
  );
}
