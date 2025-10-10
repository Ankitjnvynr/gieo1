import React from "react";
import Link from "next/link";

const EbookCard = ({ data }) => {
  return (
    <div
      className={`col-xl-6 col-lg-6 wow fadeIn${data.animationDirection}`}
      data-wow-delay={`${data.delay}ms`}
    >
      <div className="team-one__single"> {/* keeping original class for theme consistency */}
        <div className="team-one__img-box">
          <div className="team-one__img">
            <img
              src={data.imgSrc}
              alt={data.title}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3/4", // book size ratio
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>

        <div className="team-one__content">
          <h3 className="team-one__title">
            <Link href="/download/e-books">{data.title}</Link>
          </h3>
          <p className="team-one__sub-title">By {data.author}</p>
          <p className="team-one__text">{data.description}</p>

          <div className="team-one__socia mt-2"> {/* Reusing this div for button */}
            <a
              href={data.downloadLink}
              className="thm-btn px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookCard;
