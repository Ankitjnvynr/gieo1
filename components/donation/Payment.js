"use client";
import React, { useState } from "react";

import {
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Lock,
} from "lucide-react";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    amount: "",
    panNumber: "",
    feedback: "",
  });

  const [selectedAmount, setSelectedAmount] = useState("");
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setFormData((prev) => ({
      ...prev,
      amount: amount,
    }));
  };

  const handleSubmit = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "pincode",
      "amount",
    ];
    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isFormValid) {
      setErrorMessage(
        "कृपया सभी आवश्यक फ़ील्ड भरें (Please fill all required fields)"
      );
      setShowErrorPopup(true);
      return;
    }

    if (!formData.amount || parseInt(formData.amount) < 1) {
      setErrorMessage(
        "कृपया एक वैध राशि दर्ज करें (Please enter a valid amount)"
      );
      setShowErrorPopup(true);
      return;
    }

    setShowPaymentPopup(true);
  };

  const handlePayment = () => {
    setIsProcessingPayment(true);
    setShowPaymentPopup(false);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowSuccessPopup(true);
    }, 3000);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
      amount: "",
      panNumber: "",
      feedback: "",
    });
    setSelectedAmount("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #fef7ed, #fefce8, #fef2f2)",
      }}
    >
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          background: "rgb(116, 95, 58)",
          color: "white",
          padding: "24px 16px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>🕉️</div>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "8px",
              margin: "0",
              color: "rgb(221, 211, 196)",
            }}
          >
            श्रीमद्भगवद्गीता सेवा
          </h1>
          <p
            style={{
              fontSize: "18px",
              opacity: "0.9",
              margin: "0",
            }}
          >
            Contribute to the spread of divine knowledge
          </p>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(to right,rgb(247, 213, 159),rgb(196, 158, 108))",
          padding: "24px 16px",
          borderBottom: "2px solid #fed7aa",
        }}
      >
        <div
          style={{
            maxWidth: "768px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#9a3412",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "8px",
              lineHeight: "1.6",
            }}
          >
            "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
            <br />
            अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"
          </div>
          <div
            style={{
              color: " #c2410c",
              fontSize: "16Spx",
              fontStyle: "italic",
            }}
          >
            "Whenever dharma declines and adharma rises, I manifest myself to
            restore righteousness"
          </div>
          <div
            style={{
              color: "#ea580c",
              fontSize: "12px",
              fontWeight: "semiBold",
              marginTop: "4px",
            }}
          >
            - Bhagavad Gita 4.7
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              padding: "32px",
              border: "1px solid #fed7aa",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <Heart
                style={{ color: "#ef4444", width: "24px", height: "24px" }}
              />
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#1f2937",
                  margin: "0",
                }}
              >
                दान विवरण (Donation Details)
              </h2>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "12px",
                  }}
                >
                  Select Donation Amount (₹) *
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  {["501", "1001", "2100", "5100"].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border:
                          selectedAmount === amount
                            ? "2px solid #ea580c"
                            : "2px solid #d1d5db",
                        backgroundColor:
                          selectedAmount === amount ? "#fff7ed" : "white",
                        color:
                          selectedAmount === amount ? "#c2410c" : "#374151",
                        cursor: "pointer",
                      }}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter custom amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    <User
                      style={{
                        display: "inline",
                        width: "16px",
                        height: "16px",
                        marginRight: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    <Mail
                      style={{
                        display: "inline",
                        width: "16px",
                        height: "16px",
                        marginRight: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    <Phone
                      style={{
                        display: "inline",
                        width: "16px",
                        height: "16px",
                        marginRight: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                    10 Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    <CreditCard
                      style={{
                        display: "inline",
                        width: "16px",
                        height: "16px",
                        marginRight: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  <MapPin
                    style={{
                      display: "inline",
                      width: "16px",
                      height: "16px",
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                  Complete Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select State</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Message / Feedback (Optional)
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share your thoughts about the Bhagavad Gita or any message..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  background: "rgb(148, 126, 87)",
                  color: "white",
                  padding: "16px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "18px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Lock style={{ width: "20px", height: "20px" }} />
                Proceed to Secure Payment
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(to bottom right, #fefce8, #fff7ed)",
                borderRadius: "16px",
                padding: "24px",
                border: "2px solid rgb(233, 181, 68)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#9a3412",
                  marginBottom: "16px",
                  margin: "0 0 16px 0",
                }}
              >
                दान सारांश
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#374151" }}>Donation Amount:</span>
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#c2410c",
                    }}
                  >
                    ₹{formData.amount || "0"}
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#374151" }}>Processing Fee:</span>
                  <span
                    style={{
                      color: "#059669",
                      fontWeight: "600",
                    }}
                  >
                    FREE
                  </span>
                </div>
                <hr style={{ border: "1px solid #fed7aa", margin: "8px 0" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ color: "#1f2937" }}>Total:</span>
                  <span style={{ color: "#c2410c" }}>
                    ₹{formData.amount || "0"}
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #fed7aa",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#4b5563",
                  }}
                >
                  <Lock
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "inline",
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                  100% Secure Payment
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  Your donation helps spread Krishna's divine teachings
                </div>
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(to bottom right, #fefce8, #fff7ed)",
                borderRadius: "16px",
                padding: "24px",
                border: "2px solid rgb(216, 161, 43)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>🦚</div>
                <div
                  style={{
                    color: "#9a3412",
                    fontWeight: "600",
                    marginBottom: "8px",
                    lineHeight: "1.6",
                  }}
                >
                  "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
                  <br />
                  अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥"
                </div>
                <div
                  style={{
                    color: "rgb(207, 116, 85)",
                    fontSize: "14px",
                    fontStyle: "italic",
                    marginBottom: "8px",
                  }}
                >
                  "Abandon all dharmas and surrender unto Me alone. I will
                  deliver you from all sins, do not fear."
                </div>
                <div
                  style={{
                    color: "rgb(148, 52, 20)",
                    fontSize: "12px",
                  }}
                >
                  - Bhagavad Gita 18.66
                </div>
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(to bottom right, #fefce8, #fff7ed)",
                borderRadius: "16px",
                padding: "24px",
                border: "2px solid rgb(216, 161, 43)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#9a3412",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                Your Impact
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#9a3412",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgb(105, 36, 13)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Free distribution of Bhagavad Gita
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgb(105, 36, 13)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Online satsang programs
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgb(105, 36, 13)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Spiritual education for children
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgb(105, 36, 13)",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Temple maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to right, #9a3412, #991b1b)",
          color: "white",
          padding: "24px 16px",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>🙏</div>
          <p
            style={{
              fontSize: "14px",
              opacity: "0.9",
              margin: "0 0 8px 0",
            }}
          >
            May Lord Krishna bless you with peace, prosperity, and spiritual
            wisdom
          </p>
          <div
            style={{
              fontSize: "12px",
              opacity: "0.75",
            }}
          >
            "योगः कर्मसु कौशलम्" - Excellence in action is yoga
          </div>
        </div>
      </div>

      {isProcessingPayment && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
              maxWidth: "384px",
              margin: "0 16px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "2px solid transparent",
                borderTop: "2px solid #ea580c",
                borderRadius: "50%",
                margin: "0 auto 16px auto",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "8px",
                margin: "0 0 8px 0",
              }}
            >
              Payment Processing...
            </h3>
            <p
              style={{
                color: "#4b5563",
                margin: "0",
              }}
            >
              कृपया प्रतीक्षा करें (Please wait)
            </p>
          </div>
        </div>
      )}

      {showPaymentPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "384px",
              margin: "0 16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>💳</div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "8px",
                  margin: "0 0 8px 0",
                }}
              >
                Payment Confirmation
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  margin: "0",
                }}
              >
                You are about to donate ₹{formData.amount}
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(to right, #fff7ed, #fefce8)",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid #fed7aa",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#9a3412",
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  "दानं वै तपो लोके"
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontStyle: "italic",
                  }}
                >
                  Charity is the greatest penance in this world
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <button
                onClick={() => setShowPaymentPopup(false)}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  color: "#374151",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "linear-gradient(to right, #ea580c, #dc2626)",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "512px",
              margin: "0 16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🙏</div>
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#059669",
                  marginBottom: "12px",
                  margin: "0 0 12px 0",
                }}
              >
                धन्यवाद!
              </h3>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "16px",
                  margin: "0 0 16px 0",
                }}
              >
                Donation Completed Successfully
              </h4>

              <div
                style={{
                  background: "linear-gradient(to right, #ecfdf5, #f0fdf4)",
                  padding: "24px",
                  borderRadius: "8px",
                  marginBottom: "24px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <div
                  style={{
                    color: "#166534",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    ₹{formData.amount} donated successfully
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Transaction ID: TXN{Date.now()}
                  </div>
                </div>
                <div
                  style={{
                    color: "#166534",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      marginBottom: "8px",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                    }}
                  >
                    "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्"
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    Better is one's own dharma, though imperfectly performed
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    - Bhagavad Gita 3.35
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  marginBottom: "24px",
                }}
              >
                <p style={{ marginBottom: "8px", margin: "0 0 8px 0" }}>
                  Your generous contribution will help:
                </p>
                <div
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div>• Spread Krishna's divine teachings</div>
                  <div>• Support spiritual education programs</div>
                  <div>• Maintain sacred temples and ashrams</div>
                  <div>• Distribute free Bhagavad Gita copies</div>
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  color: "#c2410c",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontWeight: "600" }}>
                  May Lord Krishna bless you with
                </div>
                <div style={{ fontSize: "14px" }}>
                  Peace • Prosperity • Spiritual Wisdom
                </div>
              </div>

              <button
                onClick={closeSuccessPopup}
                style={{
                  width: "100%",
                  padding: "12px 24px",
                  background: "linear-gradient(to right, #ea580c, #dc2626)",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                हरे कृष्ण 🕉️
              </button>
            </div>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "16px",
              maxWidth: "400px",
              margin: "0 16px",
              textAlign: "center",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                color: "#dc2626",
                marginBottom: "12px",
              }}
            >
              ⚠️
            </div>
            <h2
              style={{
                color: "#dc2626",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
                margin: "0 0 8px 0",
              }}
            >
              Submission Failed
            </h2>
            <p
              style={{
                color: "#4b5563",
                marginBottom: "24px",
                margin: "0 0 24px 0",
              }}
            >
              {errorMessage}
            </p>
            <button
              onClick={() => setShowErrorPopup(false)}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
