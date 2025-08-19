import React from 'react';

export default function Search() {
  return (
    <>
      <div className="sidebar__single sidebar__search">
        <div className="sidebar__title-box">
          <div className="sidebar__title-shape">
            <img
              src="assets/images/shapes/sidebar-title-shape.png"
              alt=""
            />
          </div>
          <h3 className="sidebar__title">Search</h3>
        </div>
        <form action="#" className="sidebar__search-form">
          <input type="search" placeholder="Search...." />
          <button type="submit">
            <i className="icon-search" />
          </button>
        </form>
      </div>
    </>
  );
}
