import "./Section2boxes.css";
import React from "react";

const Section2 = ({ notes, title, li }) => {
  return (
    <div className="tech-section">
      <div className="left-info-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
      </div>
      <div className="right-info-box">
        <ul className="tech-list">
          <li>{li}</li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
