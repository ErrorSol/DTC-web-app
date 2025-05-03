import React, { useState } from "react";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import './PaymentGateway.css';

const PayLater = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentScheduled, setPaymentScheduled] = useState(false);

  const handlePayment = () => {
    // Payment scheduling logic
    console.log("Scheduling payment...");
    setPaymentScheduled(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Pay Later</h1>
        <p className="payment-subtitle">Schedule your payment within 14 days</p>
      </div>

      <div className="payment-form">
        {!paymentScheduled ? (
          <>
            <div className="payment-info">
              <div className="payment-icon">
                <FaClock size={40} />
              </div>
              <p className="payment-description">
                You can pay for your tickets within 14 days of your journey
              </p>
            </div>

            <div className="terms-container">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                I agree to the <a href="/terms">terms and conditions</a>
              </label>
            </div>

            <button 
              className="payment-submit-btn"
              onClick={handlePayment}
              disabled={!termsAccepted}
            >
              Schedule Payment
            </button>
          </>
        ) : (
          <div className="payment-success">
            <FaCheckCircle size={60} color="#27ae60" />
            <h2>Payment Scheduled!</h2>
            <p>Your payment will be processed within 14 days</p>
          </div>
        )}

        <div className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default PayLater;
