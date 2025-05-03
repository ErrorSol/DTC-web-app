import React from "react";
import { useLocation } from "react-router-dom";
import Recommendations from "./Recommendations";

function TicketBooking() {
  const location = useLocation();
  const route = location.state?.route;
  
  console.log("Location state:", location.state);
  console.log("Route data:", route);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Book Your Ticket</h1>
      
      {route && (
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#333" }}>Route Details</h2>
          <div style={{ 
            backgroundColor: "#f8f9fa", 
            padding: "1rem", 
            borderRadius: "4px",
            marginTop: "1rem"
          }}>
            <p><strong>From:</strong> {route.startPoint}</p>
            <p><strong>To:</strong> {route.endPoint}</p>
            <p><strong>Stops:</strong> {route.stops}</p>
            <p><strong>Timings:</strong> {route.timings}</p>
          </div>
        </div>
      )}

      {/* Booking form */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "2rem", 
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <form>
          {/* Form fields */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="date" style={{ display: "block", marginBottom: "0.5rem" }}>
              Travel Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="passengers" style={{ display: "block", marginBottom: "0.5rem" }}>
              Number of Passengers:
            </label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              min="1"
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
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
