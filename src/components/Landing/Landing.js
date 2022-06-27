import "./Landing.css";
import React from "react";

const Landing = ({ title, details }) => {
  return (
    <div className="landing-section">
      <h1>{title}</h1>
      <p className="landing-details">{details}</p>
    </div>
  );
};

export default Landing;
