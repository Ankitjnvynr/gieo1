import React, { useState } from 'react';
import './FAQSection.css'; // We'll create this CSS file next

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the core vision of GIEO Gita?",
      answer: "Our core vision is to spread the timeless wisdom of the Bhagavad Gita globally, making it accessible and relevant to people of all backgrounds in the modern world."
    },
    {
      question: "How does GIEO Gita's mission differ from other spiritual organizations?",
      answer: "GIEO Gita focuses on practical application of Gita's teachings in daily life, combining ancient wisdom with contemporary approaches to personal development and well-being."
    },
    {
      question: "Can anyone participate in GIEO Gita's programs?",
      answer: "Yes, our programs are designed for people of all ages, backgrounds, and levels of spiritual understanding. We welcome everyone with an open heart."
    },
    {
      question: "How does GIEO Gita plan to achieve its vision?",
      answer: "Through a combination of digital platforms, community events, educational programs, and partnerships with like-minded organizations to disseminate the Gita's teachings."
    },
    {
      question: "Is GIEO Gita affiliated with any specific religious tradition?",
      answer: "While we draw inspiration from the Bhagavad Gita, our approach is inclusive and non-sectarian, focusing on universal spiritual principles applicable to all."
    }
  ];

  return (
    <section className="vision-mission-faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;