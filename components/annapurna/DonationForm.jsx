import React, { useState, useEffect } from 'react';
import { FaRupeeSign, FaUser, FaEnvelope, FaPhone, FaHome, FaReceipt, FaHeart, FaBook, FaUtensils } from 'react-icons/fa';
import './DonationForm.css';

const DonationForm = () => {
  // State variables
  const [amount, setAmount] = useState(500);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pan: '',
    dedication: ''
  });
  const [studentsFed, setStudentsFed] = useState(10); // Initial value based on ₹500
  const [activeTab, setActiveTab] = useState('one-time');
  const [animation, setAnimation] = useState(false);

  // Preset donation amounts
  const presetAmounts = [
    { amount: 50, label: '1 Person' },
    { amount: 100, label: '5 person' },
    { amount: 500, label: '10 Person' },
    { amount: 1000, label: '25 Person' }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      alert(`Thank you for your donation of ₹${amount}! You will receive a confirmation email shortly.`);
    }, 1500);
  };

  // Handle amount selection
  const handleAmountChange = (amt) => {
    setAmount(amt);
    setAnimation(true);
    setTimeout(() => setAnimation(false), 800);
  };

  // Calculate students fed based on donation amount
  useEffect(() => {
    setStudentsFed(Math.floor(amount / 50));
  }, [amount]);

  return (
    <div className="donation-form-container" id="donate">
      {/* Header section */}
      <div className="form-header">
        <div className="header-pattern"></div>
        <h1 style={{color:"white"}}>Support Gita Gieo's Sacred Mission</h1>
        <p>Your donation provides spiritual nourishment to students across India</p>
      </div>
      
      {/* Main content */}
      <div className="form-content">
        {/* Impact visualization */}
        <div className="impact-visualization">
          <div className="visual-header">
            <h2>Your Donation Impact</h2>
            <p>Every ₹50 provides spiritual nourishment to one student</p>
          </div>
          
          <div className={`students-impact ${animation ? 'pulse' : ''}`}>
            <div className="students-count">
              <span className="number">{studentsFed}</span>
              <span className="label">Person Nourished</span>
            </div>
            <div className="gita-icon">📖</div>
          </div>
          
          <div className="impact-details">
            <p>With ₹{amount}, you'll provide:</p>
            <ul>
              <li>
                <div className="icon-container">
                  <FaBook />
                </div>
                <span>{studentsFed} copies of Bhagavad Gita</span>
              </li>
              <li>
                <div className="icon-container">
                  <FaUtensils />
                </div>
                <span>{studentsFed} nutritious prasadam meals</span>
              </li>
              <li>
                <div className="icon-container">
                  <FaHeart />
                </div>
                <span>Spiritual nourishment for young minds</span>
              </li>
            </ul>
          </div>
          
          <div className="tax-benefit">
            <div className="benefit-icon">
              <FaReceipt />
            </div>
            <div className="benefit-content">
              <h3>Tax Benefit</h3>
              <p>All donations are eligible for 50% tax exemption under Section 80G.</p>
            </div>
          </div>
        </div>
        
        {/* Donation form */}
        <div className="donation-form">
          <div className="form-tabs">
            <button 
              className={`tab ${activeTab === 'one-time' ? 'active' : ''}`}
              onClick={() => setActiveTab('one-time')}
            >
              One-Time Donation
            </button>
            <button 
              className={`tab ${activeTab === 'monthly' ? 'active' : ''}`}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly Seva
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Amount selection */}
            <div className="form-group">
              <h3>
                <FaRupeeSign className="icon" />
                Select Donation Amount
              </h3>
              
              <div className="amount-options">
                {presetAmounts.map(item => (
                  <div 
                    key={item.amount} 
                    className={`amount-option ${amount === item.amount ? 'active' : ''}`}
                    onClick={() => handleAmountChange(item.amount)}
                  >
                    <div className="amount">₹{item.amount}</div>
                    <div className="label">{item.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="custom-amount">
                <label>Or enter custom amount:</label>
                <div className="input-with-icon">
                  <FaRupeeSign className="icon" />
                  <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} 
                    min="10"
                  />
                </div>
              </div>
            </div>
            
            {/* Donor information */}
            <div className="form-group">
              <h3>
                <FaUser className="icon" />
                Your Information
              </h3>
              
              <div className="form-row">
                <div className="form-field">
                  <label>
                    <FaUser className="icon" />
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your full name" style={{fontWeight: "100" , color:"grey"}}
                  />
                </div>
                <div className="form-field">
                  <label>
                    <FaEnvelope className="icon" />
                    Email*
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your email" style={{fontWeight: "100" , color:"grey"}}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-field">
                  <label>
                    <FaPhone className="icon" />
                    Phone Number*
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your phone number" style={{fontWeight: "100" , color:"grey"}}
                  />
                </div>
                <div className="form-field">
                  <label>
                    <FaReceipt className="icon" />
                    PAN Number
                  </label>
                  <input 
                    type="text" 
                    name="pan" 
                    value={formData.pan} 
                    onChange={handleChange} 
                    placeholder="Enter PAN number" style={{fontWeight: "100" , color:"grey"}}
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label>
                  <FaHome className="icon" />
                  Address
                </label>
                <textarea 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows="3"
                  placeholder="Enter your full address" style={{fontWeight: "100" , color:"grey"}}
                ></textarea>
              </div>
              
              <div className="form-field">
                <label>
                  <FaHeart className="icon" />
                  Dedication (Optional)
                </label>
                <textarea 
                  name="dedication" 
                  value={formData.dedication} 
                  onChange={handleChange} 
                  placeholder="In memory of..." style={{fontWeight: "100" , color:"grey"}}
                  rows="2"
                ></textarea>
              </div>
            </div>
            
            {/* Submit button */}
            <button type="submit" className={`donate-button ${animation ? 'pulse' : ''}`}>
              <span>Donate Securely</span>
              <span className="amount">₹{amount}</span>
            </button>
            
            {/* Security info */}
            <div className="payment-security">
              <div className="security-badge">
                <div className="lock-icon">🔒</div>
                <div>
                  <p>Secure Payment</p>
                  <p>256-bit SSL Encryption</p>
                </div>
              </div>
              <div className="payment-methods">
                <div className="payment-icon">💳</div>
                <div className="payment-icon">🏦</div>
                <div className="payment-icon">📱</div>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="form-footer">
        <p>Your contribution helps spread the wisdom of Bhagavad Gita and provide nutritious prasadam to students across India.</p>
        <p className="quote">"The gift of knowledge is the greatest gift" - Bhagavad Gita</p>
      </div>
    </div>
  );
};

export default DonationForm;