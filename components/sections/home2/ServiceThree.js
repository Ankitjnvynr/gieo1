'use client'; // Add this line at the top

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ServiceThree() {
  useEffect(() => {
    // Hover Image
    const link = document.querySelectorAll(".hover-item");
    const linkHoverReveal = document.querySelectorAll(".hover-item__box");
    const linkImages = document.querySelectorAll(".hover-item__box-img");

    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("mousemove", (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform = `translate(-100%, -50%) rotate(0deg)`;
        linkImages[i].style.transform = "scale(1, 1)";
        linkHoverReveal[i].style.left = e.clientX + "px";
      });
      link[i].addEventListener("mouseleave", () => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(0deg)`;
        linkImages[i].style.transform = "scale(0.8, 0.8)";
      });
    }
  }, []); // Empty dependency array to run this effect only once after the initial render

  return (
    <>
      {/* Service Three Start */}
      <section className="services-three">
        <div className="container">
          <div className="services-three__inner">
            <ul className="services-three__service-list list-unstyled">
              <li className="hover-item">
                <div className="services-three__service-list-single">
                  <a href="#" className="services-three__long-arrow">
                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                  </a>
                  <div className="services-three__sub-title">
                    <p>Maintenance</p>
                  </div>
                  <h3 className="services-three__title">
                    <Link href="/peak-performance-roofing">
                      Elevation Elite Roof
                    </Link>
                  </h3>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/assets/images/services/services-three-service-list-img-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                </div>
              </li>
              <li className="hover-item active">
                <div className="services-three__service-list-single">
                  <a href="#" className="services-three__long-arrow">
                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                  </a>
                  <div className="services-three__sub-title">
                    <p>Repairs</p>
                  </div>
                  <h3 className="services-three__title">
                    <Link href="/sure-guard-roofing-services">
                      Zenith Roofing
                    </Link>
                  </h3>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/assets/images/services/services-three-service-list-img-2.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                </div>
              </li>
              <li className="hover-item">
                <div className="services-three__service-list-single">
                  <a href="#" className="services-three__long-arrow">
                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                  </a>
                  <div className="services-three__sub-title">
                    <p>Inspections</p>
                  </div>
                  <h3 className="services-three__title">
                    <Link href="/skyline-roofing-solutions">
                      Skyline Pro Roofing
                    </Link>
                  </h3>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/assets/images/services/services-three-service-list-img-3.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                </div>
              </li>
              <li className="hover-item">
                <div className="services-three__service-list-single">
                  <a href="#" className="services-three__long-arrow">
                    <img src="/assets/images/icon/long-arrow.png" alt="" />
                  </a>
                  <div className="services-three__sub-title">
                    <p>Restoration</p>
                  </div>
                  <h3 className="services-three__title">
                    <Link href="/top-notch-roofing-restoration">
                      Altitude Roof Expert
                    </Link>
                  </h3>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/assets/images/services/services-three-service-list-img-4.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Service Three End */}
    </>
  );
}
