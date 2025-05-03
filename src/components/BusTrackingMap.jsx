import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import busIcon from "../assets/bus-icon.png";

const BusTrackingMap = () => {
  const mapRef = useRef(null);

  // Custom bus icon
  const customIcon = L.icon({
    iconUrl: busIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // Sample bus locations (to be replaced with real-time data)
  const busLocations = [
    { id: 1, lat: 28.6139, lng: 77.2090, route: "Route 101" },
    { id: 2, lat: 28.6145, lng: 77.2105, route: "Route 202" },
    { id: 3, lat: 28.6150, lng: 77.2080, route: "Route 303" }
  ];

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([28.6139, 77.2090], 13);
    }
  }, []);

  return (
    <div className="enhanced-map-container">
      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
        style={{ height: "400px", borderRadius: "15px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {busLocations.map(bus => (
          <Marker
            key={bus.id}
            position={[bus.lat, bus.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="bus-popup">
                <h4>Bus {bus.id}</h4>
                <p>{bus.route}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="map-instructions">
        <i className="fas fa-info-circle"></i>
        Click on bus icons to view route information
      </div>
    </div>
  );
};

export default BusTrackingMap;
