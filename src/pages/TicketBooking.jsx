import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, getDatabase, ref, get } from "./firebaseConfig";
import Recommendations from "../components/Recommendations";

function TicketBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const route = location.state?.route;
  
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengers, setPassengers] = useState(
    Array.from({ length: 1 }, () => ({ name: "", number: "" }))
  );
  const [formData, setFormData] = useState({
    from: route?.startPoint || "",
    to: route?.endPoint || "",
    fare: route?.fare || "",
    duration: route?.timings || "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setPassengers(prev => {
            const updatedPassengers = [...prev];
            updatedPassengers[0] = {
              ...updatedPassengers[0],
              name: userData.name,
              number: userData.number
            };
            return updatedPassengers;
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const handlePassengerCountChange = (e) => {
    const count = parseInt(e.target.value);
    setPassengerCount(count);
    setPassengers(prev => {
      const newPassengers = Array.from({ length: count }, (_, i) => 
        prev[i] || { name: "", number: "" }
      );
      return newPassengers;
    });
  };

  const handlePassengerChange = (index, field, value) => {
    setPassengers(prev => {
      const updatedPassengers = [...prev];
      updatedPassengers[index][field] = value;
      return updatedPassengers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      ...formData,
      passengers: passengerCount,
      passengerDetails: passengers
    };
    console.log("Booking Details:", bookingDetails);
    navigate("/account", { state: bookingDetails });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Book Your Ticket</h1>
      
      {/* Booking form */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "2rem", 
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "2rem"
      }}>
        <form onSubmit={handleSubmit}>
          {/* Passenger fields */}
          {passengers.map((passenger, index) => (
            <div key={index}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor={`name-${index}`} style={{ display: "block", marginBottom: "0.5rem" }}>
                  Passenger {index + 1} Name:
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor={`number-${index}`} style={{ display: "block", marginBottom: "0.5rem" }}>
                  Passenger {index + 1} Number:
                </label>
                <input
                  type="text"
                  id={`number-${index}`}
                  value={passenger.number}
                  onChange={(e) => handlePassengerChange(index, 'number', e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Route details */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="from" style={{ display: "block", marginBottom: "0.5rem" }}>
              From:
            </label>
            <input
              type="text"
              id="from"
              value={formData.from}
              readOnly
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="to" style={{ display: "block", marginBottom: "0.5rem" }}>
              To:
            </label>
            <input
              type="text"
              id="to"
              value={formData.to}
              readOnly
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="fare" style={{ display: "block", marginBottom: "0.5rem" }}>
              Fare (per head):
            </label>
            <input
              type="number"
              id="fare"
              value={formData.fare}
              readOnly
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="duration" style={{ display: "block", marginBottom: "0.5rem" }}>
              Duration of Travel:
            </label>
            <input
              type="text"
              id="duration"
              value={formData.duration}
              readOnly
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="passengers" style={{ display: "block", marginBottom: "0.5rem" }}>
              Number of Passengers:
            </label>
            <input
              type="number"
              id="passengers"
              value={passengerCount}
              onChange={handlePassengerCountChange}
              min="1"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Book Ticket
          </button>
        </form>
      </div>

      {/* Recommendations */}
      {route && (
        <Recommendations destination={route.endPoint} />
      )}
    </div>
  );
}

export default TicketBooking;
