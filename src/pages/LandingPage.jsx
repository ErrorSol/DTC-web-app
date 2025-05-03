import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";


import BusTrackingMap from "../components/BusTrackingMap";

// Import images
import delhiBus from "./Delhi-bus.jpg";
import lotusTemple from "./lotus-temple.jpg";
import qutubMinar from "./qutub-minar.jpg";
import redFort from "./red-fort.jpg";
import akshardham from "./akshardham.jpg";
import cp from "./cp.jpg";
import dargah from "./dargah.jpg";
import humayunTomb from "./humayus-tomb.jpg";
import lodhiGarden from "./lodhi-garden.jpg";
import puranaQuila from "./purana-quila.jpg";

const smoothScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
};


const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    navigate('/routes');
  };

  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <div id="hero"></div>

      {/* Hero Section */}
      <section className="hero-section hidden">

        <div className="hero-content">
          <h1>Your Journey, Our Priority</h1>
          <p>Experience seamless travel across Delhi with DTC's reliable bus services</p>
          <div className="cta-buttons">
            <button className="primary-cta">Plan Your Route</button>
            <button className="secondary-cta">Book Tickets</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section hidden" id="features">

        <h2>Why Choose DTC?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🚌</div>
            <h3>Extensive Network</h3>
            <p>Connect to every corner of Delhi with our wide route coverage</p>
          </div>
          <div className="feature-card">
            <div className="icon">⏱️</div>
            <h3>Timely Service</h3>
            <p>Reliable schedules for your daily commute</p>
          </div>
          <div className="feature-card">
            <div className="icon">💳</div>
            <h3>Easy Payments</h3>
            <p>Multiple payment options including contactless cards</p>
          </div>
        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="attractions-section hidden" id="attractions">
        <h2>Explore Delhi's Iconic Landmarks</h2>
        <div className="attraction-cards">
          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={delhiBus} alt="City Bus Tours" />
                  <div className="image-overlay">City Bus Tours</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>City Bus Tours</h3>
                  <p>Experience Delhi's vibrant streets and culture through our guided bus tours. Explore the city's rich history and modern marvels.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={lotusTemple} alt="lotus Temple" />
                  <div className="image-overlay">Lotus Temple</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Lotus Temple</h3>
                  <p>Visit this architectural marvel known for its lotus-shaped structure and serene atmosphere.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={qutubMinar} alt="Qutub MInar" />
                  <div className="image-overlay">Qutub Minar</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Qutub Minar</h3>
                  <p>Explore this UNESCO World Heritage Site and marvel at the tallest brick minaret in the world.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={redFort} alt="Red Fort" />
                  <div className="image-overlay">Red Fort</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Red Fort</h3>
                  <p>Discover this historic fort that served as the main residence of Mughal emperors for nearly 200 years.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={akshardham} alt="Akshardham" />
                  <div className="image-overlay">Akshardham</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Akshardham</h3>
                  <p>Experience the spiritual and cultural essence of India at this magnificent Hindu temple complex.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={cp} alt="Connaught Place" />
                  <div className="image-overlay">Connaught Place</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Connaught Place</h3>
                  <p>Shop, dine, and explore at this historic commercial and financial hub in the heart of Delhi.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={dargah} alt="Hazrat Nizamuddin Dargah" />
                  <div className="image-overlay">Hazrat Nizamuddin Dargah</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Hazrat Nizamuddin Dargah</h3>
                  <p>Visit this 14th-century Sufi shrine and experience the spiritual qawwali music performances.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={humayunTomb} alt="Humayun's Tomb" />
                  <div className="image-overlay">Humayun's Tomb</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Humayun's Tomb</h3>
                  <p>Explore this magnificent Mughal garden tomb that inspired the design of the Taj Mahal.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={lodhiGarden} alt="Lodhi Garden" />
                  <div className="image-overlay">Lodhi Garden</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Lodhi Garden</h3>
                  <p>Relax in this beautiful park featuring 15th-century tombs and lush green landscapes.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="attraction-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={puranaQuila} alt="Purana Qila" />
                  <div className="image-overlay">Purana Qila</div>
                </div>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>Purana Qila</h3>
                  <p>Step back in time at this ancient fort that stands as a testament to Delhi's rich history.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Find Routes CTA Section */}
      <section className="find-routes-section hidden">
        <h2>Ready to Find Routes to you destination?</h2>
        <button 
          className="primary-cta find-routes-button"
          onClick={() => setIsModalOpen(true)}
        >
          Find Routes
        </button>
      </section>

      {/* Interactive Bus Route Map Section */}
      <section className="route-map-section hidden">
        <h2>Explore Our Bus Network</h2>
        <div className="map-container">
          <BusTrackingMap />
        </div>
        <p className="map-instruction">
          Click and drag to explore Delhi's extensive bus routes
        </p>
      </section>

      {/* Service Highlights Carousel */}
      <section className="service-highlights-section hidden">
        <h2>Our Key Services</h2>
        <div className="carousel-container">
          <div className="services-grid">
            <div className="service-card">
              <h3>24/7 Bus Services</h3>
              <p>Round-the-clock connectivity across Delhi</p>
            </div>
            <div className="service-card">
              <h3>Air-Conditioned Buses</h3>
              <p>Comfortable travel in all weather conditions</p>
            </div>
            <div className="service-card">
              <h3>Women's Safety</h3>
              <p>Dedicated women's seats and security measures</p>
            </div>
          </div>


        </div>
      </section>

      {/* Real-Time Statistics Section */}
      <section className="stats-section hidden">
        <h2>Real-Time Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Buses Operating</h3>
            <p className="stat-value">850+</p>
          </div>
          <div className="stat-card">
            <h3>Daily Passengers</h3>
            <p className="stat-value">1.2M+</p>
          </div>
          <div className="stat-card">
            <h3>Routes Covered</h3>
            <p className="stat-value">650+</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section hidden">
        <h2>What Our Passengers Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Reliable and affordable service. Made my daily commute much easier!"</p>
              <p className="author">- Ravi Sharma</p>
            </div>
            <div className="testimonial-card">
              <p>"Clean buses and friendly staff. Highly recommended!"</p>
              <p className="author">- Priya Singh</p>
            </div>
          </div>


        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="comparison-section hidden">
        <h2>Why Choose DTC?</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>DTC</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coverage</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
              <tr>
                <td>Affordability</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
              <tr>
                <td>Frequency</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="app-promotion-section hidden">
        <h2>Download Our App</h2>
        <div className="app-promo-content">
          <div className="app-features">
            <p>• Real-time bus tracking</p>
            <p>• Digital tickets</p>
            <p>• Route planning</p>
          </div>
          <div className="app-download-buttons">
            <button className="app-store-btn">App Store</button>
            <button className="play-store-btn">Google Play</button>
          </div>
        </div>
      </section>

      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />



    </div>

  );
};

export default LandingPage;
