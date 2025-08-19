
import React from "react";

const WhyVolunteer = () => {
  const sectionStyle = {
    background: "#fcf8f2",
    padding: "70px 10px",
    background: "#fcf8f2 url('/assets/images/backgrounds/volunteer-bg.jpg') center center/cover no-repeat",
    
    color: "#3a2e27",
    position: "relative",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "46px",
    fontWeight: "bold",
    marginBottom: "40px",
    
    letterSpacing: "1px",
  };

  const timelineContainer = {
    position: "relative",
    maxWidth: "780px",
    margin: "0 auto",
    padding: "5px 0",
  };

  const lineStyle = {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "0",
    bottom: "0",
    width: "6px",
    background: "linear-gradient(to bottom, #e8d5b7, #bca67b)",
    transform: "translateX(-50%)",
    zIndex: 0,
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #FFFDF6 0%, #FFFDEC 100%)",
    color: " #6b3e26",
    padding: "60px 20px",
    textAlign: "center",
    position: "relative",}
  const stepContainer = (isLeft) => ({
    display: "flex",
    justifyContent: isLeft ? "flex-start" : "flex-end",
    position: "relative",
    marginBottom: "40px",
    zIndex: 1,
    width: "100%",
    paddingLeft: 0,
    paddingRight:0,
    
        
  });

  // Responsive style for mobile centering
 
     
   

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "420px",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10px",
    marginRight: "10px",
  };

  const circleStyle = {
    width: "30px",
    height: "30px",
    background: "#bca67b",
    border: "5px solid #fcf8f2",
    borderRadius: "50%",
    position: "absolute",
    top: "30px",
    left: "calc(50% - 15px)",
    zIndex: 2,
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "18px",
    border: "4px solid #e8d5b7",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
  };

  const descStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#5a4b41",
    textAlign: "center",
  };

  const benefits = [
    {
      title: "Awaken a Higher Purpose",
      desc: "Volunteering isn't just about giving time — it's about discovering who you are beyond roles, duties, and identities. It reconnects you with your inner calling, your soul's quiet desire to serve selflessly and joyfully.",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop&crop=faces",
    },
    {
      title: "Feel the Divine",
      desc: "In every person you help, you glimpse the divine spark. Through seva, you meet the Divine again and again — in the eyes of a child, the smile of an elder..Seva teaches you patience, love, and how to truly listen to others.",
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop&crop=faces",
    },
    {
      title: "Bridge the Inner and Outer Worlds",
      desc: "Volunteering helps balance your inner journey with outer expression. It brings silence into movement, stillness into action — uniting the spiritual with the practical.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    },
    {
      title: "Grow with Sangha",
      desc: "True growth happens when we dissolve our boundaries. Volunteering teaches you to stretch your heart, expand your patience, and find joy in another’s joy — without expecting anything in return.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces",
    },
    {
      title: "Offer Your Skills as Worship",
      desc: "Whatever your talent — be it organizing, writing, designing, or welcoming — when offered in seva, it becomes sacred. You no longer work for validation, but for a higher cause.",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=faces",
    },
  ];

  return (
    <>
      {/* Shloka and divider above the main background */}
      <div style={{
        color: "#6b3e26",
        padding: "20px 20px 20px 20px",
        textAlign: "center",
        position: "relative",
        background: "transparent"
      }}>
        <p style={{
          fontSize: "20px",
          fontStyle: "italic",
          marginBottom: "8px",
          opacity: 0.9,
        }}>
          तस्मादसक्तः सततं कार्यं कर्म समाचर।
        </p>
        <p style={{
          fontSize: "20px",
          fontStyle: "italic",
          opacity: 0.9,
        }}>
          असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥
        </p>
        <img
          src="/assets/images/donation/DIVIDER.png"
          style={{ marginTop: "20px", width: "250px", height: "auto" }}
        />
      </div>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Your Seva Journey</h2>
        <div style={timelineContainer}>
          <div style={lineStyle}></div>
          {benefits.map((benefit, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} style={stepContainer(isLeft)} className="why-volunteer-step">
                <div style={circleStyle}></div>
                <div style={cardStyle}>
                  {benefit.img && (
                    <img
                      src={benefit.img}
                      alt={benefit.title}
                      style={imageStyle}
                    />
                  )}
                  <h3 style={titleStyle}>{benefit.title}</h3>
                  <p style={descStyle}>{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyVolunteer;
