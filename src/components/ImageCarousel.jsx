import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const images = [
  "delhi1.jpg",
  "delhi2.jpg",
  "delhi3.jpg",
  "delhi4.jpg",
  "delhi5.jpg",
  "delhi6.jpg",
  "delhi7.jpg",
  "delhi8.jpg",
  "delhi9.jpg",
  "delhi10.jpg"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          >
            <div className="image-overlay">
              <h3>Explore Delhi</h3>
              <p>Experience the beauty of our city</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        {"<"}
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;
