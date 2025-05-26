import React from "react";
import Link from "next/link";

export default function CTASection({ backgroundImage, imgSrc, title, text, buttonText, buttonLink }) {
  return (
    <>
      {/*CTA Two Start*/}
      <section className="cta-two">
        <div className="container">
          <div className="cta-two__inner">
            <div
              className="cta-two__bg"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            ></div>
            <div className="cta-two__img-and-content">
              <div className="cta-two__img">
                <img src={imgSrc} alt="" />
              </div>
              <div className="cta-two__content">
                <h3 className="cta-two__title">{title}</h3>
                <p className="cta-two__text">{text}</p>
                <div className="cta-two__btn-box">
                  <Link href={buttonLink} className="cta-two__btn thm-btn-two">
                    {buttonText}
                    <span className="icon-dubble-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*CTA Two End*/}
    </>
  );
}
