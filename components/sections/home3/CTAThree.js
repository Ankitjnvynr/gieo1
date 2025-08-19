import Link from 'next/link';

// CTA data (if needed for dynamic content)
const ctaData = {
  contactNumber1: '01959701730',
  contactNumber2: '(603) 555-0123',
};

export default function CTAThree() {
  return (
    <>
      {/* CTA Three Start */}
      <section className="cta-three">
        <div className="container">
          <div className="cta-three__inner">
            <div
              className="cta-three__bg"
              style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-three-bg.jpg)' }}
            ></div>
            <div className="cta-three__left">
              <h3 className="cta-three__title">Need any help? Please<br /> contact us</h3>
              <div className="cta-three__contact-number">
                <div className="cta-three__left-shape float-bob-x">
                  <img src="/assets/images/shapes/cta-three-left-shape-1.png" alt="" />
                </div>
                <a href={`tel:${ctaData.contactNumber1}`}>{ctaData.contactNumber1}</a>
                <a href={`tel:${ctaData.contactNumber2}`}>{ctaData.contactNumber2}</a>
              </div>
            </div>
            <div className="cta-three__right">
              <div className="cta-three__icon-and-btn">
                <div className="cta-three__icon-box">
                  <div className="cta-three__icon-shape"></div>
                  <div className="cta-three__icon">
                    <span className="icon-call"></span>
                  </div>
                </div>
                <div className="cta-three__btn-box">
                  <Link href="/contact" className="cta-three__btn thm-btn-two">
                    Contact Us<span className="icon-dubble-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Three End */}
    </>
  );
}
