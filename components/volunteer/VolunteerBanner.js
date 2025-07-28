"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
const VolunteerBanner = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef(null);

  const slides = [
    {
      image: "assets/images/volunteer/volunteer1.jpg",
      quote:
        "Through selfless service, I discovered the true essence of dharma and found my life's purpose.",
      author: "Anita Sharma",
      role: "Gita Study Volunteer",
    },
    {
      image: "assets/images/volunteer/volunteer2.jpg",
      quote:
        "Every moment of seva brings me closer to understanding the profound wisdom of the Bhagavad Gita.",
      author: "Rajesh Kumar",
      role: "Bal Sanskar Coordinator",
    },
    {
      image: "assets/images/volunteer/volunteer2.jpg",
      quote:
        "Volunteering here transformed my life. I found a community that lives the teachings, not just studies them.",
      author: "Priya Patel",
      role: "Community Outreach",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);


    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        setScrollY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(slideInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const handleVolunteerClick = () => {
    router.push("/volunteer/volunteerform");
  };
  const containerStyles = {
    position: "relative",
    height: "90vh",
    background: "#d3bb8eff",
    overflow: "hidden",
  };

  const contentWrapperStyles = {
    position: "relative",
    height: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    display: "flex",
    alignItems: "stretch",
  };

  const leftContentStyles = {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px 60px",
    background:
      "linear-gradient(135deg, #8b7355 0%, #a0916c 50%, #b8a082 100%)",
    color: "#fff",
    position: "relative",
    zIndex: 2,
    transform: `translateY(${scrollY * -0.3}px)`,
    transition: "transform 0.1s ease-out",
    clipPath: "polygon(0 0, 95% 0, 85% 100%, 0 100%)",
  };

  const titleStyles = {
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: "600",
    lineHeight: "0.8",
    marginBottom: "27px",
    marginTop: "75px",
    color: "#fff",
    letterSpacing: "-0.01em",
    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 0.8s ease-out",
  };

  const subtitleStyles = {
    fontSize: "1.3rem",
    lineHeight: "1.6",
    marginBottom: "50px",
    color: "rgba(255, 255, 255, 0.9)",
    maxWidth: "400px",
    fontWeight: "300",
    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
    opacity: isLoaded ? 1 : 0,
    transition: "all 0.8s ease-out 0.2s",
  };

  const ctaButtonStyles = {
    background: "#fff",
    color: "#8b7355",
    padding: "16px 40px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
    maxWidth: "fit-content",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transform: isLoaded ? "translateY(0)" : "translateY(30px)",
    opacity: isLoaded ? 1 : 0,
  };

  const imageContainerStyles = {
    position: "absolute",
    top: "5%",
    right: "2%",
    width: "75%",
    height: "95%",
    zIndex: 3,
    transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)`,
    transition: "transform 0.1s ease-out",
  };

  const mainImageStyles = {
    position: "absolute",
    top: "0",
    right: "0",
    width: "70%",
    height: "83%",
    backgroundImage: `url(${slides[currentSlide].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "300px 50px 250px 100px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
    transition: "background-image 1s ease-in-out",
    transform: "rotate(-2deg)",
  };

  const decorativeShapeStyles = {
    position: "absolute",
    top: "20%",
    left: "15%",
    width: "200px",
    height: "200px",
    background:
      "linear-gradient(135deg, rgba(139, 115, 85, 0.45), rgba(184, 160, 130, 0.2))",
    borderRadius: "40% 60% 70% 30%",
    transform: "rotate(-15deg)",
    zIndex: 1,
    animation: "float 8s ease-in-out infinite",
  };

  const testimonialCardStyles = {
    position: "absolute",
    bottom: "11%",
    right: "8%",
    background: "rgba(255, 255, 255, 0.95)",
    padding: "20px 25px",
    borderRadius: "20px 60px 20px 60px",
    boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(139, 115, 85, 0.1)",
    maxWidth: "300px",
    zIndex: 4,
    transform: `translateY(${scrollY * -0.1}px)`,
    transition: "transform 0.1s ease-out",
  };

  const testimonialTextStyles = {
    fontSize: "0.95rem",
    lineHeight: "1.4",
    fontStyle: "italic",
    marginBottom: "15px",
    color: "#555",
  };

  const authorInfoStyles = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const authorInitialStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #8b7355, #a0916c)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "600",
  };

  const authorDetailsStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const authorNameStyles = {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#8b7355",
    marginBottom: "2px",
  };

  const authorRoleStyles = {
    fontSize: "0.8rem",
    color: "#666",
    fontWeight: "400",
  };

  const navigationStyles = {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
    zIndex: 10,
  };

  const statsOverlayStyles = {
    position: "absolute",
    top: "50px",
    left: "60px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px 25px",
    borderRadius: "15px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transform: `translateY(${scrollY * -0.2}px)`,
    transition: "transform 0.1s ease-out",
  };

  const statItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  };

  const statNumberStyles = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#fff",
    lineHeight: "1",
  };

  const statLabelStyles = {
    fontSize: "0.85rem",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "400",
  };

  return (
    <div ref={bannerRef} style={containerStyles}>
      <div style={contentWrapperStyles}>
     
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "38%",
            width: "7%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(139, 115, 85, 0.1) 0%, rgba(248, 246, 240, 0.8) 50%, rgba(184, 160, 130, 0.1) 100%)",
            transform: "skewX(-8deg)",
            zIndex: 5,
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(139, 115, 85, 0.2)",
            borderRight: "1px solid rgba(139, 115, 85, 0.2)",
            boxShadow: "inset 0 0 50px rgba(255, 255, 255, 0.1)",
          }}
        >
        
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.5rem",
              color: "rgba(128, 96, 58, 0.97)",
              
            }}
          >
            ॐ
          </div>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.5rem",
              color: "rgba(128, 96, 58, 0.97)",
              
            }}
          >
            ॐ
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.5rem",
              color: "rgba(128, 96, 58, 0.97)",
              
            }}
          >
            ॐ
          </div>
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "1.5rem",
              color: "rgba(128, 96, 58, 0.97)",
              
            }}
          >
            ॐ
          </div>
        </div>

        {/* Left Content Panel */}
        <div style={leftContentStyles}>
          <h1 style={titleStyles}>Divine Purpose</h1>

          <p style={subtitleStyles}>
            Where hearts unite in sacred service and souls discover their divine
            purpose. Join a community where ancient wisdom guides compassionate
            action.
          </p>

          <a
            href="#apply"
            style={ctaButtonStyles}
            onClick={handleVolunteerClick}
            onMouseEnter={(e) => {
              e.target.style.background = "#f5f5f5";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#fff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
           Join Now
          </a>

          {/* Stats Overlay */}
          <div style={statsOverlayStyles}>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>1000+</span>
              <span style={statLabelStyles}>Active Volunteers</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>75+</span>
              <span style={statLabelStyles}>Cities Served</span>
            </div>
            <div style={{ ...statItemStyles, marginBottom: "0" }}>
              <span style={statNumberStyles}>50K+</span>
              <span style={statLabelStyles}>Lives Touched</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Image Section */}
        <div style={imageContainerStyles}>
          <div style={decorativeShapeStyles}></div>
          <div style={mainImageStyles}></div>
        </div>

        {/* Testimonial Card */}
        <div style={testimonialCardStyles}>
          <p style={testimonialTextStyles}>
            "{slides[currentSlide].quote.substring(0, 80)}..."
          </p>

          <div style={authorInfoStyles}>
            <div style={authorInitialStyles}>
              {slides[currentSlide].author.charAt(0)}
            </div>

            <div style={authorDetailsStyles}>
              <div style={authorNameStyles}>{slides[currentSlide].author}</div>
              <div style={authorRoleStyles}>{slides[currentSlide].role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div style={navigationStyles}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? "40px" : "12px",
              height: "12px",
              borderRadius: "6px",
              border: "none",
              background:
                currentSlide === index ? "#8b7355" : "rgba(139, 115, 85, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: rotate(-15deg) translateY(0px);
          }
          50% {
            transform: rotate(-15deg) translateY(-15px);
          }
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column !important;
          }

          .left-content {
            width: 100% !important;
            order: 2;
            padding: 40px 30px !important;
            clip-path: none !important;
          }

          .slanting-divider {
            display: none !important;
          }

          .image-container {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            width: 100% !important;
            height: 60vh !important;
            order: 1;
          }

          .testimonial-card {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 20px;
            max-width: none !important;
          }
        }

        @media (max-width: 768px) {
          .main-image {
            width: 80% !important;
            height: 70% !important;
          }

          .secondary-image {
            width: 50% !important;
            height: 40% !important;
          }

          .stats-overlay {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-top: 30px;
            background: rgba(255, 255, 255, 0.1) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VolunteerBanner;