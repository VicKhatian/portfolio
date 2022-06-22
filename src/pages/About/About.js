import React from "react";
import "./About.css";
import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import Section2boxes from "../../components/Section2boxes/Section2boxes";
import Footer from "../../components/Footer/Footer";
import imgBack from "../../images/p1-img-back.png";
import imgFront from "../../images/p2-img-front.png";

let tech = [
  "JavaScrip",
  "React JS / Native",
  "Node JS",
  "Rest API",
  "PostgreSQL / SQL",
  "Express",
  "Jest, TDD",
];

const About = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Landing
        title={"That's the spirit"}
        details={
          "More about me. In computing, plain text is a loose term for data that represent only characters of readable material but not its graphica representation nor other objects."
        }
      />
      <Section2boxes
        notes={"learning is my passion"}
        title={"tech stack"}
        li={tech.map((e) => (
          <li>{e}</li>
        ))}
      />
      <div className="tech-section">
        <div className="left-info-box">
          <h3>learning is my passion</h3>
          <h2>tech stack</h2>
        </div>
        <div className="right-info-box">
          <ul className="tech-list">
            <li>JavaScrip</li>
            <li>Node JS</li>
            <li>React JS / Native</li>
            <li>UX / UI</li>
            <li>Express</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="project-left-section">
        <div className="left-img-box">
          <img className="back" src={imgBack} alt="" />
          <img className="front" src={imgFront} alt="" />
        </div>
        <div className="right-info-box">
          <h3>notes</h3>
          <h2>Ballet</h2>
          <p>I love to dance</p>
        </div>
      </div>
      <div className="project-right-section">
        <div className="left-info-box">
          <h3>whenever have time</h3>
          <h2>Galleries</h2>
          <p>
            The app let users to check the weather on the chosen location, for 8
            days ahead with ability to expand a selected date for the details.
          </p>
        </div>
        <div className="right-img-box">
          <img className="back" src={imgBack} alt="" />
          <img className="front" src={imgFront} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
