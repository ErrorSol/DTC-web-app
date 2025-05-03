import React, { useState } from "react";

import "./Recommendations.css";

const Recommendations = ({ destination }) => {
  console.log("Received destination:", destination);
  
  if (!destination) {
    return <div>No destination selected</div>;
  }

  // Normalize destination names for matching
  const normalizedDestination = destination.toLowerCase().trim();

  // Data for recommendations using placeholder images
  const [loadingStates, setLoadingStates] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const handleImageLoad = (index) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const places = {
    "kashmere gate": [
      { name: "Red Fort", image: "https://source.unsplash.com/300x180/?red+fort,delhi" },
      { name: "Chandni Chowk", image: "https://source.unsplash.com/300x180/?chandni+chowk,delhi" },
      { name: "Jama Masjid", image: "https://source.unsplash.com/300x180/?jama+masjid,delhi" },
      { name: "Fatehpuri Masjid", image: "https://source.unsplash.com/300x180/?fatehpuri+masjid,delhi" }
    ],
    "rajouri garden": [
      { name: "Pacific Mall", image: "https://source.unsplash.com/300x180/?mall,shopping" },
      { name: "TDI Mall", image: "https://source.unsplash.com/300x180/?mall,shopping+center" },
      { name: "Rajouri Garden Market", image: "https://source.unsplash.com/300x180/?market,delhi" },
      { name: "District Park", image: "https://source.unsplash.com/300x180/?park,garden" }
    ],
    "dwarka": [
      { name: "ISKCON Temple", image: "https://source.unsplash.com/300x180/?iskcon+temple,delhi" },
      { name: "Sector 10 Market", image: "https://source.unsplash.com/300x180/?market,shopping" },
      { name: "Dwarka Sector 12 Metro Station", image: "https://source.unsplash.com/300x180/?metro,station" },
      { name: "DDA Park", image: "https://source.unsplash.com/300x180/?park,delhi" }
    ],
    "noida city center": [
      { name: "DLF Mall of India", image: "https://source.unsplash.com/300x180/?dlf+mall,noida" },
      { name: "Botanical Garden", image: "https://source.unsplash.com/300x180/?botanical+garden,noida" },
      { name: "Okhla Bird Sanctuary", image: "https://source.unsplash.com/300x180/?bird+sanctuary,noida" },
      { name: "Golf Course", image: "https://source.unsplash.com/300x180/?golf+course,noida" }
    ]
  };


  const recommendations = places[normalizedDestination] || [];

  return (
    <div className="recommendations-container">
      <h2>Recommended Places to Visit</h2>
      <div className="recommendations-grid">
        {recommendations.map((place, index) => (
          <div key={index} className="recommendation-card">
            {imageErrors[index] ? (
              <div className="image-fallback">
                <span>{place.name}</span>
              </div>
            ) : (
              <>
                {loadingStates[index] !== false && (
                  <div className="image-loading">Loading...</div>
                )}
                <img
                  src={place.image}
                  alt={place.name}
                  className="recommendation-image"
                  style={{ display: loadingStates[index] ? 'none' : 'block' }}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                />
              </>
            )}

            <h3 className="recommendation-name">{place.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
