"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

// VideoOne component
export default function VideoOne() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Video One Start */}
      <section className="video-one">
        <div className="container">
          <div className="video-one__inner">
            <div
              className="video-one__bg"
              style={{ backgroundImage: 'url(/assets/images/backgrounds/video-one-bg.jpg)' }}
            ></div>
            <div className="video-one__video-link">
              <button
                onClick={() => setIsOpen(true)}
                className="video-popup"
              >
                <div className="video-one__video-icon">
                  <span className="fas fa-play"></span>
                  <i className="ripple"></i>
                </div>
              </button>
              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="Get7rqXYrbQ"
                onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Video One End */}
    </>
  );
}
