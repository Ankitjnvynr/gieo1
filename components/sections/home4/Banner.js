import React from "react";

const MainBanner = () => {
  return (
    <section
      className="main-banner"
      style={{
        position: "relative",
        height: "80vh",
        width: "100vw",
        overflow: "hidden",
        backgroundImage: "url('/assets/images/backgrounds/hero banner.jpg')", // update path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000", // fallback in case image fails to load
      }}
    >
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
 
      </div>
    </section>
  );
};

export default MainBanner;
