import Link from 'next/link';

// CTA data
const ctaData = {
  contactNumber1: '9959701730',
  contactNumber2: '(0124) 4855017',
  whatsappNumber: '919959701730', // for wa.me link
};

export default function CTAThree() {
  return (
    <>
      {/* CTA Three Start */}
      <section className="cta-three">
        <div className="container">
          <div className="cta-three__inner">
            {/* <div
              className="cta-three__bg"
              style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-three-bg.jpg)' }}
            ></div> */}

            {/* Left Content */}
            <div className="cta-three__left">
              <h3 className="cta-three__title">
                Need medical support or information?<br /> Contact Medanta Foundation
              </h3>

              <div className="cta-three__contact-number">
                <div className="cta-three__left-shape float-bob-x">
                  <img src="/assets/images/shapes/cta-three-left-shape-1.png" alt="" />
                </div>
                <a href={`tel:${ctaData.contactNumber1}`}>{ctaData.contactNumber1}</a>
                <a href={`tel:${ctaData.contactNumber2}`}>{ctaData.contactNumber2}</a>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="cta-three__right">
              <div className="cta-three__icon-and-btn">
                <div className="cta-three__icon-box">
                  {/* <div className="cta-three__icon-shape"></div> */}
                  {/* <div className="cta-three__icon">
                    <span className="icon-call"></span>
                  </div> */}
                </div>
                <div className="cta-three__btn-box">
                  <Link href="/contact" className="cta-three__btn thm-btn-two">
                    Contact Us<span className="icon-dubble-arrow-right"></span>
                  </Link>
                  <a
                    href={`https://wa.me/${ctaData.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-three__btn thm-btn-two"
                    style={{ marginLeft: '10px' }}
                  >
                    WhatsApp<span className="icon-whatsapp"></span>
                  </a>
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
