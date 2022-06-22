import "./Section2boxes.css";
import React from "react";

const Section2boxes = ({ notes, title, li }) => {
  return (
    <div className="info-section">
      <div className="left-info-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
      </div>
      <div className="right-info-box">
        <ul className="box-list">
          <li>{li}</li>
        </ul>
      </div>
    </div>
  );
};

export default Section2boxes;
