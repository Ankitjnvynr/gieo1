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
        backgroundImage: "url('/assets/images/backgrounds/bbb.jpg')", // Update with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000", // Fallback color
      }}
    >
      {/* Content Overlay */}
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
       
      </div>
    </section>
  );
};

export default MainBanner;
