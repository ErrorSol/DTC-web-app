import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Default marker icon fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LiveTracking() {
  const [busLocations, setBusLocations] = useState([
    { id: 1, lat: 28.6139, lng: 77.209, route: "Route 101" },
    { id: 2, lat: 28.7041, lng: 77.1025, route: "Route 202" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [mapCenter, setMapCenter] = useState([28.6139, 77.209]);

  // Enhanced locations data with more details
  const locations = [
    { name: "New Delhi", lat: 28.6139, lng: 77.209, type: "city" },
    { name: "Mumbai", lat: 19.076, lng: 72.8777, type: "city" },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946, type: "city" },
    { name: "Route 101", lat: 28.6139, lng: 77.209, type: "route" },
    { name: "Route 202", lat: 28.7041, lng: 77.1025, type: "route" },
    { name: "Connaught Place", lat: 28.6315, lng: 77.2167, type: "place" },
    { name: "India Gate", lat: 28.6129, lng: 77.2295, type: "place" },
  ];

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const selectedLocation = locations.find(
      location => location.name.toLowerCase() === searchQuery.toLowerCase()
    );
    if (selectedLocation) {
      setMapCenter([selectedLocation.lat, selectedLocation.lng]);
    }
  };

  // Enhanced search handler with debouncing
  useEffect(() => {
    if (searchQuery.length > 2) {
      const timer = setTimeout(() => {
        const filtered = locations.filter(location =>
          location.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filtered);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Handle location selection with smooth map transition
  const handleLocationSelect = (location) => {
    setSearchQuery(location.name);
    setMapCenter([location.lat, location.lng]);
    setSuggestions([]);
  };

  // Simulate live bus updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBusLocations((prevLocations) =>
        prevLocations.map((bus) => ({
          ...bus,
          lat: bus.lat + (Math.random() - 0.5) * 0.01,
          lng: bus.lng + (Math.random() - 0.5) * 0.01,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }}>
      {/* Search Section */}
      <div style={{
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000
      }}>
        <div style={{ 
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative"
        }}>
          <h1 style={{ 
            marginBottom: "1rem",
            color: "#007bff",
            textAlign: "center"
          }}>
            Live Bus Tracking
          </h1>
          
          <form onSubmit={handleSearchSubmit} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <div style={{ flex: 1, position: "relative", minWidth: "300px" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, state, route, or location..."
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "1rem"
                }}
              />
              {suggestions.length > 0 && (
                <div style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  zIndex: 1000,
                  marginTop: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}>
                  {suggestions.map((location, index) => (
                    <div
                      key={index}
                      onClick={() => handleLocationSelect(location)}
                      style={{
                        padding: "0.5rem",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: index === 0 ? "#f8f9fa" : "white"
                      }}
                    >
                      <span style={{
                        color: location.type === "city" ? "#007bff" : 
                              location.type === "route" ? "#28a745" : "#6c757d"
                      }}>
                        {location.type === "city" ? "🏙️" :
                         location.type === "route" ? "🚌" : "📍"}
                      </span>
                      <span>{location.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.9rem",
                height: "38px"
              }}
            >
              <span>📍</span>
              Locate
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ 
        flex: 1,
        position: "relative",
        height: "calc(100vh - 150px)",
        width: "100%",
        zIndex: 500
      }}>
        <MapContainer
          center={mapCenter}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(map) => {
            // Force map to resize after container is created
            setTimeout(() => map.invalidateSize(), 0);
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {busLocations.map((bus) => (
            <Marker key={bus.id} position={[bus.lat, bus.lng]}>
              <Popup>
                <strong>Bus ID:</strong> {bus.id} <br />
                <strong>Route:</strong> {bus.route}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default LiveTracking;
