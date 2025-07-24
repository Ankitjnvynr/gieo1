"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DonationBanner = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    header: {
      height: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Crimson Text, serif",
    },
    bgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('/assets/images/donation/donationbanner3.png')",
      backgroundSize: "cover",
      backgroundPosition: "left top",
      backgroundRepeat: "no-repeat",
      clipPath: "polygon(0 0, 100% 0, 100% 74%, 55% 97%, 0 77%)",
      zIndex: 1,
      transform: `translateY(${scrollY * 0.3}px)`,
      transition: "transform 0.1s ease-out",
      filter: "brightness(0.4)",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.3))",
      clipPath: "polygon(0 0, 100% 0, 100% 76%, 57% 97%, 0 78%)",
      zIndex: 2,
    },
    content: {
      position: "relative",
      zIndex: 10,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 20px",
      color: "white",
    },
    verse: {
      fontFamily: "Noto Sans Devanagari, sans-serif",
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: 40,
      textShadow: "3px 3px 10px rgba(0,0,0,0.7)",
      lineHeight: 1.8,
      color: "#fff8dc",
      maxWidth: 800,
    },
    title: {
      fontSize: "5.5rem",
      fontWeight: 700,
      marginBottom: 10,
      lineHeight: 1.1,
      background: "linear-gradient(45deg,#FFBF78, #FB9E3A,#FF7D29)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "white",
      letterSpacing: 2,
    },
    subtitle: {
      fontSize: "1.8rem",
      marginBottom: 40,
      color: "#fff8dc",
      textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
      lineHeight: 1.4,
      fontWeight: 400,
      maxWidth: 600,
    },
    description: {
      fontSize: "1.3rem",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.95)",
      textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
      marginBottom: 50,
      maxWidth: 700,
    },
    button: {
      background: " #A59069",
      color: "white",
      padding: "20px 50px",
      border: "3px solid #FFFFFF",
      borderRadius: 50,
      fontSize: "1.4rem",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      transition: "all 0.4s ease",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      textTransform: "uppercase",
      letterSpacing: 2,
    },
    scrollIndicator: {
      position: "absolute",
      bottom: 40,
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
      textAlign: "center",
      zIndex: 15,
      fontFamily: "Crimson Text, serif",
      animation: "bounce 2s infinite",
    },
    arrow: {
      fontSize: "2.5rem",
      marginBottom: 10,
      textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
    },
    scrollText: {
      fontSize: "1rem",
      textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
      letterSpacing: 1,
    },
  };

  const handleDonateClick = () => {
    router.push("/donate/payment");
  };

  return (
    <header style={styles.header}>
      <div style={styles.bgImage}></div>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <div style={styles.verse}>
          दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।
          <br />
          देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥
        </div>
        <h1 style={styles.title}>GIEO Gita Donation</h1>
        <p style={styles.subtitle}>
          Serve Krishna • Support the Temple • Transform Lives
        </p>
        <p style={styles.description}>
          Welcome to GIEO Gita Temple. Your donation helps us serve the divine
          through deity worship, food distribution, spiritual education, and
          community service. Join us in spreading Krishna consciousness and
          supporting those in need.
        </p>
        <button style={styles.button} onClick={handleDonateClick}>
          Donate Now
        </button>
      </div>

      <div style={styles.scrollIndicator}>
        <span style={styles.arrow}>↓</span>
        <span style={styles.scrollText}>Scroll to explore</span>
      </div>
    </header>
  );
};

export default DonationBanner;
