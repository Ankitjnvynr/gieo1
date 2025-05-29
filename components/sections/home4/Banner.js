import React from "react";

const MainBanner = () => {
  return (
    <section
      className="main-banner"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
        backgroundColor: "#000", // fallback background color while video loads
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false} // can't interfere with autoplay
        style={{
         
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        aria-label="Background video"
        preload="auto"  // preload to help with loading
      >
        {/* Check your file path, and also consider placing video in public folder */}
        <source src="/assets/images/backgrounds/abc.mp4" type="video/mp4" />
        {/* Fallback message */}
        Your browser does not support the video tag.
      </video>
      {/* Optional content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "40vh",
          fontFamily: "Arial, sans-serif",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        Welcome to Our Website
      </div>
    </section>
  );
};

export default MainBanner;

