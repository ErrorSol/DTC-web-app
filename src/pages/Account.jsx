import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Account() {
  const location = useLocation();
  const navigate = useNavigate();

  const [tickets, setTickets] = useState(() => {
    const storedTickets = JSON.parse(localStorage.getItem("userTickets")) || [];
    if (location.state) {
      return [...storedTickets, location.state];
    }
    return storedTickets;
  });

  useEffect(() => {
    localStorage.setItem("userTickets", JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    console.log('Account component mounted');
    console.log('Current tickets:', tickets);
  }, [tickets]);

  const handleBuyMoreTickets = () => {
    navigate("/ticket-booking");
  };

  const handleRemoveTicket = (index) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
  };

  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
    }}>
      <h1 style={{ color: "#007bff" }}>Your Tickets</h1>
      {tickets.length > 0 ? (
        <div>
          {tickets.map((ticket, index) => (
            <div key={index} style={{ marginBottom: "2rem" }}>
              <h2 style={{ 
                textAlign: "center", 
                color: "#333",
                marginBottom: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold"
              }}>
                {ticket.from} → {ticket.to}
              </h2>

              <div style={{ 
                display: "flex",
                overflowX: "auto",
                padding: "1rem",
                gap: "1.5rem",
                maxWidth: "100vw",
                justifyContent: "center"
              }}>
                {ticket.passengerDetails.map((passenger, pIndex) => (
                  <div
                    key={pIndex}
                    style={{
                      flex: "0 0 auto",
                      padding: "2rem",
                      width: "350px",
                      borderRadius: "15px",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "#ffffff",
                      textAlign: "left",
                      fontFamily: "Arial, sans-serif",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.02)"
                      }
                    }}
                  >
                    <h3 style={{
                      marginBottom: "1rem",
                      color: "#666",
                      textAlign: "center",
                      fontSize: "1.1rem"
                    }}>
                      Passenger {pIndex + 1}
                    </h3>

                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>Name:</strong> {passenger.name}
                    </p>
                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>Number:</strong> {passenger.number}
                    </p>
                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>From:</strong> {ticket.from}
                    </p>
                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>To:</strong> {ticket.to}
                    </p>
                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>Fare:</strong> ₹{ticket.fare}
                    </p>
                    <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                      <strong>Duration:</strong> {ticket.duration}
                    </p>

                    <button
                      onClick={() => handleRemoveTicket(index)}
                      style={{
                        marginTop: "1.5rem",
                        padding: "0.75rem 1.5rem",
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        width: "100%",
                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      Remove Ticket
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ 
            position: "sticky",
            bottom: "1rem",
            marginTop: "2rem",
            textAlign: "center"
          }}>
            <button
              onClick={() => {
                console.log('Navigating to payment gateway...');
                navigate('/payment');
              }}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.2s",
                "&:hover": {
                  backgroundColor: "#0056b3"
                }
              }}
            >
              Buy Tickets of - ₹{tickets.reduce((total, ticket) => total + (ticket.fare * ticket.passengers), 0)}
            </button>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: "1.2rem", color: "#888" }}>
          No tickets available. Please book a ticket first.
        </p>
      )}
    </div>
  );
}

export default Account;
