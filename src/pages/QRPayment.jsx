import React, { useState } from "react";

import { FaQrcode, FaCheckCircle } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import './PaymentGateway.css';

const QRPayment = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePayment = () => {
    // Payment processing logic
    console.log("Processing QR payment...");
    setPaymentConfirmed(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">QR Code Payment</h1>
        <p className="payment-subtitle">Scan the QR code to complete payment</p>
      </div>

      <div className="payment-form">
        {!paymentConfirmed ? (
          <>
            <div className="qr-code-container">
              <QRCodeSVG 
                value="https://dtc-website.com/payment" 
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>

            <div className="payment-instructions">
              <p>1. Open your UPI app</p>
              <p>2. Scan the QR code</p>
              <p>3. Confirm payment</p>
            </div>

            <button 
              className="payment-submit-btn"
              onClick={handlePayment}
            >
              I've Paid
            </button>
          </>
        ) : (
          <div className="payment-success">
            <FaCheckCircle size={60} color="#27ae60" />
            <h2>Payment Successful!</h2>
            <p>Your payment has been confirmed</p>
          </div>
        )}

        <div className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default QRPayment;
