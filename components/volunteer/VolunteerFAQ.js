import React, { useState } from "react";

const faqs = [
  {
    question: "Who can volunteer with GIEO Gita?",
    answer:
      "Anyone with a heart to serve — students, professionals, homemakers, or retirees. Everyone is welcome to walk the path of Seva.",
  },
  {
    question: "What types of volunteering options are there?",
    answer:
      "We offer opportunities in event management, Gita book distribution, Gaushala seva, online outreach, content creation, and more.",
  },
  {
    question: "Is spiritual experience required to join?",
    answer:
      "No prior experience is required. Seva is a doorway to inner growth. Guidance is provided at every step.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes. We welcome digital volunteers for writing, designing, editing, translation, and social media work.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Volunteers may receive appreciation certificates based on contribution and involvement in GIEO-organized events.",
  },
  {
    question: "What is the core intention behind volunteering at GIEO?",
    answer:
      "Beyond physical effort, it is a journey to dissolve the ego, serve selflessly, and connect with the wisdom of the Gita through action.",
  },
  {
    question: "Is volunteering considered a spiritual practice?",
    answer:
      "Yes. Seva (selfless service) is considered Karma Yoga — a powerful path to inner transformation, as described in the Bhagavad Gita.",
  },
  {
    question: "Do I need to speak Hindi to volunteer?",
    answer:
      "Not necessarily. While many on-ground events are in Hindi, we have a global audience and need volunteers fluent in English, regional, and international languages.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "It’s flexible. You can offer a few hours a week or contribute full-time during events. Every offering, big or small, is valuable.",
  },
  {
    question: "Are there residential volunteer opportunities?",
    answer:
      "Yes. During major events and training programs at Gita Gyan Sansthanam in Kurukshetra, selected volunteers may serve on-site.",
  },
  {
    question: "Can international volunteers join?",
    answer:
      "Yes. We welcome seekers from all backgrounds and countries to join hands in spreading the eternal message of the Gita.",
  },
  {
    question: "How do I begin my volunteer journey?",
    answer:
      "Simply fill out the volunteer interest form. Once submitted, our team will connect with you for suitable opportunities based on your skills and time.",
  },
];

const VolunteerFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{
     background: "#fff1e0ff",
      
      padding: "60px 20px",
      
    }}>
      <h2 style={{
        fontSize: "32px",
        fontWeight: "bold",
        color: "#4e342e",
        textAlign: "center",
        marginBottom: "40px",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}>
        Volunteer FAQs
      </h2>

      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} style={{ marginBottom: "16px" }}>
              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  backgroundColor: "#fff7ec",
                  border: "1px solid #decfb3",
                  borderRadius: "12px",
                  padding: "18px 24px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#5b3c2e"
                }}
              >
                {faq.question}
                <span
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "24px",
                    color: "#8d6e63",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  +
                </span>
              </div>

              {/* ANSWER */}
              <div style={{
                maxHeight: isOpen ? "500px" : "0",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}>
                <div style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-5px)",
                  transition: "all 0.4s ease",
                  backgroundColor: "#fcf4e7",
                  padding: "16px 24px",
                  borderRadius: "0 0 12px 12px",
                  borderTop: "1px solid #decfb3",
                  color: "#6d4b3e",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gita Verse at the bottom */}
      <div style={{
        marginTop: "60px",
        padding: "24px",
        textAlign: "center",
        backgroundColor: "#f2e6d9",
        borderRadius: "16px",
        border: "1px solid #d3c0a3",
        fontStyle: "italic",
        color: "#5c3a2c",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      }}>
        “कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।”<br />
        
       
        <img
          src="/assets/images/donation/DIVIDER.png"
          style={{ marginTop: "20px", width: "250px", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default VolunteerFAQ;
