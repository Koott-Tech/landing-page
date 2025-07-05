import React from "react";

const Navbar = () => (
  <nav
    style={{
      position: "absolute",
      top: "3rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      display: "flex",
      gap: "2rem",
      background: "rgba(255,255,255,0.25)",
              borderRadius: "15px",
      padding: "0.75rem 2rem",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.4)",
    }}
  >
    <a href="#about" style={{ textDecoration: "none", color: "#222", fontWeight: 600, fontSize: "1.25rem" }}>About Us</a>
    <a href="#chat" style={{ textDecoration: "none", color: "#222", fontWeight: 600, fontSize: "1.25rem" }}>Chat</a>
    <a href="#therapist" style={{ textDecoration: "none", color: "#222", fontWeight: 600, fontSize: "1.25rem" }}>Therapist</a>
  </nav>
);

export default Navbar; 