import "./Section2boxes.css";
import React from "react";

const Section2 = ({ note, title }) => {
  return (
    <div className="tech-section">
      <div className="left-info-box">
        <h3>{note}</h3>
        <h2>{title}</h2>
      </div>
      <div className="right-info-box">
        <ul className="tech-list">
          <li>JavaScrip</li>
          <li>Node JS</li>
          <li>React JS / Native</li>
          <li>UX / UI</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
