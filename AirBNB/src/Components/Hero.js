import React from "react";
import photo from "../images/photo-grid.png";
import "../styles.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={photo} alt="photo-grid" className="hero-img" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
