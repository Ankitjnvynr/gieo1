// src/components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How is the prasadam prepared?",
      answer: "All prasadam is prepared in our state-of-the-art Annapurna kitchens following strict hygiene standards. The food is prepared with devotion, offered to Lord Krishna, and packed hygienically for distribution."
    },
    {
      question: "What is included in each prasadam meal?",
      answer: "Each meal is nutritionally balanced and typically includes rice, dal, a vegetable dish, roti, and a sweet. The menu varies daily but always follows satvik (pure vegetarian) principles."
    },
    {
      question: "Can I donate groceries instead of money?",
      answer: "Yes! We accept donations of rice, dal, vegetables, and other cooking essentials. Please contact our donation coordinator at gieogita to arrange a donation."
    },
    {
      question: "How do I get my 80G tax exemption receipt?",
      answer: "You will receive your 80G receipt via email within 15 days of your donation. Please ensure you provide your PAN number and correct email address during donation."
    },
    {
      question: "Can I sponsor prasadam in memory of someone?",
      answer: "Absolutely. You can include a dedication message during the donation process. We'll include a note with your dedication during the distribution."
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;