import React, { useState, useEffect, useRef } from "react";
import { Copy, Check, CreditCard, Star, Sparkles } from "lucide-react";
const QRSection = () => {
  const [copiedItem, setCopiedItem] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isQRHovered, setIsQRHovered] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      clearTimeout(timer);
    };
  }, []);

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(""), 2500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const bankDetails = [
    {
      label: "UPI ID",
      value: "seva@sacredportal",
      key: "upi",
      icon: "📱",
      color: "#D7B67A",
    },
    {
      label: "Account Number",
      value: "1234567890123456",
      key: "account",
      icon: "🏦",
      color: "#D7B67A",
    },
    {
      label: "Account Name",
      value: "SACRED SEVA PORTAL",
      key: "name",
      icon: "👤",
      color: "#D7B67A",
    },
    {
      label: "IFSC Code",
      value: "SEVA0001234",
      key: "ifsc",
      icon: "🔢",
      color: "#D7B67A",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="qr-section-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",

        background: " linear-gradient(135deg, #FFF8DC 0%, #F5F5DC 100%)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          margin: "0 ",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            position: "relative",
            background: " #A59069",
            //   "linear-gradient(135deg, rgba(139,69,19,0.95) 0%, rgba(101,67,33,0.92) 50%, rgba(75,61,44,0.95) 100%)",
            borderRadius: "30px",
            padding: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)",

            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255,191,120,0.3)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 100px rgba(255,191,120,0.15)",
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(60px) scale(0.95)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 8vw, 80px)",
              alignItems: "center",
              position: "relative",
              zIndex: 5,
              alignItems: "start",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  marginTop: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 700,
                  marginBottom: "40px",
                  color: "rgb(100, 52, 26)",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                📱 Scan & Donate with Any UPI App ✨
              </div>

              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  transform: isVisible ? "scale(1)" : "scale(0.8)",
                  opacity: isVisible ? 1 : 0,
                  transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
                }}
              >
                <div
                  className="qr-rings"
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "25px",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="qr-ring-1"
                    style={{
                      position: "absolute",
                      inset: "0px",
                      borderRadius: "30px",
                      border: "3px solid rgba(255, 217, 0, 0.55)",
                      animation: "qrRing1 3s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="qr-ring-2"
                    style={{
                      position: "absolute",
                      inset: "10px",
                      borderRadius: "25px",
                      border: "3px solid rgba(255, 127, 41, 0.75)",
                      animation: "qrRing2 3s ease-in-out infinite 1s",
                    }}
                  />
                  <div
                    className="qr-ring-3"
                    style={{
                      position: "absolute",
                      inset: "20px",
                      borderRadius: "20px",
                      border: "3px solid rgba(251, 158, 58, 0.79)",
                      animation: "qrRing3 3s ease-in-out infinite 2s",
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    padding: "30px",
                    borderRadius: "25px",
                    boxShadow:
                      "0 25px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 40px rgba(255,191,120,0.2)",
                    border: "3px solid rgba(255,255,255,0.8)",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isQRHovered
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  }}
                >
                  <div
                    style={{
                      width: "280px",
                      height: "280px",
                      margin: "0 auto",
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      borderRadius: "20px",
                      border: "2px solid rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(14, 1fr)",
                        gap: "2px",
                        padding: "12px",
                      }}
                    >
                      {Array.from({ length: 196 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            backgroundColor:
                              Math.random() > 0.5 ? "#000" : "transparent",
                            borderRadius: "1px",
                            ...(i < 14 ||
                            i >= 182 ||
                            i % 14 === 0 ||
                            i % 14 === 13
                              ? { backgroundColor: "#000" }
                              : {}),
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    background: " #D7B67A",
                    backdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    padding: "8px 14px",
                    color: "rgba(253, 253, 253, 0.99)",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  📱 Open any UPI app & scan to donate instantly
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  fontWeight: 700,
                  marginBottom: "30px",
                  color: "#2c1810",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                <CreditCard size={24} />
                Direct Bank NEFT/RTGS/IMPS
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {bankDetails.map((detail, index) => (
                  <div
                    key={detail.key}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.12) 100%)",
                      padding: "20px 25px",
                      borderRadius: "18px",
                      border: `2px solid ${detail.color}40`,
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: `0 8px 25px ${detail.color}20`,
                      transform: isVisible
                        ? "translateX(0) scale(1)"
                        : "translateX(30px) scale(0.95)",
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
                        0.8 + index * 0.1
                      }s`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          padding: "10px",
                          background: `${detail.color}20`,
                          borderRadius: "12px",
                          border: `2px solid ${detail.color}40`,
                          boxShadow: `0 4px 15px ${detail.color}20`,
                        }}
                      >
                        {detail.icon}
                      </div>

                      <div>
                        <div
                          style={{
                            color: " #2c1810",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            marginBottom: "4px",
                            textShadow: `0 2px 8px ${detail.color}30`,
                          }}
                        >
                          {detail.label}:
                        </div>
                        <div
                          style={{
                            color: "white",

                            fontSize: "1.05rem",
                            fontWeight: 600,
                            wordBreak: "break-all",
                            textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                          }}
                        >
                          {detail.value}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(detail.value, detail.key)}
                      style={{
                        padding: "12px 20px",
                        borderRadius: "12px",
                        border: "none",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        background:
                          copiedItem === detail.key
                            ? `linear-gradient(135deg, ${detail.color}, ${detail.color}dd)`
                            : `linear-gradient(135deg, ${detail.color}, ${detail.color}cc)`,
                        color: "white",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                        boxShadow: `0 6px 20px ${detail.color}40`,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform:
                          copiedItem === detail.key
                            ? "scale(0.95)"
                            : "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        if (copiedItem !== detail.key) {
                          e.target.style.transform =
                            "scale(1.05) translateY(-2px)";
                          e.target.style.boxShadow = `0 8px 25px ${detail.color}50`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (copiedItem !== detail.key) {
                          e.target.style.transform = "scale(1) translateY(0)";
                          e.target.style.boxShadow = `0 6px 20px ${detail.color}40`;
                        }
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {copiedItem === detail.key ? (
                          <>
                            <Check size={14} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes qrRing1 {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes qrRing2 {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        @keyframes qrRing3 {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.06);
          }
        }
      `}</style>
    </div>
  );
};

export default QRSection;
