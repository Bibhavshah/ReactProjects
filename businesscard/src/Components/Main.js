import React from "react";
import "../styles.css";
import About from "./About";
import Footer from "./Footer";
import Interest from "./Interest";

export default function Main() {
  return (
    <div className="body-container">
      <h2 className="header-name">Bibhav Shah</h2>
      <h4 className="header-hobby">Frontend Developer</h4>
      <h6 className="header-email">saimsectiona@gmail.com</h6>
      <button className="btn">Email</button>
      <About />
      <Interest/>
      <Footer/>
    </div>
  );
}
