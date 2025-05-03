import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "1.5rem 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
          Associated with Delhi Transport Corporation (DTC)
        </p>
        <p style={{ margin: "0.5rem 0" }}>
           {new Date().getFullYear()} R.A.A.H.I.
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}
        >
          Contact
        </Link>
        <Link
          to="/routes"
          style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}
        >
          Routes
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
