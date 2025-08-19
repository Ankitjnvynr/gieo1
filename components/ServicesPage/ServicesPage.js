import React from 'react';
import Link from 'next/link';

export default function ServicesPage({ services }) {
  return (
    <>
      {/* Services Page Start */}
      <section className="services-page">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-xl-4">
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src={service.imgSrc} alt={service.title} />
                    </div>
                    <div className="services-one__icon">
                      <span className={service.iconClass} />
                    </div>
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h3>
                    <p className="services-one__text">{service.description}</p>
                    <div className="services-one__btn-box">
                      <Link href={service.link} className="services-one__btn thm-btn">
                        Read more
                        <span className="icon-dubble-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Page End */}
    </>
  );
}
