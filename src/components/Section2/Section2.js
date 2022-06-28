import "./Section2.css";
import React from "react";

const Section2 = ({ notes, title, text }) => {
  return (
    <div className="info-2-section">
      <div className="left-title-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
      </div>
      <div className="right-text-box">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Section2;
