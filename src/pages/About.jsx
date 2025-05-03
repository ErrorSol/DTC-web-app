import React, { useEffect, useState } from "react";
import "./About.css";
import { FaReact, FaBus, FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";


function About() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setVisibleSections((prev) => [...new Set([...prev, section.id])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section id="hero" className={`section ${visibleSections.includes("hero") ? "visible" : ""}`}>
        <div className="hero">
          <h1>About R.A.A.H.I.</h1>
          <p>Your Safe Journey, Our Priority</p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`section ${visibleSections.includes("mission") ? "visible" : ""}`}>
        <div className="cards-container">
          <div className="card">
            <h2>Our Mission</h2>
            <p>To provide safe, reliable, and efficient public transportation across Delhi.</p>
          </div>
          <div className="card">
            <h2>Our Vision</h2>
            <p>To become Delhi's most trusted public transport service provider.</p>
          </div>
          <div className="card">
            <h2>Our Values</h2>
            <p>Safety, Reliability, Efficiency, and Customer Satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section ${visibleSections.includes("services") ? "visible" : ""}`}>
        <h2>Our Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Route Coverage</h3>
            <p>Extensive network covering all major areas of Delhi.</p>
          </div>
          <div className="card">
            <h3>Real-Time Tracking</h3>
            <p>Track your bus in real-time through our mobile app.</p>
          </div>
          <div className="card">
            <h3>Safety Features</h3>
            <p>Equipped with GPS tracking and emergency response systems.</p>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className={`section ${visibleSections.includes("developers") ? "visible" : ""}`}>
        <h2>Our Development Team</h2>
        <div className="cards-container">
          <div className="developer-card">
            <FaReact className="developer-image" />

            <div className="developer-info">
              <h3>John Doe</h3>
              <p>
                Lead Frontend Developer with 5+ years of experience in React and UI/UX design.
                Specializes in creating responsive and accessible web applications.
                Passionate about clean code and modern web technologies.
              </p>
              <div className="developer-contact">
                <p>Email: john.doe@raahi.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
              </div>

            </div>
          </div>
          <div className="developer-card">
            <FaBus className="developer-image" />

            <div className="developer-info">
              <h3>Jane Smith</h3>
              <p>
                Backend Developer with expertise in Node.js and database management.
                Focuses on building scalable and secure server-side applications.
                Enjoys solving complex problems and optimizing system performance.
              </p>
              <div className="developer-contact">
                <p>Email: jane.smith@raahi.com</p>
                <p>Phone: +91 98765 43211</p>
                <p>
                  <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
              </div>

            </div>
          </div>
          <div className="developer-card">
            <FaFacebook className="developer-image" />

            <div className="developer-info">
              <h3>Mike Johnson</h3>
              <p>
                Full Stack Developer with experience in both frontend and backend technologies.
                Skilled in API development and system integration.
                Dedicated to creating seamless user experiences across platforms.
              </p>
              <div className="developer-contact">
                <p>Email: mike.johnson@raahi.com</p>
                <p>Phone: +91 98765 43212</p>
                <p>
                  <a href="https://linkedin.com/in/mikejohnson" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${visibleSections.includes("contact") ? "visible" : ""}`}>
        <h2>Contact Us</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Customer Support</h3>
            <p>Phone: +91 11 2345 6789</p>
            <p>Email: support@raahi.com</p>
          </div>
          <div className="card">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              

            </div>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <div className="icon-section">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaBus className="icon" />

      </div>
    </div>
  );
}

export default About;
