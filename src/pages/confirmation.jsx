import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h1>Booking Confirmed!</h1>
      {formData && (
        <div>
          <p>Name: {formData.name}</p>
          <p>From: {formData.from}</p>
          <p>To: {formData.to}</p>
          <p>Fare: ₹{formData.fare}</p>
          <p>Duration: {formData.duration}</p>
          <p>Passengers: {formData.passengers}</p>
        </div>
      )}
    </div>
  );
}

export default Confirmation;
