"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const SelectiveDonations = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardStyle = {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(139, 69, 19, 0.15)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    background: "linear-gradient(145deg, #fefefe, #faf6f0)",
    position: "relative",
    cursor: "pointer",
    border: "1px solid rgba(205, 133, 63, 0.2)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "480px",
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #FFFDF6 0%, #FFFDEC 100%)",
    color: " #6b3e26",
    padding: "60px 20px",
    textAlign: "center",
    position: "relative",
  };

  const occasions = [
    {
      title: "On Birthday",
      subtitle: "Celebrate with Divine Blessings",
      description:
        "Celebrate your special day by serving Krishna and spreading joy to others",
      image: "/assets/images/donation/birthday.jpg",

      backgroundColor: "#FFF8DC",
      accentColor: "#A59069",
    },
    {
      title: "On Anniversary",
      subtitle: "Honor Your Sacred Bond",
      description:
        "Honor your sacred bond by contributing to spiritual growth and community service",
      image: "/assets/images/donation/anniversary.jpg",

      backgroundColor: "#FFF8DC",
      accentColor: "#A59069",
    },
    {
      title: "On Remembrance",
      subtitle: "Eternal Memories of Love",
      description:
        "Keep the memory of loved ones alive through acts of devotion and charity",
      image: "/assets/images/donation/remembrance.jpg",

      backgroundColor: "#FFF8DC",
      accentColor: "#A59069",
    },
    {
      title: "On Special Occasion",
      subtitle: "Mark Auspicious Moments",
      description:
        "Mark any auspicious moment by supporting temple activities and spiritual education",
      image: "/assets/images/donation/specialOccasion.jpg",

      backgroundColor: "#FFF8DC",
      accentColor: "#A59069",
    },
  ];

  const handleDonateClick = () => {
    router.push("/donate/payment");
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#A59069",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={headerStyle}>
        <div>
          {" "}
          <p
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              marginBottom: "8px",
              opacity: 0.9,
            }}
          >
            सात्वभावित भवतां दीर्घतेऽनुपकारिणां।
          </p>
          <p
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              opacity: 0.9,
            }}
          >
            देशे काले च पात्रे च तद्दानं सात्विकं स्मृतम्॥
          </p>
          <img
            src="/assets/images/donation/DIVIDER1.png"
            style={{ marginTop: "20px", width: "250px", height: "auto" }}
          />{" "}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "40px ",
            textAlign: "center",
            color: "#5A3816 ",
            marginBottom: "8px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          Choose Your Sacred Occasion
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "60px",
            color: "#FFFFFF",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 60px auto",
            lineHeight: "1.6",
          }}
        >
          Transform your special moments into divine service and spiritual merit
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {occasions.map((occasion, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                background: occasion.backgroundColor,
                transform:
                  hoveredCard === index
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/*------------ Image Section--------------- */}
              <div
                style={{
                  position: "relative",
                  height: "180px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform:
                      hoveredCard === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: occasion.gradient,
                    opacity: 0.6,
                  }}
                />
              </div>

              {/*---------------- Content Section------------------ */}
              <div
                style={{
                  padding: "20px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "#2c1810",
                      marginBottom: "6px",
                      lineHeight: "1.3",
                    }}
                  >
                    {occasion.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#5A3816",
                      fontWeight: "800",
                      marginBottom: "12px",
                    }}
                  >
                    {occasion.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b4e3d",
                      lineHeight: "1.5",
                      marginBottom: "20px",
                    }}
                  >
                    {occasion.description}
                  </p>
                </div>

                {/*----------- Donate Button----------------- */}

                <button
                  onClick={handleDonateClick}
                  style={{
                    background: `linear-gradient(135deg, ${occasion.accentColor}, ${occasion.accentColor}dd)`,
                    color: "white",
                    border: "3px SOLID rgb(107, 85, 46)",
                    borderRadius: "10px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",

                    transition: "all 0.3s ease",
                    transform:
                      hoveredCard === index ? "scale(1.05)" : "scale(1)",
                    letterSpacing: "0.5px",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "40px",
            background: "linear-gradient(135deg, #FFF8DC 0%, #F5F5DC 100%)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(139, 69, 19, 0.1)",
            border: "1px solid rgba(210, 105, 30, 0.2)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              color: "#6b3e26",
              marginBottom: "16px",
              fontWeight: "300",
              letterSpacing: "1px",
            }}
          >
            Every Contribution Matters
          </h3>
          <p
            style={{
              color: "#5a3e0c",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.7",
              opacity: 0.9,
            }}
          >
            Your donation helps maintain the temple, support daily worship, feed
            the community, and spread spiritual knowledge. Each rupee is used
            with devotion and gratitude in service of the divine.
          </p>
        </div>
      </div>
      <div style={headerStyle}>
        <div>
          {" "}
          <p
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              marginBottom: "8px",
              opacity: 0.9,
            }}
          >
            यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्॥
          </p>
          <img
            src="/assets/images/donation/DIVIDER1.png"
            style={{ marginTop: "20px", width: "250px", height: "auto" }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default SelectiveDonations;
