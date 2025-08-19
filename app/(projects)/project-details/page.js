"use client"; // Add this directive to mark the component as a Client Component

import { useState } from "react"; 
import CTASection from '@/components/common/CTASection';
import Layout from "@/components/layout/Layout"; 
import Link from "next/link";

export default function Home() {
  // Dynamic state variables
  const [projectInfo] = useState({
    category: "Roof Service",
    customer: "David Bravis",
    startDate: "21 April 2024",
    endDate: "28 September 2024",
    rating: 5,
  });

  const [projectImages] = useState([
    {
      src: "/assets/images/project/project-details-img-1.jpg",
      alt: "Project Image 1",
    },
    {
      src: "/assets/images/project/project-details-content-two-1-1.jpg",
      alt: "Project Content Image 1",
    },
    {
      src: "/assets/images/project/project-details-content-two-1-2.jpg",
      alt: "Project Content Image 2",
    },
  ]);

  const [socialLinks] = useState([
    { href: "#", iconClass: "icon-linkedin-in" },
    { href: "#", iconClass: "icon-facebook-f" },
    { href: "#", iconClass: "icon-instagram" },
    { href: "#", iconClass: "icon-Vector" },
  ]);

  const [projectDetails] = useState({
    title: "Rise Above the Rest with Roof",
    description:
      "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity.",
    points: [
      "Rise Above the Rest with Roof Service",
      "Roof Service Elevating Excellence",
      "Let Roof Service Take You to New Heights",
      "Roof Service Roofing Done Right",
      "Reach for the Roof Service Stars",
      "Trust Roof Service for Quality and Reliability",
    ],
    secondaryTitle: "Elevating Excellence",
    secondaryDescription:
      "Roof Service is a category that encompasses a range of services related to roofs. These services include roof installation, repair, maintenance, and inspection. Roofing experts provide solutions for various types of roofs, such as shingle, tile, metal, and flat roofs. With their expertise, they ensure the longevity.",
  });

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project_Details">
        {/* Project Details Start */}
        <section className="project-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="project-details__left">
                  <div className="project-details__img-box">
                    <div className="project-details__img">
                      <img
                        src={projectImages[0].src}
                        alt={projectImages[0].alt}
                      />
                    </div>
                  </div>
                  <div className="project-details__content-one">
                    <h3 className="project-details__title">
                      {projectDetails.title}
                    </h3>
                    <p className="project-details__text-1">
                      {projectDetails.description}
                    </p>
                    <div className="project-details__points-box">
                      <ul className="list-unstyled project-details__points">
                        {projectDetails.points.slice(0, 3).map((point, index) => (
                          <li key={index}>
                            <div className="icon">
                              <span className="icon-dubble-arrow-right"></span>
                            </div>
                            <div className="text">
                              <p>{point}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <ul className="list-unstyled project-details__points project-details__points--two">
                        {projectDetails.points.slice(3).map((point, index) => (
                          <li key={index}>
                            <div className="icon">
                              <span className="icon-dubble-arrow-right"></span>
                            </div>
                            <div className="text">
                              <p>{point}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="project-details__content-two">
                    <h4 className="project-details__title-two">
                      {projectDetails.secondaryTitle}
                    </h4>
                    <p className="project-details__text-2">
                      {projectDetails.secondaryDescription}
                    </p>
                    <div className="project-details__content-two-images-box">
                      <div className="row">
                        {projectImages.slice(1).map((image, index) => (
                          <div className="col-xl-6" key={index}>
                            <div className="project-details__content-two-single">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="project-details__sidebar">
                  <div className="project-details__project-info">
                    <h3 className="project-details__project-info-title">
                      Project Information
                    </h3>
                    <ul className="list-unstyled project-details__project-info-list">
                      <li>
                        <p>Category:</p>
                        <h5>{projectInfo.category}</h5>
                      </li>
                      <li>
                        <p>Customer:</p>
                        <h5>{projectInfo.customer}</h5>
                      </li>
                      <li>
                        <p>Start date:</p>
                        <h5>{projectInfo.startDate}</h5>
                      </li>
                      <li>
                        <p>End date:</p>
                        <h5>{projectInfo.endDate}</h5>
                      </li>
                      <li>
                        <p>Rating:</p>
                        <div className="rating">
                          {Array(projectInfo.rating)
                            .fill(0)
                            .map((_, index) => (
                              <span className="icon-star" key={index}></span>
                            ))}
                        </div>
                      </li>
                    </ul>
                    <div className="project-details__social">
                      {socialLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                          <span className={link.iconClass}></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-details__need-help">
                  <div className="project-details__need-help-img">
                    <img
                      src="/assets/images/project/project-details-need-help-img.jpg"
                      alt="Need Help"
                    />
                  </div>
                  <div className="project-details__need-help-icon">
                    <span className="icon-call"></span>
                  </div>
                  <p className="project-details__need-help-sub-title">
                    Need Help? Call Us
                  </p>
                  <h3 className="project-details__need-help-number">
                    <Link href="tel:888123456765">(+888) 123 456 765</Link>
                  </h3>
                </div>
                <div className="project-details__download">
                  <ul className="project-details__download-list list-unstyled">
                    <li>
                      <Link href="#">
                        <span>Company File</span>
                        <p>
                          (1.5Mb)
                          <i className="icon-download"></i>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span>Project File</span>
                        <p>
                          (1.5Mb)
                          <i className="icon-download"></i>
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project Details End */}

        {/* CTA Two Start */}
        <CTASection
            backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
            imgSrc="assets/images/resources/cta-two-img-1.png"
            title="One Shingle at a Time"
            text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
            buttonText="Contact Us"
            buttonLink="/contact"
            />
        {/* CTA Two End */}
      </Layout>
    </>
  );
}
