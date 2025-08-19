import React from 'react';
import Link from 'next/link';

export default function Tags() {
  return (
    <>
      <div className="sidebar__single sidebar__tags">
        <div className="sidebar__title-box">
          <div className="sidebar__title-shape">
            <img
              src="assets/images/shapes/sidebar-title-shape.png"
              alt=""
            />
          </div>
          <h3 className="sidebar__title">Tags</h3>
        </div>
        <div className="sidebar__tags-list">
          <Link href="#">
            Roof Renewal
          </Link>
          <Link href="#">
            Roof Pros
          </Link>
          <Link href="#">
            Solutions
          </Link>
          <Link href="#">
            Roofing Services
          </Link>
          <Link href="#">
            Repair
          </Link>
          <Link href="#">
            Roof Revive
          </Link>
        </div>
      </div>
    </>
  );
}
