"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

// VideoOne component
export default function VideoOne() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal Video Setup */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setIsOpen(false)}
      />

      {/* Video Two Start */}
      <section className="video-two">
        <div className="container">
          <div className="video-two__inner">
            <div
              className="video-two__bg"
              style={{ backgroundImage: "url(/assets/images/backgrounds/video-two-bg.jpg)" }}
            ></div>
            <div className="video-two__video-link">
              <button
                onClick={() => setIsOpen(true)}
                className="video-popup"
                style={{ background: 'none', border: 'none' }} // Ensure button styles don't interfere
              >
                <div className="video-two__video-icon">
                  <span className="fas fa-play"></span>
                  <i className="ripple"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Video Two End */}
    </>
  );
}
