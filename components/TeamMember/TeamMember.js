import React from 'react';
import Link from 'next/link';

const TeamMember = ({ data }) => {
  return (
    <div
      className={`col-xl-6 col-lg-6 wow fadeIn${data.animationDirection}`}
      data-wow-delay={`${data.delay}ms`}
    >
      <div className="team-one__single">
        <div className="team-one__img-box">
          <div className="team-one__img">
            <img src={data.imgSrc} alt={data.name} />
          </div>
        </div>
        <div className="team-one__content">
          <h3 className="team-one__title">
            <Link href="/team-details">{data.name}</Link>
          </h3>
          <p className="team-one__sub-title">{data.position}</p>
          <p className="team-one__text">{data.description}</p>
          <div className="team-one__social">
            <a href={data.socialLinks.instagram}>
              <span className="icon-instagram" />
            </a>
            <a href={data.socialLinks.linkedin}>
              <span className="icon-linkedin-in" />
            </a>
            <a href={data.socialLinks.vector}>
              <span className="icon-Vector" />
            </a>
            <a href={data.socialLinks.facebook}>
              <span className="icon-facebook-f" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
