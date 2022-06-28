import "./SectionRightList.css";
import React from "react";

const SectionRightList = ({ notes, title, li }) => {
  return (
    <div className="right-list-section">
      <div className="left-title-box">
        <h3>{notes}</h3>
        <h2>{title}</h2>
      </div>
      <div className="right-list-box">
        <ul className="box-list">
          <li>{li}</li>
        </ul>
      </div>
    </div>
  );
};

export default SectionRightList;
