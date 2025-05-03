import React, { useState } from "react";
import { FaMobileAlt, FaQrcode } from "react-icons/fa";
import { FaGoogle, FaPhoneAlt, FaAmazon, FaRupeeSign } from "react-icons/fa";
import './PaymentGateway.css';

const UPIPayment = () => {
  const [upiId, setUpiId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedApp, setSelectedApp] = useState("");

  const upiApps = [
    { name: "Google Pay", icon: <FaGoogle /> },
    { name: "PhonePe", icon: <FaPhoneAlt /> },
    { name: "Paytm", icon: <FaRupeeSign /> },
    { name: "BHIM UPI", icon: <FaRupeeSign /> },
    { name: "Amazon Pay", icon: <FaAmazon /> }
  ];

  const handlePayment = () => {
    // Payment processing logic
    console.log("Processing UPI payment...");
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">UPI Payment</h1>
        <p className="payment-subtitle">Select your UPI app and enter details</p>
      </div>

      <div className="payment-form">
        <div className="form-group">
          <label>Select UPI App</label>
          <div className="upi-apps-grid">
            {upiApps.map((app) => (
              <div
                key={app.name}
                className={`upi-app-card ${
                  selectedApp === app.name ? "selected" : ""
                }`}
                onClick={() => setSelectedApp(app.name)}
              >
                <div className="upi-app-icon">
                  {app.icon}
                </div>
                <p>{app.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>UPI ID</label>
          <div className="input-icon">
            <FaMobileAlt />
            <input
              type="text"
              placeholder="yourname@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-icon">
            <FaMobileAlt />
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <button 
          className="payment-submit-btn"
          onClick={handlePayment}
        >
          Pay Now
        </button>

        <div className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;
