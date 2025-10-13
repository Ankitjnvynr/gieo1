"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Heart, HandHelping, Zap, Star } from "lucide-react";

const DonationCards = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

const donationCategories = [
  {
    id: 1,
    title: "Shringaar Seva",
    subtitle: "Divine Adornment & Decoration",
    description:
      "Decorate the deity with beautiful clothes, ornaments, and flowers, enhancing the divine aura and spreading devotion in the temple.",
    image: "/assets/images/donation/shringaarSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Aarti Seva",
    subtitle: "Sacred Worship & Light",
    description:
      "Participate in aarti rituals, spreading spiritual light, devotion, and blessings throughout the temple and in the hearts of all devotees.",
    image: "/assets/images/donation/aartiSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Star,
  },
  {
    id: 3,
    title: "Anna Seva",
    subtitle: "Blessed Nourishment for All",
    description:
      "Serve meals and prasad to devotees and pilgrims, sharing divine blessings and spreading love and nourishment to all within the community.",
    image: "/assets/images/donation/annaSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Heart,
  },
  {
    id: 4,
    title: "Gaushala Seva",
    subtitle: "Divine Care for Cows",
    description:
      "Care for sacred cows by providing food, shelter, and medical support, promoting compassion and upholding traditions of kindness and respect.",
    image: "/assets/images/donation/gaushalaSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Zap,
  },
  {
    id: 5,
    title: "Vidya Seva",
    subtitle: "Wisdom & Spiritual Education",
    description:
      "Promote spiritual learning through teaching, classes, and workshops, sharing knowledge and enlightening the community with divine wisdom.",
    image: "/assets/images/donation/vidyaSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Star,
  },
  {
    id: 6,
    title: "Chikitsa Seva",
    subtitle: "Healing & Wellness Support",
    description:
      "Provide medical aid and wellness services to devotees and the community, ensuring health, care, and spiritual support for all who seek help.",
    image: "/assets/images/donation/chikitsaSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Heart,
  },
  {
    id: 7,
    title: "Prakriti Seva",
    subtitle: "Nature & Environment Care",
    description:
      "Protect the environment through tree plantations, gardening, and eco-friendly practices, preserving nature and promoting sustainability within the temple.",
    image: "/assets/images/donation/prakritiSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Star,
  },
  {
    id: 8,
    title: "Jal Seva",
    subtitle: "Pure Water & Community Welfare",
    description:
      "Provide clean water to devotees and local communities, ensuring health, spiritual wellbeing, and sustainable water practices for everyone involved.",
    image: "/assets/images/donation/jalSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Zap,
  },
  {
    id: 12,
    title: "Kirtan & Bhajan Seva",
    subtitle: "Devotional Music & Singing",
    description:
      "Organize kirtans and bhajan sessions, spreading devotional music, uplifting souls, and sharing spiritual vibrations throughout the temple community.",
    image: "/assets/images/donation/kirtanBhajanSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Sparkles,
  },
  {
    id: 13,
    title: "Seva for Elderly (Vriddha Seva)",
    subtitle: "Care & Support for Senior Devotees",
    description:
      "Provide care and support to elderly devotees, ensuring their comfort, health, and spiritual wellbeing while honoring their dignity and devotion.",
    image: "/assets/images/donation/vriddhaSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Heart,
  },
  {
    id: 14,
    title: "Prasadam Distribution Seva",
    subtitle: "Sacred Offerings & Sharing",
    description:
      "Prepare and distribute prasadam to devotees, pilgrims, and the needy, spreading divine blessings and sharing nourishment with love and devotion.",
    image: "/assets/images/donation/prasadamSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Zap,
  },
  {
    id: 15,
    title: "Bal Vikas Seva",
    subtitle: "Spiritual Growth for Children",
    description:
      "Engage children in spiritual activities, workshops, and learning sessions, nurturing their awareness, moral values, and divine consciousness.",
    image: "/assets/images/donation/balVikasSeva.jpg",
    gradient: "#a59069",
    glowColor: "rgba(245, 198, 9, 0.5)",
    particleColor: "#fde047",
    icon: Star,
  },
];




  const handleDonateClick = () => {
    router.push("/donate/payment");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(5deg);
          }
          70% {
            transform: scale(0.9) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(245, 198, 9, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 198, 9, 0.8),
              0 0 60px rgba(245, 198, 9, 0.4);
          }
        }

        @keyframes cardFloatUp {
          0% {
            transform: translateY(0px) rotateX(0deg);
          }
          100% {
            transform: translateY(-10px) rotateX(5deg);
          }
        }

        .card-container {
          animation: slideIn 0.8s ease-out forwards;
          animation-fill-mode: both;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card-hover:hover {
          animation: cardFloatUp 0.3s ease-out forwards;
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .shimmer-effect:hover::before {
          left: 100%;
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .bounce-in {
          animation: bounceIn 0.6s ease-out;
        }

        .glow-pulse {
          animation: glowPulse 2s ease-in-out infinite;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,rgb(194, 179, 128) 0%,rgb(185, 162, 120) 100%)",
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-icon"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 10, padding: "5rem 1rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div
              className="bounce-in"
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              <div
                className="glow-pulse"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right,rgb(238, 193, 13), #f97316)",
                  borderRadius: "9999px",
                  filter: "blur(20px)",
                  opacity: 0.9,
                }}
              />
              <div
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(to right,rgb(248, 153, 9),rgb(248, 108, 7))",
                  width: 80,
                  height: 80,
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
              >
                <Sparkles
                  style={{
                    width: 40,
                    height: 40,
                    color: "white",
                    animation: "spin 3s linear infinite",
                  }}
                />
              </div>
            </div>

            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "900",
                background: "#2c1810",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              Sacred Seva Portal
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#6b3e26",
                maxWidth: "768px",
                margin: "0 auto",
                lineHeight: "1.75",
                marginBottom: "2rem",
                fontWeight: 400,
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Transform your devotion into divine action. Every contribution
              creates ripples of blessing across the universe.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              {[
                { value: "₹12.5L+", label: "Total Donations" },
                { value: "15K+", label: "Blessed Souls" },
                { value: "50+", label: "Active Sevas" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-hover shimmer-effect"
                  style={{
                    backgroundColor: "rgba(248, 247, 247, 0.27)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    border: "1px solid rgba(240, 156, 156, 0.2)",
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "bold",
                      color: "#6b3e26",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#6b3e26" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {donationCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="card-container"
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    position: "relative",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "-10px",
                      background: category.gradient,
                      borderRadius: "2rem",
                      filter: "blur(30px)",
                      opacity: hoveredCard === category.id ? 0.4 : 0,
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform:
                        hoveredCard === category.id
                          ? "scale(1.1)"
                          : "scale(0.9)",
                    }}
                  />

                  <div
                    className="card-hover shimmer-effect"
                    style={{
                      position: "relative",
                      backgroundColor: "#FFF8DC",
                      backdropFilter: "blur(20px)",
                      borderRadius: "1.5rem",
                      padding: "0rem",
                      border:
                        hoveredCard === category.id
                          ? "2px solid rgba(245, 198, 9, 0.6)"
                          : "1px solid rgba(255,255,255,0.2)",
                      transition:
                        "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      transform:
                        hoveredCard === category.id
                          ? "scale(1.05) translateY(-0.5rem) rotateX(5deg)"
                          : "scale(1)",
                      boxShadow:
                        hoveredCard === category.id
                          ? `0 30px 60px -12px ${category.glowColor}, 0 0 0 1px rgba(245, 198, 9, 0.1)`
                          : "0 20px 40px -10px rgba(0,0,0,0.25)",
                      overflow: "hidden",
                      minHeight: "380px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ position: "absolute", inset: 0, opacity: 0.05 }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: 128,
                          height: 128,
                          background:
                            "linear-gradient(to bottom left, rgba(255,255,255,0.1), transparent)",
                          borderRadius: "50%",
                          transform: "translate(4rem, -4rem)",
                        }}
                      />
                    </div>

                    {hoveredCard === category.id && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              position: "absolute",
                              width: "6px",
                              height: "6px",
                              backgroundColor: category.particleColor,
                              borderRadius: "50%",
                              animation: `ping 1.5s infinite, float 2s ease-in-out infinite`,
                              left: `${15 + i * 10}%`,
                              top: `${15 + (i % 3) * 25}%`,
                              animationDelay: `${i * 0.15}s`,
                              boxShadow: `0 0 10px ${category.particleColor}`,
                            }}
                          />
                        ))}

                        <div
                          className="floating-icon"
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            zIndex: 5,
                          }}
                        >
                          <IconComponent
                            style={{
                              width: 24,
                              height: 24,
                              color: category.particleColor,
                              filter:
                                "drop-shadow(0 0 8px rgba(245, 198, 9, 0.8))",
                            }}
                          />
                        </div>
                      </>
                    )}

                    <div
                      style={{
                        position: "relative",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: category.gradient,
                          opacity: hoveredCard === category.id ? 0.2 : 0,
                          transition: "opacity 0.3s ease",
                          zIndex: 2,
                        }}
                      />
                      <img
                        src={category.image}
                        alt={category.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          margin: "0 auto",
                          transition:
                            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform:
                            hoveredCard === category.id
                              ? "scale(1.15) rotate(1deg)"
                              : "scale(1)",
                          filter:
                            hoveredCard === category.id
                              ? "brightness(1.1) saturate(1.2)"
                              : "brightness(1)",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        padding: "1rem",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "2rem",
                          fontWeight: "800",
                          color:
                            hoveredCard === category.id
                              ? "rgb(146, 116, 15)"
                              : "rgb(224, 115, 41)",
                          marginBottom: "0.75rem",
                          transition: "all 0.3s ease",
                          transform:
                            hoveredCard === category.id
                              ? "translateX(5px)"
                              : "translateX(0)",
                        }}
                      >
                        {category.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          background: "rgb(209, 115, 60)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          marginBottom: "1rem",
                          transition: "transform 0.3s ease",
                          transform:
                            hoveredCard === category.id
                              ? "translateX(5px)"
                              : "translateX(0)",
                        }}
                      >
                        {category.subtitle}
                      </p>

                      <p
                        style={{
                          color:
                            hoveredCard === category.id
                              ? "rgb(224, 90, 13)"
                              : "rgb(143, 104, 84)",
                          marginBottom: "1.5rem",
                          lineHeight: "1.625",
                          fontSize: "0.875rem",
                          transition: "all 0.3s ease",
                          fontWeight: 700,
                          transform:
                            hoveredCard === category.id
                              ? "translateX(5px)"
                              : "translateX(0)",
                        }}
                      >
                        {category.description}
                      </p>

                      <button
                        onClick={handleDonateClick}
                        className="shimmer-effect"
                        style={{
                          width: "100%",
                          position: "relative",
                          overflow: "hidden",
                          background: category.gradient,
                          color: "white",
                          fontWeight: "bold",
                          padding: "10px 16px",
                          borderRadius: "10px",
                          border: "3px SOLID rgb(107, 85, 46)",

                          cursor: "pointer",
                          boxShadow:
                            hoveredCard === category.id
                              ? `0 15px 35px ${category.glowColor}, 0 5px 15px rgba(0,0,0,0.2)`
                              : `0 10px 20px ${category.glowColor}`,
                          transform:
                            hoveredCard === category.id
                              ? "scale(1.02) translateY(-2px)"
                              : "scale(1)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <span
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            fontSize: "1.125rem",
                            zIndex: 2,
                          }}
                        >
                          <HandHelping
                            style={{
                              width: 18,
                              height: 18,
                              animation:
                                hoveredCard === category.id
                                  ? "pulse 1s infinite"
                                  : "none",
                            }}
                          />
                          Donate Now
                        </span>

                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(255,255,255,0.2)",
                            transform:
                              hoveredCard === category.id
                                ? "translateX(0)"
                                : "translateX(-100%)",
                            transition: "transform 0.6s ease",
                            zIndex: 1,
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;
