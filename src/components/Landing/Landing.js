import "./Landing.css";
import React from "react";

const Landing = ({ title, details }) => {
  return (
    <div className="landing">
      <h2 id="landing-title">{title}</h2>
      <p className="landing-details">{details}</p>
    </div>
  );
};

export default Landing;
