"use client";

import React from "react";
import Link from "next/link";

const Gallery = ({ items }) => {
  return (
    <div className="pinterest-gallery">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="pinterest-gallery__item"
          // Crucial for the dynamic height masonry effect: 
          // Tells the item to span a huge number of rows, letting the content dictate the final height.
          style={{ gridRowEnd: 'span 999' }}
        >
          <Link href={item.link || "#"} className="pinterest-gallery__link">
            <img 
              src={item.imgSrc} 
              alt={item.title || `Image ${index + 1}`} 
              loading="lazy"
            />
          </Link>
          {item.title && (
            <div className="pinterest-gallery__info">
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        /*
        * CSS GRID MASONRY (Dynamic Height, Stable Order)
        * This setup forces a fixed width per column and lets the image/content dictate item height.
        */
        .pinterest-gallery {
          display: grid;
          
          /* FIXED WIDTH: Sets the minimum column width (the pin width) */
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          
          /* DYNAMIC HEIGHT HACK: Set a tiny unit size to prevent height calculation issues */
          grid-auto-rows: 1px; 
          
          gap: 16px;
          margin: 20px auto;
          padding: 0 10px;
          max-width: 1400px;
        }

        .pinterest-gallery__item {
          /* The combination of grid-auto-rows: 1px in the container 
            and gridRowEnd: 'span 999' on the item allows the item's content 
            (the image) to determine its final height.
          */
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pinterest-gallery__item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .pinterest-gallery__item img {
          /* Ensures the image scales proportionally within the fixed-width column */
          width: 100%;
          height: auto; 
          display: block;
        }

        /* INFO STYLES (Kept fixed) */
        .pinterest-gallery__info {
          padding: 12px 15px;
        }

        .pinterest-gallery__info h3 {
          font-size: 16px;
          margin: 0 0 6px;
          color: var(--thm-black, #222);
        }

        .pinterest-gallery__info p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        /*
        * RESPONSIVENESS (Adjusting column count/min width)
        */
        @media (max-width: 768px) {
          .pinterest-gallery {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 12px;
            padding: 0 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;