import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="landing">
        <p className="about-landing-p">
          More about me. In computing, plain text is a loose term for data that
          represent only characters of readable material but not its graphical
          representation nor other objects. It may also include a limited number
          of "whitespace" characters that affect simple arrangement of text,
          such as spaces, line breaks, or tabulation characters.
        </p>
      </div>

      <div className="section">
        <div className="block" id="center">
          <p className="skillset-p">My tech stack</p>
        </div>
        <div className="block" id="list">
          <p>JavaScrip </p>
          <p>Node JS</p>
          <p>TypeScript</p>
          <p>React JS / Native</p>
          <p>SQL / NoSQL</p>
          <p>UX / UI</p>
          <p>Express</p>
        </div>
      </div>
      <div className="section">
        <div className="block" id="2-img-left">
          left images
        </div>
        <div className="block" id="left">
          left info
        </div>
      </div>
    </div>
  );
};

export default About;
