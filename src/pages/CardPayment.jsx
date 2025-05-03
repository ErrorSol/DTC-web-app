import React, { useState } from "react";
import { FaCreditCard, FaLock } from "react-icons/fa";
import './PaymentGateway.css';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const handlePayment = () => {
    // Payment processing logic
    console.log("Processing card payment...");
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Card Payment</h1>
        <p className="payment-subtitle">Enter your card details securely</p>
      </div>

      <div className="payment-form">
        <div className="form-group">
          <label>Card Number</label>
          <div className="input-icon">
            <FaCreditCard />
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="19"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              maxLength="5"
            />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <div className="input-icon">
              <FaLock />
              <input
                type="text"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="3"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
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

export default CardPayment;
