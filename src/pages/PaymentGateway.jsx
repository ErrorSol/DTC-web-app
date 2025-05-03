 import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaQrcode, FaMoneyBillWave, FaMobileAlt, FaClock, FaUniversity } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import './PaymentGateway.css';

const PaymentGateway = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Select Payment Method</h1>
        <p className="payment-subtitle">Choose your preferred payment option</p>
      </div>

      <div className="payment-options">
        <div className="payment-card">
          <div className="payment-icon">
            <FaCreditCard size={40} />
          </div>
          <h3 className="payment-method">Credit/Debit Card</h3>
          <p className="payment-description">
            Securely pay with your Visa, Mastercard or other cards
          </p>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/card-payment')}
          >
            Select
          </button>
        </div>

        <div className="payment-card">
          <div className="payment-icon">
            <FaUniversity size={40} />
          </div>
          <h3 className="payment-method">Net Banking</h3>
          <p className="payment-description">
            Pay directly through your bank account
          </p>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/net-banking')}
          >
            Select Bank
          </button>
        </div>

        <div className="payment-card">
          <div className="payment-icon">
            <FaQrcode size={40} />
          </div>
          <h3 className="payment-method">QR Code</h3>
          <div className="qr-code-container">
            <QRCodeSVG 
              value="https://dtc-website.com/payment" 
              size={120}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/qr-payment')}
          >
            Scan & Pay
          </button>
        </div>

        <div className="payment-card">
          <div className="payment-icon">
            <FaMobileAlt size={40} />
          </div>
          <h3 className="payment-method">UPI ID</h3>
          <p className="payment-description">
            Pay instantly using your UPI ID or mobile number
          </p>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/upi-payment')}
          >
            Pay Now
          </button>
        </div>

        <div className="payment-card">
          <div className="payment-icon">
            <FaClock size={40} />
          </div>
          <h3 className="payment-method">Pay Later</h3>
          <p className="payment-description">
            Pay within 14 days after your journey
          </p>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/pay-later')}
          >
            Select
          </button>
        </div>

        <div className="payment-card">
          <div className="payment-icon">
            <FaMoneyBillWave size={40} />
          </div>
          <h3 className="payment-method">Cash Payment</h3>
          <p className="payment-description">
            Pay in cash at our nearest ticket counter
          </p>
          <button 
            className="payment-select-btn"
            onClick={() => navigate('/cash-payment')}
          >
            Select
          </button>
        </div>
      </div>

      <div className="payment-footer">
        <p className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentGateway;
