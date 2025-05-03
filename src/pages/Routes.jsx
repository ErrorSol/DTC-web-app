import React, { useState, useEffect } from "react";
import RouteSearch from "../components/RouteSearch";
import { useNavigate } from "react-router-dom";

function Routes() {
  const [routes, setRoutes] = useState(() => {
    const savedRoutes = localStorage.getItem("routes");
    return savedRoutes
      ? JSON.parse(savedRoutes)
      : [
          {
            id: "1",
            startPoint: "Saket",
            endPoint: "Gurgaon",
            stops: "Dwarka -> Connaught Place",
            timings: "6:00 AM - 10:00 PM",
          },
          {
            id: "2",
            startPoint: "Dwarka",
            endPoint: "Noida Sector 15",
            stops: "Dwarka -> New Delhi",
            timings: "5:30 AM - 11:00 PM",
          },
        ];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("routes", JSON.stringify(routes));
  }, [routes]);

  const addRoute = (route) => {
    const newRoute = {
      id: Date.now().toString(), // Unique ID
      startPoint: route.from,
      endPoint: route.to,
      stops: route.stops.join(" -> "),
      timings: route.time,
      fare: route.fare,
    };
    setRoutes((prevRoutes) => [newRoute, ...prevRoutes]); // Add new route to the top
  };

  const handleRemoveRoute = (routeId) => {
    const updatedRoutes = routes.filter((route) => route.id !== routeId);
    setRoutes(updatedRoutes);
  };

  const handleBookTicket = (route) => {
    navigate("/ticket-booking", { state: { route } });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <RouteSearch onAddRoute={addRoute} />
      <h1 style={{ textAlign: "center", color: "#007bff" }}>DTC Bus Routes</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Find your route and travel conveniently across Delhi.
      </p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>S. No.</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Start Point
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              End Point
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Stops</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Fare
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Timings
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Remove
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Book Ticket
            </th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr
              key={route.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {index + 1}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {route.startPoint}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {route.endPoint}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {route.stops}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {route.fare}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {route.timings}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemoveRoute(route.id)}
                >
                  Remove
                </button>
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBookTicket(route)}
                >
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* New Sections Added Here */}
      {/* Live Bus Tracking Section */}
      <div className="live-bus-tracking">
        <h2>Live Bus Tracking</h2>
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
      </div>

      {/* Real-Time Arrival Information Section */}
      <div className="arrival-info">
        <h2>Real-Time Arrival Information</h2>
        <ul id="arrival-times">
          {/* Arrival times will be populated here */}
        </ul>
      </div>

      {/* User Feedback and Ratings Section */}
      <div className="user-feedback">
        <h2>User Feedback and Ratings</h2>
        <form id="feedback-form">
          <textarea placeholder="Share your experience..." required></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
        <div id="feedback-list">
          {/* Recent feedback will be displayed here */}
        </div>
      </div>

      {/* Social Media Feed Section */}
      <div className="social-media-feed">
        <h2>Follow Us on Social Media</h2>
        <div id="social-feed">
          {/* Social media posts will be displayed here */}
        </div>
      </div>

      {/* Weather Updates Section */}
      <div className="weather-updates">
        <h2>Current Weather in Delhi</h2>
        <div id="weather-info">
          {/* Weather information will be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default Routes;
