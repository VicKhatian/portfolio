import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="section landing">more about me</div>
      <div className="section">
        <div className="block"> My skill set </div>
        <div className="block">
          <p>JavaScrip </p>
          <p>Node JS</p>
          <p>TypeScript</p>
          <p>React JS / Native</p>
          <p>SQL / NoSQL</p>
          <p>UX / UI</p>
          <p>Express</p>
        </div>
      </div>
      <div className="section">section-2</div>
    </div>
  );
};

export default About;
