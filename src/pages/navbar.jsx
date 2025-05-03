import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          RAAHI
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/Home" className="navbar-item">Home</Link>
        </li>
        <li>
          <Link to="/routes" className="navbar-item">Routes</Link>
        </li>
        <li>
          <Link to="/ticket-booking" className="navbar-item">Book Tickets</Link>
        </li>
        <li>
          <Link to="/live-tracking" className="navbar-item">Live Tracking</Link>
        </li>
        <li>
          <Link to="/account" className="navbar-item">My Account</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-item">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
