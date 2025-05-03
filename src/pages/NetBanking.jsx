import React, { useState } from "react";
import { FaUniversity, FaUser } from "react-icons/fa";
import './PaymentGateway.css';

const NetBanking = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Punjab National Bank",
    "Bank of Baroda"
  ];

  const handlePayment = () => {
    // Payment processing logic
    console.log("Processing net banking payment...");
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Net Banking</h1>
        <p className="payment-subtitle">Select your bank and enter details</p>
      </div>

      <div className="payment-form">
        <div className="form-group">
          <label>Select Bank</label>
          <div className="input-icon">
            <FaUniversity />
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="bank-select"
            >
              <option value="">Choose your bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Account Number</label>
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          className="payment-submit-btn"
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>

        <div className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default NetBanking;
