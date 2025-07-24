// src/components/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "You Donate",
      description: "Your generous contribution funds the preparation and distribution of prasadam and Gitas",
      icon: "💰"
    },
    {
      id: 2,
      title: "We Prepare",
      description: "Our team prepares fresh, satvik meals in hygienic kitchens with devotion",
      icon: "👨‍🍳"
    },
    {
      id: 3,
      title: "We Distribute",
      description: "Volunteers distribute meals and Gitas to students in schools across India",
      icon: "📚"
    }
  ];

  // const costItems = [
  //   { amount: "₹50", description: "Feeds one student with prasadam and a Gita" },
  //   { amount: "₹500", description: "Feeds 10 students with prasadam and Gitas" },
  //   { amount: "₹2,500", description: "Feeds an entire classroom (50 students)" },
  //   { amount: "₹10,000", description: "Sponsors a school distribution event" }
  // ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How Your Donation Makes a Difference</h2>
          <p>Your contribution follows this sacred journey</p>
        </div>
        
        <div className="steps">
          {steps.map(step => (
            <div key={step.id} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* <div className="cost-breakdown">
          <h3>Cost Breakdown</h3>
          <div className="cost-items">
            {costItems.map((item, index) => (
              <div key={index} className="cost-item">
                <div className="cost-amount">{item.amount}</div>
                <div className="cost-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;