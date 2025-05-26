import React from 'react';
import Link from 'next/link';

export default function Post() {
  return (
    <>
      <div className="sidebar__single sidebar__post">
        <div className="sidebar__title-box">
          <div className="sidebar__title-shape">
            <img
              src="assets/images/shapes/sidebar-title-shape.png"
              alt=""
            />
          </div>
          <h3 className="sidebar__title">Search</h3>
        </div>
        <ul className="sidebar__post-list list-unstyled">
          <li>
            <div className="sidebar__post-image">
              <img src="assets/images/blog/lp-1-1.jpg" alt="" />
            </div>
            <div className="sidebar__post-content">
              <h3>
                <Link href="/blog-details">
                  Rise Above the Rest with Roof the Service
                </Link>
              </h3>
              <p className="sidebar__post-date">
                <i className="icon-callender-2" />
                20 Aug, 2022
              </p>
            </div>
          </li>
          <li>
            <div className="sidebar__post-image">
              <img src="assets/images/blog/lp-1-2.jpg" alt="" />
            </div>
            <div className="sidebar__post-content">
              <h3>
                <Link href="/blog-details">
                  Let Roof Service Take You to New Heights
                </Link>
              </h3>
              <p className="sidebar__post-date">
                <i className="icon-callender-2" />
                20 Aug, 2022
              </p>
            </div>
          </li>
          <li>
            <div className="sidebar__post-image">
              <img src="assets/images/blog/lp-1-3.jpg" alt="" />
            </div>
            <div className="sidebar__post-content">
              <h3>
                <Link href="/blog-details">
                  Trust Roof Service Quality and the Reliability
                </Link>
              </h3>
              <p className="sidebar__post-date">
                <i className="icon-callender-2" />
                20 Aug, 2022
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
