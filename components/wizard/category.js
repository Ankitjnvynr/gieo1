import React from 'react';
import Link from 'next/link';

export default function Category() {
  return (
    <>
      <div className="sidebar__single sidebar__category">
        <div className="sidebar__title-box">
          <div className="sidebar__title-shape">
            <img src="assets/images/shapes/sidebar-title-shape.png" alt="" />
          </div>
          <h3 className="sidebar__title">Category</h3>
        </div>
        <ul className="sidebar__category-list list-unstyled">
          <li>
            <Link href="#" passHref>
              <p>
                <i className="icon-dubble-arrow-right" />
                Peak Performance Roofing
              </p>
              <span>(02)</span>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <p>
                <i className="icon-dubble-arrow-right" />
                Reliable Roof Repair
              </p>
              <span>(03)</span>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <p>
                <i className="icon-dubble-arrow-right" />
                ProShield Roofing
              </p>
              <span>(05)</span>
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              <p>
                <i className="icon-dubble-arrow-right" />
                Roofing Services
              </p>
              <span>(04)</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
