import React from "react";
import img from "../images/airbnb-logo.png"
import "../styles.css";

export default function Navbar() {
  return (
    <nav>
      <img
        src={img}
        alt="logo"
        className="nav-logo"
      />
    </nav>
  );
}
