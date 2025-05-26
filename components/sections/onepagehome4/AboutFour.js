import Link from 'next/link';

export default function AboutFour() {
  return (
    <>
      {/* About Four Start */}
      <section className="about-four" id="about">
        <div
          className="about-four__bg"
          style={{ backgroundImage: 'url(assets/images/backgrounds/about-four-bg.jpg)' }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              <div className="about-four__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">Reach New Heights with Us Every Time</h2>
                </div>
                <p className="about-four__text">
                  Roof service involves the installation, maintenance, and repair of roofs for the residential and commercial buildings. The contractors
                </p>
                <ul className="about-four__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-wall"></span>
                    </div>
                    <div className="content">
                      <h3>Reliable Roofing Pros</h3>
                      <p>
                        Roof service involves the installation, maintenance, and repair of roofs for the residential. Roof service involves the installation
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-crane-5"></span>
                    </div>
                    <div className="content">
                      <h3>Ridgeguard Roofing</h3>
                      <p>
                        Roof service involves the installation, maintenance, and repair of roofs for the residential. Roof service involves the installation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Four End */}
    </>
  );
}
