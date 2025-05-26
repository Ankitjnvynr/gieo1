import React from "react";

export default function BackToTop({ scroll }) {
  // Handle click to prevent default link behavior
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };

  return (
    <>
      {scroll && (
        <a
          href="#"
          onClick={handleClick}
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <span className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner"></span>
          </span>
          <span className="scroll-to-top__text">Go Back Top</span>
        </a>
      )}
    </>
  );
}
