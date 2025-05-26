import Link from 'next/link';

// CTA data
const ctaData = {
  backgroundImage: '/assets/images/backgrounds/cta-two-bg.jpg',
  imageSrc: '/assets/images/resources/cta-two-img-1.png',
  title: 'One Shingle at a Time',
  text: 'Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings.',
  buttonText: 'Contact Us',
  buttonLink: '/contact',
};

export default function CTATwo() {
  return (
    <>
      {/* CTA Two Start */}
      <section className="cta-two">
        <div className="container">
          <div className="cta-two__inner">
            <div
              className="cta-two__bg"
              style={{ backgroundImage: `url(${ctaData.backgroundImage})` }}
            ></div>
            <div className="cta-two__img-and-content">
              <div className="cta-two__img">
                <img src={ctaData.imageSrc} alt="CTA Image" />
              </div>
              <div className="cta-two__content">
                <h3 className="cta-two__title">{ctaData.title}</h3>
                <p className="cta-two__text">{ctaData.text}</p>
                <div className="cta-two__btn-box">
                  <Link href={ctaData.buttonLink} className="cta-two__btn thm-btn-two">
                    {ctaData.buttonText}
                    <span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Two End */}
    </>
  );
}
