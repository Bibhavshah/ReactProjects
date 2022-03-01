import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../styles.css"

export default function Header() {
  return (
    <div className="header">
      <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
      <h1 className="header-text">My Travel Journal</h1>
    </div>
  );
}
