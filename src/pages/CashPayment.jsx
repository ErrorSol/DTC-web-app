import React from "react";
import { FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";
import './PaymentGateway.css';

const CashPayment = () => {
  const paymentLocations = [
    {
      name: "Main Bus Terminal",
      address: "123 Main Street, New Delhi",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      name: "City Center Counter",
      address: "456 Central Avenue, New Delhi",
      hours: "9:00 AM - 7:00 PM"
    },
    {
      name: "North Station Counter",
      address: "789 North Road, New Delhi",
      hours: "7:00 AM - 9:00 PM"
    }
  ];

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Cash Payment</h1>
        <p className="payment-subtitle">Visit our nearest counter to pay in cash</p>
      </div>

      <div className="payment-form">
        <div className="payment-info">
          <div className="payment-icon">
            <FaMoneyBillWave size={40} />
          </div>
          <p className="payment-description">
            Please visit one of our authorized payment counters to complete your transaction
          </p>
        </div>

        <div className="payment-locations">
          {paymentLocations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="location-details">
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p className="location-hours">Hours: {location.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="security-note">
          <span className="secure-icon">🔒</span> Your payment is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default CashPayment;
