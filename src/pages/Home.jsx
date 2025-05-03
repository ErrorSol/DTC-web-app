import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./home1.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15; // Total number of slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) newSlide = totalSlides - 1;
    if (newSlide >= totalSlides) newSlide = 0;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const images = [
    'src/pages/images/img1.jpg', 'src/pages/images/img2.jpg', 'src/pages/images/img3.jpg',
    'src/pages/images/img4.jpg', 'src/pages/images/img5.jpg', 'src/pages/images/img6.jpg',
    'src/pages/images/img7.jpg', 'src/pages/images/img8.jpg', 'src/pages/images/img9.jpg',
    'src/pages/images/img10.jpg', 'src/pages/images/img11.jpg', 'src/pages/images/img12.jpg',
    'src/pages/images/img13.jpg', 'src/pages/images/img14.jpg', 'src/pages/images/img15.jpg'

  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video">
          <video autoPlay muted loop>
            <source src="/videos/bus-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title animate-charcter">Welcome to Delhi Bus Transport</h1>
          <p className="hero-description slide-in">
            Your journey, our priority. Experience seamless travel across Delhi.
          </p>
          <div className="hero-buttons">
            <Link to="/route-planner" className="hero-btn primary-btn">
              <i className="fas fa-route"></i>
              Plan Your Route
            </Link>
            <Link to="/ticket-booking" className="hero-btn secondary-btn">
              <i className="fas fa-ticket-alt"></i>
              Book Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Route Planner */}
      <section className="route-planner-section animated-slide-up">
        <h2>Plan Your Journey</h2>
        <div className="route-planner-container">
          <div className="input-group">
            <label htmlFor="start-point">Starting Point</label>
            <input type="text" id="start-point" placeholder="Enter starting location" />
          </div>
          <div className="input-group">
            <label htmlFor="destination">Destination</label>
            <input type="text" id="destination" placeholder="Enter destination" />
          </div>
          <button className="find-route-btn">Find Route</button>
        </div>
      </section>

      {/* Promotional Offers */}
      <section className="offers-section animated-fade-in">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <div className="offer-image" style={{backgroundImage: "url(/images/offer1.jpg)"}}>
              <i className="fas fa-sun"></i>
            </div>
            <div className="offer-content">
              <h3>Weekend Getaway</h3>
              <p>Get 20% off on weekend travel</p>
              <div className="offer-timer">02:15:33</div>
            </div>
          </div>
          <div className="offer-card">
            <div className="offer-image" style={{backgroundImage: "url(/images/offer2.jpg)"}}>
              <i className="fas fa-moon"></i>
            </div>
            <div className="offer-content">
              <h3>Night Rider</h3>
              <p>Special discounts on night buses</p>
              <div className="offer-timer">01:45:12</div>
            </div>
          </div>
          <div className="offer-card">
            <div className="offer-image" style={{backgroundImage: "url(/images/offer3.jpg)"}}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="offer-content">
              <h3>Student Special</h3>
              <p>Exclusive discounts for students</p>
              <div className="offer-timer">03:30:45</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Schedule Overview */}
      <section className="schedule-section animated-slide-up">
        <h2>Popular Routes Schedule</h2>
        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>First Bus</th>
                <th>Last Bus</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Connaught Place - Red Fort</td>
                <td>6:00 AM</td>
                <td>11:00 PM</td>
                <td>Every 15 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> India Gate - Qutub Minar</td>
                <td>5:30 AM</td>
                <td>10:30 PM</td>
                <td>Every 20 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Akshardham - Lotus Temple</td>
                <td>7:00 AM</td>
                <td>9:00 PM</td>
                <td>Every 30 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Dhaula Kuan - Karol Bagh</td>
                <td>6:15 AM</td>
                <td>10:45 PM</td>
                <td>Every 25 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Rajiv Chowk - Chandni Chowk</td>
                <td>5:45 AM</td>
                <td>11:15 PM</td>
                <td>Every 10 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> ITO - Kashmere Gate</td>
                <td>6:30 AM</td>
                <td>10:00 PM</td>
                <td>Every 15 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Nehru Place - Sarai Kale Khan</td>
                <td>7:15 AM</td>
                <td>9:45 PM</td>
                <td>Every 20 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Dwarka - Noida City Center</td>
                <td>6:00 AM</td>
                <td>10:30 PM</td>
                <td>Every 30 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Rohini - Mayur Vihar</td>
                <td>5:45 AM</td>
                <td>11:00 PM</td>
                <td>Every 25 mins</td>
              </tr>
              <tr className="route-row">
                <td><i className="fas fa-map-marker-alt"></i> Lajpat Nagar - Saket</td>
                <td>6:15 AM</td>
                <td>10:15 PM</td>
                <td>Every 15 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="safety-section animated-fade-in">
        <h2>Your Safety Matters</h2>
        <div className="safety-features">
          <div className="safety-card">
            <div className="safety-icon"><i className="fas fa-spray-can"></i></div>
            <h3>Sanitized Buses</h3>
            <p>Regularly cleaned and disinfected</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon"><i className="fas fa-head-side-mask"></i></div>
            <h3>COVID Safety</h3>
            <p>Masks and sanitizers provided</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Security</h3>
            <p>24/7 security personnel on board</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon"><i className="fas fa-first-aid"></i></div>
            <h3>First Aid</h3>
            <p>Medical kits available in all buses</p>
          </div>
          <div className="safety-card">
            <div className="safety-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3>Emergency</h3>
            <p>Quick response emergency system</p>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="stories-section animated-slide-up">
        <h2>What Our Passengers Say</h2>
        <div className="stories-carousel">
          <div className="story-card">
            <p>"Reliable and comfortable service. Made my daily commute much easier!"</p>
            <p className="author">- Ravi Sharma</p>
          </div>
          {/* Add more story cards */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animated-fade-in">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>How do I book a ticket?</h3>
            <p>You can book tickets through our website, mobile app, or at the bus station.</p>
          </div>
          {/* Add more FAQ items */}
        </div>
      </section>

      {/* Delhi Image Cover Flow Slider */}
      <div className="slideshow-section">
        <div className="slideshow-container">
          <div className="slideshow-track">
            {images.map((img, index) => {
              const position = index - currentSlide;

              let className = 'slide';
              if (position === 0) className += ' active';
              return (
                <div key={index} className={className} style={{ transform: `rotateY(${position * 30}deg) translateZ(${Math.abs(position) === 0 ? '300px' : '150px'})`, opacity: Math.abs(position) > 2 ? 0 : 1 }}>
                  <div className="image-wrapper">
                    <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="slideshow-controls">
            <button onClick={prevSlide}>&#10094;</button>
            <button onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
